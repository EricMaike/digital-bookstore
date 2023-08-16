import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import ShoppingCart from './components/ShoppingCart';
import CheckoutForm from './components/CheckoutForm';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={BookList} />
          <Route path="/books/:id" component={BookDetails} />
          <Route path="/cart" component={ShoppingCart} />
          <Route path="/checkout" component={CheckoutForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
