import React, {useState} from 'react';
import Estilos from '../estilos/Estilos.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StyleSheet,TouchableOpacity,TextInput,SafeAreaView,ScrollView,Text,View} from 'react-native';

export default function Horta(props){
    return (
        <SafeAreaView>
            <View>
                <Text style={Estilos.container}>Criar Horta</Text>
            </View>
            <View>
                <TouchableOpacity style={Estilos.btn} onPress={()=>props.navigation.navigate('Tradicional')}>
                    <Text style={Estilos.txt}>Horta Tradicional</Text>
                </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity style={Estilos.btn} onPress={()=>props.navigation.navigate('Mini')}>
                    <Text style={Estilos.txt}>Mini Horta</Text>
                </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity style={Estilos.btn} onPress={()=>props.navigation.navigate('Domestica')}>
                    <Text style={Estilos.txt}>Horta Domestica</Text>
                </TouchableOpacity>             
            </View>
        </SafeAreaView>
    );
};
  