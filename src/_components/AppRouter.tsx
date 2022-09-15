import { useEffect, FC } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import dynamicAdaptive from "../helpers/dynamic_adapt";
import { spollers, _closeAllSpollers } from "../helpers/functions";
import { routesConfig } from "../routes";
import useMenu from "../store/slices/menu/useMenu";

const PageChange: FC = () => {
    const { pathname } = useLocation();
    const { onCloseMenu } = useMenu();

    useEffect(() => {
        dynamicAdaptive();
        spollers();
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

    return null;
};

const AppRouter: FC = () => {
    const routes = useRoutes(routesConfig);

    return (
        <>
            <PageChange />
            {routes}
        </>
    );
};

export default AppRouter;
