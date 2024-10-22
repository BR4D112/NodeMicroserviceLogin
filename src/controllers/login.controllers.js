import { HttpStatusCode } from "axios";
import { Login } from "../models/Login.js";
import { Sequelize } from "sequelize";

export const createLogin = async (req, res) => {
    const { customerID, password } = req.body;
    
    try {
        console.log(req.body);

        // Crear nuevo login
        const newLogin = await Login.create({ customerID, password });

        // Enviar respuesta de éxito
        res.status(HttpStatusCode.Ok).send(newLogin);
    } catch (error) {
        // Verificar si el error es de tipo UniqueConstraintError
        if (error instanceof Sequelize.UniqueConstraintError) {
            return res.status(HttpStatusCode.Ok).send({
                message: "Customer ID already exists",
                validate: true
            });
        }

        // Manejar otros errores
        return res.status(HttpStatusCode.InternalServerError).send({
            message: "An error occurred",
            error: error.message
        });
    }
};

export const authLogin = async (req,res)=>{
    const {customerID, password} = req.body;
    const loginCustomer = await Login.findOne({
        where: {
            customerID:customerID,
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