import React from 'react';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import NavBar from './NavBar';
import {Switch,Route, Redirect} from "react-router-dom"
import Footer from './footer';
function App(){
    return(
        <>
        <NavBar></NavBar>
<Switch>
<Route exact path="/" component={Home} />
<Route exact path="/about" component={About} />
<Route exact path="/service" component={Service} />
<Route exact path="/contact" component={Contact} />
<Redirect to="/" />
            </Switch>
<Footer></Footer>
        </>
    )
}

export default App;