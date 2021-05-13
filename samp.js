var person = {
    firstName:" ", 
    lastname:" ", 
    age1: " ", 
    age2: " ",
    Motto:" ", 
    Picture:" "
};

function displayAge(){
    var a = document.getElementById('age').value
   person.age2 = parseInt(a,10);

    if (person.age2 < 18){
        document.getElementById('age2').innerHTML ="You are a minor!";
    }

    else if(person.age2 >=18 && person.age2 <60){
        document.getElementById('age2').innerHTML ="You are not a minor!";
    }

    else if(person.age2 >59 ){
        document.getElementById('age2').innerHTML ="You are old!";
    }

}

function validateForm(){
    
    person.firstName = document.getElementById('first_name').value
    person.lastName = document.getElementById('last_name').value
    var ages = document.getElementById('age').value
    person.age1 = parseInt(ages,10);
    person.Motto = document.getElementById('motto').value
    person.Picture = document.getElementById('pic').value

   if (person.firstName ==" "|| person.lastName==" " || person.age1==" " ||  person.Motto==" " |person.Picture ==" "){
       alert("Invalid Input! ");
   }

   else{
    document.getElementById('name').innerHTML = person.firstName + " " + person.lastName;
    document.getElementById('age1').innerHTML = person.age1;
    displayAge();
    document.getElementById('mot').innerHTML = person.Motto;
    document.getElementById('pics').src = person.Picture;
   }
}