import React, { Component } from 'react';
import AddProduct from "./AddProduct";
import ProductList from "./ProductList";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

//retrieve the tickets from the database, and display them
class ProductHome extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data:[],
        };
        this.loadData();
    }
//this function pulls in the info from the server side product route using proxy
    loadData=()=>{
        fetch('/listAllProducts')
            .then(data=>data.json())
            .then(response=>this.setState({data:response}));
    };


    render(){
        return(
            <div>
                <Router>
                    <Link to="/addProduct">Add Product</Link>
                    <ProductList array={this.state.data}/>
                    <Route path="/addProduct" component={AddProduct}/>
                    <h1>Test</h1>
                </Router>
            </div>
        );
    }
}

export default ProductHome;