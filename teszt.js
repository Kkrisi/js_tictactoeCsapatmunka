import { fuggoleges_ell, vizszintes_ell, atlo_ell, jatekListaFeltolt} from "./fuggvenyek.js";



//---------------------- Ellenőrizendők ----------------------
// 1. Üres lista
// 2. Csupa x
// 3. Csupa o
// 4. Általános, nincs győzelem, de nincs minden kitöltve
// 5. Általános, van győzelem, de nincs minden kitöltve
// 6. Általános, nincs győzelem, minden ki van töltve
// 7. Általános, van győzelem, minden ki van töltve

// 8.   _ _ x       Következő sorba folytatódik
//      x x _

// 9.   _ o _       Következő oszlopba folytatódik
//      o _ _
//      o _ _

  


export function Tesztek(){
    atloTeszt();
    fuggolegesTeszt();
    vizszintesTeszt();
    jatekListaFeltolt();
}


export function vizszintesTeszt(){
    console.log("Az 'vizSzintes' életbe lépett.");
    vizszintesTesztekUtasitasokAlapjan();
        
}

function vizszintesTesztekUtasitasokAlapjan(){
    vizszintesUresLista(); 
    vizszintesCsupaX();
    vizszintesCsupaO();
    vizszintesNincsGyozelemDeNincsMindenKitoltve();
    vizszintesVanGyozelemDeNincsMindenKitoltve();
    vizszintesNincsGyozelemViszontMindKivanToltve();
    vizszintesVanGyozelemMindkivanToltve();
    vizszintesKovetkezoSorbanFolytatodik();
}

function vizszintesUresLista(){
        let meret = 3;
        let lista = [' ', ' ', ' ',
                    ' ', ' ', ' ',
                    ' ', ' ', ' '];

        let vart = '   @   @   @';

        console.assert(
            vart === vizszintes_ell(meret,lista),
            "%o",
            `meret: ${meret}, lista: ${lista}, várt: ${vart}, eredmény: ${vart === atlo_ell(meret,lista)}`,
            "A várt eredmény nem stimmel -- Teszt_1 --"
        ); 
      
       
    
}

function vizszintesCsupaX(){
    let meret = 3;
    let lista = ['X', 'X', 'X',
                ' ', ' ', ' ',
                ' ', ' ', ' '];

    let vart = 'XXX@   @   @';

    console.assert(
        vart === vizszintes_ell(meret,lista),
        "%o",
        `meret: ${meret}, lista: ${lista}, várt: ${vart}, eredmény: ${vart === atlo_ell(meret,lista)}`,
        "A várt eredmény nem stimmel -- Teszt_2 --"
    ); 
}

function vizszintesCsupaO(){
    let meret = 3;
    let lista = ['O', 'O', 'O',
                ' ', ' ', ' ',
                ' ', ' ', ' '];

    let vart = 'OOO@   @   @';

    console.assert(
        vart === vizszintes_ell(meret,lista),
        "%o",
        `meret: ${meret}, lista: ${lista}, várt: ${vart}, eredmény: ${vart === atlo_ell(meret,lista)}`,
        "A várt eredmény nem stimmel -- Teszt_3 --"
    ); 
}

function vizszintesNincsGyozelemDeNincsMindenKitoltve(){
    let meret = 3;
    let lista = [' ', 'O', 'O',
                ' ', ' ', ' ',
                ' ', 'X', 'X'];

    let vart = ' OO@   @ XX@';

    console.assert(
        vart === vizszintes_ell(meret,lista),
        "%o",
        `meret: ${meret}, lista: ${lista}, várt: ${vart}, eredmény: ${vart === atlo_ell(meret,lista)}`,
        "A várt eredmény nem stimmel -- Teszt_4 --"
    ); 
}

function vizszintesVanGyozelemDeNincsMindenKitoltve(){
    let meret = 3;
    let lista = [' ', 'O', 'O',
                ' ', ' ', ' ',
                'X', 'X', 'X'];

    let vart = ' OO@   @XXX@';

    console.assert(
        vart === vizszintes_ell(meret,lista),
        "%o",
        `meret: ${meret}, lista: ${lista}, várt: ${vart}, eredmény: ${vart === atlo_ell(meret,lista)}`,
        "A várt eredmény nem stimmel -- Teszt_5 --"
    ); 
}

