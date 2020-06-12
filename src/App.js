import React from 'react';

// Styling
import './App.css';

// Images
import love from './assets/logo/love.png';
import shopping from './assets/logo/shopping.png';

// Components
import MobileList from './components/MobileList/MobileList';
import Cart from './components/Cart/Cart';

// API
import Provider from './api/CartContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="App-title">Shopping Cart <img className="App-title-image" src={ shopping } alt="Shopping Cart Logo" /></h2>
      </header>
      <main className="App-main">
        <Provider />
        <Cart />
        <MobileList />
      </main>
      <footer className="App-footer">
        <p>Made in <span className="App-footer-title">React</span> with <img className="App-footer-image" src={ love } alt="Heart Logo" /></p>
      </footer>
    </div>
  );
}

export default App;
