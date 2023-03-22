import React from 'react';

const Booking = ({booking, removeBooking, changeChecked})=>{
    
    const onDeleteClick = ()=>{
        removeBooking(booking);
    }

    const onChangeClick = ()=>{
        changeChecked(booking);
    }

    return(
        <>
            <tr>
                <td>{booking.name}</td>
                <td>{booking.email}</td>
                <td>{booking.date}</td>
                {booking.checkedIn ? <td><i className="fa fa-check-circle-o"></i></td> : <td><i className="fa fa-remove"></i></td>}
                <td><button onClick={onDeleteClick} className="fa fa-trash-o"></button></td>
                <td><button onClick={onChangeClick}>{booking.checkedIn ? "Check Out" : "Check In"}</button></td>
            </tr>
        </>
    )
}

export default Booking;