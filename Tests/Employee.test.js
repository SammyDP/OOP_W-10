const Employee = require("../lib/employee");

describe("employee inputs", () => {
  it("should return created objects", () => {
    const obj = new Employee();
    expect(typeof obj).toBe("object");
  });
  it("should return created array", () => {
    const obj = new Employee("JohnD", 0, "JohnD@e.com");
    expect(obj).toEqual({ name: "JohnD", id: 0, email: "JohnD@e.com" });
  });
  it('get role should return "Employee"', () => {
    const returned = new Employee("JohnD", 0, "@e.com");
    expect(returned.getRole()).toEqual("Employee");
  });
});
