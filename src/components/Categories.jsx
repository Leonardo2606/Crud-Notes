import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CategoriesSection, CategoriesList, CategoriesInput } from '../styled';
import {newCategory} from '../store/actions/notes_categories.actions';


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
            <CategoriesInput onKeyUp={event=>{
                if(event.key==='Enter'){
                    dispatch(newCategory(event.target.value));
                    event.target.value = '';
                }}}
                type='text' 
                placeholder='Categorias'
            />
        </CategoriesSection>

    )

}

export default Categories;