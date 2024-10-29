import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Detail({ onAddToCart }) {
    let { id } = useParams();

    useEffect(() => {
        let watched = localStorage.getItem('watched'); 
        watched = watched ? JSON.parse(watched) : [];
        if (!watched.includes(id)) watched.push(id);
        localStorage.setItem('watched', JSON.stringify(watched));
    }, [id]);

    const handleAddToCart = () => {
        const item = { id, title: `상품 ${id}`, };

        let cart = localStorage.getItem("cart");
        cart = cart ? JSON.parse(cart) : [];
        if (!cart.includes(id)) cart.push(id);
        localStorage.setItem("cart", JSON.stringify(cart));

    };

    return (
        <div>
            <div>
                <h1>Detail {id}</h1>
                <img src={`/img/shoes${id}.jpg`} height='100' width='200' alt={`상품 ${id}`} />
            </div>
            <div className="detail-tab">
                <button onClick={handleAddToCart}>주문하기</button>
                <p>탭~</p>
            </div>
        </div>
    );
}
