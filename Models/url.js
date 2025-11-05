import mongoose from "mongoose";

const URLSchema = mongoose.Schema({
  longUrl: {
    type: String,
    required: true,
  },
  shortId: {
    type: String,
    required: true,
  },
},
{
  timestamp:true,
});

export const URLs = mongoose.model("redirectURLS  ", URLSchema);