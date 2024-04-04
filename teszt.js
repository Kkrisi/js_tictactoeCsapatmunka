import { fuggoleges_ell} from "./fuggvenyek.js";
function main(){
    Tesztek();

}

export function Tesztek(){
    vizszintesTeszt();
    fuggolegesTeszt();
    atloTeszt();
}


export function vizszintesTeszt(szoveg){
        console.log(`Külső függvénnyel kinyert szoveg: ${szoveg}`);
        

        
}

export function fuggolegesTeszt(){
    let meret = 3; 
    let lista = ["O",  ,"X",
                 "O","O","X",
                   ,   ,"X"];
    let vart = ['O X', 'OOX', '  X', 'OO ', ' O ', 'XXX', 'OOX', 'XO '];
    console.assert(
        vart === fuggoleges_ell(meret,lista),
        "%o",
        `meret: ${meret}, lista: ${lista}, vart: ${vart}`,
        "A várt eredmény nem stimmel"
    )
    meret = 3;
    lista = [ ,"O",   ,"X",
               "O", "X" ,"O"
              ,"O", "X",  "O",]
    vart = [' O ', 'XOX', 'OOX', ' XO', 'OOO', ' XX', ' OX', ' OO'];
    console.assert(
        vart === fuggoleges_ell(meret,lista),
        "%o",
        `meret: ${meret}, lista: ${lista}, vart: ${vart}`,
        "A várt eredmény nem stimmel"
    )

    // function fuggoleges_ell(meret, lista) {
    //     let szoveg = "";
    //     for (let index = 0; index < meret; index++) {
    //       for (let j = 0; j < meret * meret; j += parseInt(meret)) {
    //         szoveg += lista[index + j];
    //       }
    //       szoveg += "@";
    //     }
    //     return szoveg;
    //   }
    
}


function atloTeszt(){


}

main();