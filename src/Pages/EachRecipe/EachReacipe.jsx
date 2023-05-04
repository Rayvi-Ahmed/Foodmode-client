import React from 'react';

const EachReacipe = ({rcp}) => {
    const {recipe_name,ingradient,coocking_method,recipe_rating}=rcp
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {recipe_name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{coocking_method}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default EachReacipe;