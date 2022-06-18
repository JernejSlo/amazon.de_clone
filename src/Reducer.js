export const initialState = {
    basket: [],
    user: null,
}


export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price2 + amount, 0);
export const getBasketLegth = (basket) =>
    basket?.reduce((amount, item) => item.quantity3 + amount, 0);

const reducer = (state, action) => {

    switch (action.type){
        case 'SET_USER':
            return {
              ...state,
                user: action.user,
            };
        case 'ADD_TO_BASKET':
            const index2 = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id2
            );


            console.log("this is the index",index2)
            let newBasket1 = [...state.basket];
            if (action.quantity2 >= 1){
                if(index2 > -1){
                    newBasket1.splice(index2, 1);
                }

                console.log(action.item.quantity)
                console.log(action.item)
                return {
                    ...state,
                    basket: [...newBasket1,action.item]
                }
            }else {
                return {
                    ...state,
                    basket: [...state.basket, action.item],
                };
            }
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];

            if (index >= 0) {
                console.log("this is the index",index)
                newBasket.splice(index, 1);

            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in basket!`
                )
            }

            return {
                ...state,
                basket: newBasket
            }

        case 'INCREASE_QUANTITY':

            return {
                ...state,
                basket: [...state.basket, state.item.quantity]
            };
        case 'DECREASE_QUANTITY'   :
            return {
                ...state,
                basket: [...state.basket, state.item.quantity]
            };

        default:
            return state;
    }
};

export default reducer;
