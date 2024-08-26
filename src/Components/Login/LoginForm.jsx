import InputField from "../FormFilled/InputField";
/*import CustomButton from "../Button/CustomButton";
 import MultipleField from "../FormFilled/MutlipleField";
const multipleFields = [
  {
    key: "number1",
    type: "text",
    pattern: "^\\d{2}$",
    divClass: "w-1/4 ",

    inputClass:
      "block h-14 w-full font-bold rounded-lg px-2.5 pb-2.5 pt-5 text-sm bg-[#F0F0F0] appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer",
  },
  {
    key: "number2",

    type: "text",
    pattern: "^\\d{2}$",
    divClass: "w-1/4 px-1 ",

    inputClass:
      "block h-14 w-full font-bold rounded-lg px-2.5 pb-2.5 pt-5 text-sm bg-[#F0F0F0] appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer",
  },
  {
    key: "number3",

    type: "text",
    pattern: "^\\d{4}$",
    divClass: "w-1/4",

    inputClass:
      "block h-14 w-full font-bold rounded-lg px-2.5 pb-2.5 pt-5 text-sm bg-[#F0F0F0] appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer",
  },
  {
    key: "number4",

    type: "text",
    pattern: "^\\d{4}$",
    divClass: "w-1/4 px-1",

    inputClass:
      "block h-14 w-full font-bold rounded-lg px-2.5 pb-2.5 pt-5 text-sm bg-[#F0F0F0] appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer",
  },
];*/
const LoginForm = () => {
  return (
    <>
      <form action="">
        <InputField
          placeholder="Register Email Address"
          labelClassName="cursor-text absolute  appearance-none  text-sm text-black font-semibold duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black peer-focus:font-semibold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.85] peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          fieldClassName="block h-14  font-bold rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm  bg-[#F0F0F0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer "
        />
        {/* <MultipleField Allfields={multipleFields} />
        <CustomButton btnname="Get OTP" /> */}
      </form>
    </>
  );
};

export default LoginForm;
