import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", (event) => {
      setOnlineStatus(false);
      console.log("You are not connected to the network.");
    });
    window.addEventListener("online", (event) => {
      setOnlineStatus(true);
      console.log("You are now connected to the network.");
    });
  }, []);
  return onlineStatus;
};

export default useOnlineStatus;
