const chai = require('chai');
const expect = chai.expect;

const porcentagemNumero = (a,b) =>{
    if(typeof a === "number" && typeof b === "number") return a % b
     else return undefined;
    
}
describe('Porcentagem', () => {
    it('Porcentagem de dois numeros - 13 e 5 ', (done) =>{
        const resultado = porcentagemNumero(13,5);
            expect(resultado).be.equal(3);
            done();
    
})
it('Porcentagem dois numeros - 1 e 2 ', (done) =>{
    const resultado = porcentagemNumero(1,2);
        expect(resultado).be.equal(1);
        done();
})
it('Porcentagem de dois numeros - "teste" e 3 ', (done) =>{
    const resultado = porcentagemNumero("teste",3);
        expect(resultado).be.equal(undefined);
         done();
})
it('Porcentagem de dois numeros - -13 e 5 ', (done) =>{
    const resultado = porcentagemNumero(-13,5);
        expect(resultado).be.equal(-3);
         done();
})
it('porcentagem de dois numeros - null e 3 ', (done) =>{
    const resultado = porcentagemNumero(null,3);
       expect(resultado).be.equal(undefined);
       done();
})
})
