export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface Client {
  fetchData: () => Promise<Todo[]>;
}

export interface IApiManager {
  fetchData: () => Promise<Todo[]>;
}
