// const { crearArchivo, listarTabla } = require('./mutiplicar/mutiplicar');
const mutiplicar = require('./mutiplicar/mutiplicar');
const argv = require('./config/yargs').argv;

let comando = argv._[0];

// console.log('process.argv', process.argv);
// console.log('argv :', argv);
// console.log('argv.base :', argv.base);
// console.log('argv._[0] :', argv._[0]);

switch (comando) {
    case 'listar':
        console.log('listar');
        mutiplicar.listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        console.log('crear');
        mutiplicar.crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log('Error:', e));
        break;

    default:
        console.log('Comando no reconocido');
        break;
}

