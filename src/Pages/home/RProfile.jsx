import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { customToast } from "../../utils/CustomAlert/cutomToast";

import {
  StudentForm,
  FacultyForm,
  AdminForm,
} from "../Registration/Register/UserForm";
import { userUpdateData } from "../../Redux/ReduxThunk/updationThunks";
import { LoaderInfinitySpin } from "../../utils/Loader/Loader";
import { allSingleUserGetDataThunk } from "../../Redux/ReduxThunk/fetchDataThunks";

export const RProfile = ({ userId, role }) => {
  /* console.log("userId", userId);
  console.log("role", role);
 */
  const [allSingleUserdata, setallSingleUserdata] = useState("");

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const AllSingleUserDataForAdmin = await allSingleUserGetDataThunk(
          userId
        );

        if (isMounted) {
          setallSingleUserdata(AllSingleUserDataForAdmin.data);
        }
      } catch (error) {
        customToast("error", error.message);
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, [userId]);

  const normal_User_Detail = useSelector((state) =>
    userId === undefined ? state.user?.userDetail?.data : allSingleUserdata.data
  );

  const normal_User_Role = useSelector((state) =>
    userId === undefined ? state.user?.userDetail?.role : role
  );

  if (!normal_User_Detail || !normal_User_Role) {
    return <LoaderInfinitySpin heightClass="h-[calc(100vh-179px)]" />;
  }
  return (
    <>
      <div className="grid grid-cols-12 h-[calc(100vh-169px)] lg:h-[calc(100vh-179px)] overflow-auto scrollbar-style-2">
        <div className="col-span-12 px-2 lg:px-0 mt-5">
          {normal_User_Role === "student" ||
          normal_User_Role === "mother" ||
          normal_User_Role === "father" ? (
            <StudentForm
              dumyInitialValues={normal_User_Detail}
              initialValues={normal_User_Detail}
              apiFrom={userId ? "admin-update" : "update"}
              postData={userUpdateData}
              normal_User_Role={normal_User_Role}
              userId={userId}
            />
          ) : normal_User_Role === "faculty" ? (
            <FacultyForm
              dumyInitialValues={normal_User_Detail}
              initialValues={normal_User_Detail}
              apiFrom={userId ? "admin-update" : "update"}
              postData={userUpdateData}
              normal_User_Role={normal_User_Role}
              userId={userId}
            />
          ) : normal_User_Role === "admin" ? (
            <AdminForm
              dumyInitialValues={normal_User_Detail}
              initialValues={normal_User_Detail}
              apiFrom={userId ? "admin-update" : "update"}
              postData={userUpdateData}
              normal_User_Role={normal_User_Role}
              userId={userId}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

RProfile.propTypes = {
  userId: PropTypes.string,
  role: PropTypes.string,
};
