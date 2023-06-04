import {v2 as cloudinary} from "cloudinary";
 
cloudinary.config({
    cloud_name:"dd660g8oz",
    api_key:"733324476112723",
    api_secret:"733324476112723",
})

export const uploadImagen  = async filePath=>{
    return await  cloudinaroy.uploader.upload(filePath,{
         folder:'Crud Practica'
    })
}