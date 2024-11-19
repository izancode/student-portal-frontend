import { useState } from "react";
import { useDispatch } from "react-redux";
import { logoutPostData } from "../../Redux/ReduxThunk/loginThunks";
import { unwrapResult } from "@reduxjs/toolkit";
import { customToast } from "../../utils/CustomAlert/cutomToast";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const actionResult = await dispatch(logoutPostData());
      const dataPass = unwrapResult(actionResult);

      navigate("/");
      customToast("success", dataPass.message);
    } catch (error) {
      customToast("error", error.message);
    }
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Modal close karne ke liye function
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <nav className=" bg-[#342B7C] fixed top-0 left-0 right-0 z-50">
        <div className="h-[50px] items-center  grid grid-cols-12 px-2  sm:px-3 sm:h-[70px]">
          <div className="col-span-8 md:col-span-10">
            <img
              className="w-[200px] sm:w-[250px]"
              src="https://res.cloudinary.com/dlqylweq6/image/upload/v1731565016/atlastectLogo_t41zbi.png"
              alt="logo"
            />
          </div>
          <div className="col-span-4 md:col-span-2 flex justify-end items-center">
            <div>
              <img
                className="w-[25px]  h-[25px] border-2 border-white rounded-[50rem] my-0 mx-auto sm:w-[40px]  sm:h-[40px]"
                src="https://imageio.forbes.com/specials-images/imageserve/5faad4255239c9448d6c7bcd/Best-Animal-Photos-Contest--Close-Up-Of-baby-monkey/960x0.jpg?format=jpg&width=960"
                alt="logo"
              />
              <p className="text-[10px] text-white sm:text-[12px]">Faizan</p>
            </div>
            <div className="ml-[12px]">
              <img
                onClick={openModal}
                className="w-[25px]  h-[25px]  my-0 mx-auto cursor-pointer sm:w-[30px]  sm:h-[30px]"
                src="https://res.cloudinary.com/dlqylweq6/image/upload/v1731569044/Group_1_xfdvh4.png"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </nav>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-3 rounded shadow-lg w-full m-2 sm:w-1/4 sm:m-0">
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
