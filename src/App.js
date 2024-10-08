import React from 'react'
import './App.css';

function App() {
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
      </nav>
    </div>
  );
}

export default App;