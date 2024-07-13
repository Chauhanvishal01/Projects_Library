import React, { useState, useEffect } from "react";

const Timer = () => {
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    for (let i = 60; i >= 0; i--) {
      setTimeout(() => {
        setCountdown(i);
      }, (60 - i) * 1000);
    }
  }, []);

  return (
    <div className="timer">
      <p>Commin soon in : <span>
      {countdown}
      </span>  seconds</p>
    </div>
  );
};

export default Timer;
