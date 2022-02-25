const doRequest = url =>{
  let request = new XMLHttpRequest();
  request.open('GET', url, false);
  request.send();

  return request.responseText;
}

const data = () =>{
  let dataServer = doRequest('https://api.github.com/users/GabrielMorettii');
  let userData = JSON.parse(dataServer);
  console.log(userData)
}

data();