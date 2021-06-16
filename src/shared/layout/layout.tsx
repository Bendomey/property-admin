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
      <div className="h-screen flex overflow-hidden bg-white">
        <SideBar
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          <Header setMobileMenuOpen={setMobileMenuOpen} />
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
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
    </Fragment>
  ) : (
    <Redirect to={NOT_FOUND} />
  );
};

export default Layout;
