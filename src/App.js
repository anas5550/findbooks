import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import Swal from 'sweetalert2';
import Loading from './Loading';

function App() {

  useEffect(()=>{
  AOS.init();
},[])

  const [post, setpost]=useState([]);
  const [input, setinput] =useState("");
  const [done, setDone] = useState(false);

function getData(e){
  e.preventDefault();
  if(input=="") {
    Swal.fire({
  icon: 'error',
  title: 'Please enter book name',
  text: 'Error while searching!',
})
    return;
  }
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${input}`)
  .then((res)=>{
      setpost(res.data.items);
  }).catch((err)=>{
    console.log(err);
  })
}


const dataList = post.map((res,idx)=>{
      return(
        <>
 <div className="col-md-4 mb-5 m-auto " data-aos="zoom-in-down" data-aos-delay="300">
         <div className="card rounded shadow d-block m-auto">
          <img className="card-img-top" src={res.volumeInfo.imageLinks&&res.volumeInfo.   imageLinks.thumbnail} alt="error while loading image"/>
          <div className="card-body">
            <h5 className="card-title text-center">{res.volumeInfo.title}</h5>
        
           <div className="info">
           <p className="card-subtitle">{res.volumeInfo.subtitle}</p>
            <p className="title">Author: {res.volumeInfo.authors}</p>
            <p>Published on: {res.volumeInfo.publishedDate}</p>
              <p>Rating: {""+res.volumeInfo.averageRating} ||
              Categories: {""+  res.volumeInfo.categories}</p>
              <p>{""+res.volumeInfo.pageCount}-Pages ||
              Price: {res.saleInfo.retailPrice&&res.saleInfo.retailPrice.amount} ₹</p>
             </div>
          </div>
      </div>
  </div>

        </>
        
)
      
    })

  return (
    <div className="container-fluid">
    
    <h1 className="text-center">Search Your Books Here 📖</h1>

      <div className="col-md-4 input">
        <form action="">
        <input type="text" placeholder="Book name" className="col-md-4 form-control" 
      value={input} onChange={(e)=>{setinput(e.target.value)}} required/>


        <Button variant="contained" className="btn" color="success" onClick={getData}>GET DATA</Button>
        </form>
      </div>

 
    <div className="row" >
  
    {dataList}
    </div>
  </div>
  );
}

export default App;
