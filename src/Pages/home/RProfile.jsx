import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import {
  StudentForm,
  FacultyForm,
  AdminForm,
} from "../Registration/Register/UserForm";
import { userUpdateData } from "../../Redux/ReduxThunk/updationThunks";
import { LoaderInfinitySpin } from "../../utils/Loader/Loader";
import { useUserForAdminCustomHook } from "../../customHooks/useUserForAdminCustomHook";

export const RProfile = ({ userId }) => {
  const { allUserdata } = useUserForAdminCustomHook();

  const findUserDetail = allUserdata?.full_User_Data?.find((item) => {
    return item._id === userId;
  });

  const findUserLogin = allUserdata?.number_Of_Login_User?.find((item) => {
    return item.userId === userId;
  });
  console.log("findUserLogin", findUserLogin);
  console.log("allUserdata?.login_User_Data", allUserdata?.login_User_Data);

  const normal_User_Detail = useSelector((state) =>
    userId === undefined ? state.user?.userDetail?.data : findUserDetail
  );

  const normal_User_Role = useSelector((state) =>
    userId === undefined ? state.user?.userDetail?.role : findUserLogin?.role
  );

  if (!normal_User_Detail || !normal_User_Role) {
    return <LoaderInfinitySpin heightClass="h-[calc(100vh-179px)]" />;
  }
  return (
    <>
      <div className="grid grid-cols-12 h-[calc(100vh-169px)] lg:h-[calc(100vh-179px)] overflow-auto scrollbar-style-2">
        <div className="col-span-12 px-2 lg:px-0">
          {normal_User_Role === "student" ||
          normal_User_Role === "mother" ||
          normal_User_Role === "father" ? (
            <StudentForm
              dumyInitialValues={normal_User_Detail}
              initialValues={normal_User_Detail}
              apiFrom="update"
              postData={userUpdateData}
            />
          ) : normal_User_Role === "faculty" ? (
            <FacultyForm
              dumyInitialValues={normal_User_Detail}
              initialValues={normal_User_Detail}
              apiFrom="update"
              postData={userUpdateData}
            />
          ) : normal_User_Role === "admin" ? (
            <AdminForm
              dumyInitialValues={normal_User_Detail}
              initialValues={normal_User_Detail}
              apiFrom="update"
              postData={userUpdateData}
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
};
