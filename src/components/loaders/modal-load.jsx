import { Fragment } from "react";
import { MetroSpinner } from "react-spinners-kit";

const ModalLoader = () => {
  return (
    <Fragment>
      <div
        aria-live="assertive"
        className="fixed z-10 inset-0 bg-black bg-opacity-20 flex justify-center items-center px-4 py-6 pointer-events-none sm:p-6 sm:items-center"
      >
        <MetroSpinner color={"#C45B91"} loading={true} size={30} />
      </div>
    </Fragment>
  );
};

export default ModalLoader;
