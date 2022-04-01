import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CategoriesSection, CategoriesList, CategoriesInput, CategoryItem } from '../styled';
import { newCategory, deleteCategory, deleteCategoryClick } from '../store/reducers/notesReducer';


function Categories() {

    const dispatch = useDispatch();
    const categoryArray = useSelector(state => state.notes.categories);


    return (

        <CategoriesSection>
            <CategoriesList>
                {categoryArray.map((category, index)=>{
                    return  <CategoryItem 
                                key={index}
                                onClick={()=>dispatch(deleteCategoryClick(index))}
                            >
                                    {category}
                            </CategoryItem>
                })}
            </CategoriesList>
            <CategoriesInput onKeyDown={event=>{
                if(event.key==='Enter'){
                    dispatch(newCategory(event.target.value));
                    event.target.value = '';
                } else if(event.key==='Backspace' && event.target.value.length === 0){
                    dispatch(deleteCategory());
                }}}
                type='text' 
                placeholder='Categorias'
            />
        </CategoriesSection>

    )

}

export default Categories;