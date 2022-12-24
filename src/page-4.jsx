import React from 'react'
export default function main(props) {
    // let [price,setPrice] = React.useState(0);
    let price = 0;
    if (props.data.plan === 'Arcade') {
        price = 9;
    } else if (props.data.plan === 'Advanced') {
        price = 12;
    } else if (props.data.plan === 'Pro') {
        price = 15;
    } else {
        price = 0;
    }
    let addon = 0;
    if (props.data.service) {
        addon += 1;
    }
    if (props.data.storage) {
        addon += 2;
    }
    if (props.data.profile) {
        addon += 2;
    }
    let total = (price + addon) * (props.data.durationIsMonthly ? 1 : 10);
    return (
        <div className='form-body'>
            <fieldset>
                <h2>Finishing up</h2>
                <p className="description">Double check everthing looks ok before confirming.</p>
                <table >
                    <tbody>
                        <tr id='tr-1'>
                            <td className='name plan'><h4 className='duration'>{props.data.plan}</h4><span className='duration'>({props.data.durationIsMonthly ? "Monthly" : "Yearly"})</span></td>
                            <td className='price primary'><p className="duration ">${price}{props.data.durationIsMonthly ? "/mo" : "0/yr"}</p></td>
                        </tr>
                        <tr>< td colSpan={2}><hr /></td></tr>
                        {props.data.service && <tr>
                            <td className='name description'><p>Online services</p></td>
                            <td className='price '><p>{props.data.durationIsMonthly ? "+$1/mo" : "+$10/yr"}</p></td>
                        </tr>}
                        {props.data.storage && <tr>
                            <td className='name description'><p>Large storage</p></td>
                            <td className='price '><p>{props.data.durationIsMonthly ? "+$2/mo" : "+$20/yr"}</p></td>
                        </tr>}
                        {props.data.profile && <tr>
                            <td className='name description'><p>Customizable profile</p></td>
                            <td className='price '><p>{props.data.durationIsMonthly ? "+$2/mo" : "+$20/yr"}</p></td>
                        </tr>}
                    </tbody>
                </table>
                <section id='result-p'>
                    <p id='result' className='description'><strong>Total </strong> ({props.data.durationIsMonthly ? "per month" : "per year"})<span id='total'>${total}{props.data.durationIsMonthly ? "/mo" : "/yr"}</span></p>
                </section>
            </fieldset>
        </div>
    );
}