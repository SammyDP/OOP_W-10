const Intern = require("../lib/intern");

describe("intern inputs", () => {
  it("should return the newly created objects", () => {
    const obj = new Intern();
    expect(typeof obj).toBe("object");
  });
  it("should return the newly created array", () => {
    const obj = new Intern("Peter", 3, "peter@e.com", "DU");
    expect(obj).toEqual({
      name: "Peter",
      id: 3,
      email: "p@e.com",
      school: "Stanford",
    });
  });

  it('get role should return "Intern"', () => {
    const returned = new Intern("Bob", 3, "@e.com", "School");
    expect(returned.getRole()).toEqual("Intern");
  });
});
