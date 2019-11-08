import { when } from "jest-when";
describe("createUserKey", () => {
  let createUserKey: any;
  let crypto: any;
  beforeAll(() => {
    jest.doMock("crypto");
    crypto = require("crypto");
    createUserKey = require("../utils/userKey").createUserKey;
  });
  afterEach(() => {
    jest.resetAllMocks();
  })
  it("should create a userKey", () => {
    // Given
    const algorithme = "sha1"
    const base64Encoding = "hex"
    const payLoads = {
      email: "myEmail@gmail.com",
      name: "myName"
    }
    const hash = new crypto.Hash()
    const expectedResult = "myHash"

    when(crypto.createHash)
      .calledWith(algorithme)
      .mockReturnValue(hash)
    when(hash.update)
      .calledWith(payLoads.email)
      .mockReturnValue(hash)
      when(hash.update)
      .calledWith(payLoads.name)
      .mockReturnValue(hash)
    when(hash.digest)
      .calledWith(base64Encoding)
      .mockReturnValue(expectedResult)
    // When
    const result = createUserKey(payLoads)
    expect(result).toEqual(expectedResult)
    // Then
    expect(crypto.createHash).nthCalledWith(1, algorithme)
    expect(hash.update).toHaveBeenNthCalledWith(1,payLoads.email)
    expect(hash.update).toHaveBeenNthCalledWith(2,payLoads.name)
    expect(hash.digest).lastCalledWith(base64Encoding)
  });
});
