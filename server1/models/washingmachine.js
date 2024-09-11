import mongoose from "mongoose";

const washingschema=mongoose.Schema(
    {
        day:{
              type:Date,
              require:true,
        },
        mode:{
            type:String,
            require:true,
      },
      time:{
        type:String,
        require:true,
  },


    }
);
export const washing=mongoose.model("washinginformation",washingschema);