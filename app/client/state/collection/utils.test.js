import { paramsSerializer } from "./utils";

test("paramsSerializer", () => {
  const params = { id: ["1", "2", "3"] };

  expect(paramsSerializer(params)).toEqual("id=1,2,3");
});
