console.log("hehehehe")

document.getElementById('btnGetUserData').addEventListener("click", getUserData);



function getUserData() {
  console.log("Testing event");

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
      // console.log(users))
      let html = `<h2>List of users</h2>`
      html += `<ul>`
      users.forEach(user => {
        html += `<li>${user.name}</li>`
      })
      html += `</ul>`
      document.getElementById('response').innerHTML = html
    })
}

//Send data to server

document.getElementById('addPostForm').addEventListener("submit", addPost)

function addPost(e) {
  e.preventDefault();

  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;

  const myPost = {
    title: title,
    body: body
  };
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(myPost)
  };
  fetch("https://jsonplaceholder.typicode.com/posts", options)
    .then(response => {
      if (response.ok) {

        return response.json();
      } else {
        return Promise.reject({
          status: reponse.status,
          statusText: responseStatusText
        });
      }
    })
    .then((data) => console.log(data))
    .catch(err => {
      console.log("Error message:" + err)
    })

}
