const sharpness2 = document.getElementById("sword1text");
const health = document.getElementById("hp");
const armor2 = document.getElementById("armor2");
const koupenychHp = document.getElementById("koupenychHp");
let koupenychHp2 = 5;
let ostrost = 1;
let money = 1;
let ostrostCena = 12;
let brneniCena = 30;
let hp1 = 20;
let loadmoney = 1;
let test = false
const moneyText = document.getElementById("money");
const swordCenaText = document.getElementById("swordCenaText");
const sharpnessimg = document.getElementById("sharpnessimg");
window.onload = () => {
  test = localStorage.getItem("test");
  if (test == null) {
    localStorage.setItem("loadHp", hp1);
    localStorage.setItem("ostrostCena", ostrostCena);
    localStorage.setItem("money", money);
    localStorage.setItem("sword1", ostrost);
    localStorage.setItem("koupenychHp2", koupenychHp2);
    console.log("negr")
  }
  else{
    loadmoney = parseInt(localStorage.getItem("money"));
    money = loadmoney;
    localStorage.setItem("test", test);
    console.log("negr2")
  }
  test = true;
  localStorage.setItem("test", test);
  console.log(loadmoney);
  let loadsword = parseInt(localStorage.getItem("sword1"));
  let loadprice = parseInt(localStorage.getItem("ostrostCena"));
  let loadHp = parseInt(localStorage.getItem("loadHp"));
  let loadKoupenychHp = parseInt(localStorage.getItem("koupenychHp2"));
  swordCenaText.innerHTML = ostrostCena;
  koupenychHp2 = loadKoupenychHp;
  hp1 = loadHp;
  health.innerText = hp1;
  koupenychHp.innerHTML = `Počet koupených hp: ${koupenychHp2}`;
  console.log(hp1);
  ostrostCena = loadprice;
  money = loadmoney;
  moneyText.innerText = "Emeraldy: " + money;
  console.log(loadsword);
  ostrost = loadsword;
  sharpness2.innerHTML = ostrost;
  swordCenaText.innerText = ostrostCena;
  localStorage.setItem("money", money);
};
sharpnessimg.onclick = () => {
  if (money >= ostrostCena) {
    money -= ostrostCena;
    ostrost++;
    ostrostCena += ostrost * 2; // cena koupi ostrosti
    sharpness2.innerText = ostrost;
    moneyText.innerText = "Emeraldy: " + money;
    localStorage.setItem("sword1", ostrost);
    localStorage.setItem("money", money);
    swordCenaText.innerText = ostrostCena;
    localStorage.setItem("ostrostCena", ostrostCena);
  }
};
armor2.onclick = () => {
  if (money >= brneniCena) {
    hp1 += 5; // hp se přičtou po 5
    localStorage.setItem("loadHp", hp1);
    localStorage.setItem("loadBrneniCena", brneniCena);
    money -= brneniCena;
    brneniCena += 10;
    moneyText.innerText = "Emeraldy: " + money;
    localStorage.setItem("money", money);
    koupenychHp2 += 5;
    koupenychHp.innerHTML = `Počet koupených hp: ${koupenychHp2}`;
    localStorage.setItem("koupenychHp2", koupenychHp2);
  }
};