import {sequalize} from '../database/db.js'
import { DataTypes } from 'sequelize'

export const Login = sequalize.define('login',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true  
        },
        customerID:{
            type:DataTypes.BIGINT,
            allowNull: false,
            unique:true
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },
    {
        freezeTableName: true,
      })