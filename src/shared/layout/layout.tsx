import { Fragment, useEffect, useState, Suspense } from "react";
import { NOT_FOUND } from "../../navigation/constants";
import { useLocation, Redirect, Route } from "react-router-dom";
import { RouteProp } from "../interfaces/misc";
import { SideBar } from "./components/side";
import { routes } from "../../navigation";
import { Header } from "./components/header";
import { PageLoader } from "../../components/loaders";

const Layout = () => {
  const [isInRoute, setisInRoute] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    let isIn = routes.find((r) => r.path === pathname);
    setisInRoute(isIn ? true : false);
  }, [pathname]);

  return isInRoute ? (
    <Fragment>
      <div className="h-screen bg-gray-50 flex overflow-hidden">
        <SideBar
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
        {/* Content area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header setMobileMenuOpen={setMobileMenuOpen} />
          {/* Main content */}
          <div className="flex-1 flex items-stretch overflow-hidden">
            <main className="flex-1 overflow-y-auto scrollContainer">
              <Suspense fallback={PageLoader()}>
                {routes.map((route: RouteProp, i: number) => (
                  <Fragment key={i}>
                    <Route
                      path={route.path}
                      component={route.component as any}
                      exact={route.exact}
                    />
                  </Fragment>
                ))}
              </Suspense>
            </main>
          </div>
        </div>
      </div>
    </Fragment>
  ) : (
    <Redirect to={NOT_FOUND} />
  );
};

export default Layout;
