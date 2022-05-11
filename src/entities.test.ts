import axios from "axios";
import { TodoClient } from "./entities";

jest.mock("axios");

const mockGet = axios.get as jest.MockedFn<typeof axios.get>;

const todos = [{ id: 1, title: "test", userId: 1, completed: false }];

describe("entities", () => {
  describe("TodoClient", () => {
    beforeEach(() => {
      mockGet.mockResolvedValue({ data: todos });
    });

    afterEach(() => {
      mockGet.mockReset();
    });

    it("should make request to valid endpoint", async () => {
      const client = new TodoClient();

      await client.fetchData();

      expect(axios.get).toHaveBeenCalledWith(
        "https://jsonplaceholder.typicode.com/todos"
      );
    });

    it("should return data", async () => {
      const client = new TodoClient();

      const result = await client.fetchData();

      expect(result).toEqual(todos);
    });
  });
});
