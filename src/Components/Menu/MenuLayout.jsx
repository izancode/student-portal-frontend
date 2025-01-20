import { MenuBox, MenuList } from "./MenuItem.jsx";
import { menuItems } from "../../utils/Array/menuArray.jsx";
import { useSelector } from "react-redux";
export const HomeMenu = () => {
  const user = useSelector((state) => state.user?.userDetail?.data);
  return (
    <div className=" px-2 lg:max-w-[1200px] mx-auto h-[calc(100vh-50px)] sm:h-[calc(100vh-60px)] flex items-center">
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-y-[15px] gap-x-[10px]  sm:gap-y-[10px] sm:gap-x-[30px] lg:gap-y-[10px] lg:gap-x-[4rem] w-full">
        <div className="col-span-4 sm:col-span-5 md:col-span-6 lg:col-span-7">
          <h2 className="text-[22px] sm:text-[32px] text-[#342B7C]">
            Hi{" "}
            <span className="font-semibold">
              {user?.faculty_first_name && user?.faculty_last_name
                ? user.faculty_first_name + " " + user.faculty_last_name
                : user?.student_first_name && user?.student_last_name
                ? user.student_first_name + " " + user.student_last_name
                : ""}
            </span>
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
  const user = useSelector((state) => state.user?.userDetail?.data);

  return (
    <div
      className={`col-span-1  lg:col-span-2 bg-[#5A538D] absolute top-0 transition-all duration-300 ease-in-out ${
        isSideBarOpen
          ? "left-[0px] shadow-[512px_0px_0px_422px_#0000008c]"
          : "left-[-90px]"
      } z-50 lg:static lg:shadow-[unset]`}
    >
      <div className="hidden h-[119px] lg:flex py-2 items-center text-white bg-[#2b264c]">
        <div className="w-2/5">
          <img
            src={user?.faculty_profile_image || user?.student_profile_image}
            className="w-[70px] h-[70px] rounded-[50rem] mx-auto"
            alt=""
          />
          <p className="text-[12px] font-semibold text-center">
            {user?.faculty_first_name && user?.faculty_last_name
              ? user.faculty_first_name + " " + user.faculty_last_name
              : user?.student_first_name && user?.student_last_name
              ? user.student_first_name + " " + user.student_last_name
              : ""}
          </p>
          <p className="text-[8px] font-medium text-center">
            {user?.designation_position || user?.student_specialisation}
          </p>
        </div>
        <div className="w-3/5 pl-2">
          <p className="flex items-center text-[10px] font-medium">
            <img
              src="https://atlasskilltech.app/studentportal24/assets/images/icon/idumbericon.png"
              alt=""
              className="h-fit mr-1"
            />
            {user?.faculty_id || user?.student_blood_group}
          </p>
          <p className="flex items-center text-[10px] font-medium">
            <img
              src="https://atlasskilltech.app/studentportal24/assets/images/icon/idumbericon.png"
              alt=""
              className="h-fit mr-1"
            />
            {user?.department || user?.student_programs}
          </p>
          <p className="flex items-center text-[10px] font-medium">
            <img
              src="https://atlasskilltech.app/studentportal24/assets/images/icon/idumbericon.png"
              alt=""
              className="h-fit mr-1"
            />
            <a
              href={`tel:${
                user?.faculty_phone_number || user?.student_phone_number
              }`}
            >
              {user?.faculty_phone_number || user?.student_phone_number}
            </a>
          </p>
          <p className="flex items-center text-[10px] font-medium">
            <img
              src="https://atlasskilltech.app/studentportal24/assets/images/icon/idumbericon.png"
              alt=""
              className="h-fit mr-1"
            />
            <a href={`mailto:${user?.faculty_email || user?.student_email}`}>
              {user?.faculty_email || user?.student_email}
            </a>
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
