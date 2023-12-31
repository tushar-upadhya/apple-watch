import wallpaper from "../assets/logo.png";

const Clock = ({ hour, minute }) => {
  return (
    <div className="relative left-1/2 -translate-x-1/2 w-max flex justify-center items-center z-10">
      {/* Clock outer frame */}

      <div className="w-96 aspect-[1/1.2160] shadow-lg rounded-3xl absolute">
        {/* Clock Border */}

        <div className="w-full aspect-[1/1.2160] rounded-3xl clock_border absolute shadow-2xl z-10">
          {/* Clock inner Frame */}

          <div className="w-[99%] aspect-[1/1.2160] rounded-3xl relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black clock-frame"></div>
        </div>
        {/* Clock Buttons */}

        <div className="w-2 h-8 bg-gray-100 -right-2 top-1/2 absolute rounded-r-lg -translate-y-1/2 clock_button shadow-2xl brightness-[0.85]"></div>
        {/* <div className="w-4 h-28 bg-gray-100 -right-1 top-20 absolute rounded-r-3xl clock_button shadow-2xl brightness-75"></div> */}
      </div>
      {/* Clock Inner (Display) */}

      <div className="w-[21.5rem] aspect-[1/1.2160] rounded-2xl clock z-10 relative">
        <img
          src="/wallpaper.jpg"
          className="absolute w-full h-full object-cover rounded-2xl brightness-75 select-none pointer-events-none"
          draggable="false"
        />
        {/* Time goes here */}

        <div className="w-full h-full flex flex-col justify-center items-center">
          <p className="relative z-10 text-indigo-50 text-9xl font-semibold text-shadow-lg">
            {hour}
          </p>

          <p className="relative z-10 text-indigo-100 text-9xl font-semibold text-shadow-lg">
            {minute}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Clock;
