const fs = require ('fs');

let listarTabla = (base, limite) => {

    let data = '';

    for (let i = 0; i < limite; i++) {
        console.log(`${base}  x ${i} = ${base * i}`);        
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        
        if(!Number(base)) {
            reject(`el valor: ${base}, no es un número`);
            return;
        }

        let data = '';

        for (let i = 0; i <= limite; i++) {
            console.log(`${base} x i = ${base * i}`)
        
            data += `${base} x ${i} = ${base * i}\n` ;
        
        }
        
        // fs.writeFile(`.\\base-node\\tablas\\tabla-${base}.txt`, data, (err) => {
        fs.writeFile(`.\\tablas\\tabla-${base}_limite-${limite}.txt`, data, (err) => {
            if(err) 
                reject(err);
            else
                resolve(`tabla-${base}_limite-${limite}.txt`)
                // console.log(`El archibo tabla-${base}.txt ha sido grabado` );
        });


    });
};


/* 
//ES6
(function() {
	if(true) {
    	let x = "hola mundo";
    }
    console.log(x); 
    //Da error, porque "x" ha sido definida dentro del "if"
})();
 */

module.exports = {
    crearArchivo,
    listarTabla
}
