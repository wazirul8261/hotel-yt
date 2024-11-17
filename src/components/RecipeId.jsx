import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import TrandingSlider from './TrandingSlider'
import { useParams } from 'react-router-dom'


const RecipeId = () => {
    const {idMeal} = useParams()
   // console.log(useParams())
   
 
    const [data, setData] = useState([])
    const [active, setActive] = useState('ingedient')
    useEffect(() =>{
     const fetchData = async ()=>{
       const api = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}')
       const data =  await api.json();
      // console.log(data.meals);
       setData(data.meals)
       console.log(data)
         }
         fetchData();
    }, [idMeal])
   return (
   <>
   <Navbar/>
   <div style={{
    width: '90%',
    margin: 'auto',
    textAlign: 'center'
   }}>
    <h1> {data.strMeal}</h1>
    <div style={{
  display: 'flex'
   }}>
    
    <div className="img" style={{width:'30%', marginTop:'2rem'}}>
    </div>
        <img src={data.strMealThumb} alt="" style={{width:'20rem'}} />
    </div>
    <div className="content"style={{width:'60%'}}>
        <button className="btn" onClick={()=>setActive('ingedient')}>Ingredient</button>
        <button className="btn" onClick={()=>setActive('instruction')}>Instruction</button>
      {
        active === 'ingedient' ? (
          <div>
          <div style={{fontSize:'1rem', fontWeight:'bold'}}>{data.stringredient1}-{data.strMeasure1}</div>
          <div style={{fontSize:'1rem', fontWeight:'bold'}}>{data.stringredient2}-{data.strMeasure2}</div>
          <div style={{fontSize:'1rem', fontWeight:'bold'}}>{data.stringredient3}-{data.strMeasure3}</div>
          <div style={{fontSize:'1rem', fontWeight:'bold'}}>{data.stringredient4}-{data.strMeasure4}</div>
          <div style={{fontSize:'1rem', fontWeight:'bold'}}>{data.stringredient5}-{data.strMeasure5}</div>
        </div>
        ) : (
           <p> {data.strInstruction}</p> 
        )
      }

    
        

    </div>
   </div>
   <div style={{marginTop:'1rem'}}>
    <TrandingSlider/>

   </div>
   
   
   </>
   )
    }

export default RecipeId
