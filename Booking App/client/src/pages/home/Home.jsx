import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/Header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/featuredProperties";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="homeContainer mt-20 flex flex-col items-center justify-center gap-8 w-full">
        <Featured />
        <h1 className="homeTitle text-xl font-bold">Browse by Property Type</h1>
        <PropertyList />
        <h1 className="homeTitle text-xl font-bold">Home guests love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </>
  );
}

export default Home;
