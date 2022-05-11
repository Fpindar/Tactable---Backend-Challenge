import { Container } from "inversify";
import { TYPES } from "./types";
import { TodoClient, ApiManager } from "./entities";
import { Client, IApiManager } from "./interfaces";

const container = new Container();
container.bind<Client>(TYPES.Client).to(TodoClient);
container.bind<IApiManager>(TYPES.IApiManager).to(ApiManager);

export { container };
