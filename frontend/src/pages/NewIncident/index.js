import React from 'react';
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import  './style.css'
import logoImg from '../../assets/logo.svg';

export default function NewIncident(){
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Hero"/>
                    <h1>Castrar novo caso</h1>
                    <p>Descreva detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="#E02041"/>
                    Voltar para casos
                </Link>              
                </section>
                <form>
                <input placeholder="Título do caso"/>
                <textarea placeholder="Descrição" />
                <input placeholder="Valor em reais"/>
            
                <button className="button" type="submit">Cadastrar</button>
            
                </form>
            </div>
        </div>
    )
}