import React, {useState} from 'react';
import Estilos from '../estilos/Estilos.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StyleSheet,TouchableOpacity,TextInput,SafeAreaView,ScrollView,Text,View} from 'react-native';

export default function Plantar(props){
    return (
        <SafeAreaView>
            <View>
                <Text style={Estilos.container}>Plantar</Text>
            </View>
            <View>
                <TouchableOpacity style={Estilos.btn} onPress={()=>props.navigation.navigate('Tomate')}>
                    <Text style={Estilos.txt}>Tomate</Text>
                </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity style={Estilos.btn} onPress={()=>props.navigation.navigate('Repolho')}>
                    <Text style={Estilos.txt}>Repolho</Text>
                </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity style={Estilos.btn} onPress={()=>props.navigation.navigate('Batata')}>
                    <Text style={Estilos.txt}>Batata</Text>
                </TouchableOpacity>             
            </View>
        </SafeAreaView>
    );
};
  