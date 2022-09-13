import { lazy } from "react";

export interface CustomRouteObject {
    caseSensitive?: boolean;
    children?: CustomRouteObject[];
    element?: React.ReactNode;
    index?: boolean;
    path?: string;
    title?: string;
    type?: string;
}

const Page404 = lazy(() => import("../_pages/Page404")),
    HomePage = lazy(() => import("../_pages/HomePage")),
    ServicesPage = lazy(() => import("../_pages/ServicesPage")),
    AboutPage = lazy(() => import("../_pages/AboutPage")),
    WorkPage = lazy(() => import("../_pages/WorkPage")),
    ContactsPage = lazy(() => import("../_pages/ContactsPage")),
    GalleryPage = lazy(() => import("../_pages/GalleryPage"));

export enum RouteNames {
    HOME = "/",
    ABOUT = "/about",
    CONTACTS = "/contacts",
    GALLERY = "/gallery",
    SERVICES = "/services",
    WORK = "/work",
    PAGE404 = "*",
    LOREM = "/lorem",
    IPSUM = "/ipsum",
    DOLOR = "/dolor",
    SIT_AMET = "/sit-amet",
}

export const routesConfig: CustomRouteObject[] = [
    {
        path: RouteNames.PAGE404,
        element: <Page404 />,
        type: "404",
    },
    {
        title: "Home",
        path: RouteNames.HOME,
        element: <HomePage />,
        type: "menu",
    },
    {
        title: "Services",
        path: RouteNames.SERVICES,
        element: <ServicesPage />,
        type: "menu",
    },

    {
        title: "Work",
        path: RouteNames.WORK,
        element: <WorkPage />,
        type: "menu",
    },
    {
        title: "About",
        path: RouteNames.ABOUT,
        element: <AboutPage />,
        type: "menu",
    },
    {
        title: "Gallery",
        path: RouteNames.GALLERY,
        element: <GalleryPage />,
        type: "menu",
    },
    {
        title: "Contacts",
        path: RouteNames.CONTACTS,
        element: <ContactsPage />,
        type: "menu",
    },
    {
        title: "Lorem",
        path: RouteNames.LOREM,
        element: <Page404 />,
        type: "service",
    },
    {
        title: "Ipsum",
        path: RouteNames.IPSUM,
        element: <Page404 />,
        type: "service",
    },
    {
        title: "Dolor",
        path: RouteNames.DOLOR,
        element: <Page404 />,
        type: "service",
    },
    {
        title: "Sit Amet",
        path: RouteNames.SIT_AMET,
        element: <Page404 />,
        type: "service",
    },
];
