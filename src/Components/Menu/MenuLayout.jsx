import { MenuBox, MenuList } from "./MenuItem.jsx";
import { menuItems } from "../../utils/Array/menuArray.jsx";
import { useSelector } from "react-redux";
export const HomeMenu = () => {
  const user = useSelector((state) => state.user?.userDetail?.data);
  const role = useSelector((state) => state.user?.userDetail?.role);

  return (
    <div className=" px-2 lg:max-w-[1200px] mx-auto h-[calc(100vh-50px)] sm:h-[calc(100vh-60px)] flex items-center">
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-y-[15px] gap-x-[10px]  sm:gap-y-[10px] sm:gap-x-[30px] lg:gap-y-[10px] lg:gap-x-[4rem] w-full">
        <div className="col-span-4 sm:col-span-5 md:col-span-6 lg:col-span-7">
          <h2 className="text-[22px] sm:text-[32px] text-[#342B7C]">
            Hi{" "}
            <span className="font-semibold">
              {role === "faculty" || role === "student" || role === "admin"
                ? user.first_name + " " + user.last_name
                : role === "father"
                ? user.student_father_name
                : role === "mother"
                ? user.student_mother_name
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
  const role = useSelector((state) => state.user?.userDetail?.role);

  return (
    <div
      className={`col-span-1  lg:col-span-2 bg-[#5A538D] absolute top-0 transition-all duration-300 ease-in-out ${
        isSideBarOpen
          ? "left-[0px] shadow-[512px_0px_0px_422px_#0000008c]"
          : "left-[-90px]"
      } z-50 lg:static lg:shadow-[unset]`}
    >
      <div className="hidden h-[119px] lg:flex  items-center text-white bg-[#2b264c]">
        <div className="w-2/5">
          <img
            src={
              role === "student" || role === "faculty" || role === "admin"
                ? user?.profile_image
                : role === "father"
                ? "https://res.cloudinary.com/dlqylweq6/image/upload/v1740046270/Group_2_3_nuoxik.png"
                : role === "mother"
                ? "https://res.cloudinary.com/dlqylweq6/image/upload/v1740046245/Group_2_2_j2crkm.png"
                : ""
            }
            className="w-[60px] h-[60px] rounded-[50rem] mx-auto mb-[6px]"
            alt=""
          />
          <p className="text-[12px] font-semibold text-center leading-[12px] mb-[2px]">
            {role === "faculty" || role === "student" || role === "admin"
              ? user.first_name + " " + user.last_name
              : role === "father"
              ? user.student_father_name
              : role === "mother"
              ? user.student_mother_name
              : ""}
          </p>
          <p className="text-[10px] font-medium text-center leading-[9px] capitalize">
            Role : {role}
          </p>
        </div>
        <div className="w-3/5 pl-2">
          <p className="flex items-center text-[10px] font-medium">
            {role === "faculty"
              ? user?.faculty_id
              : role === "student"
              ? user?.student_blood_group
              : role === "father"
              ? user?.student_father_occupation
              : role === "mother"
              ? user?.student_mother_occupation
              : ""}
          </p>
          <p className="flex items-center text-[10px] font-medium">
            {role === "faculty" || role === "admin"
              ? user?.department
              : role === "student"
              ? user?.student_programs
              : role === "father"
              ? ""
              : role === "mother"
              ? ""
              : ""}
          </p>
          <p className="flex items-center text-[10px] font-medium ">
            {role === "faculty" || role === "student" || role === "admin" ? (
              <a href={`tel:${user?.phone_number}`}>{user?.phone_number}</a>
            ) : role === "father" ? (
              <a href={`tel:${user?.student_father_number}`}>
                {user?.student_father_number}
              </a>
            ) : role === "mother" ? (
              <a href={`tel:${user?.student_mother_number}`}>
                {user?.student_mother_number}
              </a>
            ) : (
              ""
            )}
          </p>
          <p className="flex items-center text-[10px] font-medium w-full break-all leading-[10px]">
            {role === "faculty" || role === "student" || role === "admin" ? (
              <a href={`mailto:${user?.email}`}>{user?.email}</a>
            ) : role === "father" ? (
              <a href={`mailto:${user?.student_father_email}`}>
                {user?.student_father_email}
              </a>
            ) : role === "mother" ? (
              <a href={`mailto:${user?.student_mother_email}`}>
                {user?.student_mother_email}
              </a>
            ) : (
              ""
            )}
          </p>
        </div>
      </div>
      <div className="flex h-screen lg:h-[calc(100vh-179px)] lg:px-1 text-white overflow-auto scrollbar-style-2">
        <ul className="w-[90px] lg:w-full">
          {menuItems.map((item) => (
            <MenuList key={item.id} imgSrc={item.imgSrc} title={item.title} />
          ))}
        </ul>
      </div>
    </div>
  );
};
