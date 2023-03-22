import React from 'react';

const Booking = ({booking, deleteBooking, changeChecked})=>{
    
    const onDeleteClick = ()=>{
        return null;
    }

    const onChangeClick = ()=>{
        return null;
    }

    return(
        <>
            <tr>
                <td>{booking.name}</td>
                <td>{booking.email}</td>
                <td>{booking.date}</td>
                <td>{booking.checkedIn.toString()}</td>
                <td><button onClick={onDeleteClick}>Delete</button></td>
                <td><button onClick={onChangeClick}>Change</button></td>
            </tr>
        </>
    )
}

export default Booking;