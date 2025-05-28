import { Rcontent } from "../../Components/Layout/Layout";
import { RProfile } from "./RProfile";
import { Ruser } from "./Ruser";
import { useState } from "react";
export const Profile = () => {
  return (
    <Rcontent>
      <RProfile />
    </Rcontent>
  );
};

export const User = () => {
  const [id, setId] = useState(null);

  const [role, setRole] = useState(null);
  const handleClick = (id, role) => {
    setId(id);
    setRole(role);
  };
  return (
    <Rcontent>
      {id === null ? (
        <Ruser onButtonClick={handleClick} />
      ) : (
        <RProfile userId={id} role={role} />
      )}
    </Rcontent>
  );
};

export const ClassLabTools = () => {
  return (
    <Rcontent>
      <div>ClassLabTools</div>
    </Rcontent>
  );
};

export const CourseSchedule = () => {
  return (
    <Rcontent>
      <div>CourseSchedule</div>
    </Rcontent>
  );
};

export const ClassTimings = () => {
  return (
    <Rcontent>
      <div>ClassTimings</div>
    </Rcontent>
  );
};

export const FacultyAllocation = () => {
  return (
    <Rcontent>
      <div>facultyAllocation</div>
    </Rcontent>
  );
};

export const Attendance = () => {
  return (
    <Rcontent>
      <div>Attendance</div>
    </Rcontent>
  );
};
export const Assignment = () => {
  return (
    <Rcontent>
      <div>Assignment</div>
    </Rcontent>
  );
};
export const GradesReport = () => {
  return (
    <Rcontent>
      <div>GradesReport</div>
    </Rcontent>
  );
};
export const EnrollementStatus = () => {
  return (
    <Rcontent>
      <div>EnrollementStatus</div>
    </Rcontent>
  );
};
export const AcademicHistory = () => {
  return (
    <Rcontent>
      <div>Academic History</div>
    </Rcontent>
  );
};
export const Chat = () => {
  return (
    <Rcontent>
      <div>Chat</div>
    </Rcontent>
  );
};
export const FacultyFeedback = () => {
  return (
    <Rcontent>
      <div>FacultyFeedback</div>
    </Rcontent>
  );
};
