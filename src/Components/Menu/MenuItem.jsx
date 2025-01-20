import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
export const MenuBox = ({ imgSrc, title }) => {
  const url = "/" + title.toLowerCase().replace(/ /g, "-");

  return (
    <Link to={url}>
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
    </Link>
  );
};
export const MenuList = ({ imgSrc, title }) => {
  const url = "/" + title.toLowerCase().replace(/ /g, "-");
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Link to={url}>
      <li
        className={`group lg:flex items-center text-[8px] lg:text-[10px] font-medium py-3 px-1 lg:py-2 lg:px-2 cursor-pointer hover:bg-[#3C3579] ${
          currentPath === url ? "bg-[#3C3579]" : ""
        }  transition-all duration-[500ms] border-t-[0.5px] border-[#ffffff2b] `}
      >
        <img
          src={imgSrc}
          alt=""
          className="w-[22px] h-[22px] mx-auto mb-2 lg:mr-1 lg:ml-0 lg:mb-0"
        />
        <p
          className={`transition-all duration-[500ms] group-hover:font-bold ${
            currentPath === url ? "font-bold" : ""
          } tracking-[1px] uppercase text-center lg:text-left`}
        >
          {title}
        </p>
      </li>
    </Link>
  );
};
MenuBox.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
};
MenuList.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
};
