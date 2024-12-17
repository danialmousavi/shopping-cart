import { SET_POST } from "./actionType"

const initialState={
    products:[]
}
const productReducer=(state=initialState,action)=>{
    switch (action.type) {
        case SET_POST:
            return{
                ...state,
                products:action.payload
            }
    
        default:
           return state
    }
}
export default productReducer