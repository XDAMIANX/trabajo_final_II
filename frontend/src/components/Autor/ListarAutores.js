import React, { Component } from 'react';
import Card from '../CartAutor/index';
import axios from 'axios';
import map from 'lodash/map';
import { URL_AUTORES } from '../../shared/utils/constants';


class Autores extends Component {
  state = {
    autores: []
  }

  componentDidMount() {
    axios.get(URL_AUTORES, {
      headers: {
        'Access-Control-Allow-Origin' : true,
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
      responseType: 'json',
     }).then(res => {
        const autores = res.data.autores;
        this.setState({ autores });
      });
  }

  render() {
    return (
      <div className="items-wrapper">
        <div className="items-title">
          <h4>BookMarket</h4>
        </div>
        <div className="items">
          {map(this.state.autores, (autor)=> (
            <Card Autor={autor} />
          ))}
        </div>
      </div>
    );
  }
}

export default Autores;
