import React from 'react';
import Booking from './Booking';

const Bookings = ({bookings, removeBooking, changeChecked})=>{
    const bookingList = bookings.map((booking)=>{
        return(
            <Booking booking={booking} key={booking._id} removeBooking={removeBooking} changeChecked={changeChecked}/>
        )
    })


    return(
        <>  
            <div className="bookings">
                <h2>Bookings</h2>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Checked In?</th>
                            <th>Delete</th>
                            <th>Check In/Out</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookingList}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Bookings;