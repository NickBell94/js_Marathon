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
        alert ('Решение для задачи 1 ' + firstRow);
    } else {
        return console.log('Решение для задачи 1 ' +secondRow);
    }
}

getRow (firstRow, secondRow);


function formattedPhone() {

let phone = prompt('Введите номер телефона для задачи 2');

let resultString = ''; 

for (let i =0; i < phone.length; i++) { 

    if (i == 2) {

resultString = phone.substring(0,2) + ' ';



    }

    if (i == 3) {

resultString += '(' +   phone.substring(2,5) + ')';    }

    if (i == 4) {

              resultString += ' ' + phone.substring(5,8) +'-';

    }

    if (i == 6) {

                      resultString += phone.substring(8,10) +'-';



    } 

    if (i == 10)

        resultString += phone.substring(10,12)

    }

     alert ('Решение для задачи 2 ' + resultString);

}

formattedPhone();