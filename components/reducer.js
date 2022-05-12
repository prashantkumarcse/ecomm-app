export const initialState = {
    basket : [],
    favs : []
    
};

export const getBasketTotal = (basket) => 
 basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case 'ADD_TO_BASKET':
        return {
            ...state,
            basket: [...state.basket, action.item],
        };
        case 'ADD_TO_FAV':
        return {
            ...state,
            favs : [...state.favs, action.item],
        };
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex((basketItem) => basketItem.id == action.id);
            let newBasket = [...state.basket];

            if(index >=0){
                newBasket.splice(index, 1);
            } else {
                console.warn(`Can't remove product (id: ${action.id}) as it's not in basket.`)
            }
            return{
                ...state, basket: newBasket
            };
        case 'REMOVE_FROM_FAV':
            const ind = state.favs.findIndex((basketItem) => basketItem.id === action.id);
            let newFavs = [...state.favs];
    
            if(ind >=0){
                newFavs.splice(ind, 1);
            } else {
                console.warn(`Can't remove product (id: ${action.id}) as it's not in Favourites.`)
            }
            return{
                ...state, favs: newFavs
            };
        
    }
};


export default reducer