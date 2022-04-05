import React from 'react';

const Blogs = () => {
    return (
        <div className='px-10'>
            <div className='my-10'>
                <h1 className='text-6xl'> What is context API?</h1>
                <p className='text-xl py-6'> The Context API is a component structure provided by the React framework, which enables us to share specific forms of data across all levels of the application. It's aimed at solving the problem of prop drilling.

                    “Prop drilling (also called “threading”) refers to the process you have to go through to get data to parts of the React Component tree." -Kent C. Dodds.

                    Before the Context API, we could use a module to solve this, which led to the increasing popularity of state management libraries like Redux. Libraries like Redux allows you to get data from the store easily, anywhere in the tree. However, let's focus on the Context API.</p>
            </div>
            <div className='my-10'>
                <h1 className='text-6xl'>What is Symantic Tag?</h1>
                <p className='text-xl py-6'>In JavaScript, consider a function that takes a string parameter, and returns an "(li)" tag element with that string as its textContent. <br /> In CSS, consider styling a list with li elements representing different types of fruits <br /> A semantic element is an element of code that uses words to clearly represent what that element contains, in human language. For practical purposes, many of those researching semantic elements are looking at English language words used for the purposes of semantic labeling. </p>
            </div>
            <div className='my-10'>
                <h1 className='text-6xl'>What is inline block and block element? </h1>
                <p className='text-xl py-6'>display: inline-block brought a new way to create side by side boxes that collapse and wrap properly depending on the available space in the containing element. It makes layouts that were previously accomplished with floats easier to create. No need to clear floats anymore.

                    Compared to display: inline, the major difference is that inline-block allows to set a width and height on the element. Also, with display: inline, top and bottom margins and paddings are not respected, and with display: inline-block they are.

                    Now, the difference between display: inline-block and display: block is that, with display: block, a line break happens after the element, so a block element doesn't sit next to other elements.</p>
            </div>

        </div>
    );
};

export default Blogs;