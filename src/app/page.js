import Clock from "@/components/Clock";
import Strap from "@/components/strap/Strap";
import UpwardStrap from "@/components/strap/UpwardStrap";

export default function Home() {
  return (
    <>
      <div className="scale-100">
        <UpwardStrap />
        <Clock />
        <Strap />
      </div>
    </>
  );
}
