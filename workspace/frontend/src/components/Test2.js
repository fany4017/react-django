/* 미 사용 소스 !!!!!!!!!!!!!!!!! */
/*global kakao */
import React, { useEffect } from "react";

const markerdata = [
    {
      site: "nhlife",
      lat: 37.563005503554535,
      lng: 126.96862132595075,
    },
    {
      site: "nhproperty",
      lat: 37.56405355528566,
      lng: 126.96573365335992,
    },
    {
      site: "nhitcenter",
      lat: 37.39863472468278,
      lng: 126.98800784718713,
    },
    {
      site: "nhit",
      lat: 37.46421591496631,
      lng: 127.0360252486866,
    },
];

export default function Test2() {

    useEffect(() => {
        mapscript();
    }, []);

    const mapscript = () => {
        let mapContainer = document.getElementById('map'); // 지도를 표시할 div 
        // HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
        if (navigator.geolocation) {
            // GeoLocation을 이용해서 접속 위치를 얻어옵니다
            navigator.geolocation.getCurrentPosition(function(position) {
            
            //접속자 현재 위치
            var lat = position.coords.latitude; // 위도
            var lon = position.coords.longitude; // 경도
            
            //농협생명 근무자 : "37.56348231035996", "126.9680859091507"
            //농협손해 근무자 : "37.563849111455426", "126.9657232531785"
            //의왕 근무자 : "37.39759781091387", "126.98621432406449"
            //양재 근무자 : "37.46420932844801", "127.03514090411251"

            //var lat = "37.46420932844801"; // 위도
            //var lon = "127.03514090411251"; // 경도
            //var locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
            var minDistance = '';
            var minSite = '';

            markerdata.forEach((el, index) => {
                var sitename = el.site;
                var lat2 = el.lat;
                var lng2 = el.lng;
                
                function deg2rad(deg) {
                    return deg * (Math.PI/180)
                }
                var r = 6371; //지구의 반지름(km)
                var dLat = deg2rad(lat2-lat);
                var dLon = deg2rad(lng2-lon);
                var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(deg2rad(lat)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2);
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
                var d = r * c; // Distance in km
                var distance =  Math.round(d*1000);
                alert('site:'+sitename+' '+'distance :'+distance);

                if(index == 0){
                    minSite = sitename
                    minDistance = distance;
                }else{
                    if(distance < minDistance){
                        minDistance = distance;
                        minSite = sitename
                    }
                }
            });
            alert(minDistance + " " +minSite);
        });
    
        } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
        
            var locPosition = new kakao.maps.LatLng(33.450701, 126.570667);  
            var message = 'geolocation을 사용불가 상태!!'
        }
    };
    return (
        <div>
            <div id="map"></div>
        </div>
    )
}
