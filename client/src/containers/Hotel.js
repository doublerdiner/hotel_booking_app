import React, {useEffect, useState} from 'react';
import BookingForm from '../components/BookingForm';
import Bookings from '../components/Bookings';
import { deleteBooking, getBookings, postBooking, putBooking } from './Service';

const Hotel = ()=>{
    const [bookings, setBookings] = useState([]);

    useEffect(()=>{
        getBookings().then((allBookings)=>{
            setBookings(allBookings)
        })
    }, [])

    const addBooking = (booking)=>{
        const temp = [...bookings]
        postBooking(booking).then((data)=>{
        temp.push(data)
        setBookings(temp)
    })
    }
    
    const removeBooking = (booking)=>{
        const temp = [...bookings]
        const index = temp.indexOf(booking)
        temp.splice(index, 1);
        deleteBooking(booking._id).then(
            setBookings(temp)
        );
    };

    const changeChecked = (booking)=>{
        const temp = [...bookings]
        const index = temp.indexOf(booking)
        const id = booking._id
        temp[index].checkedIn = !booking.checkedIn
        const payload = {
            name: temp[index].name,
            email: temp[index].email,
            date: temp[index].date,
            checkedIn: temp[index].checkedIn
        }
        putBooking(payload, id).then(
            setBookings(temp)
        )

    }




    return(
        <>
            <h1>Welcome to the Great Northern Hotel</h1>
            <hr/>
            <div className="main">
                <BookingForm addBooking={addBooking}/>
                <Bookings bookings={bookings} removeBooking={removeBooking} changeChecked={changeChecked}/>
            </div>
        </>

    )
}

export default Hotel;