import { injectable, inject } from "inversify";
import "reflect-metadata";
import axios from "axios";
import { Todo, Client, IApiManager } from "./interfaces";
import { TYPES } from "./types";

@injectable()
export class TodoClient implements Client {
  public async fetchData(): Promise<Todo[]> {
    const response = await axios.get<Todo[]>(
      "https://jsonplaceholder.typicode.com/todos"
    );
    return response.data;
  }
}

@injectable()
export class ApiManager implements IApiManager {
  constructor(@inject(TYPES.Client) private _client: Client) {}

  public async fetchData(): Promise<Todo[]> {
    return await this._client.fetchData();
  }
}
