import Home from "./pages/Home"
import Footer from "./components/Footer/Footer.js"
import Products from "./pages/Products"
import Header from "./components/Header"
// import Carousel from "./components/Carousel/Carousel.js"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Success from './pages/Success';
import OurTeam from './pages/OurTeam';
import Mission from "./pages/Mission";
import Cart from "./components/Cart";
import OrderHistory from './pages/OrderHistory';
import Detail from "./pages/Detail";
import Reviews from "./pages/Reviews"
import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import { StoreProvider } from './utils/GlobalState';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './assets/css/App.css';
import Logo from './assets/Logo.png';
import LoggedIn from './assets/LoggedIn.png'
import LoggedOut from './assets/LoggedOut.png'
import Auth from './utils/auth';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <StoreProvider>
          <BrowserRouter>
            <Header />
            <nav className='navbar navbar-expand-sm header navbar-light bg-light'>
              <Link  to="/" className=" appLink navbar-brand mx-auto" href="#">
                <img src={Logo} alt='Logo' className='logo ' />
              </Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse headerIcons" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto headerIcons">
                  <li className="nav-item">
                    <Link to="/login" className='appLink'>
                      {Auth.loggedIn() ? (<img src={LoggedIn} alt='loggedOutIcon' className='loggedOutIcon' />) : (<img src={LoggedOut} alt='loggedOutIcon' className='loggedOutIcon' />)}</Link>
                  </li>
                  <li className='cartHeaderIcon'> <Cart /></li>
                </ul>
              </div>
              <ul className="navbar-nav headerTextLinks mr-auto">
                  <li className="nav-item headerTextItem mx-2">
                  <Link to="/mission" className='appLink LinkText '>Our Mission</Link>
                  </li>
                  <li className="nav-item headerTextItem mx-2">
                  <Link to="/products" className='appLink LinkText '>Products</Link>
                  </li>
                  {/* <li className="nav-item headerTextItem mx-2">
                  <Link to="/aboutus" className='appLink LinkText '>About Us</Link> 
                  </li> */}

                </ul>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/products" element={<Products />} />
              <Route exact path="/success" element={<Success />} />
              <Route exact path="/orderHistory" element={<OrderHistory />} />
              <Route exact path="/products/:id" element={<Detail />} />
              <Route exact path='/mission' element={<Mission/>} />
              <Route exact path="/reviews" element={<Reviews />} />
              <Route exact path="/ourteam" element={<OurTeam/>} />
            </Routes>
            <Footer/>
          </BrowserRouter>
        </StoreProvider>
      </div>
    </ApolloProvider>
  );
}

export default App;
