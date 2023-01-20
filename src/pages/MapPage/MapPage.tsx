import React from "react";
import styles from "./MapPage.module.css";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const MapPage = () => {
  const mapState = { center: [55.76, 37.64], zoom: 6 };
  return (
    <YMaps>
      <div className={styles.map}>
        <Map defaultState={mapState}>
          
        </Map>
      </div>
      
    </YMaps>
  );
}

export default MapPage;
