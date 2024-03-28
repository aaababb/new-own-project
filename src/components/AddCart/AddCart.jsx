import React,{useState,useEffect} from 'react'
import axios from 'axios'

import exit from '../../assets/svg/exit.svg'
import './AddCart.css'
import { Link } from 'react-router-dom'

const CATEGORY_API = "http://178.128.162.248:8070/api/v1/category/categories/"



function AddCart() {
    const [category,setCategory] = useState([])

    async function getCategory() {
        try{
            const res = await axios.get(CATEGORY_API)

            setCategory(res.data)
            console.log(res)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        getCategory()
    },[])
  return (
    <div className='all'>
        <div className='new-post'>
            <Link to={'/'}>
                <img src={exit}/>
            </Link>
            <h1>Новое объявление</h1>
        </div>
        <div className='addCart'>
            {
                category.map((item) => (
                    <div className='addCart2'>
                        <img src={item.image}/>
                        <p>{item.title_ru}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default AddCart