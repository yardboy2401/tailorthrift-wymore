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
            <nav class='navbar navbar-expand-sm header navbar-light bg-light'>
              <Link  to="/" class=" appLink navbar-brand mx-auto" href="#">
                <img src={Logo} alt='Logo' class='logo ' />
              </Link>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse headerIcons" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto headerIcons">
                  <li class="nav-item">
                    <Link to="/login" class='appLink'>
                      {Auth.loggedIn() ? (<img src={LoggedIn} alt='loggedOutIcon' class='loggedOutIcon' />) : (<img src={LoggedOut} alt='loggedOutIcon' class='loggedOutIcon' />)}</Link>
                  </li>
                  <li class='cartHeaderIcon'> <Cart /></li>
                </ul>
              </div>
              <ul class="navbar-nav headerTextLinks mr-auto">
                  <li class="nav-item headerTextItem mx-2">
                  <Link to="/mission" class='appLink LinkText '>Our Mission</Link>
                  </li>
                  <li class="nav-item headerTextItem mx-2">
                  <Link to="/products" class='appLink LinkText '>Products</Link>
                  </li>
                  {/* <li class="nav-item headerTextItem mx-2">
                  <Link to="/aboutus" class='appLink LinkText '>About Us</Link> 
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
