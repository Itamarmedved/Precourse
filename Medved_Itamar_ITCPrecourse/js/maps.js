const cities = [
    {name: "Jerusalem", link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217026.8559798506!2d35.03527015265442!3d31.79653373114269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d7d634c1fc4b%3A0xd96f623e456ee1cb!2sJerusalem!5e0!3m2!1sen!2sil!4v1657693239843!5m2!1sen!2sil"},
    {name: "Eilat", link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221963.21835321744!2d34.81397732718002!3d29.627651819327998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150071e324795e0b%3A0xfe1d95f85577f6db!2sEilat!5e0!3m2!1sen!2sil!4v1657712424335!5m2!1sen!2sil"},
    {name: "Nitzan", link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13572.558893781805!2d34.622257218420806!3d31.739386949538037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150298f2af6f95d9%3A0x9582ba341119a3b1!2sNitzan!5e0!3m2!1sen!2sil!4v1657721666100!5m2!1sen!2sil"}
]
const cityName = document.getElementById('city-name');
const cityLink = document.getElementById('city-link');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
prevBtn.style.visibility = 'hidden';
let cityIndex = 0;

function updateCity(cityIndex) {
    cityName.innerText = cities[cityIndex].name;
    cityLink.setAttribute("src", cities[cityIndex].link);
}

// what happens when you go up the cities index number:
function addIndex(i) {
    if (i == 0) {
        cityIndex++;
        updateCity(cityIndex);
        prevBtn.style.visibility = 'visible';
    } else if (i < cities.length - 2) {
        cityIndex++;
        updateCity(cityIndex);
    } else if(i == cities.length - 2) {
        cityIndex++;
        updateCity(cityIndex);
        nextBtn.style.visibility = 'hidden';
    }
}
// what happens when you go down the cities index number:
function subIndex(i) {
    if (i == cities.length - 1) {
        cityIndex--;
        updateCity(cityIndex);
        nextBtn.style.visibility = 'visible';
    } else if (i > 1) {
        cityIndex--;
        updateCity(cityIndex);
    } else if (i == 1) {
        cityIndex--;
        updateCity(cityIndex);
        prevBtn.style.visibility = 'hidden';
    }
}

nextBtn.addEventListener('click', function(){
    addIndex(cityIndex);
});
prevBtn.addEventListener("click", function(){
    subIndex(cityIndex);
});