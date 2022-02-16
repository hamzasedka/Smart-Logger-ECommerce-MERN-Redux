import { TextareaAutosize, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import "./addForm.css"
function AddProduct() {
    const [prevState, setProductInput] = useState({
    productTitle: "",
    productImage: "",
    productPrice: 0,
    productCategory: "",
    productDisd: "",
    productStatus:false,
    productRating:0,

  });
const TitleOnChangeHandler=(e)=>{
setProductInput(()=>{
    return {
        ...prevState,
        productTitle:e.target.value
    }
})
}
console.log(prevState);
  return (
      
    <form className='FormContainer'> 
        
      <div className='row' style={{padding:"20px"}}>
           <div className='col-md-6'>
        <TextField  
            
          fullWidth
          id="Title"
          required
          variant='outlined'
          color='primary'
          label="Product Title"
          onChange={TitleOnChangeHandler}/>
          
        <TextField  
        style={{marginTop:"10px"}}
          fullWidth
          id="Price"
          required
          variant='outlined'
          color='primary'
          label="Product Price TND"
          onChange={TitleOnChangeHandler}/>
          
      <TextField  
        style={{marginTop:"10px"}}
          fullWidth
          id="Stock"
          required
          variant='outlined'
          color='primary'
          label="Product Stock"
          onChange={TitleOnChangeHandler}/>
       </div>
       <div className='col-md-6'>
             <TextField  
        
          fullWidth
          id="email"
          required
          variant='outlined'
          color='primary'
          label="Product Image Url"
          onChange={TitleOnChangeHandler}/>

          <TextField  
        style={{marginTop:"10px"}}
          fullWidth
          id="Status"
          required
          variant='outlined'
          color='primary'
          label="Product Status"
          onChange={TitleOnChangeHandler}/>

          <TextField  
        style={{marginTop:"10px"}}
          fullWidth
          id="Rating"
          required
          variant='outlined'
          color='primary'
          label="Product Rating"
          onChange={TitleOnChangeHandler}/>
       </div>
      <div className="form-group"    style={{width:"100%",marginTop:"10px",border:"none"}}>
            
            <textarea
            style={{width:"100%",background:"transparent"}}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            />
        </div>
        </div>
    </form>
  )
}

export default AddProduct