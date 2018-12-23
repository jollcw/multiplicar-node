const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola tabla multiplicar', opts)
    .command('crear', 'Crear archivo tabla multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}