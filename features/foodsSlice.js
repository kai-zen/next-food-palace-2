import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    favorites: [],
}

export const foodsSlice = createSlice({
    name: 'foods',
    initialState,
    reducers: {
        toggleToFavorites: (state, payload) => {
            let isItInFav = state.favorites.find(food => {
                return food.id === payload.payload.id
            });
            if (isItInFav) {
                state.favorites = state.favorites.filter(f => {
                    return f.id !== payload.payload.id
                })
            } else {
                state.favorites.push(payload.payload)
            }
        },
        toggleToCart: (state, payload) => {
            let isItInCart = state.cart.find(food => {
                return food.id === payload.payload.id
            });
            if (isItInCart) {
                state.cart = state.cart.filter(f => {
                    return f.id !== payload.payload.id
                })
            } else {
                let food = {
                    ...payload.payload,
                    cartQuantity: 1
                };
                state.cart.push(food)
            }
        },
        changeCartQuantity: (state, payload) => {
            state.cart[payload.payload.index].cartQuantity = payload.payload.quantity;
        },
    }
})

export default foodsSlice.reducer;
export const { toggleToFavorites, toggleToCart, changeCartQuantity } = foodsSlice.actions;