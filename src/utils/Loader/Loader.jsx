import { InfinitySpin } from "react-loader-spinner";

export const LoaderInfinitySpin = () => {
  return (
    <div className="flex justify-center h-96 items-center">
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
