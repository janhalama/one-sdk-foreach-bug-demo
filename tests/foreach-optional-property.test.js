const { SuperfaceClient } = require("@superfaceai/one-sdk");

describe("Foreach with optional property", () => {
  it("should not leak optional properties from previous items", async () => {
    const sdk = new SuperfaceClient();

    const profile = await sdk.getProfile("foreach-bug-demo");

    const result = await profile.getUseCase("ForeachBugDemo").perform({
      items: [
        {
          a: 1,
          b: 2,
        },
        {
          a: 2,
        },
      ],
    });

    unwrappedResult = result.unwrap();

    expect(unwrappedResult).toBe({
      items: [
        {
          a: 1,
          b: 2,
        },
        {
          a: 2,
        },
      ],
    });
  });
});
