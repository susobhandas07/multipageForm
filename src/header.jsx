export default function main(props) {
    let styles = { backgroundColor: props.pageNo === 1 && 'var(--Pastel-blue)' }
    return (
        <div className='header'>
            <header>
                <section>
                    <section className='page-index'>
                        <p className='header-input-label' style={{ backgroundColor: props.pageNo === 1 && 'var(--Pastel-blue)', color: props.pageNo === 1 && 'var(--h2Color)' }}>1</p>
                        <p className='page-details' >STEP 1 <span className='page-info'>YOUR INFO</span></p>
                    </section>
                    <section className='page-index'>
                        <p className='header-input-label' style={{ backgroundColor: props.pageNo === 2 && 'var(--Pastel-blue)', color: props.pageNo === 2 && 'var(--h2Color)' }}>2</p>
                        <p className='page-details' >STEP 2 <span className='page-info'>SELECT PLAN</span></p>
                    </section>
                    <section className='page-index'>
                        <p className='header-input-label' style={{ backgroundColor: props.pageNo === 3 && 'var(--Pastel-blue)', color: props.pageNo === 3 && 'var(--h2Color)' }}>3</p>
                        <p className='page-details' >STEP 3 <span className='page-info'>ADD-ONS</span></p>
                    </section>
                    <section className='page-index'>
                        <p className='header-input-label' style={{ backgroundColor: props.pageNo === 4 && 'var(--Pastel-blue)', color: props.pageNo === 4 && 'var(--h2Color)' }}>4</p>
                        <p className='page-details' >STEP 4 <span className='page-info'>SUMMARY</span></p>
                    </section>
                </section>
            </header>
        </div>
    );
}