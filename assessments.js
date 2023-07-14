const form = document.querySelector('.form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  //  we retrieve any existing user data from local storage using const exisitingData
  const existingData = JSON.parse(localStorage.getItem('myApp')) || [];

  // The new user data is pushed into the existing data array using existingData.push(data).
  existingData.push(data);

  // Save the updated data array back to local storage
  localStorage.setItem('myApp', JSON.stringify(existingData));

  // Clear the form
  form.reset();

  const itemToRemove = 'Item 1'; // Replace with the content of the item you want to remove, mine is chris

  // Retrieve the array from local storage
  let storedData = JSON.parse(localStorage.getItem('myApp')) || [];

  const updatedData = storedData.filter(item => item !== itemToRemove);
// const variabel to store the filtered array, storedData is the array from the locla storage
//then create a new array with correct items shouldnt have item 1 

  // Update the local storage with the modified array
  localStorage.setItem('myApp', JSON.stringify(updatedData));

    }
  );
 




/*const form = document.querySelector ( '.form');
    
    form.addEventListener('submit', function(event) { // maybe i dont this brace
      event.preventDefault();
    //dont want it to refresh/ default mode- i think this is when it goes to server 
    const formData = new FormData ( form);
    console.log( "Formdata" , formData)
    const data = Object.fromEntries (formData);
    console.log( "data" , data)

    // this is where you would add the server information 
      
    window.localStorage.setItem( "my app", JSON.stringify(data));
    });
// 
*/
// add code to save more people, then list all added ppl, add buttun to dele the person
  // the Json.stringfy changes the javascript objects into Jason 
//  used the window local storage 
// ask Marcin about the Key in jason
//JSON. parse() is a crucial method for converting JSON data in string form into Javascript object