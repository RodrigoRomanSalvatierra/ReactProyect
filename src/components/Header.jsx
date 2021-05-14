import React , { useState } from 'react'
import '../styles/header.css'
import logo from '../assets/img/logo.png'
import buscador from '../assets/img/buscador2.png'


const Header = (props) => {

    const [filtro, setFiltro] = useState('');

    const onChangeBuscar = (event) => {
        let valueFilter = event.target.value;
        setFiltro(valueFilter);
    }

    const handleBuscar = ()=>{
    props.filtarPropiedades(filtro);
    };

    return (
    <div id="header-page" className=" header-page">
      <div className="header-content">
        <div className="logo-header">
          <span className="logo"><img src={logo} alt="imagen" className="" /></span>
        </div>
        <div className="menu-header">
          
        </div>
        
        <div className="exit-header">
          <input type="text" placeholder='Buscar..' className='input-buscador' onChange={onChangeBuscar} />
        <img src={buscador} alt="imagen" className="icon-buscador" onClick={handleBuscar} />
        </div>
      </div>

    </div>
    )
}

export default Header