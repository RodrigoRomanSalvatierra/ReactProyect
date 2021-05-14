import React, { useState } from 'react'
import Home from '../components/Home'
import '../styles/main.css'
import { lista } from '../assets/lista'

const Propiedades = () => {
    
    const [listadoPropiedades, setListadoPropiedades] = useState(lista);

    const filtarLista = (titulo) =>{
        let nuevaLista = [];
        (titulo) ? nuevaLista = lista.filter(val => val.city == titulo) : nuevaLista = [...lista];
        setListadoPropiedades(nuevaLista);
    }

    return (
        <div className="contenedor">
            <Home title={"Casas en Bolivia"} data={ listadoPropiedades } filtroParam={filtarLista} />
        </div>
    )
}

export default Propiedades