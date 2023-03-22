import React from 'react';
import Booking from './Booking';

const Bookings = ({bookings, deleteBooking, changeChecked})=>{
    const bookingList = bookings.map((booking)=>{
        return(
            <Booking booking={booking} key={booking._id} deleteBooking={deleteBooking} changeChecked={changeChecked}/>
        )
    })


    return(
        <>
            <h2>Bookings</h2>
            <table>
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
                    <Booking/>
                </tbody>
            </table>
        </>
    )
}

export default Bookings;