import pizza from './../assets/pizza.jpg'
import pizza1 from './../assets/pizza-1.jpg'
import chicken from './../assets/chicken.jpg'
import { Link } from 'react-router-dom';


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

   <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Yummy Italian Food!</h1>
      <p className="py-6">You can take huge recipe idea from each wporld clas chef dishes ,if you interested the go there.</p>
      <Link to={'/blog'}><button className="btn btn-primary">Viwe Racipie</button></Link>
    </div>
  </div>
</div>
     </div>
    </div>
    );
};

export default Carusel;