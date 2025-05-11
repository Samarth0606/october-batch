import UserModel from "../models/User.model.js";
import bcrypt from "bcrypt";

export function register(req,res){
    const {firstName,email,password} = req.body;
    UserModel.findOne({email})
    .then((data)=>{
        if(data){
            return res.status(400).json({message: "email already in use"})
        }else{
            const newUser = new UserModel({
                firstName,
                email,
                password: bcrypt.hashSync(password, 10)
            })
            newUser.save()
            .then((data)=>{
                return res.status(201).json({message: data})
            })
            .catch((err)=>{
                return res.status(500).json({message: err.message})
            })
        }
    })
}


export function login(req,res){
    const {email,password} = req.body;
    UserModel.findOne({email})
    .then((data)=>{
        if(!data){
            return res.status(404).json({message: "email doesnot exist"})
        }
        let validPassword = bcrypt.compareSync(password,data.password);
        if(!validPassword){
            return res.status(403).json({message: "Invalid credentials"})
        }
        res.status(200).send({
            user: {
                email: data.email ,
                password: data.password,  //you should not
                firstName: data.firstName  
            }
        })
    })
    .catch((err)=> {
        return res.status(500).send({message: err.message})
    })
}
