import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';

import carousel from '../../assets/image/carousel.png';
import carousel3 from '../../assets/image/carusel3.png'
import { getProductStart,getProductSucces,getProductError } from '../../redux/product/productSlice';

import Product from '../product/Product';



import './Home.css'

const CATEGORY_API = "http://178.128.162.248:8070/api/v1/category/categories/"
const API = "http://178.128.162.248:8070/api/v1/advertisement/ads"

function Home() {
    const [category,setCategory] = useState([])

    const {items, loading, error} = useSelector((state) => state.products)
    const dispatch = useDispatch()


    async function getCategory() {
        try{
            const res = await axios.get(CATEGORY_API)

            setCategory(res.data)
            console.log(res)
        }catch(error){
            console.log(error)
        }
    }

    async function getProduct() {
        dispatch(getProductStart())
        try {
            const res = await axios.get(API)
            dispatch(getProductSucces(res.data.results))


            console.log(res)
        } catch (error) {
            console.log(error)
            dispatch(getProductError("error"))
        }
    }

    
    useEffect(() => {
        getCategory();
        getProduct();
    },[])

    async function getProductByCategory(id){
        try{
            const res = await axios.get(`${API}?category=${id}`)

            dispatch(getProductSucces(res.data.results))
        }catch(error){
            console.log(error)
        }
    }
    
    
    if(loading) {
        return <div className='loading'>
            <h1 className='loader'></h1>
            <h1>Loading...</h1>
        </div>
    }

  return (
    <div className='all'>
        <div className='home '>
            {
                category.map((item) => (
                            <div onClick={() => getProductByCategory(item.id)}  className='home-category'>
                                {item.title_ru}
                            </div>
                ))
            }
        </div>

        <div className='carousel container'>
        <Carousel>
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="First slide" /> */}
                        <img src={carousel}/>
                        <Carousel.Caption>
                        {/* <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="Second slide" /> */}
                        <img src={carousel3}/>
                        <Carousel.Caption>
                        {/* <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="Third slide" /> */}
                        <img src={carousel}/>
                        <Carousel.Caption>
                        {/* <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
        </div>
        <div className='home-products container'>
            {
                items.map((item) => (
                    <Product key={item.id} data={item}/>                    
                ))
            }
        </div>
    </div>
  )
}

export default Home