"use strict"
// window.alert ("Olá Mundo!")

/*var datanascimento, idade
datanascimento = prompt("Em qual ano você nasceu?")
idade = (2024 -  datanascimento)
window.alert ("Sua idade é " + idade);*/

/*var nota1, nota2, nota3, media
nota1 = parseFloat (prompt("Qual nota do primeiro trimestre?"))
nota2 = parseFloat (prompt("Qual nota do segundo trimestre?"))
nota3 = parseFloat (prompt("Qual nota do terceiro trimestre?"))
media = (nota1+nota2+nota3)/3
if(media>=60){
    window.alert ("Sua media foi "+ media + " e você esta aprovado!") 
             }else if(media>=40 && media<60){
                  window.alert ("Sua media foi "+ media + " e você esta de recuperação!")
                                            }else{
                                              window.alert ("Sua media foi "+ media + " e você esta reprovado!")
                                                 }*/

//QUESTÃO 1                                             
/*var nome, dia, mes
nome = (prompt("Qual seu nome?"))
dia = (prompt("Fale um dia?"))
mes = (prompt("Fale um mês(em número)?"))
if(nome=="Celso Portiolli" && dia==11 && mes==9){
  window.alert("O Celso Portiolli não tem nada a ver com o 11 de Setembro")
}else if(nome=="Bruno" && dia==4 && mes==7){
  window.alert("Faça a prova com atenção")
}else{
  window.alert("Tururu(música do naruto)")
}*/

//QUESTÃO 2
/*var nota1, nota2, nota3, media
nota1 = parseFloat (prompt("Qual nota do primeiro trimestre?"))
nota2 = parseFloat (prompt("Qual nota do segundo trimestre?"))
nota3 = parseFloat (prompt("Qual nota do terceiro trimestre?"))
media = (nota1+nota2+nota3)/3
if(media>=60){
    window.alert ("Sua media foi "+ media + " e você esta aprovado!") 
             }else{
                 window.alert ("Sua media foi "+ media + " e você esta reprovado!")
             }*/

//QUESTÃO 3
/*var gado, pesoTotal, peso, mediaPeso, numeroGado
gado=0
pesoTotal=0
numeroGado=1

while(peso!=0){
  peso = parseFloat (prompt("Qual peso do gado "+numeroGado+"?"))
  pesoTotal = pesoTotal+peso
  gado = gado+1
  numeroGado = numeroGado+1
}
gado = gado-1
mediaPeso = pesoTotal/gado

window.alert("O peso médio é "+mediaPeso)*/


//QUESTÃO 4
/*var num1, num2, resultado
window.alert("Vamos calcular a potencia de dois números!")
num1 = parseFloat (prompt("Digite o primeiro número:"))
num2 = parseFloat (prompt("Digite o segundo número:"))
resultado = num1 ** num2
window.alert("O resultado é: "+resultado)*/
             
// FUNÇÃO DE SOMA
/*function somar(a, b){
  return a+b;
}
var n1;
var n2;
var somar;
n1= 5
n2= 9
soma = somar(n1,n2);
window.alert(soma);*/

// FUNÇÃO DE VERIFICAR CPF
/*function validaCPF(cpf) {
    cpf = cpf.replace(/\D+/g, ''); // Remove pontos e traços
    if (cpf.length !== 11) {
        window.alert('CPF inválido! O CPF deve conter 11 dígitos.');
        return false;
    }

    // Restante do código para cálculo dos dígitos verificadores...

    // Se o CPF for válido:
    window.alert('CPF válido!');

    return true;
}

const cpfExemplo = '123.456.789-09'; // Substitua pelo CPF desejado
validaCPF(cpfExemplo);*/


//configurações gerais

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const minFontSize = 0.5; // tamanho mínimo em em
    const maxFontSize = 5;   // tamanho máximo em em
    const increment = 0.1;   // valor do incremento

    const updateFontSize = (change) => {
        let currentSize = parseFloat(getComputedStyle(body).fontSize);
        currentSize /= 16; // Convertendo pixels para em

        let newSize = currentSize + change;
        newSize = Math.max(minFontSize, Math.min(maxFontSize, newSize)); // Garantindo os limites

        body.style.fontSize = `${newSize}em`;
    };

    document.getElementById('decreaseFont').addEventListener('click', () => {
        updateFontSize(-increment);
    });

    document.getElementById('increaseFont').addEventListener('click', () => {
        updateFontSize(increment);
    });
});








