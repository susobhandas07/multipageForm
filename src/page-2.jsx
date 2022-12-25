import React from 'react'
import iconArcade from "./assets/images/icon-arcade.svg"
import iconAdvanced from './assets/images/icon-advanced.svg'
import iconPro from './assets/images/icon-pro.svg'
export default function main(props) {
    return (
        <div className='form-body' id='page2-body'>
            <fieldset>
                <h2>Select Your Plan</h2>
                <p className='description'>You have the option of monthly and yearly billing.</p>
                <section className='options' style={{ borderColor: props.selectedPlan === 'Arcade' ? 'var(--h2Color)' : 'var(--Pastel-blue)', backgroundColor: props.selectedPlan === 'Arcade' ? 'var(--Light-blue)' : 'transparent' }}>
                    <input id='arcade' className='plan-select' onChange={props.handeler} checked={props.selectedPlan === 'Arcade'} name='plan' type='radio' value='Arcade'></input>
                    <label htmlFor='arcade' className='radio-label duration'>
                        <img src={iconArcade} alt="arcade icon" className='plan-icon' />
                        <section>
                            <h4 className='noMargin'>Arcade</h4>
                            <p className='duration description'>{props.duration ? "$9/mo" : "$90/yr"}</p>
                            {!props.duration && <span className='offer'>2 months free</span>}
                        </section>
                    </label>
                </section>
                <section className='options' style={{ borderColor: props.selectedPlan === 'Advanced' ? 'var(--h2Color)' : 'var(--Pastel-blue)', backgroundColor: props.selectedPlan === 'Advanced' ? 'var(--Light-blue)' : 'transparent' }}>
                    <input id='advanced' className='plan-select' onChange={props.handeler} checked={props.selectedPlan === 'Advanced'} name='plan' type='radio' value='Advanced'></input>
                    <label htmlFor='advanced' className='radio-label duration'>
                        <img src={iconAdvanced} alt="advanced icon" className='plan-icon' />
                        <section>
                            <h4 className='noMargin'>Advance</h4>
                            <p className='duration description'>{props.duration ? "$12/mo" : "$120/yr"}</p>
                            {!props.duration && <span className='offer'>2 months free</span>}
                        </section>
                    </label>
                </section>
                <section className='options' style={{ borderColor: props.selectedPlan === 'Pro' ? 'var(--h2Color)' : 'var(--Pastel-blue)', backgroundColor: props.selectedPlan === 'Pro' ? 'var(--Light-blue)' : 'transparent' }}>
                    <input id='pro' className='plan-select' onChange={props.handeler} checked={props.selectedPlan === 'Pro'} name='plan' type='radio' value='Pro'></input>
                    <label htmlFor='pro' className='radio-label duration'>
                        <img src={iconPro} alt="pro icon" className='plan-icon' />
                        <section>
                            <h4 className='noMargin'>Pro</h4>
                            <p className='duration description'>{props.duration ? "$15/mo" : "$150/yr"}</p>
                            {!props.duration && <span className='offer'>2 months free</span>}
                        </section>
                    </label>
                </section>
            </fieldset>
            {/* todo: a slider button */}
            <div className='toggle-switch' style={{ marginTop: props.duration ? 1.45 + "rem" : 0 }}>
                <h4 style={{ color: props.duration ? "var(--h2Color)" : "var(--Cool-gray)" }}>Monthly</h4>
                <label htmlFor='yr' id='switch-capsule'>
                    <input type='checkbox' value='yr' id='yr' checked={props.duration} onChange={props.handeler} name='durationIsMonthly' />
                    <span id='slider'></span>
                </label>
                <h4 style={{ color: props.duration ? "var(--Cool-gray)" : "var(--h2Color)" }}>Yearly</h4>
            </div>
        </div >
    );
}