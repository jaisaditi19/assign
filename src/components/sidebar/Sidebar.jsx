import React from 'react';
import './sidebar.css';
import {BiFoodMenu} from 'react-icons/bi';



function Sidebar() {
  function prompt(){
    return window.alert("Added Successfully!!");
  }
  return (
    <div className='d-flex' style={{margin:'0px'}}>
<div className='d-block' style={{margin:'0px', height:'500px'}}>
  <ul className=''>
    <li className='listx op'><a href='#'><BiFoodMenu style={{color:'#fff', fontSize:"25px", marginTop:'48%', marginLeft:'2%' }} className="fs-4"/><span>Menu</span></a></li>
  </ul>
  </div>

  

<div>
<div class="card-group cards mt-5 p-4" style={{width:'70rem'}}>
 <div class="card"  style={{backgroundColor:'#FEE9F7' , padding:'2px',}}>
   <img src="../assets/food.jpg" class=" img" alt="..."/>
   <div class="card-body">
   <h5 class="card-title">Cabage Salad 
   <select className='port'>
    <option className='fs-1'>250gm</option>
    <option className='fs-1'>500gm</option>
     </select>
     </h5>
     <p class="card-text fw-bold">$4.99</p>
     <button className='btn' onClick={prompt} style={{border:'1px solid black', justifyContent:'center'}}>Add to Cart</button>
     
   </div>
 </div>
 <div class="card"  style={{backgroundColor:'#FEE9F7', padding:'2px'}}>
   <img src="../assets/food.jpg" class=" img" alt="..."/>
   <div class="card-body">
   <h5 class="card-title">Cabage Salad 
   <select className='port'>
    <option className='fs-1'>250gm</option>
    <option className='fs-1'>500gm</option>
     </select>
     </h5>
     <p class="card-text fw-bold">$4.99</p>
     <button className='btn' onClick={prompt} style={{border:'1px solid black', justifyContent:'center'}}>Add to Cart</button>
   </div>
 </div>
 <div class="card"  style={{backgroundColor:'#FEE9F7'}}>
   <img src="../assets/food.jpg" class=" img" alt="..."/>
   <div class="card-body">
   <h5 class="card-title">Cabage Salad 
   <select className='port'>
    <option className='fs-1'>250gm</option>
    <option className='fs-1'>500gm</option>
     </select>
     </h5>
     <p class="card-text fw-bold">$4.99</p>
     <button className='btn' onClick={prompt} style={{border:'1px solid black', justifyContent:'center'}}>Add to Cart</button>
   </div>
 </div>
 <div class="card"  style={{backgroundColor:'#FEE9F7', padding:'2px'}}>
   <img src="../assets/food.jpg" class=" img" alt="..."/>
   <div class="card-body">
   <h5 class="card-title">Cabage Salad 
   <select className='port'>
    <option className='fs-1'>250gm</option>
    <option className='fs-1'>500gm</option>
     </select>
     </h5>
     <p class="card-text fw-bold">$4.99</p>
     <button className='btn' onClick={prompt} style={{border:'1px solid black', justifyContent:'center'}}>Add to Cart</button>
   </div>
</div>
</div>

</div>
 
     </div>
  )
}

export default Sidebar




