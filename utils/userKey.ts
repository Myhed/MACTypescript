import * as crypto from 'crypto'
import {values} from 'lodash'

export function createUserKey(data: any ){
    const payloads: string[] = values(data)
    const createHash = crypto.createHash("sha1")
    payloads.map((payload: string,index:number) => createHash.update(payload))
    return createHash.digest('hex')
}