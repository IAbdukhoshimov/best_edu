import { NextFunction,Request,Response } from "express";
import {logger} from "../config/logger";
import {storage} from "../storage/main";
import AppError from "../utils/appError";
import catchAsync from "../utils/catchAsync";

export class SendController{
    getAll= catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const send = await storage.send.find(req.query)

        res.status(200).json({
            success:true,
            data:{
                send
            }
        })
    })

    getOne = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const send = await storage.send.findOne(req.body)

        res.status(200).json({
            success:true,
            data:{
                send
            }
        })
    })

    create = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const send = await storage.send.create({...req.body})

        res.status(201).json({
            success:true,
            data:{
                send
            }
        })
    })



    delete = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const send = await storage.send.delete(req.params.id)
            if(!send){
                return "not found in database"
            }
            res.status(200).json({
                success:true,
                data:{
                    send
                }
            })
        })
}