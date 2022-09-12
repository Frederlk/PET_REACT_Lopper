import { FC, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { Header, Footer, Spinner } from "./_components";
import "./scss/style.scss";

const Page404 = lazy(() => import("./_pages/Page404"));

const App: FC = () => {
    return (
        <>
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
