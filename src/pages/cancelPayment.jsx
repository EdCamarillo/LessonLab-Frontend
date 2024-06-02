import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { expireSession } from "../server/paymongoApi";
import TransactionMessage from "../components/transactionMessage";

const CancelPage = () =>{

    return(
        <>
            <TransactionMessage text={'Transaction Cancelled'}/>
        </>
    );
}

export default CancelPage;