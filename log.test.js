const { log } = require("./logger");

describe("log", () => {
  it("should log a single line string with gradient color", () => {
    const mockConsoleLog = jest.spyOn(console, "log").mockImplementation();

    log("Hello world!");
    expect(mockConsoleLog).toHaveBeenCalledWith(expect.any(String));
    mockConsoleLog.mockRestore();
  });

  it("should log a multiline string with gradient color", () => {
    const mockConsoleLog = jest.spyOn(console, "log").mockImplementation();

    log(`Hello
      world!`);
    expect(mockConsoleLog).toHaveBeenCalledWith(expect.any(String));
    mockConsoleLog.mockRestore();
  });

  it("should log an object as JSON", () => {
    const mockConsoleLog = jest.spyOn(console, "log").mockImplementation();
    const obj = {
      a: 1, b: "two", c: [3]
    };

    log(obj);
    expect(mockConsoleLog).toHaveBeenCalledWith(JSON.stringify(obj, null, 2));
    mockConsoleLog.mockRestore();
  });
});
