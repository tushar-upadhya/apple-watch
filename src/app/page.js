"use client";

import Clock from "@/components/Clock";
import Strap from "@/components/strap/Strap";
import UpwardStrap from "@/components/strap/UpwardStrap";
import { useState } from "react";

export default function Home() {
  let time = new Date();
  let [hour, setHour] = useState();
  let [minute, setMinute] = useState();

  const updateTime = () => {
    time = new Date();
    setHour(n(time.getHours()));
    setMinute(n(time.getMinutes()));
  };
  function n(n) {
    return n > 9 ? "" + n : "0" + n;
  }
  setInterval(updateTime, 1000);
  return (
    <>
      <div className="scale-100">
        <UpwardStrap />
        <Clock hour={hour} minute={minute} />
        <Strap />
      </div>
    </>
  );
}
