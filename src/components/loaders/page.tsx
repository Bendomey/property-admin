import * as React from "react";
import { ClassicSpinner } from "react-spinners-kit";

const PageLoader = () => {
  return (
    <React.Fragment>
      <div className={"w-full h-full flex justify-center items-center"}>
        <ClassicSpinner color={"#057856"} size={40} loading={true} />
      </div>
    </React.Fragment>
  );
};

export default PageLoader;
