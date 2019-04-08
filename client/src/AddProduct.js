import React, { Component } from 'react';

class AddProduct extends Component{

    submitProductData=(e)=>{
        e.preventDefault();
        fetch('/addProduct',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productID: e.target.productID.value,
                    price: e.target.price.value,
                    quantity: e.target.quantity.value,
                }),
            }
        );
        // .then()
    };

    render(){
        return(
            <div>
                <form onSubmit={this.submitProductData}>
                    <label htmlFor="productID">Product ID:</label>
                    <input type="text" id="productID" name="productID"/>

                    <label htmlFor="price">Product ID:</label>
                    <input type="text" id="price" name="price"/>

                    <label htmlFor="quantity">Product ID:</label>
                    <input type="text" id="quantity" name="quantity"/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddProduct;