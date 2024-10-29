import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Detail from './components/Detail';
import { Nav } from 'react-bootstrap';
import TabContent from './components/TabContent';
import Login from './components/Login';
import { Cart } from './components/Cart';

function App() {
	let [shoes, setShoes] = useState([]);
	let [divs, setDiv] = useState([]);
	const [탭, 탭변경] = useState();
	const [showLogin, setShowLogin] = useState(false);
	const [cartItems, setCartItems] = useState([]);
  
  const handleAddToCart = (item) => {
		let updatedCart = [...cartItems, item];
		setCartItems(updatedCart);
		localStorage.setItem('cart', JSON.stringify(updatedCart));
	};

	const handleViewCart = () => {
		const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
		setCartItems(storedCart);
	};

	return (
		<div>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						Blog
					</a>
					<div className="collapse navbar-collapse" id="navbarNav">
						<div className="navbar-nav">
							<ul className="nav justify-content-end">
								<li className="nav-item">
									<a className="nav-link" href="#">
										MY ACCOUNT
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										MY PAGE
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link"
										href="#"
										onClick={() => setShowLogin(true)} // 클릭 시 Login 표시
									>
										SIGN IN
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										SIGN UP
									</a>
								</li>
                <li className="nav-item">
									<button className="nav-link link-style" onClick={handleViewCart}>장바구니</button>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>

			{showLogin ? (
				<Login
					loginHandler={() => setShowLogin(false)}
					setUserInfo={(userInfo) => console.log('User info:', userInfo)}
				/>
			) : (
				<>
					{/* 메인 콘텐츠 */}
					<button
						onClick={() => {
							axios
								.get('https://codingapple1.github.io/shop/data2.json')
								.then((결과) => {
									let copy = [...shoes, ...결과.data];
									setShoes(copy);

									let newDivs = [
										<div key={divs.length + 1}>1</div>,
										<div key={divs.length + 2}>2</div>,
										<div key={divs.length + 3}>3</div>,
									];

									setDiv([...divs, ...newDivs]);
								})
								.catch(() => {
									console.log('실패함');
								});
						}}
					>
						버튼
					</button>
					<div className="shoes-div">
						{shoes.map((d, i) => (
							<div key={i} className="items">
								<p>
									{i}
									{d.title}
								</p>
								<Link to={`/detail/${i + 1}`}> {/* 상품 이미지 클릭 시 바로 이동 */}
									<img src={`/img/shoes${i + 1}.jpg`} />
								</Link>
								<Nav variant="tabs" defaultActiveKey="link0">
									<Nav.Item>
										<Nav.Link
											onClick={() => {
												탭변경(0);
											}}
											eventKey="link0"
										>
											버튼0
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link
											onClick={() => {
												탭변경(1);
											}}
											eventKey="link1"
										>
											버튼1
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link
											onClick={() => {
												탭변경(2);
											}}
											eventKey="link2"
										>
											버튼2
										</Nav.Link>
									</Nav.Item>
								</Nav>
								<TabContent 탭={탭} />
							</div>
						))}
					</div>

          
          <div>
            <p>최근 본 상품:{localStorage.getItem("watched")}</p>
          </div>
          <div>
            <p>장바구니:{localStorage.getItem("cart")}</p>
          </div>

					<Routes>
						<Route path="/" element={<div>인덱스임</div>} />
						<Route path="/detail/:id" element={<Detail onAddToCart={handleAddToCart}/>} />
						<Route path="/about" element={<div>어바웃페이지임</div>} />
					</Routes>
				</>
			)}
		</div>
	);
}

export default App;
