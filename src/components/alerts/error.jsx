import React, { Fragment } from "react";
import { RefreshIcon } from "@heroicons/react/outline";
import ErrorAsset from "../svg/error";

const ErrorAlert = ({ model, canReload, message }) => {
  return (
    <Fragment>
      <div className={"flex flex-col items-center"}>
        <div>
          <ErrorAsset className={" h-44 w-auto"} />
        </div>
        <div>
          <span className={"text-2xl font-bold"}>Can't fetch {model}</span>
        </div>
        <div className={"mb-2"}>
          <span className={" font-light"}>{message}</span>
        </div>
        {canReload && (
          <Fragment>
            <div>
              <button
                className={
                  "border-2 border-dashed px-5 py-2 bg-white hover:bg-gray-50 flex flex-row items-center"
                }
              >
                <RefreshIcon className={"h-6 w-6 mr-2 text-pink-500"} />
                <span className={"font-semibold"}> Reload</span>
              </button>
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

ErrorAlert.defaultProps = {
  message: "Some message for dey this side. So put some in the message prop",
};

export { ErrorAlert };
