import React from 'react';
import Navbar from './componentes/navbar';
import Vista from './componentes/Usuario/vist_Usuari';
import Producto from './componentes/Usuario/vist_Product';
import Piesero from './componentes/footer';

function App() {
  return (
    <div className='app'>
      <Navbar />
      
        <div className="carrusel">
          <Vista />          
        </div>

        <div className="productos">
          <Producto/>
        </div>

        <div className="footer">
          < Piesero />
        </div>
      
    </div>
  );
}

export default App;
