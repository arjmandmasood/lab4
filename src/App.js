
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Content } from './components/content';
import { Header } from './components/header';
import { Footer } from './components/footer';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

class App extends React.Component {
  render(){
  return (
    <Router>
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Content></Content>} exact></Route>
        <Route path='/read' element={<Header />}></Route>
        <Route path='/create' element={<Footer />}></Route>
      </Routes>

      {/* <Header></Header>
      <Content></Content>
      <Footer></Footer> */}
    </div>
    </Router>
  );
  }
}

export default App;
