import { INCREMENT,DECREMENT } from "./actionType"


export const incremant =()=>{
    return{
        type:INCREMENT
    }
}

export const decrement =()=>{
    return{
        type:DECREMENT
    }
}