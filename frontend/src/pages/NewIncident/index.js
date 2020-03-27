import React , { useState }from 'react';
import { Link , useHistory} from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import  './style.css'
import logoImg from '../../assets/logo.svg';

import api from '../../services/api';


export default function NewIncident(){
    
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ value, setValue ] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');


    async function handleIncidents(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };

     try {
        await api.post('incidents', data, {
            headers: {
                Authorization: ongId 
            }
        });
        history.push('/profile');
     }catch(error){
        alert("Error no cadastro, por favor tente novamente.");
     }
    }

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
                <form onSubmit={handleIncidents}>
                <input 
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Título do caso"
                />

                <textarea 
                 value={description}
                 onChange={e => setDescription(e.target.value)}
                placeholder="Descrição" 
                />

                <input 
                 value={value}
                 onChange={e => setValue(e.target.value)}
                placeholder="Valor em reais"
                />
            
                <button className="button" type="submit">Cadastrar</button>
            
                </form>
            </div>
        </div>
    )
}