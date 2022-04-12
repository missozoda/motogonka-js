var price = 100;
var yourprice = prompt ("Mablag`ingizn kiriting: ").trim();
var textSecond = document.createElement("p");

textSecond.style.fontSize = "40px";
textSecond.style.fontWeight = "bold";
textSecond.style.textAlign = "center";
textSecond.style.color = "red";

if (yourprice >= price){
  console.log("Sizning mablag'ingiz yetarli. Marhamat tanlov amalga oshirishingiz mumkin :)");
  textSecond.textContent = "Sizning mablag'ingiz yetarli. Marhamat tanlov amalga oshirishingiz mumkin :)";
  document.body.appendChild(textSecond);
}else {
  console.log("Sizning mablag'ingiz yetarli emas. Oylik olganda kelarsiz :(");
  textSecond.textContent = "Sizning mablag'ingiz yetarli emas. Oylik olganda kelarsiz :(";
  document.body.appendChild(textSecond);
};