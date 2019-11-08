export function convertHexToBinary(hexKey: string) {
    return Array(hexKey.length / 2).fill("")
        .map((_: any, index: number) => parseInt(hexKey[index] + hexKey[index + 1], 16))
}