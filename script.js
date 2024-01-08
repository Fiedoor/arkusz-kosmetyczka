var a = 0;
function s1() {
  var l = document.getElementsByName('form');
  l.forEach((element) => {
    if (element.checked) {
      a += parseInt(element.value);
    }
  });
  document.getElementById('t').innerText = 'Cena zabiegów: ' + a;
  a = 0;
}
