//idCard function to pull input info 
function idCard(){
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let address = document.getElementById('address').value;
    let age = parseInt(document.getElementById('age').value);
    let phoneNumber = parseInt(document.getElementById('phoneNumber').value);
    
   /*Proof of functionality
    console.log(firstName);
    console.log(lastName);
    console.log(address);
    console.log(age);
    console.log(phoneNumber);
    console.log(age + phoneNumber);*/

    //Create and populate numberArray
    let numberArray = [];
    numberArray.push(age, phoneNumber);

    //Loop numberArray and push to HTML
    for (let i =0; i < numberArray.length; i++){
        if (numberArray[i] <= 100){
            document.getElementById('postAge').innerHTML = "Age: " + numberArray[i];
        }
        else if (numberArray[i] > 100){
            document.getElementById('postPhoneNumber').innerHTML = "Phone Number: " + numberArray[i];
        }
    }

    //Write fullName back to HTML
    document.getElementById('postFullName').innerHTML = firstName + " " + lastName;

    //Write address back to HTML
    document.getElementById('postAddress').innerHTML = address;

}