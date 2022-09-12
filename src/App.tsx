import { FC, lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { Spinner } from "./_components";
import useLockedBody from "./store/slices/bodyLock/useLockedBody";
import { useAppSelector } from "./hooks/useRedux";
import { useEventListener } from "./hooks";
import { Footer, Header } from "./_containers";
import useMenu from "./store/slices/menu/useMenu";

const Page404 = lazy(() => import("./_pages/Page404"));

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const { onCloseMenu } = useMenu();

    useEffect(() => {
        window.scrollTo(0, 0);
        onCloseMenu();
    }, [pathname]);
    return null;
};

const App: FC = () => {
    const { lockStatus } = useAppSelector((state) => state.bodyLock);
    useLockedBody(lockStatus);

    useEventListener("scroll", function () {
        const doc = document.documentElement;
        const scrollTop = window.scrollY;
        if (scrollTop >= 1) {
            !doc.classList.contains("_scroll") ? doc.classList.add("_scroll") : null;
        } else {
            doc.classList.contains("_scroll") ? doc.classList.remove("_scroll") : null;
        }
    });

    return (
        <>
            <ScrollToTop />
            <Header />
            <main className="page">
                <Suspense fallback={<Spinner />}>
                    <Routes>
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </Suspense>
            </main>
            <Footer />
        </>
    );
};

export default App;
