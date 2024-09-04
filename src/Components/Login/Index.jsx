import ColTwo from "./ColTwo";
import ColOne from "./ColOne";
import useSignUpPage from "../../customHooks/useSignUpPage";

const Index = () => {
  const { signUppage, handleSignUpPage } = useSignUpPage(true);

  console.log("Index page ", import.meta.env.VITE_STUDENT_THUNKS_POST_API);
  return (
    <div className="grid xl:grid-cols-12 xl:h-screen ">
      {signUppage ? null : <ColOne />}
      <ColTwo
        handleSignUpPageProps={handleSignUpPage}
        signUppageProps={signUppage}
      />
    </div>
  );
};

export default Index;
