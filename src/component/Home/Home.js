import React from 'react';
import useReviews from '../../hooks/useReviews';
import laptop from '../image/laptop.png';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import CustomLink from '../CustomLink/CustomLink';

const Home = () => {

    const [reviews, setReviews] = useReviews()
    return (
        <div>
            <div className=' mt-20 grid gap-4 grid-cols-1 lg:grid-cols-2 md:grid-cols-2'>
                <div className='ml-6 pl-6'>
                    <p className='text-5xl font-bold py-2'>Ultimate Precision 7760</p>
                    <p className=' text-5xl font-bold pb-6 text-teal-700'> Workstation Coming Soon</p>
                    <p className='text-xl text-gray-600 mb-6'>Precision mobile workstations were made to help you create. With Dell Optimizer for Precision, AI and VR capabilities and up to Intel® Xeon® processors to bring life to the ideas that shape our world.</p>
                    <button className='bg-teal-500 hover:bg-teal-800 text-white w-[150px] h-[45px] text-xl rounded-lg' >Configure Dell</button>
                </div>
                <div>
                    <img src={laptop} alt="" />
                </div>
            </div>
            <h1 className='my-20 text-center text-5xl text-bold'>Custmer Reviews: ({reviews.length})</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-0'>
                {
                   reviews.slice(0, 3).map(review => <div className='rounded-md shadow-md w-[350px] mx-auto px-5 py-8 my-8  ' key={review.id}>
                   <img className='w-20 h-20 rounded-full mx-auto' src={review.picture} alt="" />
                   <p></p>
                   <h1 className='text-xl font-semibold'> {review.name}</h1>
                  <div className='flex justify-start items-center'>
                  <p className='flex justify-center py-2 items-center'>Rating:  {review.ratings} <span className="flex justify-center ms-3 w-30 text-orange-400"><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /> <AiOutlineStar /></span></p>
                  </div>
                   <p>comments: {review.about.slice(0, 80)}</p>
               </div>)
                }
            </div>
           <div className='flex justify-center my-10'>
           <CustomLink to='/reviews'>
                <button className='w-[220px] bg-teal-500 hover:bg-teal-700 text-white text-xl rounded-lg py-2 px-8 text-center'>See All Review</button>
            </CustomLink>
           </div>
        </div>
    );
};

export default Home;