const GITHUB_URL = "https://api.github.com/users/Itamarmedved";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function (data) {
    const profileImage = document.getElementById("profile-image");
    const profileName = document.getElementById("profile-name");
    profileImage.src = data.avatar_url;
    profileName.innerHTML = data.login;
  });

  const card = document.querySelector('.card');
  card.addEventListener("click", function() {
    card.style.animationName = "bounce";
    card.style.animationTimingFunction = "ease";
  });
  card.addEventListener("animationend", function() {
    this.style.animationName = "";
  });