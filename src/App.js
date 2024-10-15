import React, { useState } from 'react'
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import axios from 'axios'
import Detail from './components/Detail.js'
// import Item from './js/Item';

function App() {
  let [shoes, setShoes] = useState([]);
  let [divs, setDiv] = useState([]);

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Blog</a>
          {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button> */}
          <div class="collapse navbar-collapse" id="navbarNav">
            <div class="navbar-nav">
              <ul class="nav justify-content-end">
                <li class="nav-item">
                  <a class="nav-link" href="#">MY ACCOUNT</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">MY PAGE</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">SIGN IN</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">SIGN UP</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <Item shoes={shoes[0]} i = {1}></Item> */}
      </nav>
      
      <button onClick={()=>{
          axios.get('https://codingapple1.github.io/shop/data2.json').then((결과)=>{
            let copy = [...shoes, ...결과.data]
            setShoes(copy)
            
            let newDivs = [
              <div key={divs.length + 1}>1</div>,
              <div key={divs.length + 2}>2</div>,
              <div key={divs.length + 3}>3</div>
            ];
            setDiv([...divs, ...newDivs]);
          })
          .catch(()=>{
            console.log('실패함')
          })
        }}>버튼</button>
      <div className='shoes-div'>
        {shoes.map((d, i) => (
          <div key={i} className='items'>
            <p>{i}{d.title}</p>
            <Link to={`/detail/${i+1}`}>
              <img src={`/img/shoes${i+1}.jpg`}/>
            </Link>
          </div>
        ))}
      </div>
      
      <Routes>
        <Route path="/" element={<div>인덱스임</div>} />
        <Route path="/detail/:id" element={ <Detail /> } />
        <Route path="/about" element={ <div>어바웃페이지임</div> } />
      </Routes>
    </div>
  );
}

export default App;