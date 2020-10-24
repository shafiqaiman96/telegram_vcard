var vCard = require('vcards-js');

'use strict';

const fs = require('fs');
var total = [];
fs.readFile('result.json', (err, data) => {
    if (err) throw err;
    let contact = JSON.parse(data);
    var listCon = contact.contacts.list;

    vCard = vCard();
    listCon.forEach(createVcard);
    
    //save to file
    function createVcard(index){
        var first_name = index.first_name;
        var last_name = index.last_name;
        var phone = index.phone_number;
        var n = phone.search("1");
        if(n>0){
            // console.log(index);
            var numArr = phone.split('');

            // console.log(numArr);
            // console.log(n);

            numArr.splice(0, n);
            const index = numArr.indexOf(" ");
            if (index > -1) {
                numArr.splice(index, 1);
            }
            
            numArr.splice(0, 0, "+60");
            // console.log(numArr);

            var finalNum = numArr.join('');
            console.log(finalNum);
            

            vCard.cellPhone = finalNum;
            vCard.firstName = first_name;
            vCard.lastName = last_name;
            
            var x = Math.floor((Math.random() * 20) + 1);
            var y = Math.floor((Math.random() * 12) + 6);
            var z = Math.floor((Math.random() * 7) + 21);
            // vCard.saveToFile('./contacts/' + first_name + " " + last_name + "_" + x + y + z + '.vcf'); //UNCOMMENT TO SAVE SEPARATELY EACH CONTACT 
            console.log(vCard.getFormattedString());
            total.push(vCard.getFormattedString());
        }

    }

    console.log(total.join(""));
    fs.writeFile('contacts.vcf', total.join(""), function (err) {
        if (err) throw err;
        console.log('All contact saved');
      }); 
});


console.log('--The list contact--');
