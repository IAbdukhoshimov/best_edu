import { ContactRepo } from "../repo/contact_us";
import Contact,{IContact} from "../../models/contact_us"
import { logger } from "../../config/logger";
import AppError from "../../utils/appError";

export class ContactStorage implements ContactRepo{
    private scope = "storage.contact"

    async find(query:Object):Promise<IContact[]>{
        try{
            let dbobj = await Contact.find({...query})
            
            return dbobj
        }catch(error){
            logger.error(`${this.scope}.find: finished with error: ${error}`)
            throw error
        }
    }

    async findOne(query: Object): Promise<IContact> {
        try {
            let dbObj = await Contact.findOne({ ...query })

            if (!dbObj) {
                logger.warn(`${this.scope}.get failed to findOne`)
                throw new AppError(404, "Db object is not found")
            }

            return dbObj
        } catch (error) {
            logger.error(`${this.scope}.findOne: finished with error: ${error}`)
            throw error
        }
    }

    async create(payload: IContact): Promise<IContact> {
        try {
            let dbObj = await Contact.create(payload)

            return dbObj
        } catch (error) {
            console.log(error)
            logger.error(`${this.scope}.create: finished with error: ${error}`)
            throw error
        }
    }

    async delete(id: string): Promise<any> {
        try {
            let dbObj = await Contact.findByIdAndDelete(id)

            if (!dbObj) {
                logger.warn(`${this.scope}.delete failed to findByIdAndDelete`)
                throw new AppError(404, "Db object is not found")
            }

            return dbObj
        } catch (error) {
            logger.error(`${this.scope}.delete: finished with error: ${error}`)
            throw error
        }
    }
}