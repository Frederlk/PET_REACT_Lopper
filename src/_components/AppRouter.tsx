import { useEffect, FC } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { _closeAllSpollers } from "../helpers/functions";
import { routesConfig } from "../routes";
import useMenu from "../store/slices/menu/useMenu";

const ScrollToTop: FC = () => {
    const { pathname } = useLocation();
    const { onCloseMenu } = useMenu();

    useEffect(() => {
        window.scrollTo(0, 0);
        onCloseMenu();
        _closeAllSpollers();
    }, [pathname]);
    return null;
};

const AppRouter = () => {
    const routes = useRoutes(routesConfig);

    return (
        <>
            <ScrollToTop />
            {routes}
        </>
    );
};

export default AppRouter;
