import { useEffect } from "react";
import { useState } from "react";

function MyComponent() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  function formatTime() {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  }

  const padZero = (number: number) => {
    return (number < 10 ? "0" : "") + number;
  };

  return (
    <div className="container">
      <span>{formatTime()}</span>
    </div>
  );
}

export default MyComponent;
