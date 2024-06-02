import { useNavigate } from "react-router-dom";
import '../styles/message.css';

const TransactionMessage = ({text}) =>{

    const navigate = useNavigate();
    const handleConfirm = () => {
        navigate('/');
    }


    return(
        <div className="whole-page">
            <div className='message'>
                <h1>{text}</h1>
                <button onClick={handleConfirm} className="return_button">Return</button>
            </div>
        </div>
    );
}

export default TransactionMessage;