import { contactService } from "../../services/contactService.js";
import { userService } from "../../services/user.service.js";

export default{
    state:{
        loggedInUser : {}
    },
    mutations:{
        setUser(state,user){
            state.loggedInUser = user

        }
    },
    actions:{
        async signUp({commit},{username}){
            const user = await userService.signUp(username)
            console.log(user);
            commit({type:'setUser',user})
        },
        async transferToContact({commit,state},{coins,to}){
            const user = await userService.updateUser(state.loggedInUser.user.name,{coins,to})
            commit({type:'setUser',user})

        }

    },
    getters:{
        loggedInUser(state){
            return state.loggedInUser
        }
     
    }
}