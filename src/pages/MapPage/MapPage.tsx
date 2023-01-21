import { useEffect, useState } from "react";
import styles from "./MapPage.module.css";
import {
  YMaps,
  Map,
  Placemark,
  SearchControl,
  GeolocationControl,
  TrafficControl,
  ZoomControl,
  FullscreenControl,
  TypeSelector,
} from "@pbe/react-yandex-maps";
import { getProfiles } from "../../utils/api/api";
import placeMarkIcon from "../../icons/placemark.svg";

const MapPage = () => {
  const [dataRequest, setDataRequest] = useState<any>({
    isDataRequest: false,
    usersData: null,
    preloader: false,
  });
  const mapState = { center: [55.75, 37.57], zoom: 7 };

  useEffect(() => {
    getProfiles().then((res) =>
      setDataRequest({
        ...dataRequest,
        isDataRequest: true,
        usersData: res.items,
      })
    );
    //console.log(state.usersData);
  }, [dataRequest.isDataRequest]);

  return (
    <>
      {dataRequest.usersData && (
        <YMaps query={{ lang: "ru_RU" }}>
          <div className={styles.wrapper}>
            <Map className={styles.map} defaultState={mapState}>
              {dataRequest.usersData.map((student: any) => {
                return (
                  <Placemark
                    geometry={student.profile.city.geocode}
                    properties={{
                      balloonContent: `
                          <div class=${styles.balloonWrapper}>
                            <img
                              class="${styles.avatar}"
                              src="${student.profile.photo}"
                              alt="Аватар"
                            />
                            <div>
                              <p class="${styles.name}">
                                ${student.profile.name}
                              </p>
                              <p class="${styles.city}">
                                ${student.profile.city.name}
                              </p>
                            </div>
                          </div>`,
                    }}
                    options={{
                      iconLayout: "default#image",
                      iconImageHref: placeMarkIcon,
                      iconImageSize: [46, 63],
                      hideIconOnBalloonOpen: false,

                      balloonCloseButton: false,
                      balloonOffset: [90, 45],
                      balloonMaxHeight: 54,
                      balloonMinWidth: 50,
                      balloonAutoPanCheckZoomRange: true,
                    }}
                    key={student._id}
                  />
                );
              })}
              <SearchControl
                options={{
                  position: { top: 10, left: 10 },
                  placeholderContent: "Поиск мест и адресов",
                }}
              />
              <GeolocationControl options={{ float: "right" }} />
              <FullscreenControl />
              <TrafficControl />
              <TypeSelector />
              <ZoomControl />
            </Map>
          </div>
        </YMaps>
      )}
    </>
  );
};

export default MapPage;
