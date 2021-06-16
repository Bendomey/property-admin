import * as React from "react";
import { ClapSpinner } from "react-spinners-kit";

const PageLoader = () => {
  return (
    <React.Fragment>
      <div className={"w-full h-full flex justify-center items-center"}>
        <ClapSpinner
          frontColor={"#B91C1D"}
          backColor={"#B91C1D"}
          size={40}
          loading={true}
        />
      </div>
    </React.Fragment>
  );
};

export default PageLoader;
