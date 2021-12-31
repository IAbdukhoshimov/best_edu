import { NextFunction,Request,Response } from "express";
import {logger} from "../config/logger";
import {storage} from "../storage/main";
import AppError from "../utils/appError";
import catchAsync from "../utils/catchAsync";

export class ContactController{
    getAll= catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const contact = await storage.contact.find(req.query)

        res.status(200).json({
            success:true,
            data:{
                contact
            }
        })
    })

    getOne = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const contact = await storage.contact.findOne(req.body)

        res.status(200).json({
            success:true,
            data:{
                contact
            }
        })
    })

    create = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const contact = await storage.contact.create({...req.body})

        res.status(201).json({
            success:true,
            data:{
                contact
            }
        })
    })



    delete = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const contact = await storage.contact.delete(req.params.id)
            if(!contact){
                return "not found in database"
            }
            res.status(200).json({
                success:true,
                data:{
                    contact
                }
            })
        })
}