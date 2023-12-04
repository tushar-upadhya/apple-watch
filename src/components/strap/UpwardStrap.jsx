const UpwardStrap = () => {
  return (
    <div className="w-[20rem] aspect-[1/1.5] relative left-1/2 -translate-x-1/2 shadow-2xl">
      <div className="absolute left-0 w-2 h-full strap_updward brightness-75 shadow-2xl z-10"></div>
      <div className="absolute right-0 w-2 h-full strap_updward brightness-75 shadow-2xl z-10"></div>
      <div className="w-full h-full strap_updward shadow-2xl brightness-[0.8]"></div>
    </div>
  );
};

export default UpwardStrap;
