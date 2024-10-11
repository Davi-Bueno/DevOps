const calcularMedia = require('./aluno')

describe('teste notas',()=>{
    let Alu;
    
    beforeEach(()=>{
        Alu= calcularMedia()
    })

    test('Teste 1',()=>{
        expect(Alu.calcularMedia(5,5).toBe(5))
    })
})

