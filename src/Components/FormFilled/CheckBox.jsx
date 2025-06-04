import PropTypes from "prop-types";

const CheckBox = (props) => {
  const { name, className } = props;

  return (
    <div className="absolute w-full h-full">
      <input
        type="checkbox"
        className={className}
        id={name}
        name={name}
        value={name}
      />
    </div>
  );
};
CheckBox.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  className: PropTypes.string,
};
export default CheckBox;
