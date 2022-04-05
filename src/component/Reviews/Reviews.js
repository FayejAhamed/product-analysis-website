import React from 'react';
import useReviews from '../../hooks/useReviews';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <h2 className='text-4xl text-teal-600 font-semibold py-4 mt-3'>All of Our Customer Reviews</h2>
             <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-0'>
                {
                   reviews.map(review => <div className='rounded-md shadow-lg w-[350px] mx-auto px-5 py-8 my-8  ' key={review.id}>
                   <img className='w-20 h-20 rounded-full mx-auto' src={review.picture} alt="" />
                   <p></p>
                   <h1 className='text-xl font-semibold'> {review.name}</h1>
                  <div className='flex justify-start items-center my-2'>
                  <p className='flex justify-center items-center'>Rating:  {review.ratings} <span className="flex justify-center ms-3 w-30 text-orange-400"><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /> <AiOutlineStar /></span></p>
                  </div>
                   <p>comments: {review.about.slice(0, 80)}</p>
               </div>)
                }
            </div>
        </div>
    );
};

export default Reviews;