const Engineer = require("../lib/engineer");

describe("engineer inputs", () => {
  it("should return the newly created objects", () => {
    const obj = new Engineer();
    expect(typeof obj).toBe("object");
  });

  it("should return the newly created array", () => {
    const obj = new Engineer("Josh", 2, "j@e.com", "jm");
    expect(obj).toEqual({
      name: "Josh",
      id: 2,
      email: "jm@e.com",
      Github: "hoffalypse",
    });
  });

  it('get role should return "engineer"', () => {
    const returned = new Engineer("Bob", 0, "@gmail", "Gitname");
    expect(returned.getRole()).toEqual("Engineer");
  });
});
