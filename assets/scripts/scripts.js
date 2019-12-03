var products = [
  { name: "Credenza", material: "wood", multiplier: 300 },
  { name: "Round Table", material: "wood", multiplier: 100 },
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
  { name: "Rec Tray Lg", material: "vinyl", multiplier: 1 },
  { name: "Rec Tray XL", material: "vinyl", multiplier: 1 },
  { name: "8 X 9.5", material: "vinyl", multiplier: 1 },
  { name: "11 X 13", material: "vinyl", multiplier: 1 },
  { name: "14 X 16.5", material: "vinyl", multiplier: 1 },
  { name: "19 X 22.5", material: "vinyl", multiplier: 1 },
  { name: "12 X 12", material: "vinyl", multiplier: 1 },
  { name: "Lg Sq Tray", material: "vinyl", multiplier: 1 },
  { name: "20 X 20", material: "vinyl", multiplier: 1 },
  { name: "30 X 30", material: "vinyl", multiplier: 1 },
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
  if (products[i].material === "wood") {
    product.html('<input type="number" id="wood-' + i + '">' + products[i].name);
    $("#wood").append(product);
  } else if (products[i].material === "vinyl") {
    product.html('<input type="number" id="vinyl-' + i + '">' + products[i].name);
    $("#vinyl").append(product);
  }else{
  product.html('<input type="number" id="misc-' + i + '">' + products[i].name);
  $("#misc").append(product);}
}


//record each value and apply multiplier, and add all values together
$("#calculate").on("click", function() {
  totalSeconds = 0;
  for (var i = 0; i < products.length; i++) {
    var divId = products[i].material + "-" + i;
    var multiplier = products[i].multiplier;
    var x = $("#" + divId).val();
    var input = parseInt(x);
    if(input > 0){totalSeconds = totalSeconds + (input*multiplier);}
  }
  
  const formatted = moment.utc(totalSeconds*1000).format('HH:mm:ss');
  console.log(formatted);
  var j = formatted.split(":")
  console.log(j);
  $("#estimate").text(j[0]+"hrs "+j[1]+"mins");
});
