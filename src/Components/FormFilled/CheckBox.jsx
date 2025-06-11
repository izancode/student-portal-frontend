import PropTypes from "prop-types";

const CheckBox = (props) => {
  const { name, className, checked, handleChange } = props;

  return (
    <div className="absolute w-full h-full">
      <input
        type="checkbox"
        className={className}
        id={name}
        name={name}
        value={name}
        checked={checked}
        onChange={handleChange}
      />
    </div>
  );
};
CheckBox.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  className: PropTypes.string,
  checked: PropTypes.bool,
  handleChange: PropTypes.func,
};
export default CheckBox;
