import { User } from "~~/server/models/user.model"

export default eventHandler( async event => {

    return await User.find();
    /*return [
        {name:"user1"},
        {name:"user2"},
        {name:"user3"},
        {name:"user4"},
    ]*/
})