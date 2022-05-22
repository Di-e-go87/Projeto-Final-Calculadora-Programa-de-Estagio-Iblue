const chai = require('chai');
const expect = chai.expect;

const raizquadradaNumero = (a,b) =>{
    if(typeof a === "number" && typeof b === "number") return a ** b ;
    else return undefined;
 }

describe('RaizQuadrada', () => {
it('Raiz Quadrada de um numero -4,3', (done) =>{
    const resultado = raizquadradaNumero(4,3);
        expect(resultado).be.equal(64);
        done();
})

it('Raiz Quadrada de um numeros - 2,3 ', (done) =>{
    const resultado = raizquadradaNumero(2,3);
        expect(resultado).be.equal(8);
        done();
})

it('Raiz Quadrada de um numeros - 10,-1 ', (done) =>{
    const resultado = raizquadradaNumero(10,-1);
        expect(resultado).be.equal(0.1);
        done();
 })
    it('Raiz Quadrada de um numeros - "teste",2 ', (done) =>{
        const resultado = raizquadradaNumero("teste",2);
            expect(resultado).be.equal(undefined);
            done();
})    
it('Raiz Quadrada de um numeros - "null",3 ', (done) =>{
const resultado = raizquadradaNumero("null",3);
        expect(resultado).be.equal(undefined);
        done();
})                  
});
