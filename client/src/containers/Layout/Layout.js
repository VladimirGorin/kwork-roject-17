import React from "react";
import Header from "../../containers/Header/Header";
import Footer from "../../containers/Footer/Footer";


export default props => {

  return (
    <>
      <Header/>
      <main>
        {props.children}
      </main>
      <Footer/>
    </>

  )


}