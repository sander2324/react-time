import React, { useState, useEffect } from 'react';
import { formatCurrentTime } from '../utils/date';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const clockInterval = setInterval(() => {
      setTime(new Date());
    }, 500);

    return () => clearInterval(clockInterval);
  }, []);

  return (
    <div>
      <h2 className="clock">
        {formatCurrentTime(time)}
      </h2>
    </div>
  );
}

export default Clock;
