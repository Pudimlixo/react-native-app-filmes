import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#0E1126',
      alignItems:'center',
      margin:0,
    },
    
    cabecalhoDisplay:{
      flex:1,
      padding:10,
      flexDirection:'row',
      gap:10,
      alignItems:'center',
      width:'100%',
    },

    tituloContainer: {
    flex: 1,
    alignItems:'center',
  },

    tituloPrincipal:{
      color:'white',
      marginTop:10,
      fontSize:'1.2em',
    },

    imagemLogo:{
      width:30,
      height:30,
    },

    inputCabecalho:{
      width:100,
      height:30,
      borderRadius:10,
      backgroundColor:'whitesmoke',
      padding:5,
    },

    bannerContainer:{
    flex:1,
    alignItems:'center',
    width:'100%',
    padding:10,
  },

    imagemBanner:{
      width:280,
      height:150,
      borderRadius:10,
    },
  });

export default styles;