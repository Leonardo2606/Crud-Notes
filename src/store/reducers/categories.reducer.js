
const categoriesArray = (state = [], action) => {

    switch(action.type){
        case 'category':
            const newCategoriesArray = [...state, action.payload];
            return newCategoriesArray;
        default:
            return state
    }

}

export default categoriesArray