//Vamos a crear una funcion que se encargue del cifrado de cesar

let cesar =(function(){
    //function anonima
    ///callback

    let doStaff = function(txt, desp, action){
        let replace = (function(){
            //mi abecedario
            let abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
            let l = abc.length;

            //funcion que se encarga de cifrar
            return function(c){
                let i = abc.indexOf(c.toLowerCase());

                //a verificar que no este vacio
                if(i != -1){
                    let pos = i;
                    console.log(pos);
                    if(action){
                        //avanzar
                        pos += desp;
                        pos = (pos >= l)?pos-l:pos;
                        //pos -= (pos >= 1)?1:0;
                    }else{
                        //retroceder
                        pos -= desp;
                        pos = (pos < 0)?l+pos:pos;
                        //pos += (pos < 0)?1:0;
                    }
                    return abc[pos];
                }
                return c;
            };
        })();

        //aqui tenemos que hacer el match
        let re = (/[a-z-ñÑ]/ig);
        return String(txt).replace(re, function(match){
            return replace(match);
        });
    };
    //ahora falta saber si quiero cifrar o descifrar
    return{
        encode : function(txt,desp){
            return doStaff(txt,desp, true);
        },
        decode: function(txt,desp){
            return doStaff(txt,desp,false);
        }
    };
})();

//realizar una funcion que se encargue de codificar y decodificar
function codificar(){
    let despla = Math.abs(parseInt(document.getElementById("desplazamiento").value));
    document.getElementById("resultado").innerHTML = cesar.encode(
        document.getElementById("cadena").value, (despla >= 27)?despla%27:despla)
}

function decodificar(){
    let despla = Math.abs(parseInt(document.getElementById("desplazamiento").value));
    document.getElementById("resultado").innerHTML = cesar.decode(
        document.getElementById("cadena").value, (despla >= 27)?despla%27:despla)
}