import React from 'react';
import styles from "./MapPage.module.css";
import { YMaps, Map, Placemark } from 'react-yandex-maps';


function MapPage() {
  const mapState = { center: [55.76, 37.64], zoom: 6 };
  return (
    <main>
      <YMaps>
        <Map className={styles.map} state={mapState}>
 

        </Map>
      
      </YMaps>
    </main>
  );
}

export default MapPage;