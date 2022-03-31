import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CategoriesSection, CategoriesList, CategoriesInput } from '../styled';
import { newCategory, deleteCategory } from '../store/actions/notes_categories.actions';


function Categories() {

    const dispatch = useDispatch();
    const categoryArray = useSelector(state => state.category);


    return (

        <CategoriesSection>
            <CategoriesList>
                {categoryArray.map(category=>{
                    return <li>{category}</li>
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