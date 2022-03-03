import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
    cart: Cookies.get('cart') ?
        JSON.parse(Cookies.get('cart')) : [],
    favorites: Cookies.get('favorites') ?
        JSON.parse(Cookies.get('favorites')) : [],
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
            Cookies.set('favorites', JSON.stringify(state.favorites));
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
            Cookies.set('cart', JSON.stringify(state.cart));
        },
        changeCartQuantity: (state, payload) => {
            state.cart[payload.payload.index].cartQuantity = payload.payload.quantity;
            Cookies.set('cart', JSON.stringify(state.cart));
        },
    }
})

export default foodsSlice.reducer;
export const { toggleToFavorites, toggleToCart, changeCartQuantity } = foodsSlice.actions;