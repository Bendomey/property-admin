import { Fragment, useEffect } from "react";
import { breadCrumbConfig } from ".";
import { BreadCrumb } from "../../components/breadcrumbs";

const Administrators = () => {
  useEffect(() => {
    document.title = "Administrators | " + process.env.REACT_APP_NAME;
  }, []);
  return (
    <Fragment>
      {/* Page title & actions */}
      <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex-1 min-w-0">
          <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
            Manage Administrators
          </h1>
        </div>
        <div className="mt-4 flex sm:mt-0 sm:ml-4">
          <button
            type="button"
            className="order-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:order-1 sm:ml-3"
          >
            Add New Admin
          </button>
        </div>
      </div>
      <div className={"bg-gray-50 px-8 py-4"}>
        <BreadCrumb pages={breadCrumbConfig} />
      </div>
    </Fragment>
  );
};

export default Administrators;
