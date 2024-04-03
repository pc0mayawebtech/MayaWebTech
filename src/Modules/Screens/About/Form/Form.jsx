import './Form.css';

const Form = () => {
    return (
        <>
            <form action="./action.php" method='post' className='mt-5 w-75 m-auto'>
                <div className='FormInput'>
                    <input type="text" name="Fullname" id="FullName" placeholder='Full Name*' />
                </div>
                <div className='FormInput'>
                    <input type="email" name="Email" id="Email" placeholder='Email' />
                </div>
                <div className='FormInput'>
                    <input type="text" name="text" id="text" placeholder='Select Country' />
                </div>
                <div className='FormInput'>
                    <input type="tel" name="number" maxLength={10} id="number" placeholder='Phone (Optional)' />
                </div>
                <div className='FormInput'>
                    <textarea name="Message" id="Message" cols="30" rows="3" placeholder='Tell us about your developemnt needs.'></textarea>
                </div>
                <div className='FormInput'>
                    <button className='Submitbtn'>Submit</button>
                </div>
            </form>
        </>
    )
}

export default Form;