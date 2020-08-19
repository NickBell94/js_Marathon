const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function getRow (firstRow, secondRow) {
    let  resultFisrt = 0;
    let resultSecond = 0; 
    for (let i = 0; i < firstRow.length; i++){
        if (firstRow.charAt(i) == 'а'){
           
          
          resultFisrt++;
        }
    }

    for (let i = 0; i < secondRow.length; i++){
        if (secondRow.charAt(i) == 'а'){
           
          
            resultSecond++;
        }
    }
    if ( resultFisrt > resultSecond) {
        return console.log(firstRow);
    } else {
        return console.log(secondRow);
    }
}

getRow (firstRow, secondRow);