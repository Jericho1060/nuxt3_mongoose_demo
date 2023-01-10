import { Schema, model } from "mongoose";

interface IUser {
    _id: Number,
    name: String,
    email?: String,
}

const UserSchema = new Schema<IUser>({
    name: {
        type:String,
        required: true,
    },
    email: {
        type: String,
    }
}, {
    timestamps: true
});

export const User = model("User", UserSchema);