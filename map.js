const alunos = [
    {
        nome: 'Diego',
        idade: '33',
        curso:'Ciência da Computação',
        universidade:'FACIMA'
    },
    {
        nome: 'Taisa',
        idade: '30',
        curso:'Engenharia',
        universidade:'UNIRB'
    },
    {
        nome: 'Diogo',
        idade: '37',
        curso:'Administração',
        universidade:'CESMAC'
    },
    {
        nome: 'Douglas',
        idade: '34',
        curso:'Contabilidade',
        universidade:'FACIMA'
    },
    {
        nome: 'Túlio',
        idade: '28',
        curso:'Agronomia',
        universidade: 'UFAL'
    }
]
const converteObjeto = (objeto) => {
    return {
        nome: objeto.nome,
        idade: objeto.idade,
        nomeIdade: '${objeto.nome} + ${objeto.idade}'
    }
}

console.log(alunos.map(converteObjeto));