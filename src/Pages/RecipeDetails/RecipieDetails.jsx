/* eslint-disable no-unused-vars */
import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';

const RecipieDetails = () => {
    const [recipes,setRecipe]=useState([])
    const {id}=useParams()

    useEffect(()=>{
        fetch(`http://localhost:5000/chefs/${id}`)
        .then(res=>res.json())
        .then(data=>setRecipe(data))
    },[])
    return (
        <div>
         {
            <Recipe
            key={recipes.id}
            recipe={recipes}
            ></Recipe>
      
                }
                </div>
    );
};

export default RecipieDetails;