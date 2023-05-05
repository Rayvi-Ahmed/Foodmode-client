import React, { useEffect, useState } from 'react';
import EachReacipe from '../EachRecipe/EachReacipe';
import LazyLoad from 'react-lazy-load';

const Recipe = ({recipes}) => {
     const {name,picture,bio,likes,ratings,num_of_recipes,years_of_experience}=recipes
  const [recipe,setrecipe]=useState([])

  useEffect(()=>{
    fetch('https://server-food-leader-jy08a8pb5-rayvi-ahmed.vercel.app/recipe')
    .then(res=>res.json())
    .then(data=>setrecipe(data))
  },[])

 
    return (
        <div className='container mx-auto p-5'>
            <div className="bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
 <LazyLoad offset={700} threshold={0.95}>
 <img src={picture} className="max-w-sm rounded-lg shadow-2xl" />
 </LazyLoad>
    <div>
      <h1 className="text-3xl font-bold">{name}</h1>
      <p className="py-6"><span className='font-bold'>Chef Bio:</span> {bio}.</p>
      <h6 className='text-bg-blue-300 font-bold text-l'>Likes : {likes}</h6>
      <h6 className='text-bg-blue-300 font-bold text-l'>Total experience :{years_of_experience} years</h6>
      <h6 className='text-bg-blue-300 font-bold text-l'>Total Recipes :{num_of_recipes} Items</h6>
      <h6 className='text-bg-blue-300 font-bold text-l'>Total Recipes :{ratings} star</h6>
    
    </div>
    
  </div>

</div>
<div className='my-5 flex justify-center items-center gap-6'>
{
  recipe.map(rcp=><EachReacipe
  key={rcp.id}
  rcp={rcp}
  >
  </EachReacipe>)
}

</div>
        </div>
    );
};

export default Recipe;