import { IContact } from "../../models/contact_us"; 

export interface ICatergoryAllResponse {
    payload:IContact[]
    count: number
}

export interface ContactRepo {
    create(payload:IContact):Promise<IContact>
    delete(id:string):Promise<any>
    find(query:Object):Promise<IContact[]>
    findOne(query:Object):Promise<IContact>
}