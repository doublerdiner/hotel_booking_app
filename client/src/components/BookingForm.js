import React, { useState } from 'react';

const BookingForm = ({addBooking})=>{
    const [formData, setFormData] = useState({})

    const onChange = (e)=>{
        formData[e.target.id] = e.target.value;
        setFormData(formData);
    }

    const onCheckedChange = (e)=>{
        formData.checkedIn = Boolean(e.target.value)
        setFormData(formData);
    }

    const onSubmit = (e)=>{
        e.preventDefault()
        addBooking(formData)
        setFormData({})
        e.target.reset()
    }


    

    return(
        <>
            <div className='booking-form'>
                <h2>Create New Booking</h2>
                <form onSubmit={onSubmit}>
                    <div className='line'>
                        <label className='form-line' htmlFor='name'>Name:</label>
                        <input onChange={onChange} type="text" id="name"/>
                    </div>
                    <div className='line'>
                        <label className='form-line' htmlFor='email'>Email:</label>
                        <input onChange={onChange} type="text" id="email"/>
                    </div>
                    <div className='line'>
                        <label className='form-line' htmlFor='date'>Date:</label>
                        <input onChange={onChange} type="date" id="date" required/>
                    </div>
                    <div className='line'>
                        <label className='form-line'>Checked In?</label>
                        <label htmlFor='checkedIn'>True:</label>
                        <input onChange={onCheckedChange} type="radio" value="true" name="checked" id="checkedIn" required/>
                        <label htmlFor='checkedOut'>False:</label>
                        <input onChange={onCheckedChange} type="radio" value={undefined} name="checked" id="checkedOut"/>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default BookingForm;