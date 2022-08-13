
function test () {
  const colChange = ColorChanger();
  colChange.updateBG()
  colChange.updateText()
}

function ColorChanger() {
  let r = 0;
  let g = 0;
  let b = 0;

  let big = false;

  const lol = document.getElementById("Testing")

  function updateBG() {
    r += 3;
    g += 5;
    b += 7;
    r %= 256;
    g %= 256;
    b %= 256;
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    setTimeout(updateBG, 10);
  }

  function updateText() {
    big = !big;
    lol.style.fontSize = `${400 + 400 * big}%`;
    setTimeout(updateText, 250);
  }
  return {updateBG, updateText};
}
