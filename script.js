function isPalindrome(str){
    const textoOriginalSemEspacoEMinusculo = str.replaceAll(' ', '').toLowerCase();
    let textoInvertido = '';
    for(let i = textoOriginalSemEspacoEMinusculo.length -1; i >= 0 ; i--){
        textoInvertido = textoInvertido + textoOriginalSemEspacoEMinusculo[i];
    }
    return textoOriginalSemEspacoEMinusculo === textoInvertido;
}

function arrayMaxMin(arr){
    let min = arr[0];
    let max = arr[0];

    for(let i = 0; i < arr.length; i++){ewrqerwer
       if(arr[i] < min){
          min = arr[i];
       }
       if(arr[i] > max){
          max = arr[i];
       }
    }

    return [min,max];
}