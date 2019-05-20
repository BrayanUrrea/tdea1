const opciontes = {
    id :{
        default:0,
        alias: 'i'
    },
    nombre :{
        default:'',
        alias: 'n'
    },
    cedula:{
        default: 0,
        alias: 'c'
    }

}

const argv = require('yargs')
            .command ('Ingresar', opciontes)
            .argv

console.log(argv.estudiante);
