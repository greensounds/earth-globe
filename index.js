//Initial Data
var locations = [
  {
    id: "1",
    location_name: "Warsaw",
    latitude: 52.2297,
    longitude: 21.0122,
    branch_url:
      "https://www.oliverwyman.com/in/our-expertise/global-locations/europe/poland/warsaw.html",
  },
  {
    id: "2",
    location_name: "Kuala Lumpur",
    latitude: 3.1319,
    longitude: 101.6841,
    branch_url:
      "https://www.oliverwyman.com/our-expertise/global-locations/asia-pacific/malaysia/kuala-lumpur.html",
  },
  {
    id: "3",
    location_name: "Mexico City",
    latitude: 19.4326,
    longitude: -99.1332,
    branch_url:
      "https://www.oliverwyman.com/our-expertise/global-locations/americas/mexico/mexico-city.html",
  },
];

//Format Location to match Globe.gl API
const formatLocations = locations.map(function (location, index) {
  return {
    id: index + 1,
    location_name: location.location_name,
    lat: location.latitude,
    lng: location.longitude,
    branch_url: location.branch_url,
  };
});

//Initialize globe
const globe = document.getElementById("globe");
const locationMarker = `
  <svg class="location-marker" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffee8c" height="800px" width="800px" version="1.1" id="Capa_1" viewBox="0 0 264.018 264.018" xml:space="preserve">
    <g>
      <path d="M132.009,0c-42.66,0-77.366,34.706-77.366,77.366c0,11.634,2.52,22.815,7.488,33.24c0.1,0.223,0.205,0.442,0.317,0.661   l58.454,113.179c2.146,4.154,6.431,6.764,11.106,6.764c4.676,0,8.961-2.609,11.106-6.764l58.438-113.148   c0.101-0.195,0.195-0.392,0.285-0.591c5.001-10.455,7.536-21.67,7.536-33.341C209.375,34.706,174.669,0,132.009,0z    M132.009,117.861c-22.329,0-40.495-18.166-40.495-40.495c0-22.328,18.166-40.494,40.495-40.494s40.495,18.166,40.495,40.494   C172.504,99.695,154.338,117.861,132.009,117.861z" fill="#ffee8c"/>
      <path d="M161.81,249.018h-59.602c-4.143,0-7.5,3.357-7.5,7.5c0,4.143,3.357,7.5,7.5,7.5h59.602c4.143,0,7.5-3.357,7.5-7.5   C169.31,252.375,165.952,249.018,161.81,249.018z" fill="#ffee8c"/>
    </g>
  </svg>
`
new Globe(globe)
  .globeImageUrl(
    "https://cdn.jsdelivr.net/npm/three-globe@2.44.1/example/img/earth-day.jpg"
  )
  .htmlElementsData(formatLocations)
  .htmlElement(function (element) {
    //Create markers
    const el = document.createElement("div");
    el.innerHTML = `
      <div class="marker-container">
        <p class="marker-title">${element.location_name}<p/>
        ${locationMarker}
      </div>
    `;
    el.style["pointer-events"] = "auto";
    el.style.cursor = "pointer";
    el.onclick = () => window.open(element.branch_url);
    return el;
  });
