import React, { Component } from 'react';
import {View} from 'react-native';
import styles from '../Style'
import TextoResultado from './TextoResultado';

class Topo extends Component{
    render(){
      return(
        <View style={styles.computador}>
          <TextoResultado vencedor={this.props.vencedor}/>
        </View>
      );
    }
  }

  export default Topo;