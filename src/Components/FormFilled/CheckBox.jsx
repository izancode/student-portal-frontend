import PropTypes from "prop-types";

const CheckBox = (props) => {
  const { name, img, className } = props;

  return (
    <div className="relative">
      <img className="w-50" src={img} alt="" />
      <input
        type="checkbox"
        className={className}
        id={name}
        name={name}
        value={name}
      />
      <label htmlFor={name}> {name}</label>
    </div>
  );
};
CheckBox.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  className: PropTypes.string,
};
export default CheckBox;
