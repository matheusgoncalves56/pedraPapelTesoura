import React, { Component } from 'react';
import {Image} from 'react-native';
import styles from '../Style';

class Icone extends Component{
    render(){
      if(this.props.escolha == 'pedra'){
        return(<Image source={require('../assets/pedra.png')}></Image>);
      }else if(this.props.escolha == 'papel'){
        return (<Image source={require('../assets/papel.png')}></Image>);
      }else if(this.props.escolha == 'tesoura'){
        return (<Image source={require('../assets/tesoura.png')}></Image>);
      }else{
        return false;
      }
    }
}

export default Icone;