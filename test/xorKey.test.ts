describe("xorBinaryMacThroughKeyRotate", () => {
    let xorBinaryMacThroughKeyRotate: any
    beforeAll(() => {
      xorBinaryMacThroughKeyRotate = require('../utils/xorKey').xorBinaryMacThroughKeyRotate
    })
  it("should create XOR hexa Mac`aab1374bfd8ba64cfc81` from binary key `171179527924813816479248132` through key rotate [1,2,3,4,5]", () => {
    // Given
    let indexKeyRotate = 0;
    let indexKey = [1,2,3,4,5]
    const hashHexKey = "ab34f8a4f84b3f6b3f6b"
    const hexKeySplited: string[] = hashHexKey.split("")
    const macBinaryKeys = Array(hexKeySplited.length / 2).fill("")
    .map((_: any, index: number) => parseInt(hexKeySplited[index] + hexKeySplited[index + 1], 16))
    const expectedMacHexKeys: string = macBinaryKeys
    .map(chunkBinaryKey => {  
      indexKeyRotate = indexKeyRotate % indexKey.length;
      const macStr = (chunkBinaryKey^indexKey[indexKeyRotate]).toString(16)
      indexKeyRotate++;
      return macStr;
    }).join('')
    // When
    const result = xorBinaryMacThroughKeyRotate(macBinaryKeys)
    // Then
    expect(result).toEqual(expectedMacHexKeys)
  });
});