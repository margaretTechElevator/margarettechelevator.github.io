document.addEventListener('DOMContentLoaded', () => {

    document.getElementById("dogBtn").addEventListener('click', displayDoggo);

    document.getElementById('hotelBtn').addEventListener('click', displayHotels);

    document.getElementById('currencyBtn').addEventListener('click', displayRates);
});

function displayRates() {
    fetch("https://api.exchangerate.host/latest?base=USD")
        .then((response) => response.json())
        .then((data) => {
            // console.log(data);
            let rates = data.rates;
            for (key in rates) {
                const value = rates[key];
                console.log(`${key} - ${value}`);

            }
        })
}

function displayHotels() {
    const hotel = document.getElementById("hotel");
    fetch("http://localhost:8080/hotels")  // consume the API from IntelliJ
        .then((response) => response.json())
        .then((data) => {
            // console.log(data);
            for (let i = 0; i < data.length; i++) {
                const h2 = document.createElement('h2');
                h2.innerText = data[i].name;
                hotel.appendChild(h2);
                const p = document.createElement('p');
                p.innerText = data[i].address.city + ", " + data[i].address.state;
                hotel.appendChild(p);
            }
        })
}


function displayDoggo() {
    // https://dog.ceo/api/breeds/image/random

    // fetch say go to the API -- what comes back from this call is a promise
    fetch("https://dog.ceo/api/breeds/image/random")
        //.then handles the promise - response object comes back
        // response has a lot of information in it
        .then((response) => {
            let json = response.json(); // hold the response in a json version
            // console.log(json);
            return json;
        })
        // take that json object and extract the data from it
        .then((data) => {
            // console.log(data);
            const img = document.createElement('img');
            img.src = data.message;
            // reference the dogImg div in html
            const dogImg = document.getElementById('dogImg');
            // add the image to the document to the html
            dogImg.appendChild(img);
        })
}
