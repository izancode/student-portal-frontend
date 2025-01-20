import { useSelector } from "react-redux";
import { StudentForm } from "../Registration/Register/UserForm";

const RProfile = () => {
  const user = useSelector((state) => state.user?.userDetail?.data);

  if (!user) {
    return <div>Loading...</div>; // Or any loading spinner you prefer
  }
  return (
    <div className="grid grid-cols-12 h-[calc(100vh-169px)] lg:h-[calc(100vh-179px)] overflow-auto">
      <div className="col-span-12 ">
        <StudentForm studentDumyInitialValues={user} />
      </div>
    </div>
  );
};

export default RProfile;
