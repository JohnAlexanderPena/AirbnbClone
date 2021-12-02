import { useState } from "react";
import ReactMapGL from "react-map-gl";

const Map = () => {
  const [viewPort, setViewPort] = useState({
    width: "100%",
    height: "100%",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/jpena91/ckwp5jycl0s7214lixykt3s04"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewPort}
      onViewportChange={(viewport) => setViewPort(viewport)}
    ></ReactMapGL>
  );
};

export default Map;
