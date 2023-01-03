import thankImage from './assets/images/icon-thank-you.svg'
export default function main(props) {
    return (
        <div className='form-body thank-page'>
            <section className='container'>
                <img src={thankImage} alt='icon' />
            </section>
            <section className='container'>
                <h2>Thank you!</h2>
                <p className='description'>Thanks for confirming your subscription!
                    We hope you have fun using our platform. If you ever need support, feel free to email us at <a id='mailto' href="mailto:support@loremgaming.com" target={'_blank'}>support@loremgaming.com.</a></p>
            </section>
        </div>
    );
}