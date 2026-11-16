const demos = [...document.querySelectorAll(".demo")];
const toast = document.getElementById("toast");
let toastTimer;

const labels = {
  cyan: "START activated",
  purple: "FUTURE activated",
  red: "POWER activated",
  green: "ENTER activated",
  rgb: "CREATE activated"
};

demos.forEach((demo) => {
  const button = demo.querySelector(".orb-button");
  button.addEventListener("click", () => {
    demo.classList.remove("is-active");
    // Restart the pulse animation on repeated clicks.
    void button.offsetWidth;
    demo.classList.add("is-active");

    const style = [...demo.classList].find(name => labels[name]);
    toast.textContent = labels[style] || "Button activated";

    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      demo.classList.remove("is-active");
      toast.textContent = "";
    }, 750);
  });
});
