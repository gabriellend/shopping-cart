import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from './common/components';
import { Home, Shop, Contact, Cart, Detail } from './screens';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
