import { HTTPTest, testList } from "./testList";

testList.forEach((test: HTTPTest) => {
  describe(test.name, () => {
    it(test.description || "Missing Description.", async () => {
      const response = await fetch(test.endpoint, {
        method: test.method,
        headers: test.headers || {},
        body: test.body ? JSON.stringify(test.body) : undefined,
      });

      expect(response.status).toBe(test.status);

      const data =
        test.responseFormat === "JSON"
          ? await response.json()
          : await response.text();

      if (test.responseFormat === "JSON") {
        expect(data).toMatchObject(test.jsonResponse || {});
      } else {
        expect(data).toBe(test.textResponse || "");
      }
    });
  });
});
