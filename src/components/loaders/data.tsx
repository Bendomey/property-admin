import * as React from "react";
import { ClassicSpinner } from "react-spinners-kit";

const DataLoader = () => {
  return (
    <React.Fragment>
      <div>
        <ClassicSpinner color={"#074E3B"} size={40} loading={true} />
      </div>
    </React.Fragment>
  );
};

export default DataLoader;
