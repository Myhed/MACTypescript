import { convertHexToBinary } from "./hexToBinary";
import { xorBinaryMacThroughKeyRotate } from "./xorKey";
export function findHashKeyUser(mac: string) {
  const x = convertHexToBinary(mac);
    return xorBinaryMacThroughKeyRotate(x);
}
