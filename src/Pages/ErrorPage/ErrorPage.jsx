import { Link } from 'react-router-dom';
import error from '../../assets/Frame.png';

const ErrorPage = () => {
    return (
        <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
            <img src={error} alt="" srcSet="" />
        <div className='max-w-md text-center'>
          <p className='text-2xl font-semibold md:text-3xl mb-8'>
            Sorry, we couldn not find this page.
          </p>
          <Link
            to='/'
            className='px-8 py-3 font-semibold rounded bg-teal-200 text-gray-900'
          >
            Back to homepage
          </Link>
        </div>
      </div>
    );
};

export default ErrorPage;