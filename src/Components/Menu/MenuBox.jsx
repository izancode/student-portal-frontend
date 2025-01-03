import PropTypes from "prop-types";

const MenuBox = ({ imgSrc, title }) => {
  return (
    <div className="text-center group">
      <div className="  border border-[#342B7C] rounded cursor-pointer hover:border-[#342b7c00] hover:bg-[#fff] hover:shadow-[0px_0px_8px_0px_#80808030]">
        <img
          src={imgSrc}
          alt=""
          className="mx-auto w-[140px] p-[16px]  sm:w-[120px] sm:p-[26px] lg:max-w-full lg:h-auto lg:p-[32px]"
        />
      </div>
      <p className="text-[#342B7C] text-[10px] sm:text-[12px] group-hover:font-medium">
        {title}
      </p>
    </div>
  );
};

MenuBox.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
};
export default MenuBox;
