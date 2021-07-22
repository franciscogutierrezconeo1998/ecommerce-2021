export const initialState = {
    basket: []
}

export const actionTypes = {
    ADD_TO_BASKET: "ADD_TO_BASKET",
    REMOVE_ITEM_BASKET: "REMOVE_ITEM_BASKET"
}

const reducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case "ADD_TO_BASKET" :
            if(state.basket.length == 0){
                action.item.index = 1;
            } else {
                action.item.index=state.basket[state.basket.length-1].index+1;
            }
        return {
            ...state,
            basket: [...state.basket, action.item] 
        }
        case "REMOVE_ITEM_BASKET":
            console.log('Este es el array de basket',state.basket);
            const index = state.basket.findIndex(item => item.index == action.index);
            console.log('Este es el index',index);
            let newBasket = [...state.basket];
            if(index!=-1){
                newBasket.splice(index, 1)
            } else {
                console.log('No se pudo eliminar el productor')
            }
            return {
                ...state,
                basket: newBasket,
            };
        default: return state;
    }
}

export default reducer;