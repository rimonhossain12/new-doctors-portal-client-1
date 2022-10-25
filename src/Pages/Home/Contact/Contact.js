import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../Shared/PrimaryButton';


const Contact = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className="w-full">
            <div className="py-10 text-white text-center mb-5">
                <h2 className='py-5 text-5lx uppercase'>Stay Connected with Us</h2>
                <form>
                    <input type="text" placeholder="Type here" class="mb-5 input input-bordered input-primary w-full max-w-xs" />
                    <br />
                    <input type="text" placeholder="Type here" class="mb-5 input input-bordered input-primary w-full max-w-xs" />
                    <br />
                    <input type="text" placeholder="Type here" class="mb-5 input input-bordered input-primary w-full max-w-xs" />
                    <br />
                    <textarea class="textarea textarea-bordered w-80 h-40 text-center" placeholder="Write Your Comments"></textarea>
                </form>
                <div>
                    <PrimaryButton>Submit</PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default Contact;