import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel(props){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true
    }   
    return(
        <Slider {...settings}>
            <div className="imgs"><img src="/images/CoronaArt.png" /></div>
            <div className="imgs"><img src="/images/Hamburger.jpg" /></div>
            <div className="imgs"><img src="/images/HotDogs.jpg" /></div>
            <div className="imgs"><img src="/images/NYC.jpg" /></div>
            <div className="imgs"><img src="/images/Sushi.jpg" /></div>
            <div className="imgs"><img src="/images/Pizza.jpg" /></div>
            <div className="imgs"><img src="/images/Dumplings.jpg" /></div>
            <div className="imgs"><img src="/images/IceCreams.jpg" /></div>
            <div className="imgs"><img src="/images/Sushi2.jpg" /></div>
            <div className="imgs"><img src="/images/Pizza2.jpg" /></div>
            <div className="imgs"><img src="/images/Ice-Creams.jpg" /></div>
            <div className="imgs"><img src="/images/WtpArt.jpg" /></div>
            <div className="imgs"><img src="/images/NYSci.jpg" /></div>
            <div className="imgs"><img src="/images/Hot Dogs.jpg" /></div>
            <div className="imgs"><img src="/images/Color.jpg" /></div> 
            <div className="imgs"><img src="/images/TenementSign.jpg" /></div>
            <div className="imgs"><img src="/images/Pastries.jpg" /></div>
            <div className="imgs"><img src="/images/KawsBK.jpg" /></div>
            <div className="imgs"><img src="/images/NewMuseum.jpg" /></div>
            <div className="imgs"><img src="/images/CentralPark.jpg" /></div>
            <div className="imgs"><img src="/images/Donuts.jpg" /></div>
            <div className="imgs"><img src="/images/AlleyP.jpg" /></div>
            <div className="imgs"><img src="/images/MovingImage.jpg" /></div>
            <div className="imgs"><img src="/images/Park2.jpg" /></div>
            <div className="imgs"><img src="/images/Bowls.jpg" /></div>
            <div className="imgs"><img src="/images/IceCream.jpg" /></div>
            <div className="imgs"><img src="/images/Pasta.jpg" /></div>
            <div className="imgs"><img src="/images/Cupcake.jpg" /></div>
            <div className="imgs"><img src="/images/KawsBrooklyn.jpg" /></div>
            <div className="imgs"><img src="/images/Food2.jpg" /></div>
            <div className="imgs"><img src="/images/Food3.jpg" /></div>
            <div className="imgs"><img src="/images/KawsB.jpg" /></div>
            <div className="imgs"><img src="/images/Illusions.jpg" /></div>
            <div className="imgs"><img src="/images/Hamburger2.jpg" /></div>
            <div className="imgs"><img src="/images/AlleyTrail.jpg" /></div>
            <div className="imgs"><img src="/images/Dumplings2.jpg" /></div>
        </Slider>
    )
}
export default Carousel;