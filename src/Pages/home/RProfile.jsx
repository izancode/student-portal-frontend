import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import {
  StudentForm,
  FacultyForm,
  AdminForm,
} from "../Registration/Register/UserForm";
import { userUpdateData } from "../../Redux/ReduxThunk/updationThunks";
import { LoaderInfinitySpin } from "../../utils/Loader/Loader";

export const RProfile = ({ userId }) => {
  const full_User_Data = useSelector(
    (state) => state.user?.allUserDetail?.full_User_Data
  );
  const login_User_Data = useSelector(
    (state) => state.user?.allUserDetail?.login_User_Data
  );

  let find_Normal_User_Detail;
  let find_Normal_User_Role;
  if (userId !== undefined) {
    find_Normal_User_Detail = full_User_Data.find(
      (item) => item._id === userId
    );

    find_Normal_User_Role = login_User_Data.find(
      (item) => item.userId === userId
    );
  }

  const normal_User_Detail = useSelector((state) =>
    userId == undefined ? state.user?.userDetail?.data : find_Normal_User_Detail
  );

  const normal_User_Role = useSelector((state) =>
    userId == undefined
      ? state.user?.userDetail?.role
      : find_Normal_User_Role.role
  );

  if (!normal_User_Detail) {
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
