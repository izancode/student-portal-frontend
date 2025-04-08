import { useSelector } from "react-redux";
import { StudentForm, FacultyForm } from "../Registration/Register/UserForm";
import { userUpdateData } from "../../Redux/ReduxThunk/updationThunks";
import { LoaderInfinitySpin } from "../../utils/Loader/Loader";

const RProfile = () => {
  const user = useSelector((state) => state.user?.userDetail?.data);
  const role = useSelector((state) => state.user?.userDetail?.role);

  if (!user) {
    return <LoaderInfinitySpin />;
  }
  return (
    <>
      <div className="grid grid-cols-12 h-[calc(100vh-169px)] lg:h-[calc(100vh-179px)] overflow-auto scrollbar-style-2">
        <div className="col-span-12 ">
          {role === "student" || role === "mother" || role === "father" ? (
            <StudentForm
              dumyInitialValues={user}
              initialValues={user}
              apiFrom="update"
              postData={userUpdateData}
            />
          ) : role === "faculty" ? (
            <FacultyForm
              dumyInitialValues={user}
              initialValues={user}
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

export default RProfile;
