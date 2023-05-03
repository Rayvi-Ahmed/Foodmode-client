import React from 'react';
import pizza from './../assets/pizza.jpg'
import pizza1 from './../assets/pizza-1.jpg'
import chicken from './../assets/chicken.jpg'


const Carusel = () => {
    return (
    <div>
        <div className='m-7 container mx-auto text-center'>
            <h1 className='font-blod text-red-400 text-4xl'>Most favoruite recipes</h1>
            <p className='font-semibold disable'>World best racipies are maded from italy! A best chef can the provide deliciaus & helthy food to eat frquently!  </p>
            <p></p>
        </div>
         <div className='container mx-auto mb-8 flex items-center justify-center gap-5'>
   <div>
   <div className="h-96 carousel carousel-vertical rounded-box">
  <div className="carousel-item h-full">
    <img src={pizza} />
  </div> 
  <div className="carousel-item h-full">
    <img src={pizza1} />
  </div> 
  <div className="carousel-item h-full">
    <img src={chicken} />
  </div> 
 

</div>
   </div>

   <div>
   <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
    Focus me to see content
  </div>
  <div className="collapse-content">
    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
  </div>
</div>
   </div>
     </div>
    </div>
    );
};

export default Carusel;