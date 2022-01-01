import { SendRepo } from "../repo/send";
import Send,{ISend} from "../../models/send"
import { logger } from "../../config/logger";
import AppError from "../../utils/appError";

export class SendStorage implements SendRepo{
    private scope = "storage.send"

    async find(query:Object):Promise<ISend[]>{
        try{
            let dbobj = await Send.find({...query})
            
            return dbobj
        }catch(error){
            logger.error(`${this.scope}.find: finished with error: ${error}`)
            throw error
        }
    }

    async findOne(query: Object): Promise<ISend> {
        try {
            let dbObj = await Send.findOne({ ...query })

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

    async create(payload: ISend): Promise<ISend> {
        try {
            let dbObj = await Send.create(payload)

            return dbObj
        } catch (error) {
            console.log(error)
            logger.error(`${this.scope}.create: finished with error: ${error}`)
            throw error
        }
    }

    async delete(id: string): Promise<any> {
        try {
            let dbObj = await Send.findByIdAndDelete(id)

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