document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const toggleButton = document.getElementById('toggleColorScheme');
    
    // Verifica o esquema de cores salvo no localStorage
    const savedScheme = localStorage.getItem('colorScheme');
    if (savedScheme === 'inverted') {
        body.classList.add('inverted');
    }

    const toggleColorScheme = () => {
        body.classList.toggle('inverted');
        
        // Salva a configuração atual no localStorage
        if (body.classList.contains('inverted')) {
            localStorage.setItem('colorScheme', 'inverted');
        } else {
            localStorage.removeItem('colorScheme');
        }
    };

    toggleButton.addEventListener('click', toggleColorScheme);
});

//cadastro

function validarFormulario() {
  const senha = document.getElementById('senha').value;
  const senhaRepetida = document.getElementById('senhaRepetida').value;
  const idade = parseInt(document.getElementById('idade').value);
  const estado = document.getElementById('estado').value;
  const cidade = document.getElementById('cidade').value;

  if (senha !== senhaRepetida) {
      document.getElementById('erroSenha').textContent = 'As senhas não coincidem.';
      return false;
  }

  if (senha.length < 8) {
      alert('A senha deve ter pelo menos 8 caracteres.');
      return false;
  }

  if (!senha.match(/^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/)) {
      alert('A senha deve conter pelo menos um caractere especial (!@#$%^&*).');
      return false;
  }

  if (idade < 18) {
      alert('Você deve ter pelo menos 18 anos para enviar o formulário.');
      return false;
  }

  if (!cidade) {
      alert('Selecione uma cidade.');
      return false;
  }

  // Envio bem-sucedido (você pode redirecionar para outra página aqui)
  alert('Formulário enviado com sucesso!');
  return true;
}

function carregarCidades() {
  const estado = document.getElementById('estado').value;
  const cidadeSelect = document.getElementById('cidade');
  cidadeSelect.innerHTML = '';

  const cidades = {
      'SP': ['São Paulo', 'Campinas', 'Guarulhos'],
      'RJ': ['Rio de Janeiro', 'Cabo Frio', 'Arraial do Cabo'],
      'MG': ['Belo Horizonte', 'Contagem', 'Nova Lima'],
      'ES': ['Piúma', 'Guarapari', 'Vitória']
  };

  if (cidades[estado]) {
      cidades[estado].forEach(cidade => {
          const option = document.createElement('option');
          option.value = cidade;
          option.textContent = cidade;
          cidadeSelect.appendChild(option);
      });
  }

  cidadeSelect.disabled = false;
}

function atualizarRegrasSenha() {
  const senha = document.getElementById('senha').value;

  const minLength = /(?=.{8,})/;
  const upperCase = /(?=.*[A-Z])/;
  const lowerCase = /(?=.*[a-z])/;
  const number = /(?=.*[0-9])/;
  const specialChar = /(?=.*[!@#$%^&*])/;

  const isMinLengthValid = minLength.test(senha);
  const isUpperCaseValid = upperCase.test(senha);
  const isLowerCaseValid = lowerCase.test(senha);
  const isNumberValid = number.test(senha);
  const isSpecialCharValid = specialChar.test(senha);

  document.getElementById('rule1').className = isMinLengthValid ? 'rule valid' : 'rule invalid';
  document.getElementById('rule2').className = isUpperCaseValid ? 'rule valid' : 'rule invalid';
  document.getElementById('rule3').className = isLowerCaseValid ? 'rule valid' : 'rule invalid';
  document.getElementById('rule4').className = isNumberValid ? 'rule valid' : 'rule invalid';
  document.getElementById('rule5').className = isSpecialCharValid ? 'rule valid' : 'rule invalid';
}

document.getElementById('senha').addEventListener('input', function() {
  atualizarRegrasSenha();
  verificarSenhaRepetida();
});

document.getElementById('senhaRepetida').addEventListener('input', function() {
  verificarSenhaRepetida();
});

function verificarSenhaRepetida() {
  const senha = document.getElementById('senha').value;
  const senhaRepetida = document.getElementById('senhaRepetida').value;

  const erroSenha = document.getElementById('erroSenha');
  if (senha && senhaRepetida && senha !== senhaRepetida) {
      erroSenha.textContent = 'As senhas não coincidem.';
      erroSenha.className = 'invalid';
  } else {
      erroSenha.textContent = '';
      erroSenha.className = '';
  }
}

const textarea = document.getElementById('meuTextarea');
const contador = document.getElementById('contador');

textarea.addEventListener('input', () => {
  const textoDigitado = textarea.value;
  const caracteresDigitados = textoDigitado.length;

  contador.textContent = `${caracteresDigitados} de 50 caracteres`;

  if (caracteresDigitados >= 50) {
      contador.style.color = 'red';
      contador.textContent = 'Limite de caracteres atingido!';
  } else {
      contador.style.color = 'black';
  }
});



