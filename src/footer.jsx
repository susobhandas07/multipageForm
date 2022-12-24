export default function main(props) {
    return (
        <div className="footer">
            <footer>
                <div>
                    {props.pageNo > 1 && <button type='button' value='prev' className='footer-btn' onClick={() => props.handeler(props.pageNo - 1)} ><span>Go Back</span></button>}
                </div>
                <div>
                    {props.pageNo < 4 && <button type='button' value='next' className='footer-btn' onClick={() => props.handeler(props.pageNo + 1)} ><span>Next Step</span></button>}
                    {props.pageNo == 4 && <button type='button' value='submit' className='footer-btn' onClick={props.postMethod}><span>Submit</span></button>}
                </div>
            </footer >
        </div >
    );
}