function animate () {
  const colChange = ColorChanger();
  colChange.updateBG();
  colChange.updateText();
}

async function playAudio() {
  const audio = new Audio('https://ia802805.us.archive.org/3/items/redvelvet_202001/track47.mp3');
  try {
    await audio.play();
  } catch (err) {
    console.error(err);
  }
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
