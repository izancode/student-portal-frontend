import { useState } from "react";
import { Link } from "react-router-dom";
import {
  studentDumyInitialValues,
  facultyDumyInitialValues,
  studentInitialValues,
  facultyInitialValues,
} from "../../../utils/Formik/formik";

import { StudentForm, FacultyForm } from "./UserForm";

import {
  studentPostData,
  facultyPostData,
} from "../../../Redux/ReduxThunk/registerationThunks";






const RegisterPages = () => {
  const [tab, setTab] = useState("student");
  const tabChange = (getTab) => {
    setTab(getTab);
  };
  return (
    <div className="col-span-12 h-full bg-[url('images/login/loginbg.jpg')] bg-no-repeat bg-cover bg-top px-2 lg:px-4 flex  justify-center">
      <div className="w-full ">
        <img
          className="xl:w-1/4 mx-auto"
          src="https://res.cloudinary.com/dlqylweq6/image/upload/v1728884802/threeschool_gcwyrm.png"
          alt=""
        />
        <h2 className=" leading-[1.2] text-[#342B7C] capitalize mb-5 lg:text-[3.5rem] ">
          hello
          <span className="font-bold"> welcome!</span>
        </h2>

        <div className="flex justify-center">
          <div className="w-80 border flex  relative text-lg select-none h-11 font-semibold bg-gray-200 rounded-lg cursor-pointer">
            <div
              className={`absolute bg-white h-full w-6/12 top-0 rounded-lg shadow-lg transition-all duration-300 ease-in-out ${
                tab === "student" ? "left-0" : "left-1/2"
              }`}
            ></div>
            <div
              data-id="student"
              className="relative w-2/4 flex justify-center items-center"
              onClick={() => tabChange("student")}
            >
              Student
            </div>
            <div
              data-id="faculty"
              className="relative w-2/4 flex justify-center items-center"
              onClick={() => tabChange("faculty")}
            >
              Faculty
            </div>
          </div>
        </div>
        {tab === "student" ? (
          <StudentForm
            dumyInitialValues={studentDumyInitialValues}
            initialValues={studentInitialValues}
            postData={studentPostData}
            apiFrom="post"
          />
        ) : (
          <FacultyForm
            dumyInitialValues={facultyDumyInitialValues}
            initialValues={facultyInitialValues}
            postData={facultyPostData}
            apiFrom="post"
          />
        )}
        <p className="text-xs mb-5">
          Already have an account?
          <span className="font-semibold text-[#342B7C] cursor-pointer ml-1">
            <Link to="/">Login Now</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterPages;
