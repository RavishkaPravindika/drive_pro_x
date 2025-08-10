import Header from "@/components/Header/Header";
import Slider from "@/components/Slider/Slider";
import Category from "@/components/Category/Category";
import FastMoving from "@/components/FastMoving/FastMoving";
import PostSection from "@/components/PostSection/PostSection";
import DreamCar from "@/components/DreamCar/DreamCar";
import Services from "@/components/Services/Services";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Slider />
      <Category />
      <FastMoving />
      <PostSection backgroundImage="/images/ev-charging.png" />
      <DreamCar />
      <Services />
      <Footer />

    </>
  );
}