function vizszintesNincsGyozelemViszontMindKivanToltve() {
    let meret = 3;
    let lista = ['X','O','O',
                 'X', 'O','X',
                 'O', 'X', 'X'
            ];

    let vart = 'XOO@XOX@OXX@';

    console.assert(
        vart === vizszintes_ell(meret,lista),
        "%o",
        `meret: ${meret}, lista: ${lista}, várt: ${vart}, eredmény: ${vart === atlo_ell(meret,lista)}`,
        "A várt eredmény nem stimmel -- Teszt_6 --"
    ); 
}

function vizszintesVanGyozelemMindkivanToltve(){
    let meret = 3;
    let lista = ['X','O','O',
                 'O', 'O','X',
                 'X', 'X', 'X'
            ];

    let vart = 'XOO@OOX@XXX@';

    console.assert(
        vart === vizszintes_ell(meret,lista),
        "%o",
        `meret: ${meret}, lista: ${lista}, várt: ${vart}, eredmény: ${vart === atlo_ell(meret,lista)}`,
        "A várt eredmény nem stimmel -- Teszt_7 --"
    ); 
}
function vizszintesKovetkezoSorbanFolytatodik(){
    let meret = 3;
    let lista = ['','','X',
                 'X', 'X','',
                 '', '', ''
            ];

    let vart = 'X@XX@@';

    console.assert(
        vart === vizszintes_ell(meret,lista),
        "%o",
        `meret: ${meret}, lista: ${lista}, várt: ${vart}, eredmény: ${vart === atlo_ell(meret,lista)}`,
        "A várt eredmény nem stimmel -- Teszt_8 --"
    ); 
}



































