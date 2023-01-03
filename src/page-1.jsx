export default function main(props) {
    return (
        <div className='form-body'>
            <form id='form' onSubmit={() => props.postMethod(prevState => prevState + 1)}>
                <h2>Personal info</h2>
                <p className="description">Please provide your name, email address, and phone number.</p>
                <label htmlFor='name' className='input-label'>Name</label>
                <input className='input-field' type='text' placeholder='e.g. Stephen King' id='name' onChange={props.handeler} name='name' value={props.data.name} required></input>
                <label htmlFor='email' className='input-label'>Email Address</label>
                <input className='input-field' type='email' placeholder='stepenking@lorem.com' id='email' name='email' onChange={props.handeler} value={props.data.email} required></input>
                <label htmlFor='phno' className='input-label'>Phone Number</label>
                <input className='input-field' type='number' placeholder='e.g. +1 234 567 890' id='phno' name='ph_no' onChange={props.handeler} value={props.data.ph_no} required></input>
            </form>
        </div>
    );
}
