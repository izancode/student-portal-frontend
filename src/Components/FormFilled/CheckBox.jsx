import PropTypes from "prop-types";

const CheckBox = (props) => {
  const { name, img, className } = props;

  return (
    <div className="relative text-center">
      <img className="w-[55px] h-[55px] mx-auto" src={img} alt="" />
      <input
        type="checkbox"
        className={className}
        id={name}
        name={name}
        value={name}
      />
      <label className={`text-xs `} htmlFor={name}>
        {" "}
        {name}
      </label>
    </div>
  );
};
CheckBox.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  className: PropTypes.string,
};
export default CheckBox;
