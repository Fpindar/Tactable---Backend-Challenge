import { IApiManager } from "./interfaces";
import { container } from "./inversify.config";
import { TYPES } from "./types";

const apiManager = container.get<IApiManager>(TYPES.IApiManager);
apiManager.fetchData().then((data) => console.log(data));
