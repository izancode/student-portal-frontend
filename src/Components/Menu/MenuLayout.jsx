import { MenuBox, MenuList } from "./MenuItem.jsx";
import { menuItems } from "../../utils/Array/menuArray.jsx";
import { useSelector } from "react-redux";
export const HomeMenu = () => {
  return (
    <div className=" px-2 lg:max-w-[1200px] mx-auto h-[calc(100vh-50px)] sm:h-[calc(100vh-60px)] flex items-center">
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

export const SideBarMenu = () => {
  const isSideBarOpen = useSelector((state) => state.sideBar.isSideBarOpen);
  console.log("list", isSideBarOpen);
  return (
    <div
      className={`col-span-1  lg:col-span-2 bg-[#5A538D] absolute top-0 transition-all duration-300 ease-in-out ${
        isSideBarOpen
          ? "left-[0px] shadow-[512px_0px_0px_422px_#0000008c]"
          : "left-[-90px]"
      } z-50 lg:static lg:shadow-[unset]`}
    >
      <div className="hidden lg:flex py-2 items-center text-white bg-[#2b264c]">
        <div className="w-2/5">
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/5faad4255239c9448d6c7bcd/Best-Animal-Photos-Contest--Close-Up-Of-baby-monkey/960x0.jpg?format=jpg&width=960"
            className="w-[70px] h-[70px] rounded-[50rem] mx-auto"
            alt=""
          />
          <p className="text-[12px] font-semibold text-center">Faizan Shaikh</p>
          <p className="text-[10px] font-medium text-center">Mern Stack</p>
        </div>
        <div className="w-3/5 pl-2">
          <p className="flex items-center text-[12px] font-medium">
            <img
              src="https://atlasskilltech.app/studentportal24/assets/images/icon/idumbericon.png"
              alt=""
              className="h-fit mr-1"
            />
            Tech Team
          </p>
          <p className="flex items-center text-[12px] font-medium">
            <img
              src="https://atlasskilltech.app/studentportal24/assets/images/icon/idumbericon.png"
              alt=""
              className="h-fit mr-1"
            />
            127823
          </p>
          <p className="flex items-center text-[12px] font-medium">
            <img
              src="https://atlasskilltech.app/studentportal24/assets/images/icon/idumbericon.png"
              alt=""
              className="h-fit mr-1"
            />
            +91 7666129168
          </p>
          <p className="flex items-center text-[12px] font-medium">
            <img
              src="https://atlasskilltech.app/studentportal24/assets/images/icon/idumbericon.png"
              alt=""
              className="h-fit mr-1"
            />
            Instagram
          </p>
        </div>
      </div>
      <div className="flex h-screen lg:h-[calc(100vh-179px)] lg:px-1 text-white overflow-auto ">
        <ul className="w-[90px] lg:w-full">
          {menuItems.map((item) => (
            <MenuList key={item.id} imgSrc={item.imgSrc} title={item.title} />
          ))}
        </ul>
      </div>
    </div>
  );
};
