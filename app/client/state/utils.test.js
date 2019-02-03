import { filtersSerializer } from "./utils";

test("filtersSerializer", () => {
  const params = { id: ["1", "2", "3"] };

  expect(filtersSerializer(params)).toEqual("filter[id]=1,2,3");
});
