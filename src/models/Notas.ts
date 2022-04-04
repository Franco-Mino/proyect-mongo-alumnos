import mongoose from "mongoose";
import {model, Schema, Document} from "mongoose";



export interface INotas extends Document{
    name: string;
    grado: string;
    edad: number;
    author: string;
}


const NotasSchema = new Schema ({ 
    name: {
        type: String,
        required: true,
    }, 
    edad: {
        type: Number,
        required: true,
    },
    grado: {
        type: String,
        required: true,
    },
    author:{
        type:mongoose.Types.ObjectId
    },
    
},{
    versionKey:false,
    timestamps:true,
})

export default model<INotas>('Notas', NotasSchema);