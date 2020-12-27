import React, { Component } from 'react';
import { Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import { EMPTY_IMG } from '../../shared/utils/constants';


export default class Card extends Component{
    constructor(props){
    super(props);
    console.log("constructor");
    this.state = {
        aut:this.props.Autor
        }
    }

    render(){
               
        return (
        <div key={this.state.aut.id} className="item">
            <div className="product-details">
            <h1 id="product-name">{this.state.aut.nombre}</h1>
            <h4 id="product-description">{this.state.aut.edad}</h4>
            </div>
            <div className="price-add">
            <h5 id="product-price">$ {this.state.aut.nacionalidad}</h5>
            </div>
        </div> 
        );
    }
}