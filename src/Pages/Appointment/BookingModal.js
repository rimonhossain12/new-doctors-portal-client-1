import React from 'react';
import format from 'date-fns/format';

const BookingModal = ({ treatment, date }) => {
    const { name, slots } = treatment;
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">{name}</h3>
                    <form className='grid grid-cols-1 gap-3 justify-items-center mt-4'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                    {/* <div className="modal-action">
                        <label htmlFor="booking-modal" className="btn">Yay!</label>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default BookingModal;