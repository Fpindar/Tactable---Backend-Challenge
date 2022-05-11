import { TodoClient } from "./entities";
import { IApiManager } from "./interfaces";
import { container } from "./inversify.config";
import { TYPES } from "./types";

const todos = [{ id: 1, title: "test", userId: 1, completed: false }];

test("TodoClient is injected properly", async () => {
  const spy = jest
    .spyOn(TodoClient.prototype, "fetchData")
    .mockResolvedValue(todos);

  const apiManager = container.get<IApiManager>(TYPES.IApiManager);
  const response = await apiManager.fetchData();

  expect(spy).toHaveBeenCalled();
  expect(response).toEqual(todos);
});
