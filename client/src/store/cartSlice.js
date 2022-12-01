import {createSlice,current} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        eachQuantity:0,
        totalQuantity:0,
        totalPrice:0,
        checkoutPrice:0,
        
    },
    reducers:{
        addProduct(state,action){

            state.eachQuantity = Number.parseInt(action.payload.quantity)
            const item = action.payload.product;
            // console.log(item._id)
            const isItemExists = state.products.find(eachItem=>eachItem.prod._id === item._id)
           if(isItemExists)
               {
                // console.log(isItemExists)
                state.products.forEach(elem=>{
                    if(elem.prod._id === item._id) elem.amount+=Number.parseInt(action.payload.quantity);
                })
               }
               else
               {
                state.products.push({prod:action.payload.product,amount:state.eachQuantity,color:action.payload.color,size:action.payload.size})
                
               }

            
           
            state.totalQuantity = Number.parseInt(state.totalQuantity)+state.eachQuantity;
            
            state.totalPrice+=(action.payload.product.newPrice * Number.parseInt(state.eachQuantity))
            state.checkoutPrice =Math.round(state.totalPrice+ (state.totalPrice * .18) + (state.totalPrice > 1500 ? 0 : 250)).toFixed(2)
        },
        increaseQuantity(state,action)
        {
            state.products.forEach(elem=>{
                if(elem.prod._id === action.payload) {
                    elem.amount+=1;
                    state.totalQuantity +=1;
                    state.totalPrice += elem.prod.newPrice;
                    state.checkoutPrice =Math.round(state.totalPrice+ (state.totalPrice * .18) + (state.totalPrice > 1500 ? 0 : 250)).toFixed(2)
                }
            })
        },
        decreaseQuantity(state,action)
        {
           if(action.payload.amount>0)
           {
            state.products.forEach(elem=>{
                if(elem.prod._id === action.payload.prod._id) {
                    elem.amount-=1;
                    state.totalQuantity -=1;                  
                    state.totalPrice -= elem.prod.newPrice;
                    state.checkoutPrice =Math.round(state.totalPrice+ (state.totalPrice * .18) + (state.totalPrice > 1500 ? 0 : 250)).toFixed(2)
                }
            })
           }
           if(action.payload.amount === 0)
                    {
                             const index = state.products.findIndex(product=>product.amount ===0)
                            state.products.splice(index,1);
                    }
        if(state.totalQuantity === 0)
                state.products =[]
        }
    }
})

export const {addProduct,increaseQuantity,decreaseQuantity} = cartSlice.actions

export default cartSlice.reducer