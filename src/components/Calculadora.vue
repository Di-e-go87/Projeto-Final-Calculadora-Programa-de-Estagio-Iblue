<template>  
  <div class="calculadora">
    <div class="display">{{valorCorrente || '0'}}</div>
    <div v-on:click="limpar" class="botao">C</div>
    <div v-on:click="raizquadrada" class="botao">√</div>
    <div v-on:click="porcentagem" class="botao">%</div>
    <div v-on:click="dividir" class="botao operadores">÷</div>
    <div v-on:click="juntarNumeros('7')" class="botao">7</div>
    <div v-on:click="juntarNumeros('8')" class="botao">8</div>
    <div v-on:click="juntarNumeros('9')" class="botao">9</div>
    <div v-on:click="multiplicar" class="botao operadores">x</div>
    <div v-on:click="juntarNumeros('4')" class="botao">4</div>
    <div v-on:click="juntarNumeros('5')" class="botao">5</div>
    <div v-on:click="juntarNumeros('6')" class="botao">6</div>
    <div v-on:click="diminuir" class="botao operadores">-</div>
    <div v-on:click="juntarNumeros('1')" class="botao">1</div>
    <div v-on:click="juntarNumeros('2')" class="botao">2</div>
    <div v-on:click="juntarNumeros('3')" class="botao">3</div>
    <div v-on:click="somar" class="botao operadores">+</div>
    <div v-on:click="sinal" class="botao">+/-</div>
    <div v-on:click="juntarNumeros('0')" class="botao ">0</div> 
    <div v-on:click="ponto" class="botao">.</div>
    <div v-on:click="resultado" class="botao operadores">=</div>
    
  </div>

</template>

<script>
export default {
  name: 'CalcuLadora',
    data() {
    return{
      output:'',
      valorCorrente:'',
      numeroAnterior: null,
      operador: null,
      operadorClicado: false,    
      
};
},
methods:{
  limpar(){
    this.valorCorrente = '';
  },

  sinal(){
    this.valorCorrente = this.valorCorrente.charAt(0) == '-'
    ? this.valorCorrente.slice(1)
    : `-${this.valorCorrente}`;
},

porcentagem (){
  this.valorCorrente = `${parseFloat(this.valorCorrente) / 100 }`;
},

juntarNumeros(numero){
  if (this.operadorClicado){
    this.valorCorrente = '';
    this.operadorClicado = false;
}
  this.valorCorrente = `${this.valorCorrente}${numero}`;
},

ponto(){  
  if(this.valorCorrente.indexOf('.') === -1){
this.juntarNumeros('.');
}

},
setarValor(){
  this.numeroAnterior = this.valorCorrente;
  this.operadorClicado = true;

},
dividir(){
  this.operador = (num1, num2) => num1 / num2;
  this.setarValor();

},
multiplicar(){
  this.operador = (num1, num2) => num1 * num2;
  this.setarValor();
  

},
raizquadrada(){
   if(this.valorCorrente.Math.sqrt('.') )
this.juntarNumeros('.');
 
 

},
  diminuir(){
    this.operador = (num1, num2) => num1 - num2;
    this.setarValor();

},
  somar(){
     this.operador = (num1, num2) => num1 + num2;
    this.setarValor();
  
      
},
resultado(){
  this.valorCorrente = `${this.operador(
    parseFloat(this.numeroAnterior),
    parseFloat(this.valorCorrente),
    )}`;
    this.numeroAnterior = null;
    }
  },
};
</script>
<style scoped>

.calculadora {
  margin: 0 auto;
  width: 655px;
  font-size: 80px;
  display: grid;
  grid-template-columns: repeat(4, 5fr);
  grid-auto-rows: minmax(70px, auto);
  text-align: center;

}

.display {
  grid-column: 1 / 5;
  background-color: #daf0f8;
  color: rgb(0, 0, 0);
  border: 2px solid rgb(0, 0, 0);
}

.zero {
  grid-column: 3 / 1;
  text-align: center;     
    
}

.botao {
  background-color: #fcc151;
  border: 2px solid rgb(0, 0, 0);
 
  } 

 .operadores {
  background-color: #035187;
  color: rgb(0, 0, 0);

}
</style>
