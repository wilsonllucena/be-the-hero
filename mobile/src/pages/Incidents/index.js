import React, {useState, useEffect }  from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View , FlatList, Image , Text, TouchableOpacity } from 'react-native';
import api from '../../services/api';

// FlatList para fazer uma lista
import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Incidents () {
 
const [incidents , setIncidents] = useState([]);
const [total , setTotal] = useState(0);
const [page , setPage] = useState(1);
const [loading , setLoading] = useState(false);


const navigation = useNavigation();

function navigationToDetail(incident){
    navigation.navigate('Detail', { incident })
}

// Acessa a api e pega os dados ṕreenchendo o estado
async function loadIncidents(){

    if(loading){
        return;
    }

    if(total > 0 && incidents.length === total){
        return;
    }

    setLoading(true); // Inicia o carregamento
    const response = await api.get('incidents', {
        params: { page }
    });
    
    setIncidents([...incidents , ...response.data]); // anexar 2 vetores dentro de unico vetor com isso eu sempre vou carregar o novo resultado
    setTotal(response.headers['x-total-count']);

    setPage(page + 1); // Busca a proxima pagina para carregar
    setLoading(false);// Finaliza após as requisição o carregamento


}

useEffect(()=> {
    loadIncidents();
}, [])

 return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={logoImg} />
            <Text style={styles.headerText}>
                Total de <Text style={styles.headerTextBold}>{ total } casos</Text>
            </Text>
        </View>

        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.description}>Escolha um dos casos a baixo e salve o dia</Text>

        <FlatList 
            data={incidents}
            style={styles.incidentList}
            keyExtractor={incident => String(incident.id)}
            showsVerticalScrollIndicator={false}
            onEndReached={loadIncidents}
            onEndReachedThreshold={0.2}
            renderItem={({ item: incident }) => (
            <View style={styles.incident}>
                <Text style={styles.incidentProperty}>ONG:</Text>
                <Text style={styles.incidentValue}>{incident.name}</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>{incident.title} </Text>

                <Text style={styles.incidentProperty} >VALUE:</Text>
                <Text style={styles.incidentValue}>{
                Intl.NumberFormat('pt-BR', {
                    style: 'currency', 
                    currency: 'BRL'})
                    .format(incident.value)}
                </Text>

                <TouchableOpacity style={styles.detailsButton} 
                onPress={() => navigationToDetail(incident)}>
                    <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                    <Feather name="arrow-right" size={16} color="#E02041" />
                </TouchableOpacity>
            </View>
            )}
        />
    </View>
 );
};