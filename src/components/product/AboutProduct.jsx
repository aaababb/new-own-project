import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import adres from '../../assets/svg/adress.svg'
import map from '../../assets/image/map.png'

import './AboutPro.css'

const API = "http://178.128.162.248:8070/api/v1/advertisement/ads"

function AboutProduct() {
    const{id} = useParams()
    const [product,setProduct] = useState({})

    async function getProduct() {
        try{
            const res = await axios.get(`${API}/${id}`)

            setProduct(res.data)
            console.log(res)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        getProduct()
    },[])
  return (
    <div className='aboutPro'>
        <img className='about-image' src={product.image}/>
        <div className='about-title container'>
            <p>{product.price}{product.currency}</p>
            <p>{product.title}</p>
        </div>
        <div className='about-text container'>{product.text}</div>
        <div className='adress container'>
            <img src={adres}/>
            <p>{product.address_title}</p>
            <img src={map}/>
        </div>
    </div>
  )
}

export default AboutProduct