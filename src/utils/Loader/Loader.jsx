import { InfinitySpin } from "react-loader-spinner";
import PropTypes from "prop-types";

export const LoaderInfinitySpin = ({ heightClass }) => {
  return (
    <div className={`flex justify-center  ${heightClass} items-center`}>
      <InfinitySpin
        visible={true}
        width="200"
        color="#1c22c1"
        ariaLabel="infinity-spin-loading"
        wrapperStyle={{}}
      />
    </div>
  );
};
LoaderInfinitySpin.propTypes = {
  heightClass: PropTypes.string,
};
// className="flex justify-center h-96 items-center"
