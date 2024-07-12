import { useState, useEffect } from "react";

const CurrentDateTime = () => {
  const [dateString, setDateString] = useState("");
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    setDateString(`${day}-${month}-${year}`);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date();
      const hour = time.getHours();
      const minutes = time.getMinutes();
      const seconds = time.getSeconds();

      setTimeString(`${hour}:${minutes}:${seconds}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return { dateString, timeString };
};

export default CurrentDateTime;
