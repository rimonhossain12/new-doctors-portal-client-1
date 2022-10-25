import React from 'react';

const Review = ({ review }) => {

    return (
        <div className="card lg:max-w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus molestiae
                    alias consectetur est voluptatum dolores!</p>
                <div className="flex items-center">
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-5 ">
                            <img src={review.img} className="w-24 h-24" alt='not found' />
                        </div>
                        <div>
                            <h4 className='txt-xl'>{review.name}</h4>
                            <p>{review.location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;