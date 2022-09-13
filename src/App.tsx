import { FC, Suspense, useEffect } from "react";
import { useLocation, useRoutes } from "react-router-dom";

import { Spinner } from "./_components";
import { useEventListener } from "./hooks";
import { Footer, Header } from "./_containers";
import useMenu from "./store/slices/menu/useMenu";
import dynamicAdaptive from "./helpers/dynamic_adapt";
import { spollers, _closeAllSpollers } from "./helpers/functions";
import { routesConfig } from "./routes";

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const { onCloseMenu } = useMenu();

    useEffect(() => {
        window.scrollTo(0, 0);
        onCloseMenu();
        _closeAllSpollers();
    }, [pathname]);
    return null;
};

const App: FC = () => {
    useEventListener("scroll", function () {
        const doc = document.documentElement;
        const scrollTop = window.scrollY;
        if (scrollTop >= 1) {
            !doc.classList.contains("_scroll") ? doc.classList.add("_scroll") : null;
        } else {
            doc.classList.contains("_scroll") ? doc.classList.remove("_scroll") : null;
        }
    });

    useEffect(() => {
        dynamicAdaptive();
        spollers();
    }, []);

    const routes = useRoutes(routesConfig);

    return (
        <>
            <ScrollToTop />
            <Header />
            <main className="page">
                <Suspense fallback={<Spinner />}>{routes}</Suspense>
            </main>
            <Footer />
        </>
    );
};

export default App;
