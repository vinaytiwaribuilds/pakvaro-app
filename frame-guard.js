(function () {
  try {
    if (window.top === window.self) {
      document.documentElement.classList.remove("frame-pending");
    }
  } catch {
    // Cross-origin frames remain hidden.
  }
})();
