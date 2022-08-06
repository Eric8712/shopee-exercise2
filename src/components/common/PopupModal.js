import React, { useEffect, useState } from "react";
import Modal from "antd/lib/modal/Modal";
import { Link } from "react-router-dom";

const eventProductId = 'p003'

const PopupModal = () => {
    const popupHistory = JSON.parse(localStorage.getItem('shopee:popup.history'));
    const [isVisible, setIsVisible] = useState(!popupHistory || Date.now() - popupHistory.time > 3000)
    
    useEffect(() => {
        const history = {
            time: Date.now(),
            productId:  eventProductId,
        };
        !isVisible && localStorage.setItem("shopee:popup.history", JSON.stringify(history));

    },[isVisible])



    return(
   
    <Modal visible={isVisible} footer={null} width={530} onOk={() => setIsVisible(false)} onCancel={() => setIsVisible(false)}>
        <Link to = {`/${eventProductId}`}>
        <img alt='p003-event' src='https://images.unsplash.com/photo-1659247388461-f8dfa5bd8de6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80' />
        </Link>
    </Modal>
    
    )
}


export default PopupModal