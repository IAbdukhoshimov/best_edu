import { ISend } from "../../models/send"; 

export interface ISendAllResponse {
    payload:ISend[]
    count: number
}

export interface SendRepo {
    create(payload:ISend):Promise<ISend>
    delete(id:string):Promise<any>
    find(query:Object):Promise<ISend[]>
    findOne(query:Object):Promise<ISend>
}