var btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  var username = document.querySelector("#txtarea").value;
  console.log(username);

  var xhr = new XMLHttpRequest();
  var url = `https://api.openweathermap.org/data/2.5/weather?q=${username}&appid=cf4347c1b380b39e50ee338dbd000f07`;

  xhr.open("GET", url);

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);

      console.log(response);
      console.log(response.main.temp);
      const li = document.createElement("li");
      console.log(li);
      var tempmax = Number(response.main.temp_max) - 273;
      var tempmin = Number(response.main.temp_min) - 273;
      var tempcur = Number(response.main.temp) - 273;
      li.innerText =
        ` ${username}` +
        " " +
        "current temp->" +
        parseInt(tempcur) +
        "C" +
        " " +
        "max temp ->" +
        parseInt(tempmax) +
        "C" +
        " " +
        "min temp->" +
        parseInt(tempmin) +
        "C";
      const parent = document.querySelector(".value");
      console.log(parent);
      parent.appendChild(li);
    }
  };

  xhr.send();
});
