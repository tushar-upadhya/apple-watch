import Image from "next/image";

import image from "../assets/logo.svg";
import image2 from "../assets/o.svg";

const Header = () => {
  return (
    <div className="flex w-full justify-center relative">
      <div className="w-[370px] aspect-square rounded-full -translate-y-1/2 shadow-lg absolute z-20 header-day1 flex justify-center">
        <div className="absolute top-1/2 mt-4 text-amber-200 flex flex-col justify-center items-center">
          <Image src={image} height={50} width={50} />

          <a
            href="https://tusharupadhyay.vercel.app/"
            target="_blank"
            className="text-amber-200 mt-4 text-center group"
          >
            Crafted with <Image src={image2} height={30} width={30} />
            by
            <p className="text-xl font-semibold group-item group-hover:text-amber-100 transition-all duration-300 ease-in-out">
              Tushar Upadhyay
            </p>
          </a>
        </div>
      </div>

      <div className="w-[430px] aspect-square rounded-full -translate-y-1/2 shadow-lg absolute z-10 header-day2" />

      <div className="w-[490px] aspect-square rounded-full -translate-y-1/2 shadow-lg absolute" />
    </div>
  );
};

export default Header;
