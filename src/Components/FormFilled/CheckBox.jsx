import PropTypes from "prop-types";

const CheckBox = (props) => {
  const { name, className, checked, onChange } = props;

  return (
    <div className="absolute w-full h-full">
      <input
        type="checkbox"
        className={className}
        id={name}
        name={name}
        value={name}
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
};
CheckBox.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  className: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};
export default CheckBox;
