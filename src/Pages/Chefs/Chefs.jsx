import { useEffect, useState } from "react";
import ChefsCard from "../ChefsCard/ChefsCard";

const Chefs = () => {

const [chefs,setchefs]=useState([])


useEffect(()=>{
    fetch('http://localhost:5000/chefs')
    .then(res=>res.json())
    .then(data=> setchefs(data))

},[])
    return (
        <div className='my-5 container mx-auto'>

            {
                chefs.map(chef=><ChefsCard
                key={chef.id}
                chef={chef}
                ></ChefsCard>)
            }

        
        </div>
    );
};

export default Chefs;