import appService from "./app-service";
import authService from "./auth-service";

const service = {
    ...appService,
    ...authService,
}

export default service;
