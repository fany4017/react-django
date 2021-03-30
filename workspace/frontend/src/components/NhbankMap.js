/* 사용 소스 */
/*global kakao */
import React, { useEffect } from "react";

export default function NhbankMap() {
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    let container = document.getElementById("nhbankmap");
    let options = {
      center: new kakao.maps.LatLng(37.565719988775314, 126.9675448326819),
      level: 3,
    };
    //map
    const map = new kakao.maps.Map(container, options);

    //마커가 표시 될 위치
    let markerPosition = new kakao.maps.LatLng(
      37.565719988775314,
      126.9675448326819
    );

    // 마커를 생성
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커를 지도 위에 표시
    marker.setMap(map);
  };

  return <div id="nhbankmap" style={{ width: "75vw", height: "50vh" }}></div>;
}