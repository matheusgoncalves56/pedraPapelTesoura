import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import styles from './src/Style'
import Embate from './src/components/Embate';
import Icone from './src/components/Icone';
import TextoResultado from './src/components/TextoResultado';
import Topo from './src/components/Topo';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = { escolhaDoUsuario: '', escolhaDoComputador: '', vencedor: '' }
  }

  jogada(escolhaDoUsuario){
    var numeroAleatorio = this.gerarNumeroAleatorio(3);
    var escolhaDoComputador = this.escolhaDoComputador(numeroAleatorio);
    var vencedor = this.verificarVencedor(escolhaDoUsuario, escolhaDoComputador);
  
    this.setState({escolhaDoUsuario: escolhaDoUsuario, escolhaDoComputador: escolhaDoComputador, vencedor: vencedor});
  }  

  verificarVencedor(escolhaDoUsuario, escolhaDoComputador){
    if(escolhaDoComputador == 'pedra'){
      if(escolhaDoUsuario == 'tesoura'){
        return 'Você perdeu!';
      }else if(escolhaDoUsuario == 'papel'){
        return 'Você ganhou!';
      }else{
        return 'Empatou!';
      }
    }else if(escolhaDoComputador == 'papel'){
      if(escolhaDoUsuario == 'pedra'){
        return 'Você perdeu!';
      }else if(escolhaDoUsuario == 'tesoura'){
        return 'Você ganhou!';
      }else{
        return 'Empatou!';
      }
    }else{
      if(escolhaDoUsuario == 'papel'){
        return 'Você perdeu!';
      }else if(escolhaDoUsuario == 'pedra'){
        return 'Você ganhou!';
      }else{
        return 'Empatou!';
      }
    }
  }
  
  escolhaDoComputador(numero){
    if(numero == 0){
      return 'pedra';
    }else if(numero == 1){
      return 'papel';
    }else{
      return 'tesoura';
    }
  }
  
  gerarNumeroAleatorio(range) {
    var numeroAleatorio = Math.random();
    numeroAleatorio = Math.floor(numeroAleatorio * range);
    return numeroAleatorio;
  }

  render() {
    return (
      <View style={styles.container}>
        <Topo vencedor={this.state.vencedor}></Topo>
        <View style={styles.titulo}>
          <Text style={styles.tituloTxt}>Você</Text>
          <Text style={styles.tituloTxt}>Adversário</Text>
        </View>
        <Embate escolhaDoComputador={this.state.escolhaDoComputador}
          escolhaDoUsuario={this.state.escolhaDoUsuario}
          vencedor={this.state.vencedor}></Embate>
        <View style={styles.jogador}>
          <Text style={styles.jogadorTxt}>Sua jogada:</Text>
        </View>
        <View style={styles.botoes}>
            <TouchableOpacity onPress={ () => {this.jogada('pedra')} }>
              <Image source={require('./src/assets/pedra.png')}></Image>
            </TouchableOpacity>

            <TouchableOpacity onPress={ () => {this.jogada('papel')} }>
              <Image source={require('./src/assets/papel.png')}></Image>
            </TouchableOpacity>

            <TouchableOpacity onPress={ () => {this.jogada('tesoura')} }>
              <Image source={require('./src/assets/tesoura.png')}></Image>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}

