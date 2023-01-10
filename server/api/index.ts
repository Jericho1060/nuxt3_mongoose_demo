import mongoose from "mongoose"

export default async () => {
    try {
        console.log("connecting to Database ...")
        mongoose.set('strictQuery', false)
        await mongoose.connect("mongodb://127.0.0.1:27017/nuxt3_demo")
        console.log("Connected to database")
    } catch (e) {
        console.error(e)
    }
}