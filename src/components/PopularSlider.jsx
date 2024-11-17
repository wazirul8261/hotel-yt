import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';


const PopularSlider = () => {
 const [data, setData] = useState([])
 useEffect(() =>{
  const fetchData = async ()=>{
    const api = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
    const data =  await api.json();
   // console.log(data.meals);
    setData(data.meals)
      }
      fetchData();
 }, [])

 var settings = {
  //dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed:4000,
  slidesToShow: 4,
  slidesToScroll: 1,
  pauseOnHover: true
};
  return (
 <>
 <div style={{height: '50vh',
  width: '99%',
  margin: 'auto',
  //backgroundColor: 'tomato'
 }}>

<Slider {...settings}>

      {data.map((d)=>{
  return(
    <Link to={'/$(d.idMeal)'}  key={d.idMeal}>
    <div className='slider'>
  <img src={d.strMealThumb} alt="" style={{width:'15rem', height: '15rem'}} />
    </div>
    </Link>
  )
 })
 }
    </Slider>
    </div>
 

 </>
  )
}

export default PopularSlider
