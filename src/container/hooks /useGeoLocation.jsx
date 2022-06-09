import { useEffect, useState } from "react";

const useGeoLocation = () => {
  const [location, setlocation] = useState({
    loaded: false,
    coordinates: { lat: "", long: "" },
  });
  const onSuccess = (location) => {
    setlocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        long: location.coords.longitude,
      },
    });
  };
  const onError = (error) => {
    setlocation({
      loaded: true,
      error,
    });
  };
  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation is not supported",
      });
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);
  return location;
};
export default useGeoLocation;