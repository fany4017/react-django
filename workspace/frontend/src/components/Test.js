/* 미 사용 소스 !!!!!!!!!!!!!!!!! */
/*global kakao */
import React, { useEffect } from "react";

const markerdata = [
  {
    title: "독박골 맛있는 집",
    lat: 37.562145582307664,
    lng: 126.9678504761963,
  },
  {
    title: "복운각",
    lat: 37.56362362224291,
    lng: 126.97000000654702,
  },
  {
    title: "덕수궁 부대찌개",
    lat: 37.56392589794812,
    lng: 126.96997959888141,
  },
  {
    title: "28총각",
    lat: 37.564231533038715,
    lng: 126.96714864346711,
  },
  {
    title: "돈까스가 땡길때",
    lat: 37.56271234897106,
    lng: 126.96744078210237,
  },
  {
    title: "중림장 설렁탕",
    lat: 37.560385848872976,
    lng: 126.96771609905106,
  },
];

export default function Test() {
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.56297923916484, 126.96862194129662),
      level: 4,
    };

    //map
    const map = new kakao.maps.Map(container, options);
    markerdata.forEach((el) => {
      // 마커를 생성합니다
      const marker = new kakao.maps.Marker({
        //마커가 표시 될 지도
        map: map,
        //마커가 표시 될 위치
        position: new kakao.maps.LatLng(el.lat, el.lng),
        
      });
      // 마커에 표시할 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({
        content: el.title, // 인포윈도우에 표시할 내용
        tel : el.tel
      });

      // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
      // 이벤트 리스너로는 클로저를 만들어 등록합니다
      // 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
      kakao.maps.event.addListener(
        marker,
        "mouseover",
        makeOverListener(map, marker, infowindow)
      );
      kakao.maps.event.addListener(
        marker,
        "mouseout",
        makeOutListener(infowindow)
      );
    });
    // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
    function makeOverListener(map, marker, infowindow) {
      return function () {
        infowindow.open(map, marker);
      };
    }

    // 인포윈도우를 닫는 클로저를 만드는 함수입니다
    function makeOutListener(infowindow) {
      return function () {
        infowindow.close();
      };
    }
  };

  return <div id="map" style={{ width: "75vw", height: "50vh" }}></div>;
}