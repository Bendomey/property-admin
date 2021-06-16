import React, { Fragment } from "react";
import { PlusIcon } from "@heroicons/react/outline";
import EmptyAsset from "../svg/empty";

const EmptyAlert = ({ model, canAdd, message }) => {
  return (
    <Fragment>
      <div className={"flex flex-col items-center"}>
        <div>
          <EmptyAsset className={"h-40 w-40"} />
        </div>
        <div>
          <span className={"text-2xl font-bold"}>{model} is empty</span>
        </div>
        {canAdd ? (
          <div className={"mb-2"}>
            <span className={" font-light"}>
              You can add one by clicking on the button below
            </span>
          </div>
        ) : (
          <div className={"mb-2"}>
            <span className={" font-light"}>{message}</span>
          </div>
        )}
        {canAdd && (
          <Fragment>
            <div>
              <button
                className={
                  "border-2 border-dashed p-3 bg-white hover:bg-gray-50 flex flex-row items-center"
                }
              >
                <PlusIcon className={"h-6 w-6 mr-2 text-pink-500"} />
                <span className={"font-semibold"}> Add New {model}</span>
              </button>
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

EmptyAlert.defaultProps = {
  canAdd: false,
  message: "Some message for dey this side. So put some in the message prop",
};

export { EmptyAlert };
