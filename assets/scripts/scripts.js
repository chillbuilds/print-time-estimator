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
  if (products[i].material === "wood") {
    var wood = $("<div>");
    wood.addClass("inputs");
    wood.html('<input type="number" id="wood-' + i + '">' + products[i].name);
    $("#wood").append(wood);
  } else if (products[i].material === "vinyl") {
    var vinyl = $("<div>");
    vinyl.addClass("inputs");
    vinyl.html('<input type="number" id="vinyl-' + i + '">' + products[i].name);
    $("#vinyl").append(vinyl);
  }else{  var misc = $("<div>");
  misc.addClass("inputs");
  misc.html('<input type="number" id="misc-' + i + '">' + products[i].name);
  $("#misc").append(misc);}
}

//record each value and apply multiplier, and add all values together
$("#calculate").on("click", function() {
  for (var i = 0; i < products.length; i++) {
    var x = products[i].material + "-" + i;
    var y = $("#" + x).attr("id");
    console.log(y);
  }
});
