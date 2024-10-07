    let numerosPares = [];
    let numero = 2; 

    let quantidade = prompt("Informe a quantidade de números pares (de 2 a 18):");

    if (quantidade >= 2 && quantidade <=18){
        
        do {
            numerosPares.push(numero);
            numero += 2; 
        } while (numerosPares.length < quantidade);

    }else{
       console.log("Deve ser um valor entre 2 e 18! ");
       
    }

console.log("Números pares:", numerosPares);





