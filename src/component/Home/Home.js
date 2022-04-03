import React from 'react';
import laptop from '../image/laptop.png'
const Home = () => {

    return (
        <div className=' mt-20 grid gap-4 grid-cols-2'>
            <div className='ml-6 pl-6'>
                <p className='text-5xl font-bold py-2'>Ultimate Precision 7760</p>
                <p className=' text-5xl font-bold pb-6 text-teal-700'> Workstation Coming Soon</p>
                <p className='text-xl text-gray-600 mb-6'>Precision mobile workstations were made to help you create. With Dell Optimizer for Precision, AI and VR capabilities and up to Intel® Xeon® processors to bring life to the ideas that shape our world.</p>
                <button className='bg-teal-600 hover:bg-teal-800 text-white w-[150px] h-[45px] text-xl rounded-lg' >Configure Dell</button>
            </div>
            <div>
                <img src={laptop} alt="" />
            </div>
        </div>
    );
};

export default Home;