export function fuggolegesTeszt(){

    console.log("Az 'fuggolegesTeszt' életbe lépett.");


    // 1. Üres lista
    function teszt_1(){
        let meret = 3;
        let lista = [' ', ' ', ' ',
                    ' ', ' ', ' ',
                    ' ', ' ', ' '];

        let vart = '   @   @   @';

        console.assert(
            vart === fuggoleges_ell(meret,lista),
            "%o",
            `meret: ${meret}, lista: ${lista}, várt: ${vart}, eredmény: ${vart === fuggoleges_ell(meret,lista)}`,
            "A várt eredmény nem stimmel -- fuggolegesTeszt_1 --"
        ) // Sikeres!
    }



    // 2. Csupa x
    function teszt_2(){
        let meret = 3;
        let lista = ['X', ' ', ' ',
                    'X', ' ', ' ',
                    'X', ' ', ' '];

        let vart = 'XXX@   @   @';

        console.assert(
            vart === fuggoleges_ell(meret,lista),
            "%o",
            `meret: ${meret}, lista: ${lista}, várt: ${vart}, eredmény: ${vart === fuggoleges_ell(meret,lista)}`,
            "A várt eredmény nem stimmel -- fuggolegesTeszt_2 --"
        ) // Sikeres!
    }



    // 3. Csupa o
    function teszt_3(){
        let meret = 3;
        let lista = [' ', 'O', ' ',
                    ' ', 'O', ' ',
                    ' ', 'O', ' '];

        let vart = '   @OOO@   @';

        console.assert(
            vart === fuggoleges_ell(meret,lista),
            "%o",
            `meret: ${meret}, lista: ${lista}, várt: ${vart}, eredmény: ${vart === fuggoleges_ell(meret,lista)}`,
            "A várt eredmény nem stimmel -- fuggolegesTeszt_3 --"
        ) // Sikeres!
    }



    // 4. Általános, nincs győzelem, de nincs minden kitöltve
    function teszt_4(){
        let meret = 3;
        let lista = ['O', '', 'X',
                    'O', 'X', '',
                    'X', 'O', 'O'];

        let vart = 'OOX@XO@XO@';

        console.assert(
            vart === fuggoleges_ell(meret,lista),
            "%o",
            `meret: ${meret}, lista: ${lista}, várt: ${vart}, eredmény: ${vart === fuggoleges_ell(meret,lista)}`,
            "A várt eredmény nem stimmel -- fuggolegesTeszt_4 --"
        ) // Sikeres!
    }



    // 5. Általános, van győzelem, de nincs minden kitöltve
    function teszt_5(){
        let meret = 3;
        let lista = ['O', '', 'X',
                    'O', 'X', ' ',
                    'O', 'X', 'X'];

        let vart = 'OOO@XX@X X@';

        console.assert(
            vart === fuggoleges_ell(meret,lista),
            "%o",
            `meret: ${meret}, lista: ${lista}, várt: ${vart}, eredmény: ${vart === fuggoleges_ell(meret,lista)}`,
            "A várt eredmény nem stimmel -- fuggolegesTeszt_5 --"
        ) // Sikeres!
    }



    // 6. Általános, nincs győzelem, minden ki van töltve
    function teszt_6(){
        let meret = 3;
        let lista = ['O', 'X', 'X',
                     'O', 'X', 'O',
                     'X', 'O', 'O'];

        let vart = 'OOX@XXO@XOO@';

        console.assert(
            vart === fuggoleges_ell(meret,lista),
            "%o",
            `meret: ${meret}, lista: ${lista}, várt: ${vart}, eredmény: ${vart === fuggoleges_ell(meret,lista)}`,
            "A várt eredmény nem stimmel -- fuggolegesTeszt_6 --"
        ) // Sikeres!
    }




    // 7. Általános, van győzelem, minden ki van töltve
    function teszt_7(){
        let meret = 3;
        let lista = ['X', 'O', 'O',
                    'O', 'X', 'O',
                    'X', 'X', 'O'];

        let vart = 'XOX@OXX@OOO@';

        console.assert(
            vart === fuggoleges_ell(meret,lista),
            "%o",
            `meret: ${meret}, lista: ${lista}, várt: ${vart}, eredmény: ${vart === fuggoleges_ell(meret,lista)}`,
            "A várt eredmény nem stimmel -- fuggolegesTeszt_7 --"
        ) // Sikeres!
    }




    // 8.   _ o _       Következő oszlopba folytatódik
    //      o _ _
    //      o _ _
    function teszt_8(){
        let meret = 3;
        let lista = [' ', ' ', 'X',
                    ' ', 'X', ' ',
                    ' ', 'X', ' '];

        let vart = '   @ XX@X  @';

        console.assert(
            vart === fuggoleges_ell(meret,lista),
            "%o",
            `meret: ${meret}, lista: ${lista}, várt: ${vart}, eredmény: ${vart === fuggoleges_ell(meret,lista)}`,
            "A várt eredmény nem stimmel -- fuggolegesTeszt_8 --"
        ) // Sikeres!
    }



    
    teszt_1();
    teszt_2();
    teszt_3();
    teszt_4();
    teszt_5();
    teszt_6();
    teszt_7();
    teszt_8();

}

































