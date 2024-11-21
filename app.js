import React from 'react';

function Header() {
  return <h1>Welcome to My React App</h1>;
}

function Main() {
  return <p>This is the main content of the webpage.</p>;
}

function Footer() {
  return <footer>© 2024 My React App</footer>;
}

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
