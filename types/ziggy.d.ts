import { RouteParam, RouteParamsWithQueryOverload, Router } from "ziggy-js";

declare global {
    // Function overloads
    function route(): Router;
    function route(
        name: string,
        params?: RouteParamsWithQueryOverload | RouteParam,
        absolute?: boolean,
        customZiggy?: object
    ): string;

    // Extend the Router interface
    interface Router {
        current: (name?: string, params?: unknown) => boolean;
        params: (params?: unknown) => Router;
        has: (name: string) => boolean;
        check: () => boolean;
        toString: () => string;
    }
}
