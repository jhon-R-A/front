import React from 'react';
import axios from 'axios';

const endpoint = 'http://localhost:8000/api/';

const productos = () => {
    return (
      
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
        <div class="card j h-100">
          <img src="https://talejo.com/wp-content/uploads/2024/08/Fondo-de-pantalla-para-celular-frase-positiva-Solo-buenas-vibras-en-fondo-o_20240731_214642_0000-300x424.png" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h4 class="card-text">Pantalla Prime</h4>
            <h6>PRIME VIDEO 11 MESES</h6>
            <h6>$8.000</h6>
          </div>
        </div>
      </div>
      
      
    </div>
    
    );
    
}
export default productos;