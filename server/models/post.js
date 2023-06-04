import mongoose from "mongoose";

 const postEchema = new mongoose.Schema({
    titulo:{
        type:String,
        required: true,
        trim:true
    },
    descripcion:{
        type: String,
        required: true,
        trim: true
    },
    imagen:{
        
        url: String,
        public_id: String
    }
});

export default mongoose.model("Post", postEchema);