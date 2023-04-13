import React from 'react'

const Contact = (props) => {
    return (
        <div className='min-h-screen  flex flex-col items-center justify-center'>
            <h1 className={`${props.title} text-6xl font-black `}>Contact me</h1>
            <form action="https://portfolio-api12.herokuapp.com/api/contact/" method='post' target="_blank" name='EmailForm' className={`${props.sections} font-bold text-3xl max-w-full px-6`}>
                Name:<br></br>
                <input type="text" size='40' className={`rounded-lg mt-2 max-w-full`} name='name'></input><br></br><br></br>
                Email:<br></br>
                <input type="text" size='40' className={`rounded-lg  mt-2 max-w-full`} name='email'></input>
                <br></br><br></br>
                Message:<br></br> <textarea className={`rounded-lg  mt-2 max-w-full`} name='message' rows='6' cols='40'>


                </textarea> <br></br>
                <div className="flex justify-center mt-4" >


                    <input type='submit' className={`text-light-blue text-4xl font-black bg-accentd rounded-lg px-4 ${props.button} `} value='Submit'></input>

                </div>
            </form>
        </div>
    )
}

export default Contact