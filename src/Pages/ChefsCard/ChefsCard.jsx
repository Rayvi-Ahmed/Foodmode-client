
const ChefsCard = (props) => {
    console.log(props?.chef)
    const {id, name, picture,bio,years_of_experience,num_of_recipes,likes,ratings}=props.chef
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={picture} alt="Shoes" /></figure>
  <div>
    <h2 className="card-title">{name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ChefsCard;