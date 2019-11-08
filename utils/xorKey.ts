export function xorBinaryMacThroughKeyRotate(binaryMacs: number[]){
    let indexRotate = 0;
    const indexKeyRotate: number[] = Array(5).fill('').map((_,index: number) => index+1 );
    const macHexKey: string = binaryMacs
    .map((chunkBinaryMac) => {
        indexRotate = indexRotate % indexKeyRotate.length;
        const macStr = (chunkBinaryMac^indexKeyRotate[indexRotate]).toString(16)
        indexRotate++
        return macStr
    }).join('')
    return macHexKey;
}