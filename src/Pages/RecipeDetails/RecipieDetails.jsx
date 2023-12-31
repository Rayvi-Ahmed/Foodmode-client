/* eslint-disable no-unused-vars */
import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';

const RecipieDetails = () => {
    const [recipes,setRecipe]=useState({})
    const {id}=useParams()

    useEffect(()=>{
        fetch(`https://server-food-leader-jy08a8pb5-rayvi-ahmed.vercel.app/chefs/${id}`)
        .then(res=>res.json())
        .then(data=>setRecipe(data))
    },[id])
    return (
        <div>
         {
            <Recipe
            key={recipes.id}
            recipes={recipes}
            ></Recipe>
                }
                </div>
    );
};

export default RecipieDetails;