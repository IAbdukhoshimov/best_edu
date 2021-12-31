import {ContactStorage} from "./mongo/contact_us"

interface IStorage {
    contact:ContactStorage
}

export let storage: IStorage = {
    contact: new ContactStorage(),

}