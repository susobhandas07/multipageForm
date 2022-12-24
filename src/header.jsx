export default function main(props) {
    return (
        <div className='header'>
            <header>
                <fieldset>
                    <section className='page-index'>
                        <input name='current page' checked={props.pageNo === 1} type='radio' value='1' id='page-1' onChange={() => props.handeler(1)}></input>
                        <label htmlFor='page-1' className='header-input-label'>1</label>
                        <label className='page-details' htmlFor="page-1"><p className='desc'>STEP 1 <span className='page-info'>YOUR INFO</span></p></label>
                    </section>
                    <section className='page-index'>
                        <input name='current page' checked={props.pageNo === 2} type='radio' value='2' id='page-2' onChange={() => props.handeler(2)}></input>
                        <label htmlFor='page-2' className='header-input-label'>2</label>
                        <label className='page-details' htmlFor='page-2'><p className='desc'>STEP 2 <span className='page-info'>SELECT PLAN</span></p></label>
                    </section>
                    <section className='page-index'>
                        <input name='current page' checked={props.pageNo === 3} type='radio' value='3' id='page-3' onChange={() => props.handeler(3)}></input>
                        <label htmlFor='page-3' className='header-input-label'>3</label>
                        <label className='page-details' htmlFor="page-3"><p className='desc'>STEP 3 <span className='page-info'>ADD-ONS</span></p></label>
                    </section>
                    <section className='page-index'>
                        <input name='current page' checked={props.pageNo === 4} type='radio' value='4' id='page-4' onChange={() => props.handeler(4)}></input>
                        <label htmlFor='page-4' className='header-input-label'>4</label>
                        <label className='page-details' htmlFor='page-4'><p className='desc'>STEP 4 <span className='page-info'>SUMMARY</span></p></label>
                    </section>
                </fieldset>
            </header>
        </div>
    );
}