import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={HomePage} />
        <Route path="/article/:id" component={ArticlePage} />
      </div>
    </Router>
  );
}

export default App;

