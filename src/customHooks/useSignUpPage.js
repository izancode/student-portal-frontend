import { useState } from "react";

const useSignUpPage = () => {
  const [signUppage, setSignUp] = useState(false);
  const handleSignUpPage = () => {
    setSignUp((prevState) => !prevState);
  };
  return { signUppage, setSignUp, handleSignUpPage };
};

export default useSignUpPage;
