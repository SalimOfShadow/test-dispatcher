export interface HTTPTest {
  name: string;
  description?: string;
  endpoint: string;
  method: Method;
  headers?: Headers;
  body?: object;
  responseFormat: ResponseFormat;
  status: number;
  jsonResponse?: object;
  textResponse?: string;
}

type ResponseFormat = "JSON" | "text";
type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export const testList: HTTPTest[] = [
  {
    name: "Placeholder GET Request with JSON Response",
    description: "Return Placehodler GET Response with JSON Response",
    endpoint: "https://jsonplaceholder.typicode.com/todos/1",
    method: "GET",
    responseFormat: "JSON",
    status: 200,
    jsonResponse: {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
  },
  {
    name: "Placeholder POST Requset with JSON Response",
    description: "Return Placeholder POST JSON Response  ",
    endpoint: "https://jsonplaceholder.typicode.com/posts",
    method: "POST",
    body: {
      title: "foo",
      body: "bar",
      userId: 1,
    },
    responseFormat: "JSON",
    status: 201,
    jsonResponse: {
      id: 101,
    },
  },
  {
    name: "Placeholder GET Request with Text Response",
    description: "Return Placeholder GET Text Response",
    endpoint: "https://httpstat.us/200",
    method: "GET",
    responseFormat: "text",
    status: 200,
    textResponse: "200 OK",
  },
];
