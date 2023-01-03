export default function main(props) {
    return (
        <div className='form-body'>
            <form id='form' className='noMargin' onSubmit={() => props.postMethod(prevState => prevState + 1)}>
                <h2>Pic add-ons</h2>
                <p className="description">Add-ons help improove your gaming experience.</p>

                <section className="add-on options" style={{ borderColor: props.data.service ? 'var(--h2Color)' : 'var(--Pastel-blue)', backgroundColor: props.data.service ? 'var(--Light-blue)' : 'transparent' }}>
                    <input className='checkboxes' type='checkbox' value='online service' id='service-add-on' name='service' checked={props.data.service} onChange={props.handeler}></input>
                    <label htmlFor='service-add-on' className='checkbox-label'>
                        <h4 className='noMargin'>Online service</h4>
                        <p className='description duration' >Access to multiplayer games.</p>
                    </label>
                    <span className='offer'>{props.data.durationIsMonthly ? "+$1/mo" : "+$10/yr"}</span>
                </section>
                <section className="add-on options" style={{ borderColor: props.data.storage ? 'var(--h2Color)' : 'var(--Pastel-blue)', backgroundColor: props.data.storage ? 'var(--Light-blue)' : 'transparent' }}>
                    <input className='checkboxes' type='checkbox' value='larger storage' id='storage-add-on' name='storage' checked={props.data.storage} onChange={props.handeler}></input>
                    <label htmlFor='storage-add-on' className='checkbox-label'>
                        <h4 className='noMargin'>Larger storage</h4>
                        <p className='description duration' >Extra 1TB of cloud save</p>
                    </label>
                    <span className='offer'>{props.data.durationIsMonthly ? "+$2/mo" : "+$20/yr"}</span>
                </section>
                <section className="add-on options" style={{ borderColor: props.data.profile ? 'var(--h2Color)' : 'var(--Pastel-blue)', backgroundColor: props.data.profile ? 'var(--Light-blue)' : 'transparent' }}>
                    <input className='checkboxes' type='checkbox' value='customizable profile' id='profile-add-on' name='profile' checked={props.data.profile} onChange={props.handeler}></input>
                    <label htmlFor='profile-add-on' className='checkbox-label'>
                        <h4 className='noMargin'>Customizable profile</h4>
                        <p className='description duration' >Custom theme on your profile</p>
                    </label>
                    <span className='offer'>{props.data.durationIsMonthly ? "+$2/mo" : "+$20/yr"}</span>
                </section>
            </form>
        </div>
    );
}