import { useEffect, useState, FC } from "react";
import styles from "./MapPage.module.css";
import {
  YMaps,
  Map,
  Placemark,
  SearchControl,
  TrafficControl,
  TypeSelector,
  GeolocationControl,
  RouteButton,
} from "@pbe/react-yandex-maps";
import { getDefaultProfiles } from "../../utils/api/api";
import placeMarkIcon from "../../icons/placemark.svg";
import {
  TStateDataMapPage,
} from "../../utils/types";

const MapPage:FC = (): JSX.Element => {
  const [dataRequest, setDataRequest] = useState<TStateDataMapPage>({
    isDataRequest: false,
    usersData: null,
  });
  const mapDefaultState = {
    center: [55.75, 37.57],
    zoom: 7,
    controls: ["zoomControl", "fullscreenControl"],
  };

  useEffect(() => {
    getDefaultProfiles().then((res) =>
      setDataRequest({
        ...dataRequest,
        isDataRequest: true,
        usersData: res.items,
      })
    );
  }, [dataRequest.isDataRequest]);

  return (
    <>
      {dataRequest.usersData && (
        <YMaps
          query={{
            lang: "ru_RU",
            apikey: "04277aa1-f5ec-4444-81ee-4e0b6eafdcaa",
          }}
        >
          <div className={styles.wrapper}>
            <Map
              className={styles.map}
              defaultState={mapDefaultState}
              modules={["control.ZoomControl", "control.FullscreenControl"]}
            >
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
                            <div
                              class="${styles.textBox}" 
                            >
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
                      iconImageSize: [60, 68],
                      hideIconOnBalloonOpen: false,
                      balloonCloseButton: false,
                      balloonOffset: [100, 40],
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
                  fitMaxWidth: true,
                  maxWidth: [3000],
                }}
              />
              <TrafficControl />
              <TypeSelector />
              <GeolocationControl options={{ float: "right" }} />
              <RouteButton options={{ float: "right" }} />
            </Map>
          </div>
        </YMaps>
      )}
    </>
  );
};

export default MapPage;
