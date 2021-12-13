
const categoriesArray = (state = [], action) => {

    switch(action.type){
        case 'category':
            const newCategoriesArray = [...state, action.payload];
            return newCategoriesArray;
        case 'deleteCategory':
            const newDeleteCategoriesArray = [...state];
            newDeleteCategoriesArray.splice(newDeleteCategoriesArray.length-1, 1);
            return newDeleteCategoriesArray;
        default:
            return state
    }

}

export default categoriesArray