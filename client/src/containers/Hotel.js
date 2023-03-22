import React, {useState} from 'react';
import BookingForm from '../components/BookingForm';
import Bookings from '../components/Bookings';

const Hotel = ()=>{
    const [bookings, setBookings] = useState([]);

    const addBooking = ()=>{
        return null
    }
    
    const deleteBooking = ()=>{
        return null
    }

    const changeChecked = ()=>{
        return null
    }




    return(
        <>
            <h1>Welcome to the Great Northern Hotel</h1>
            <hr/>
            <BookingForm addBooking={addBooking}/>
            <Bookings bookings={bookings} deleteBooking={deleteBooking} changeChecked={changeChecked}/>
        </>

    )
}

export default Hotel;