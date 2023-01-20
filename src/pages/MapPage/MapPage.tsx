import React from 'react';
import styles from "./MapPage.module.css";
import { YMaps, Map, Placemark } from 'react-yandex-maps';


function MapPage() {
  const mapState = { center: [55.76, 37.64], zoom: 6 };
  return (
    <main>
        <Map className={styles.map} state={mapState}>
 

        </Map>
    </main>
  );
}

export default MapPage;