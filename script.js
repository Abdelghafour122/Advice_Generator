const num = document.querySelector(".advice-num span");
const txt = document.querySelector(".advice-text");
const butt = document.querySelector("section button");

const getAdvice = async (n) => {
  let result = await fetch(`https://api.adviceslip.com/advice/${n}`).then(
    (data) => data.json()
  );
  if (result?.message) {
    console.log("Maybe we're off range.");
  } else {
    num.textContent = n;
    txt.textContent = `"${result.slip.advice}"`;
  }
};

butt.onclick = () => {
  getAdvice(Math.floor((Math.random() + 1) * 112));
};
