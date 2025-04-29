import { useLogoutCustomHook } from "../../customHooks/useHeaderCustomHook";
import { toggleSideBar } from "../../Redux/Slice/toggleSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userGetDataThunk } from "../../Redux/ReduxThunk/fetchDataThunks";
const Header = () => {
  const { isModalOpen, openModal, closeModal, handleLogout } =
    useLogoutCustomHook();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userGetDataThunk());
  }, [dispatch]);
  const user = useSelector((state) => state.user?.userDetail?.data);
  const role = useSelector((state) => state.user?.userDetail?.role);
 

  return (
    <>
      <nav className=" bg-[#342B7C] fixed top-0 left-0 z-50 w-full ">
        <div className="h-[50px] items-center  grid grid-cols-12 px-2  lg:px-3 lg:h-[60px]">
          <div className="col-span-8 md:col-span-10 flex items-center">
            <div>
              <img
                className="w-[20px] lg:hidden mr-2"
                src="https://res.cloudinary.com/dlqylweq6/image/upload/v1736149286/image_2_1_wkgjt6.png"
                alt="logo"
                onClick={() => dispatch(toggleSideBar())}
              />
            </div>
            <div>
              <img
                className="w-[200px] lg:w-[250px]"
                src="https://res.cloudinary.com/dlqylweq6/image/upload/v1736148857/image_1_vfuoro.png"
                alt="logo"
              />
            </div>
          </div>
          <div className="col-span-4 md:col-span-2 flex justify-end items-center">
            <div>
              <img
                className="w-[25px]  h-[25px] border-2 border-white rounded-[50rem] my-0 mx-auto lg:w-[35px]  lg:h-[35px]"
                src={
                  role === "student" || role === "faculty" || role === "admin"
                    ? user?.profile_image
                    : role === "father"
                    ? "https://res.cloudinary.com/dlqylweq6/image/upload/v1740046270/Group_2_3_nuoxik.png"
                    : role === "mother"
                    ? "https://res.cloudinary.com/dlqylweq6/image/upload/v1740046245/Group_2_2_j2crkm.png"
                    : ""
                }
                alt="logo"
              />
              <p className="text-[10px] text-white lg:text-[12px]">
                {role === "faculty" || role === "student" || role === "admin"
                  ? user.first_name
                  : role === "father"
                  ? user.student_father_name
                  : role === "mother"
                  ? user.student_mother_name
                  : ""}
              </p>
            </div>
            <div className="ml-[12px]">
              <img
                onClick={openModal}
                className="w-[25px]  h-[25px]  my-0 mx-auto cursor-pointer lg:w-[25px]  lg:h-[25px]"
                src="https://res.cloudinary.com/dlqylweq6/image/upload/v1731569044/Group_1_xfdvh4.png"
                alt="logo"
              />
              <p className="text-[10px] text-white lg:text-[12px]">Logout</p>
            </div>
          </div>
        </div>
      </nav>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-[99]">
          <div className="bg-white p-3 rounded shadow-lg w-full m-2 lg:w-1/4 lg:m-0">
            <p className="mb-5 text-center">
              Are you sure you want to log out?
            </p>
            <div className="flex justify-around">
              <button
                className=" px-6 py-2 text-white bg-green-600 rounded hover:bg-green-700"
                onClick={handleLogout}
              >
                Yes
              </button>
              <button
                onClick={closeModal}
                className="px-6 py-2 text-white bg-red-600 rounded hover:bg-red-700"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
