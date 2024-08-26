import PropTypes from "prop-types";
import leftArrow from "../../images/icon/chevron-right.png";
const CustomButton = ({ btnname, type }) => {
  return (
    <button
      type={type}
      className="group  text-white w-full rounded-lg cursor-pointer bg-gradient-to-r from-[#2235C6] to-[#293088] font-semibold justify-center flex py-3 items-center mb-5"
    >
      {btnname}
      <img
        className="w-[22px] relative left-[5px] transition-left duration-300 ease-in group-hover:left-[15px]"
        src={leftArrow}
        alt=""
      />
    </button>
  );
};
CustomButton.propTypes = {
  type: PropTypes.string,
  btnname: PropTypes.string,
};
export default CustomButton;
