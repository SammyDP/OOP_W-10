const Manager = require("../lib/manager");

describe("manager inputs", () => {
  it("should return created objects", () => {
    const obj = new Manager();
    expect(typeof obj).toBe("object");
  });

  it("should return created array", () => {
    const obj = new Manager("Sammy", 1, "sp@e.com", 1);
    expect(obj).toEqual({ name: "Sammy", id: 1, email: "sp@e.com", office: 1 });
  });

  it('get role should return "intern"', () => {
    const returned = new Manager("Bob", 0, "@e.com", "Scranton");
    expect(returned.getRole()).toEqual("Manager");
  });
});
