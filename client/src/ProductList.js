import React, { Component } from 'react';

class ProductList extends Component{
    deleteProduct=(e)=>{
        fetch('/deleteProduct',
            {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productID: e.target.name,
                }),
            }
        );
    };
    //this function renders each element from the product database onto a page, separated by horizontal rule
    render(){
        const mappedArray = this.props.array.map(
            (eachElement)=>{
                return(<div>
                    <p>{eachElement.productID} {eachElement.price} {eachElement.quantity} <a href="#" name={eachElement.productID} onClick={this.deleteProduct}>Delete</a></p>
                </div>)
            }
        );
        return(
            <div>{mappedArray}</div>
        );
    }
}

export default ProductList;