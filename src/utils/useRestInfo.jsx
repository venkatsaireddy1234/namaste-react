import React from "react";
import { useEffect, useState } from "react";

const useRestInfo = (restId) => {
  const [restInfo, setRestInfo] = useState(null);
  useEffect(() => {
    fetchRestInfo();
  }, []);

  const fetchRestInfo = async () => {
    const REST_INFO_URL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${restId}`;

    const data = await fetch(REST_INFO_URL);
    const json = await data.json();
    setRestInfo(json.data);
  };
  return restInfo;
};

export default useRestInfo;
