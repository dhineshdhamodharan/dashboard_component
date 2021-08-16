import React, { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ProductContext from "./productcontext";

function Editproduct(props) {
  const [productName,setproductName]=useState("");
  const [price,setPrice]=useState("");
  const [expiryDate,setexpiryDate]=useState("");
  const [manufacturingDate,setmanufacturingDate]=useState("");

    const productContext = useContext(ProductContext);
    const history=useHistory()

    useEffect(()=>{
        let productData=productContext.productList[props.match.params.id-1];
        setproductName(productData.productName);
        setPrice(productData.price);
        setexpiryDate(productData.expiryDate);
        setmanufacturingDate(productData.manufacturingDate);
    }, [])

    let handleSubmit=(e)=>
    {
      e.preventDefault();
      console.log(productName,price,expiryDate,manufacturingDate);

      setproductName("");
      setPrice("");
      setexpiryDate("");
      setmanufacturingDate("");

      let productData={productName,price,expiryDate,manufacturingDate};
      productContext.productList[props.match.params.id-1]=productData
      productContext.setProductList([...productContext.productList])
      history.push("/products")
    }

    return (
        <div>
             <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Edit Product</h1>
                    </div>
              <div className="container">
                  <form onSubmit={handleSubmit}>
                      <div className="row">
                          <div className="col-lg-6">
                            <label>Product Name</label>
                          <input type="text" value={productName} onChange={(e)=>{setproductName(e.target.value)}} className="form-control"/>
                          </div>
                          <div className="col-lg-6">
                            <label>Price</label>
                          <input type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}} className="form-control"/>
                          </div>
                          <div className="col-lg-6">
                            <label>Expiry Date</label>
                          <input type="date" value={expiryDate} onChange={(e)=>{setexpiryDate(e.target.value)}} className="form-control"/>
                          </div>
                          <div className="col-lg-6">
                            <label>Manufacturing Date</label>
                          <input type="date" value={manufacturingDate} onChange={(e)=>{setmanufacturingDate(e.target.value)}} className="form-control"/>
                          </div>
                          <div className="col-lg-12 mt-3">     
                          <input type="submit" value="Update" className="btn btn-primary"/>
                          </div>
                      </div>
                  </form>
                  </div>      
        </div>
    )
}
export default Editproduct
