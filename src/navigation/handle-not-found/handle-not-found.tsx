import * as React from "react";
import Svg404 from "../../components/svg/404";

const HandleNotFound = () => {
  return (
    <React.Fragment>
      <div
        className={
          "h-screen w-screen bg-white flex justify-center items-center flex-col"
        }
      >
        <Svg404 className={"h-auto w-96"} />
        <span className={"text-red-500"}>Oops, Page Not Found</span>
        <div className={"w-56 mt-1"}>
          <a
            href={"/"}
            className="group relative w-full flex justify-center py-3 px-4 border border-gray-400 text-sm font-medium rounded-none text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-green-500 group-hover:text-green-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </span>
            Go Home
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HandleNotFound;
