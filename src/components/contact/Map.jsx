import React from "react";
import style from "./Map.module.css";
import {
  YMaps,
  Map,
  Placemark,
  ZoomControl,
FullscreenControl,
  GeolocationControl,
} from "react-yandex-maps";
const YandexMap =  React.memo(() => (
  <div className={style.Map}>   
    <YMaps className={style.Map_block}>
      <div className={style.Map_block}>
        <Map
          className={style.Map_block}
          defaultState={{
            center: [40.74763436965225, 72.35956117115008],
            zoom: 16,
            controls: [],
          }}
        >
          <Placemark geometry={[40.74763436965225, 72.35956117115008]} />
          <FullscreenControl />
          <GeolocationControl options={{ float: "left" }} />
          <ZoomControl options={{ float: "right" }} />
        </Map>
      </div>
    </YMaps>
  </div>
))
export default YandexMap;