import React, {useEffect, useState} from 'react';
import BookingForm from '../components/BookingForm';
import Bookings from '../components/Bookings';
import { getBookings } from './Service';

const Hotel = ()=>{
    const [bookings, setBookings] = useState([]);

    useEffect(()=>{
        getBookings().then((allBookings)=>{
            setBookings(allBookings)
        })
    }, [])

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