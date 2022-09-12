export interface IRoute {
    path: string;
    title: string;
    element: React.ComponentType;
}

export enum RouteNames {
    HOME = "/",
    ABOUT = "/about",
    CONTACTS = "/contacts",
    GALLERY = "/gallery",
    SERVICES = "/services",
    TEAM = "/team",
}

// export const routes: IRoute[] = [
//     {
//         path: RouteNames.LOGIN,
//         element: Login,
//     },
// ];
