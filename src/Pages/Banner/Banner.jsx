
import bannerImg from '../../assets/banner-img.jpeg';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img className='w-3/4' src={bannerImg} alt=''/>
    <div>
      <h1 className="text-5xl font-bold">Welcome to FoodMood!</h1>
      <p className="py-6">This is the italian biggest food recipe website, here you can know about many of world class italian chefs information with many of delecius food EachReacipe.</p>
      <Link to='/about' className="btn btn-primary">About Us</Link>
    </div>
  </div>
</div>
    );
};

export default Banner;