const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
    const element = notas[i];
    
    somaDasNotas += element;
}

    const media = somaDasNotas / notas.length;

    console.log(`A média das notas é ${media}.`);