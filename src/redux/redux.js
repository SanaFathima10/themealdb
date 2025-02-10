import { configureStore, createSlice } from "@reduxjs/toolkit";


let mealsSlice = createSlice({
    name: 'meals',
    initialState: {
        value: []
    },
    reducers: {

        addToList: (state, actions) => {

            state.value = [...actions.payload]

        },
        increase: (state, actions) => {
            state.value[actions.payload].count++
            state.value[actions.payload].cart = true

        },
        decrease: (state, actions) => {
            state.value[actions.payload].count--

            if (state.value[actions.payload].count == 0) {
                state.value[actions.payload].cart = false
            }

        }

    }
})



// let cartSlice = createSlice({
//     name: 'cart',
//     initialState: {
//         value: []
//     },
//     reducers: {

//         addToCart: (state, actions) => {

//             state.value = [...state.value, actions.payload]

//         },
//         increase: (state, actions) => {
//             state.value[actions.payload].count++

//         },
//         decrease: (state, actions) => {
//             state.value[actions.payload].count--

//         }

//     }
// })
// Actions for increasing and decreasing count



export let { addToList, increase, decrease } = mealsSlice.actions
export let store = configureStore({
    reducer: {
        meals: mealsSlice.reducer,
    }
})
