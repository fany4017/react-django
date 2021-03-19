/*global kakao */
import React, { useEffect } from "react";

export default function NhitMap() {
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    let container = document.getElementById("nhitmap");
    let options = {
      center: new kakao.maps.LatLng(37.46421591496631, 127.0360252486866),
      level: 3,
    };
    //map
    const map = new kakao.maps.Map(container, options);

    //마커가 표시 될 위치
    let markerPosition = new kakao.maps.LatLng(
      37.46421591496631,
      127.0360252486866
    );

    // 마커를 생성
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커를 지도 위에 표시
    marker.setMap(map);
  };

  return <div id="nhitmap" style={{ width: "75vw", height: "50vh" }}></div>;
}