import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  auther: {
    type: String,
    require: true,
  },
  year: {
    type: Number,
    require: true,
  },
});

export const Book = mongoose.model("Book", bookSchema);

