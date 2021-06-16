import * as React from "react";
import { ClapSpinner } from "react-spinners-kit";

const DataLoader = () => {
  return (
    <React.Fragment>
      <div>
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

export default DataLoader;
