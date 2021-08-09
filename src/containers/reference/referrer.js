import React from "react";
import './referrer.css';
import Footer from  '../../components/Footer/Footer/Footer';
import Layout from '../../hoc/Layout/Layout';


function Reffer() {
  return (
    <Layout>


    <div className="Reffer">

     <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc0wRTpm2x_o3J896o8WdcsxkUH2uBagMvofHahmzXf5vlbrw/viewform?embedded=true" width="640" height="650" scrolling="no" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>
    <Footer/>
    </Layout>
  );
}

export default Reffer;