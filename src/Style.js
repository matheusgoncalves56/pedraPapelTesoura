import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,       
    },
    computador: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    embate: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 50
    },
    jogador: {
        flex: 1,
        alignItems: 'center',
    },
    botoes: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    jogadorTxt:{
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 50
    },
    versus:{
        fontSize: 40
    },
    venceu: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'green'
    },
    perdeu: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'red'
    },
    empatou: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'orange'
    },
    titulo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    tituloTxt:{
        fontSize: 22,
        marginTop: 50
    }


});