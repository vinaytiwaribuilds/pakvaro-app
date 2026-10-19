window.addEventListener("vite:preloadError", function (event) {
  event.preventDefault();
  var key = "pakvaro.preload-reloaded";
  if (sessionStorage.getItem(key) !== "1") {
    sessionStorage.setItem(key, "1");
    window.location.reload();
  }
});
