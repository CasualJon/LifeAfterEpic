//Easter egg for entering the Konami Code when on the 404 page :D

var state = 0;
var trans = 0;

var image = document.getElementById('errorImage');
image.innerHTML = "<img src=\"http://lifeafterepic.com/assets/img/error/MossFire.gif\">";
var words = document.getElementById('errorWords');
words.innerHTML = "Dear Sir stroke Madam, I am writing to inform you of a fire which has broken out at the premises of... No, that's too formal.<br />Dear Sir stroke Madam. Fire, exclamation mark. Fire, exclamation mark. Help me, exclamation mark. 123 Carrendon Road. Looking forward to hearing from you. All the best, Maurice Moss.";

readKonami();

function readKonami() {
  document.addEventListener('keydown', function(event) {
    if (event.defaultPrevented) {
      return;
    }

    switch (event.key) {
      case "ArrowUp":
        aUp();
        break;

      case "ArrowDown":
        aDown();
        break;

      case "ArrowLeft":
        aLeft();
        break;

      case "ArrowRight":
        aRight();
        break;

      case "b":
        bKey();
        break;

      case "B":
        bKey();
        break;

      case "a":
        aKey();
        break;

      case "A":
        aKey();
        break;

      default:
        state = 0;
        break;
      }

    event.preventDefault();
  });
}

function aUp() {
  if (state == 0) {
    state = 1;
    return;
  }
  else if (state == 1) {
    state = 2;
    return;
  }
  else {
    state = 1;
    return;
  }
}

function aDown() {
  if (state == 2) {
    state = 3;
    return;
  }
  else if (state == 3) {
    state = 4;
    return;
  }
  else {
    state = 0;
    return;
  }
}

function aLeft() {
  if (state == 4) {
    state = 5;
    return;
  }
  else if (state == 6) {
    state = 7;
    return;
  }
  else {
    state = 0;
    return;
  }
}

function aRight() {
  if (state == 5) {
    state = 6;
    return;
  }
  else if (state == 7) {
    state = 8;
    return;
  }
  else {
    state = 0;
    return;
  }
}

function bKey() {
  if (state == 8) {
    state = 9;
    return;
  }
  else {
    state = 0;
    return;
  }
}

function aKey() {
  if (trans == 0) {
    if (state == 9) {
      state = 0;
      trans = 1;
      image.innerHTML = "<img src=\"http://lifeafterepic.com/assets/img/error/ContraA.gif\"><br /><img src=\"./assets/img/error/ContraB.gif\">";
      words.innerHTML = "30 lives. Well done!";
      return;
    }
    else {
      state = 0;
      return;
    }
  }

  if (trans = 1) {
    if (state == 9) {
      state = 0;
      trans = 2;
      image.innerHTML = "<img src=\"http://lifeafterepic.com/assets/img/error/poohpiglet.jpg\">";
      words.innerHTML = "Indeed, Pooh? This one always made me smile on my roughest days.<br />OK. No more... try the back button now :)";
    }
    else {
      state = 0;
      return;
    }
  }
}
