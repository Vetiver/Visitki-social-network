import { SyntheticEvent, useRef, useState, useEffect, useContext } from "react";
import styles from "./SelectRegionInput.module.css";
import { Map, YMaps } from "@pbe/react-yandex-maps";
import { AuthContext } from "../../services/AuthContext";
import { TContext } from "../../utils/types";

function InputSelect() {
  const { state, setState } = useContext<TContext>(AuthContext);
  const selectForRegion = useRef<HTMLInputElement>(null);
  const [selectRegionData, setSelectRegionData] = useState({
    content: "",
    active: false,
  });

  const setSelectRegionActive = () => {
    setSelectRegionData({
      ...selectRegionData,
      active: !selectRegionData.active,
    });
    if (selectForRegion.current?.value.length) {
      selectForRegion.current?.classList.add(styles.select_active);
    }
  };

  const loadSuggest = (ymaps: any) => {
    const suggestView = new ymaps.SuggestView("suggest");
    suggestView.events.add("select", (e: SyntheticEvent) => {});
  };

  const hideActiveness = () => {
    selectForRegion.current?.classList.remove(styles.select_active);
  };

  return (
    <>
      <input
        onChange={setSelectRegionActive}
        onBlur={hideActiveness}
        type="text"
        value={state.userData.profile.city.name}
        className={`form-control ${styles.select}`}
        id="suggest"
        onLoad={(ymaps) => loadSuggest(ymaps)}
        ref={selectForRegion}
      />
      <YMaps>
        <Map
          className={styles.map}
          onLoad={(ymaps) => loadSuggest(ymaps)}
          defaultState={{ center: [55.751574, 37.573856], zoom: 9 }}
          modules={["SuggestView"]}
        />
      </YMaps>
    </>
  );
}

export default InputSelect;
