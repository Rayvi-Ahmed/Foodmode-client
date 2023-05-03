import { useEffect, useState } from "react";
import ChefsCard from "../ChefsCard/ChefsCard";

const Chefs = () => {

const [chefs,setchefs]=useState([])


useEffect(()=>{
    fetch('http://localhost:5000/chefs')
    .then(res=>res.json())
    .then(data=> setchefs(data))
    console.log(chefs)

},[])

    return (
        <div>

       
            <div className='container mx-auto grid grid-cols md:grid-cols-3 lg:grid-cols-3 gap-8 my-5'>
                            {
                                chefs.map(chef=><ChefsCard
                                key={chef.id}
                                chef={chef}
                                ></ChefsCard>)
                            }

                        </div>
                    
                    </div>
                );
};

export default Chefs;