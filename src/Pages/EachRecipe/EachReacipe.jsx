import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const EachReacipe = ({rcp}) => {
    const [disbale,setdisable]=useState(false)

    const handleFabBtn=()=>{
        setdisable(true)
        toast.success('My favorite recipe')
    }
    const {recipe_name,ingradient,coocking_method,recipe_rating}=rcp
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
             
  <div className="card-body">
    <h2 className="card-title">
      {recipe_name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p><span className='text-blue-500 font-semibold'>Coocking Mathod :</span> {coocking_method}</p>
    <p><span className='text-blue-500 font-semibold'>Ingradient :</span> {ingradient.map(ind=><li>{ind}</li>)}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Rating :{recipe_rating}</div>
      <button disabled={disbale} onClick={handleFabBtn} className="btn btn-primary">favorite</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default EachReacipe;