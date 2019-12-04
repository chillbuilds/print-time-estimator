var products = [
  { name: "Credenza", material: "wood", multiplier: 1 },
  { name: "Round Table", material: "wood", multiplier: 1 },
  { name: "Coffee Table", material: "wood", multiplier: 1 },
  { name: "Round Side", material: "wood", multiplier: 1 },
  { name: "Square Side", material: "wood", multiplier: 1 },
  { name: "Sq Cutting Board", material: "wood", multiplier: 1 },
  { name: "Rnd Cutting Board", material: "wood", multiplier: 1 },
  { name: "Rect Cutting Board", material: "wood", multiplier: 1 },
  { name: "3 X 3 Mural", material: "wood", multiplier: 1 },
  { name: "4 X 4 Mural", material: "wood", multiplier: 1 },
  { name: "5 X 5 Mural", material: "wood", multiplier: 1 },
  { name: "Clocks", material: "vinyl", multiplier: 1 },
  { name: "Trinket Tray", material: "vinyl", multiplier: 1 },
  { name: "Rec Tray Lg", material: "vinyl", multiplier: 21 },
  { name: "Rec Tray XL", material: "vinyl", multiplier: 28 },
  { name: "8 X 9.5", material: "vinyl", multiplier: 16 },
  { name: "11 X 13", material: "vinyl", multiplier: 1 },
  { name: "14 X 16.5", material: "vinyl", multiplier: 22 },
  { name: "19 X 22.5", material: "vinyl", multiplier: 26 },
  { name: "12 X 12", material: "vinyl", multiplier: 18 },
  { name: "Lg Sq Tray", material: "vinyl", multiplier: 1 },
  { name: "20 X 20", material: "vinyl", multiplier: 25 },
  { name: "30 X 30", material: "vinyl", multiplier: 42 },
  { name: "Benches", material: "misc", multiplier: 1 },
  { name: "Stools", material: "misc", multiplier: 1 },
  { name: "Welcome Mats Sm", material: "misc", multiplier: 1 },
  { name: "Welcome Mats Lg", material: "misc", multiplier: 1 },
  { name: "Acrylic Box", material: "misc", multiplier: 1 },
  { name: "Acrylic Tray Sm", material: "misc", multiplier: 1 },
  { name: "Acrylic Tray Lg", material: "misc", multiplier: 1 }
];
var totalSeconds = 0;

//loop through and populate "#wood" div
for (var i = 0; i < products.length; i++) {
    var product = $("<div>");
    product.addClass("inputs");
    if(products[i].multiplier !== 1){
    product.html('<input type="number" id="product-' + i + '">' + products[i].name);}
    else{product.html('<input type="number" id="product-' + i + '">' + products[i].name + '<img src="./assets/images/icons/yield.png" class="icon">');}
  if (products[i].material === "wood") {
    $("#wood").append(product);
  } else if (products[i].material === "vinyl") {
    $("#vinyl").append(product);
  }else{
  $("#misc").append(product);}
}


//record each value and apply multiplier, and add all values together
$("#calculate").on("click", function() {
  totalSeconds = 0;
  for (var i = 0; i < products.length; i++) {
    var divId = "product" + "-" + i;
    var multiplier = products[i].multiplier;
    var x = $("#" + divId).val();
    var input = parseInt(x);
    if(input > 0){totalSeconds = totalSeconds + (input*multiplier);}
  }
  const formatted = moment.utc(totalSeconds*1000).format('HH:mm:ss');
  var timeArr = formatted.split(":")
  $("#estimate").text(timeArr[0]+"hrs "+timeArr[1]+"mins");
});
