import { useSelector } from "react-redux";
import { StudentForm } from "../Registration/Register/UserForm";
import { studentUpdateData } from "../../Redux/ReduxThunk/updationThunks";
import { LoaderInfinitySpin } from "../../utils/Loader/Loader";

const RProfile = () => {
  const user = useSelector((state) => state.user?.userDetail?.data);

  if (!user) {
    return <LoaderInfinitySpin />;
  }
  return (
    <div className="grid grid-cols-12 h-[calc(100vh-169px)] lg:h-[calc(100vh-179px)] overflow-auto">
      <div className="col-span-12 ">
        <StudentForm
          dumyInitialValues={user}
          initialValues={user}
          apiFrom="update"
          postData={studentUpdateData}
        />
      </div>
    </div>
  );
};

export default RProfile;
