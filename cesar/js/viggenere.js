let viggenere =(function(){
    //function anonima
    ///callback

    let doStaff = function(txt, desp, action){
        let replace = (function(){
            
            let abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
            let l = abc.length;
            
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
                        pos -= desp;
                        pos = (pos < 0)?l+pos:pos;                                                
                    }
                    return abc[pos];
                }
                return c;
            };
        })();

        
        let re = (/[a-z-ñÑ]/ig);
        return String(txt).replace(re, function(match){
            return replace(match);
        });
    };
    
    return{
        encode : function(txt,desp){
            return doStaff(txt,desp, true);
        },
        decode: function(txt,desp){
            return doStaff(txt,desp,false);
        }
    };
})();

function codificar(txtPlano, clave){     
    let textoCodificado = "";
    let indiceCharClave = 0;
    let charArryTxtPlano = txtPlano.split('');
    for (let i = 0; i < charArryTxtPlano.length; i++) { 
        let despla = obtenerIndexClave(clave.charAt(indiceCharClave));
        let charTextoPlano = charArryTxtPlano[i];
        textoCodificado += viggenere.encode(charTextoPlano, (despla >= 27)?despla%27:despla);
        indiceCharClave++;
        indiceCharClave = (indiceCharClave >= clave.length)? 0 : indiceCharClave;
    }    
    document.getElementById("resultado").value = textoCodificado;
}

function decodificar(txtCodificado,clave){
    let textoDecodificado = "";
    let indiceCharClave = 0;
    let charArryTxtCodificado = txtCodificado.split('');
    for (let i = 0; i < charArryTxtCodificado.length; i++) {        
        let despla = obtenerIndexClave(clave.charAt(indiceCharClave));
        let charTextoCodificado = charArryTxtCodificado[i];
        textoDecodificado += viggenere.decode(charTextoCodificado, (despla >= 27)?despla%27:despla);
        indiceCharClave++;
        indiceCharClave = (indiceCharClave >= clave.length)? 0 : indiceCharClave;
    }
    document.getElementById("resultado").value = textoDecodificado;
}

function obtenerIndexClave(charClave){
    let abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
    return abc.indexOf(charClave.toLowerCase());
}

function Validardecodificar(){
    let clave = document.getElementById("clave").value;
    let txtCodificado = document.getElementById("cadena2").value;

    if(clave.length > txtCodificado.length){ 
        alert("La clave es más grande que el texto entregado");
    }else{
        decodificar(txtCodificado,clave);
    }
}

function Validarcodificar(){
    let clave = document.getElementById("clave").value;
    let txtPlano = document.getElementById("cadena2").value;

    if(clave.length > txtPlano.length){
        alert("La clave es más grande que el texto entregado");
    }else{
        codificar(txtPlano,clave);
    }
}

function ResetText(){    
    document.getElementById("clave").value = "";
    document.getElementById("cadena2").value = "";
    document.getElementById("resultado").value = "";
}