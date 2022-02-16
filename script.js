const chk = document.getElementById("chk");
const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

const setThemeAttribute = wantDark => {
  if (wantDark) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "default");
  }
};

const setCheckbox = wantDark => {
  if (wantDark) {
    chk.checked = true
  } else {
    chk.checked = false
  }
};

setThemeAttribute(darkMediaQuery.matches);
setCheckbox(darkMediaQuery.matches);

chk.addEventListener('change', (e) => {
  setThemeAttribute(e.target.checked);
});

darkMediaQuery.addEventListener("change", () => {
  setThemeAttribute(darkMediaQuery.matches);
  setCheckbox(darkMediaQuery.matches);
});
