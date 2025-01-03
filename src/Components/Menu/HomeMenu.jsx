import MenuBox from "./MenuBox";
import { menuItems } from "../../utils/Array/menuArray.jsx";

const HomeMenu = () => {
  return (
    <div className=" px-2 lg:max-w-[1200px] mx-auto h-[calc(100vh-70px)] flex items-center">
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-y-[15px] gap-x-[10px]  sm:gap-y-[10px] sm:gap-x-[30px] lg:gap-y-[10px] lg:gap-x-[4rem] w-full">
        <div className="col-span-4 sm:col-span-5 md:col-span-6 lg:col-span-7">
          <h2 className="text-[22px] sm:text-[32px] text-[#342B7C]">
            Hi <span className="font-semibold">Faizan Shaikh,</span>
          </h2>
        </div>
        {menuItems.map((item) => (
          <MenuBox key={item.id} imgSrc={item.imgSrc} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default HomeMenu;
