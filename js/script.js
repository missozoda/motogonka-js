var age = 18;
var yourAge = prompt("Yoshimgizni kiriting: ").trim();
var text = document.createElement("p");

text.style.fontSize = "45px";
text.style.fontWeight = "bold";
text.style.textAlign = "center";
text.style.color = "brown"

if (yourAge >= age){
  console.log("Siz musobaqada qatnasha olasiz. Omad yor bo`lsin!");
  text.textContent = `Siz musobaqada qatnasha olasiz. Omad yor bo'lsin!`
  document.body.appendChild(text)
}else {
  console.log("Siz musobaqada qatnasha olmaysiz. Katta bo'lganingizda kelarsiz!");
  text.textContent = "Siz musobaqada qatnasha olmaysiz. Katta bo'lganingizda kelarsiz :("
  document.body.appendChild(text)
};