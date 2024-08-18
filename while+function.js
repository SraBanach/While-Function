function soma () {
    contador = 0 
    resp = 0
    
    while (contador <= 100 ){ 
    
        console.log (resp)
        contador = contador + 1 
        resp = resp + contador 
    }
    }
    function somaDigitosUsuario (){
       
        resultado = 0  
       
       while (true){
       soma = prompt("Digite um numero para a soma, para sair digite 0")
         if (soma == 0 ){ 
         break
         }
           console.log ("valor atual" + resultado)
           resultado = resultado + parseInt(soma)
           console.log ("valor atual do resultado + numero do usuario " + resultado)
         
       }
      }
    
    function fibonacci (){
    console.log("Imprima os primeiros 10 números da sequência de Fibonacci utilizando um laço de repetição. ")
    num1 = -1
    num2 = 1
    resp = 0
    cont = 0 
    
    while (cont <10){
        resp = num1+num2
        cont ++ 
        console.log (num1, "+", num2, "=" ,resp)
        num1 = num2
        num2 = resp
    }
    }
    
    function reverse (){
    console.log ("Implemente um programa que inverte uma String fornecida pelo usuário utilizando um laço de repetição.(desafio)")
    
    texto = ("Olá mundo!")
    reverseTexto = texto.split("").reverse().join("")
    console.log (texto, "=" ,reverseTexto)
    }
    
    console.log ("criar um menu de opções onde o usuario pode escolher entre 6 opções (1 - vai imprimir o resultado da primeira questão, 2 - vai imprimir o resultado da segunda questão, ..., 6 opção vai fechar o men")
    numero = 0 
    while (true){
    numero = prompt ("Digite numero de 1 a 6")
      if (numero == 0){
        break
      }
    else if (numero == 1){ 
    tabuada ()
      break
    }
      else if (numero == 2){
        soma()
        break
      }    
        else if (numero == 3){
          somaDigitosUsuario ()
          break
        }
          else if (numero == 4){ 
          fibonacci ()
            break
          }
          else if (numero == 5){ 
          reverse ()
            break
          }
          }
                 
    