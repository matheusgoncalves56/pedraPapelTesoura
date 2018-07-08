import React, { Component } from 'react';
import {Text} from 'react-native';
import styles from '../Style';

class TextoResultado extends Component{
    render(){
      if(this.props.vencedor == 'Você ganhou!'){
        return(<Text style={styles.venceu}>{this.props.vencedor}</Text>);
      }else if(this.props.vencedor == 'Você perdeu!'){
        return(<Text style={styles.perdeu}>{this.props.vencedor}</Text>);
      }else if(this.props.vencedor == 'Empatou!'){
        return(<Text style={styles.empatou}>{this.props.vencedor}</Text>);
      }else{
        return false;
      }
    }
}

export default TextoResultado;
