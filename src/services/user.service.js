export const userService = {
    getUser,
    signUp,
    updateUser
    }

const USER_KEY = 'userDB'
const user = {
    name: "Puki Ben David",
    balance: 100,
    transactions: []
    }


function getUser(){
    return new Promise((resolve,reject)=>{
        resolve(user)
    })
}    

function signUp(username){
    let user = localStorage.getItem(username)
    if(!user)
    {   user = {name:username,balance:100,transactions:[]}
         localStorage.setItem(username,JSON.stringify(user))
        return Promise.resolve(user)}
        else {
            return Promise.resolve(JSON.parse(user))
        }
    
}

function updateUser(username,{coins,to}){
    const user = JSON.parse(localStorage.getItem(username))
    if(user){
        const diff = user.balance - coins
        if(diff >=0){
            user.balance = user.balance - coins
            user.transactions = [...user.transactions,{coins,to}]
            localStorage.setItem(user.name,JSON.stringify(user))
            return Promise.resolve(user)
        }
        else{
            return Promise.reject()
        }
    
    }
    else{
        return Promise.reject()
    }

}
  
    