import { Link } from "react-router-dom";


const ChefsCard = (props) => {
    console.log(props?.chef)
    const {id, name, picture,bio,years_of_experience,num_of_recipes,likes,ratings}=props.chef
    return (
                <div>
                    <div className="card bg-base-100 shadow-md">
                
                   <figure><img src={picture} alt="Shoes" /></figure>
              
                    <div>
            <div className="card-body text-start">
            <h2 className="card-title">{name}</h2>
            <p>Experiance :{years_of_experience} years</p>
            <div className="flex items-center justify-center">
            <p className="text-blue-500 ">Likes :{likes}</p>
            <p>Total Racipe {num_of_recipes}+ </p>
            </div>
            <div className="card-actions justify-end">
   <Link to={`${id}`}><button className="btn btn-primary">Viwe Racipie</button></Link>
            </div>
            </div>
        </div>
        </div>
                </div>
            );
};

export default ChefsCard; 