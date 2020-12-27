import React, { Component } from 'react';
import axios from 'axios';
import map from 'lodash/map';
import { URL_AUTOR, URL_POST_BOOK } from '../../shared/utils/constants';

class NewAutor extends Component {
  state = {
    nombre: '',
    edad: '',
    nacionalidad: ''
    
  }
  handleChangeNombre = event => {
    this.setState({ nombre: event.target.value });
  }
  handleChangeEdad = event => {
    this.setState({ edad: event.target.value });
  }
  handleChangeNacionalidad = event => {
    this.setState({ nacionalidad: event.target.value });
  }
  handleSubmit = event => {
    event.preventDefault();

    axios.post(URL_AUTOR, { 
        nombre: this.state.nombre,
        edad: this.state.edad,
        nacionalidad: this.state.nacionalidad })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div className="show-product">
        <div className="item-wrapper3">
          <form class="col s12" onSubmit={this.handleSubmit}>
          <div class="row">
              <div class="input-field col s12  l6">
                <label for="nombre">Nombre</label>
                <input placeholder="Titulo" id="nombre" type="text" class="validate" onChange={this.handleChangeNombre} />
              </div>
              <div class="input-field col s12  l6">
                <label for="edad">Edad</label>
                <input placeholder="Descripcion" id="edad" type="text" class="validate" onChange={this.handleChangeEdad}/>
              </div>
              <div class="input-field col s12  l6">
                <label for="nacionalidad">Nacionalidad</label>
                <input placeholder="Bolivianos" id="nacionalidad" type="text" class="validate" onChange={this.handleChangeNacionalidad}/>
              </div>
             <button type="submit">AGREGAR</button>
             <a class="btn" onclick="Materialize.toast('I am a toast', 4000)">Toast!</a>
             
            </div>
          </form>
        </div>
      </div>       
    );
  }
}

export default NewAutor;
