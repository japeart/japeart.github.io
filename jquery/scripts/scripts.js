// just some example jQuery calls

// set up handlers
document.getElementById('idButton').addEventListener("click", getPostById);
document.getElementById('userIdButton').addEventListener("click", getUserById);

function getPostById() {
  let number = document.getElementById('inputId').value;
  // validate input - number between 1 and 100
  let pattern = /^[^a-z]+$/i;
  if(pattern.test(number) && number < 101 && number > 0) {
    $.getJSON("https://jsonplaceholder.typicode.com/posts/", { id : number}, function(result){
      $('#results').html(getResultString(result[0]));
    });
  } else {
    alert('Enter a number 1 to 100');
  }
  document.getElementById('inputId').value = "";
}

function getUserById() {
  console.log('getUserById called');
  let number = document.getElementById('inputUserId').value;
  // validate input - number between 1 and 10
  let pattern = /^[^a-z]+$/i;
  if(pattern.test(number) && number < 11 && number > 0) {
    $.getJSON("https://jsonplaceholder.typicode.com/posts/", { userId : number}, function(result){
      // concatenate result string
      console.log(JSON.stringify(result[0]));
      let resultString = "";
      for(let i = 0; i < result.length; i++) {
        resultString += getResultString(result[i]);
      }
      $('#results').html(resultString);
    });
  } else {
    alert('Enter a number 1 to 10');
  }
  document.getElementById('inputUserId').value = "";
}

// fill the results div
function getResultString(arr) {
  let userId = arr.userId;
  let id = arr.id;
  let title = arr.title;
  let body = arr.body;

  return `
  <div class='entry'>
    <h3>User Id:</h3>${userId}
    <h3>Id:</h3>${id}
    <h3>Title:</h3>${title}
    <h3>Body:</h3>${body}
  </div>`;
}
