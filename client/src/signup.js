import React from 'react'

function signup() {
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
                <div className='bg-white p-3 rounded w-25' >
                    <form action=''>
                        <div className='mb-3'>
                            <label htmlFor><strong>Email</strong></label>
                            <input type='email' placeholder='Enter Email' className='form-control rounded-0'></input>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor><strong>Password</strong></label>
                            <input type='password' placeholder='Enter Password' className='form-control rounded-0'></input>
                        </div>
                        <button className='btn btn-success w-100 rounded-0'><strong>Login</strong></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default signup
