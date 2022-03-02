const { SuperfaceClient } = require("@superfaceai/one-sdk");

describe("Foreach with optional property", () => {
  it("should preserve Buffer property type", async () => {
    const sdk = new SuperfaceClient();

    const profile = await sdk.getProfile("foreach-bug-demo");

    const result = await profile.getUseCase("ForeachBugDemo").perform({
      items: [
        {
          buffer: new ArrayBuffer("foo"),
        },
        {
          buffer: new ArrayBuffer("bar"),
        },
      ],
    });

    unwrappedResult = result.unwrap();

    expect(Buffer.isBuffer(unwrappedResult.items[0].buffer)).toBe(true);
    expect(Buffer.isBuffer(unwrappedResult.items[1].buffer)).toBe(true); // this expect is not passing
  });
});
