import {ContactStorage} from "./mongo/contact_us"
import { SendStorage} from "./mongo/send"

interface IStorage {
    contact:ContactStorage
    send:SendStorage
}

export let storage: IStorage = {
    contact: new ContactStorage(),
    send: new SendStorage()

}