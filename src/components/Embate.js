import React, { Component } from 'react';
import {View, Text} from 'react-native';
import styles from '../Style';
import Icone from './Icone';

class Embate extends Component{
    render(){
      return(
        <View style={styles.embate}>
          <Icone escolha={this.props.escolhaDoUsuario}></Icone>
          <Text style={styles.versus}>X</Text>
          <Icone escolha={this.props.escolhaDoComputador}></Icone>
        </View>
      );
    }
}

export default Embate;