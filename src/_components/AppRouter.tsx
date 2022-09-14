import { useEffect, FC } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { _closeAllSpollers } from "../helpers/functions";
import { routesConfig } from "../routes";
import useMenu from "../store/slices/menu/useMenu";

const AppRouter: FC = () => {
    const routes = useRoutes(routesConfig);
    const { pathname } = useLocation();
    const { onCloseMenu } = useMenu();

    useEffect(() => {
        window.scrollTo(0, 0);
        onCloseMenu();
        _closeAllSpollers();
        const wrapper = document.querySelector(".wrapper");
        if (wrapper && pathname === "/") {
            wrapper?.classList.add("home-wrapper");
        } else if (wrapper && pathname !== "/" && wrapper?.classList.contains("home-wrapper")) {
            wrapper?.classList.remove("home-wrapper");
        }
    }, [pathname]);

    return <>{routes}</>;
};

export default AppRouter;
