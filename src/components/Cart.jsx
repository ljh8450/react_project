import React, { createContext, useState, useEffect } from "react";

export const Cart = createContext();

export function CartProvider({ children }) {
	const [cartItems, setCartItems] = useState([]);
	const [recentlyViewed, setRecentlyViewed] = useState([]);

	// 장바구니 및 최근 본 상품을 localStorage에서 불러오기
	useEffect(() => {
		const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
		const savedViewed = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
		setCartItems(savedCart);
		setRecentlyViewed(savedViewed);
	}, []);

	// localStorage에 업데이트하기 위한 효과
	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cartItems));
		localStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewed));
	}, [cartItems, recentlyViewed]);

	const addToCart = (item) => {
		setCartItems((prevItems) => [...prevItems, item]);
	};

	const addToRecentlyViewed = (item) => {
		setRecentlyViewed((prevItems) => {
			const updatedViewed = [item, ...prevItems.filter((i) => i.id !== item.id)];
			return updatedViewed.slice(0, 5); // 최근 본 상품 최대 5개 유지
		});
	};

	return (
		<Cart.Provider value={{ cartItems, addToCart, recentlyViewed, addToRecentlyViewed }}>
			{children}
		</Cart.Provider>
	);
}
