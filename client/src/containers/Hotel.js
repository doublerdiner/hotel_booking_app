import React, {useState} from 'react';
import BookingForm from '../components/BookingForm';
import Bookings from '../components/Bookings';

const Hotel = ()=>{
    return(
        <>
            <h1>Hotel</h1>
            <BookingForm/>
            <Bookings/>
        </>

    )
}

export default Hotel;