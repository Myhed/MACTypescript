describe("convertHexToBinary", () => {
    let hashHexKey: string;
    let convertHexToBinary: any
    beforeAll(() => {
        convertHexToBinary = require("../utils/hexToBinary").convertHexToBinary;
    })
    it("should convert Hex `ab34f8a4f84b3f6b3f6b` to Binary session Key `171179527924813816479248132`", () => {
      // Given
      hashHexKey = "ab34f8a4f84b3f6b3f6b";
      const hexKeySplited = hashHexKey.split("");
      const expectedResult = Array(hashHexKey.length / 2).fill("")
        .map((_: any, index: number) => parseInt(hexKeySplited[index] + hexKeySplited[index + 1], 16))
        console.log('expectedResult: ',expectedResult)
      // When
      const result = convertHexToBinary(hashHexKey);
      // Then
      expect(result).toEqual(expectedResult);
    });
  });