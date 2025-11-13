const data = require("./actress.json");

describe("Validate actress JSON data", () => {
  test('"id" value should be in specified format', () => {
    data.forEach((item) => {
      const id = item.id;

      expect(typeof id).toBe("string");
      expect(id).toMatch(/^[a-z]+_n|a|f|s$/);
    });
  });

  test('"attribute" value should be in specified format', () => {
    data.forEach((item) => {
      const attribute = item.attribute;

      expect(typeof attribute).toBe("string");
      expect(attribute).toMatch(/^(electric|gravity|heat|freeze)$/);
    });
  });

  test('"kind" value should be in specified format', () => {
    data.forEach((item) => {
      const kind = item.kind;

      expect(typeof kind).toBe("string");
      expect(kind).toMatch(/^(normal|another|factor|stellar)$/);
    });
  });
});
