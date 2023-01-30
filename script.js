//idCard function to pull input info 
function idCard(){
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let address = document.getElementById('address').value;
    
   // Proof of functionality
    console.log(firstName);
    console.log(lastName);
    console.log(address);

    //Write fullName back to HTML
    document.getElementById('postFullName').innerHTML = firstName + " " + lastName;

    //Write address back to HTML
    document.getElementById('postAddress').innerHTML = address;
    

    
}