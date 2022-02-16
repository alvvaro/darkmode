const darkModeCheck = document.getElementById("chk");
const darkMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

const setDarkmode = wantDark => {
  if (wantDark) {
    document.documentElement.setAttribute("data-theme", "dark");
    darkModeCheck.checked = true;
  } else {
    document.documentElement.setAttribute("data-theme", "default");
    darkModeCheck.checked = false;
  }
};

setDarkmode(darkMediaQuery.matches);

darkModeCheck.addEventListener("change", (e) => {
  setDarkmode(e.target.checked);
});

darkMediaQuery.addEventListener("change", () => {
  setDarkmode(darkMediaQuery.matches);
});
