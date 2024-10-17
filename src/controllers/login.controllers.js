import { HttpStatusCode } from "axios";
import { Login } from "../models/Login.js";
import { Sequelize } from "sequelize";
export const createLogin = async (req, res)=>{
    const {id, customerID, password} = req.body;
    console.log(req.body);
    const newLogin = await Login.create(
        {customerID,password}
    ).catch(Sequelize.UniqueConstraintError, function(error){
        res.status(HttpStatusCode.Conflict).send({
            message:"Id customer already exist",
            validate:true
        })
    })
    res.status(HttpStatusCode.Ok).send(newLogin)
}

export const authLogin = async (req,res)=>{
    const {customerID, password} = req.body;
    const loginCustomer = await Login.findOne({
        where: {
            customerID:CustomerID,
        }
    })
    try {
        if(loginCustomer!=null){
            if(loginCustomer[password]==password){
                res.status(HttpStatusCode.Ok).send({
                    message:"login correct",
                    validate:true
                })
            }else{
                res.status(HttpStatusCode.Ok).send({
                    message:"login correct",
                    validate: false
                })
            }
            console.log(loginCustomer);
        }else{
            res.status(HttpStatusCode.Ok).send({
                message:"Not found",
                validate: false
            })
        }
    } catch (error) {
        console.log(error);
    }
}