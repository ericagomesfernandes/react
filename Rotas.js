
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';



import  Perna from './Telas/Perna'
import Telas_spachs from './Telas/Telas_spachs'
import Exercicios from './Telas/Exercicios'
import Tela1 from './Telas/Tela1'
import Tela2 from './Telas/Tela2'
import Tela3 from './Telas/Tela3'
import Braco from './Telas/Braco'
import Abdomem from './Telas/Abdomem'
import Peito from './Telas/Peito'
import Ombro from './Telas/Ombro'
import Meus_dados from './Telas/Meus_dados'

//Abdomem
import Abdomem1 from './Telas/Abdomem1'
import Abdomem3 from './Telas/Abdomem3'
import Abdomem5 from './Telas/Abdomem5'
import Abdomem4 from './Telas/Abdomem4'
import Abdomem6 from './Telas/Abdomem6'
import Abdomem7 from './Telas/Abdomem7'
import Abdomem8 from './Telas/Abdomem8'
import Abdomem9 from './Telas/Abdomem9'
import Abdomem10 from './Telas/Abdomem10'
import Abdomem2 from './Telas/Abdomem2'


// Peito
import Peito1 from './Telas/Peito1'
import Peito2 from './Telas/Peito2'
import Peito3 from './Telas/Peito3'
import Peito4 from './Telas/Peito4'
import Peito5 from './Telas/Peito5'
import Peito6 from './Telas/Peito6'
import Peito7 from './Telas/Peito7'
import Peito8 from './Telas/Peito8'
//import Peito9 from './Telas/Peito9 '
import Peito10 from './Telas/Peito10'


// Braco 

import Braco1 from './Telas/Braco1'
import Braco2 from './Telas/Braco2'
import Braco3 from './Telas/Braco3'
import Braco4 from './Telas/Braco4'
import Braco5 from './Telas/Braco5'
import Braco6 from './Telas/Braco6'
import Braco7 from './Telas/Braco7'
import Braco8 from './Telas/Braco8'
import Braco9 from './Telas/Braco9'



//  Perna 

import Perna1 from './Telas/Perna1'
import Perna2 from './Telas/Perna2'
import Perna3 from './Telas/Perna3'
import Perna4 from './Telas/Perna4'
import Perna5 from './Telas/Perna5'
import Perna6 from './Telas/Perna6'
import Perna7 from './Telas/Perna7'
import Perna8 from './Telas/Perna8'
import Perna9 from './Telas/Perna9'



//Ombro 

import Ombro1 from './Telas/Ombro1'
import Ombro2 from './Telas/Ombro2'
import Ombro3 from './Telas/Ombro3'
import Ombro4 from './Telas/Ombro4'
import Ombro5 from './Telas/Ombro5'
import Ombro6 from './Telas/Ombro6'
import Ombro7 from './Telas/Ombro7'
import Ombro8 from './Telas/Ombro8'
import Ombro9 from './Telas/Ombro9'






const AppStackNavigator = StackNavigator({


  Tela1: { screen: Tela1 },
  Tela2: { screen: Tela2 },

  Meus_dados : { screen : Meus_dados},

  
  
  
  Telas_spachs : { screen : Telas_spachs },
  Exercicios: { screen : Exercicios},


  
 
  
  Tela3: { screen: Tela3 },
  
  

  // Ombro 

  Ombro1 : { screen : Ombro1},
  Ombro2 : { screen : Ombro2},
  Ombro3 : { screen : Ombro3},
  Ombro4 : { screen : Ombro4},
  Ombro5 : { screen : Ombro5},
  Ombro6 : { screen : Ombro6},
  Ombro7 : { screen : Ombro7},
  Ombro8 : { screen : Ombro8},
  Ombro9 : { screen : Ombro9},


  // perna 

  Perna1 : { screen : Perna1},
  Perna2 : { screen : Perna2},
  Perna3 : { screen : Perna3},
  Perna4 : { screen : Perna4},
  Perna5 : { screen : Perna5},
  Perna6 : { screen : Perna6},
  Perna7 : { screen : Perna7},
  Perna8 : { screen : Perna8},
  Perna9 : { screen : Perna9},


  //Braco

  Braco1 : { screen : Braco1},
  Braco2 : { screen : Braco2},
  Braco3 : { screen : Braco3},
  Braco4 : { screen : Braco4},
  Braco5 : { screen : Braco5},
  Braco6 : { screen : Braco6},
  Braco7 : { screen : Braco7},
  Braco8 : { screen : Braco8},
  Braco9 : { screen : Braco9},



  //Peito
  Peito : { screen : Peito1},
  Peito1: { screen: Peito1 },
  Peito10: { screen: Peito10 },
  //Peito9: { screen: Peito9 },
  Peito8: { screen: Peito8 },
  Peito7: { screen: Peito7 },
  Peito6: { screen: Peito6 },
  Peito5: { screen: Peito5 },
  Peito4: { screen: Peito4 },
  Peito3: { screen: Peito3 },
  Peito2: { screen: Peito2 },
  
  Peito1: { screen: Peito1 },


  Abdomem10: { screen: Abdomem10 },
  Abdomem9: { screen: Abdomem9 },
  Abdomem8: { screen: Abdomem8 },
  Abdomem7: { screen: Abdomem7 },
  Abdomem6: { screen: Abdomem6 },
  Abdomem5: { screen: Abdomem5 },
  Abdomem4: { screen: Abdomem4 },

  Abdomem3: { screen: Abdomem3 },

  Abdomem2: { screen: Abdomem2 },

  Abdomem1: { screen: Abdomem1 },
  Tela2: { screen: Tela2 },
 
 
 // Perna : { screen : Perna},
  Telas_spachs : { screen : Telas_spachs },
  
  Peito : { screen : Peito},
  Abdomem : { screen : Abdomem},
  Braco : { screen : Braco},
  Perna : { screen : Perna},
 
 
  Exercicios: { screen : Exercicios},
  Tela3: { screen: Tela3 },
  Ombro:{ screen : Ombro},
  

},
{
  headerMode: 'none'
}
);

export default class Rotas extends Component {


  render() {
    return (
      <AppStackNavigator/>
    )
  }

}

