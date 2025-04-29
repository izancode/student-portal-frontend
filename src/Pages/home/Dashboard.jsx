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
  const handleClick = (id) => {
    setId(id);
  };
  return (
    <Rcontent>
      {id === null ? (
        <Ruser onButtonClick={handleClick} />
      ) : (
        <RProfile userId={id} />
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
