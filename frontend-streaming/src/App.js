import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="overlay" />
      <header className="header">
        <h1 className="logo">MyFlix</h1>
        <button className="sign-in-btn">Sign In</button>
      </header>

      <main className="main-content">
        <h2>Unlimited movies, TV shows, and more.</h2>
        <p>Watch anywhere. Cancel anytime.</p>
        <button className="get-started-btn">Get Started</button>
      </main>
    </div>
  );
}

export default App;
