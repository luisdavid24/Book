  
import React from 'react';
import Navbar from "./navar";
import Footer from "./Footer";

function Layout(props) {
  
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
      <Footer/>
    </React.Fragment>
  );
}

export default Layout;