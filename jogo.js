function  jogar ( escolher jogador ) {
    const  jogouscomputador  =  [ "pedra" ,  "tesoura" ,  "papel" ] ;

    const  escolhacomputador  =  jogadascomputador  [ Math . floor ( Math . random ( )   *  jogadascomputador . length ) ] ;

        if  ( ( escolhajogador  ===  "pedra"  &&  escolhacomputador  ===  "papel"  ) ||
          ( escolhajogador  ===  "papel"  &&  escolhacomputador  ===  "tesoura" )  ||
           ( escolhajogador  ===  "tesoura"  &&  escolhacomputador  ===  "pedra" )
           )
           {
            console . log ( "O computador escolheu "   + escolhacomputador +  ", você perdou" ) ;
           } 
           else  if  ( escolhajogador  ===  escolhacomputador ) {
            console . log  ( "O computador escolheu " +  escolhacomputador + ", empate" ) ;
        
           } senão
           {
           console . log ( "O computador escolheu " +  escolhacomputador +  ", você ganhou" ) ;
        }

} 
