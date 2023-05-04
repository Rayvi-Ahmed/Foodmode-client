import React from 'react';
import EachReacipe from '../EachRecipe/EachReacipe';

const Recipe = ({recipes}) => {

    const {name,picture,recipe,bio,likes,ratings,num_of_recipes,years_of_experience}=recipes
    console.log(recipe)
    return (
        <div className='container mx-auto p-5'>
            <div className="bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
    <img src={picture} className="max-w-sm rounded-lg shadow-2xl" />
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