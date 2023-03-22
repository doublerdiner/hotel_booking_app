import React, { useState } from 'react';

const BookingForm = ({addBooking})=>{
    const [formData, setFormData] = useState({})

    const onChange = ()=>{
        return null;
    }

    const onCheckedChange = ()=>{
        return null;
    }

    const onSubmit = (e)=>{
        e.preventDefault()
        return null
    }

    

    return(
        <>
            <div className='booking-form'>
                <h2>Create New Booking</h2>
                <form onSubmit={onSubmit}>
                    <label htmlFor='name'>Name:</label>
                    <input onChange={onChange} type="text" id="name"/>
                    <label htmlFor='email'>Email:</label>
                    <input onChange={onChange} type="text" id="email"/>
                    <label htmlFor='date'>Date:</label>
                    <input onChange={onChange} type="date" id="date"/>
                    <label htmlFor='checkedIn'>True:</label>
                    <input onChange={onCheckedChange} type="radio" value="true" name="checked" id="checkedIn"/>
                    <label htmlFor='checkedOut'>False:</label>
                    <input onChange={onCheckedChange} type="radio" value="false" name="checked" id="checkedOut"/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default BookingForm;