export function atloTeszt(){

    console.log("Az 'atloTeszt' életbe lépett.");


    // 1. Üres lista
    function teszt_1(){
        let meret = 3;
        let lista = [' ', ' ', ' ',
                    ' ', ' ', ' ',
                    ' ', ' ', ' '];

        let vart = '   @   ';

        console.assert(
            vart === atlo_ell(meret,lista),
            "%o",
            `meret: ${meret}, lista: ${lista}, várt: ${vart}, eredmény: ${vart === atlo_ell(meret,lista)}`,
            "A várt eredmény nem stimmel -- Teszt_1 --"
        ) // Sikeres!
    }



    // 2. Csupa x
    function teszt_2(){
        let meret = 3;
        let lista = ['X', ' ', ' ',
                    ' ', 'X', ' ',
                    ' ', ' ', 'X'];

        let vart = 'XXX@ X ';

        console.assert(
            vart === atlo_ell(meret,lista),
            "%o",
            `meret: ${meret}, lista: ${lista}, várt: ${vart}, eredmény: ${vart === atlo_ell(meret,lista)}`,
            "A várt eredmény nem stimmel -- Teszt_2 --"
        ) // Sikeres!
    }



    // 3. Csupa o
    function teszt_3(){
        let meret = 3;
        let lista = ['O', ' ', ' ',
                    ' ', 'O', ' ',
                    ' ', ' ', 'O'];

        let vart = 'OOO@ O ';

        console.assert(
            vart === atlo_ell(meret,lista),
            "%o",
            `meret: ${meret}, lista: ${lista}, várt: ${vart}, eredmény: ${vart === atlo_ell(meret,lista)}`,
            "A várt eredmény nem stimmel -- Teszt_3 --"
        ) // Sikeres!
    }



    // 4. Általános, nincs győzelem, de nincs minden kitöltve
    function teszt_4(){
        let meret = 3;
        let lista = ['O', '', 'X',
                    ' ', 'X', ' ',
                    ' ', ' ', 'O'];

        let vart = 'OXO@XX ';

        console.assert(
            vart === atlo_ell(meret,lista),
            "%o",
            `meret: ${meret}, lista: ${lista}, várt: ${vart}, eredmény: ${vart === atlo_ell(meret,lista)}`,
            "A várt eredmény nem stimmel -- Teszt_4 --"
        ) // Sikeres!
    }



    // 5. Általános, van győzelem, de nincs minden kitöltve
    function teszt_5(){
        let meret = 3;
        let lista = ['O', '', 'X',
                    ' ', 'O', ' ',
                    ' ', ' ', 'O'];

        let vart = 'OOO@XO ';

        console.assert(
            vart === atlo_ell(meret,lista),
            "%o",
            `meret: ${meret}, lista: ${lista}, várt: ${vart}, eredmény: ${vart === atlo_ell(meret,lista)}`,
            "A várt eredmény nem stimmel -- Teszt_5 --"
        ) // Sikeres!
    }



    // 6. Általános, nincs győzelem, minden ki van töltve
    function teszt_6(){
        let meret = 3;
        let lista = ['O', '', 'X',
                    ' ', 'O', ' ',
                    'X', ' ', 'X'];

        let vart = 'OOX@XOX';

        console.assert(
            vart === atlo_ell(meret,lista),
            "%o",
            `meret: ${meret}, lista: ${lista}, várt: ${vart}, eredmény: ${vart === atlo_ell(meret,lista)}`,
            "A várt eredmény nem stimmel -- Teszt_6 --"
        ) // Sikeres!
    }




    // 7. Általános, van győzelem, minden ki van töltve
    function teszt_7(){
        let meret = 3;
        let lista = ['O', '', 'X',
                    ' ', 'X', ' ',
                    'X', ' ', 'O'];

        let vart = 'OXO@XXX';

        console.assert(
            vart === atlo_ell(meret,lista),
            "%o",
            `meret: ${meret}, lista: ${lista}, várt: ${vart}, eredmény: ${vart === atlo_ell(meret,lista)}`,
            "A várt eredmény nem stimmel -- Teszt_7 --"
        ) // Sikeres!
    }




    // 8.   _ _ x       Következő sorba folytatódik  (ez átlónál teljesen máshogy néz ki, elosszor bal felsőből jobb le átló, majd jobb felso bal alsoba)
    //      x x _
    function teszt_8(){
        let meret = 3;
        let lista = ['', '', 'O',
                    ' ', 'O', ' ',
                    '', ' ', 'O'];

        let vart = 'OO@OO';

        console.assert(
            vart === atlo_ell(meret,lista),
            "%o",
            `meret: ${meret}, lista: ${lista}, várt: ${vart}, eredmény: ${vart === atlo_ell(meret,lista)}`,
            "A várt eredmény nem stimmel -- Teszt_8 --"
        ) // Sikeres!
    }



    // 9.   _ o _       Következő oszlopba folytatódik
    //      o _ _
    //      o _ _
    function teszt_9(){
        let meret = 3;
        let lista = ['', '', 'X',
                    ' ', 'X', ' ',
                    '', ' ', 'X'];

        let vart = 'XX@XX';

        console.assert(
            vart === atlo_ell(meret,lista),
            "%o",
            `meret: ${meret}, lista: ${lista}, várt: ${vart}, eredmény: ${vart === atlo_ell(meret,lista)}`,
            "A várt eredmény nem stimmel -- Teszt_9 --"
        ) // Sikeres!
    }



    
    teszt_1();
    teszt_2();
    teszt_3();
    teszt_4();
    teszt_5();
    teszt_6();
    teszt_7();
    teszt_8();
    teszt_9();
}

























/*
export function jatekListaFeltoltTeszt(){
    console.log("Az 'jatekListaFeltoltTeszt' életbe lépett.");
}
*/