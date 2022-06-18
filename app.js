const colors = [
  'AliceBlue',
  'AntiqueWhite',
  'Aqua',
  'Aquamarine',
  'Azure',
  'Beige',
  'Bisque',
  'Black',
  'BlanchedAlmond',
  'Blue',
  'BlueViolet',
  'Brown',
  'BurlyWood',
  'CadetBlue',
  'Chartreuse',
  'Chocolate',
  'Coral',
  'CornflowerBlue',
  'Cornsilk',
  'Crimson',
  'Cyan',
  'DarkBlue',
  'DarkCyan',
  'DarkGoldenRod',
  'DarkGray',
  'DarkGrey',
  'DarkGreen',
  'DarkKhaki',
  'DarkMagenta',
  'DarkOliveGreen',
  'DarkOrange',
  'DarkOrchid',
  'DarkRed',
  'DarkSalmon',
  'DarkSeaGreen',
  'DarkSkateBlue',
  'DarkSlateGray',
  'DarkSlateGrey',
  'DarkTurquoise',
  'DarkViolet',
  'DeepPink',
  'DeepSkyBlue',
  'DimGray',
  'DimGrey',
  'DodgerBlue',
  'FireBrick',
  'FloralWhite',
  'ForestGreen',
  'Fuchsia',
  'Gainsboro',
  'GhostWhite',
  'Gold',
  'GoldenRod',
  'Gray',
  'Grey',
  'Green',
  'GreenYellow',
  'HoneyDew',
  'HotPink',
  'IndianRed',
  'Indigo',
  'Ivory',
  'Khaki',
  'Lavender',
  'LavenderBlush',
  'LawnGreen',
  'LemonChiffon',
  'LightBlue',
  'LightCoral',
  'LightCyan',
  'LightGoldenRodYellow',
  'LightGray',
  'LightGrey',
  'LightGreen',
  'LightPink',
  'LightSalmon',
  'LightSeaGreen',
  'LightSkyBlue',
  'LightSlateGray',
  'LightSlateGrey',
  'LightSteelBlue',
  'LightYellow',
  'Lime',
  'LimeGreen',
  'Linen',
  'Magenta',
  'Maroon',
  'MediumAquaMarine',
  'MediumBlue',
  'MediumOrchid',
  'MediumPurple',
  'MediumSeaGreen',
  'MediumSlateBlue',
  'MediumSpringGreen',
  'MediumTurquoise',
  'MediumVioletRed',
  'MidnightBlue',
  'MintCream',
  'MistyRose',
  'Moccasin',
  'NavajoWhite',
  'Navy',
  'OldLace',
  'Olive',
  'OliveDarb',
  'Orange',
  'OrangeRed',
  'Orchid',
  'PaleGoldenRod',
  'PaleGreen',
  'PaleTurquoise',
  'PaleVioletRed',
  'PapayaWhip',
  'PeachPuff',
  'Peru',
  'Pink',
  'Plum',
  'PowderBlue',
  'Purple',
  'RebeccaPurple',
  'Red',
  'RosyBrown',
  'RoyalBlue',
  'SaddleBrown',
  'Salmon',
  'SandyBrown',
  'SeaGreen',
  'SeaShell',
  'Sienna',
  'Silver',
  'SkyBlue',
  'SlateBlue',
  'SlateGray',
  'SlateGrey',
  'Snow',
  'SpringGreen',
  'SteelBlue',
  'Tan',
  'Teal',
  'Thistle',
  'Tomato',
  'Turquoise',
  'Violet',
  'Wheat',
  'White',
  'WhiteSmoke',
  'Yellow',
  'YellowGreen',
];
const btn = document.getElementById('btn');
const backBtn = document.getElementById('back-btn');
const forwardBtn = document.getElementById('forward-btn');
const color = document.querySelector('.color');
const hexConv = document.querySelector('.hexConv');

let randomNumber = 0;
let numberArray = [];
let counter = [];

btn.addEventListener('click', function () {
  // get random number betweeN 0 - 3
  randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  hexConv.textContent = colorToHex(colors[randomNumber]);
  // add randomNumber to array
  numberArray.push(randomNumber);
  // if array length is greater than 2, remove first element
  if (numberArray.length > 10) {
    numberArray.shift();
  }
  counter = numberArray.length;
  console.log(numberArray);
});

backBtn.addEventListener('click', function () {
  // if pressed, goes back to previous array value
  if (numberArray.length > 1 && counter > 1) {
    counter--;
    document.body.style.backgroundColor = colors[numberArray[counter - 1]];
    color.textContent = colors[numberArray[counter - 1]];
    hexConv.textContent = colorToHex(colors[numberArray[counter - 1]]);
  }
  console.log(counter);
});

forwardBtn.addEventListener('click', function () {
  // if pressed, goes forward to next array value
  if (numberArray.length > 1 && counter != numberArray.length) {
    counter++;
    document.body.style.backgroundColor = colors[numberArray[counter - 1]];
    color.textContent = colors[numberArray[counter - 1]];
    hexConv.textContent = colorToHex(colors[numberArray[counter - 1]]);
  }
  console.log(counter);
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

function colorToRGBA(color) {
  // Returns the color as an array of [r, g, b, a] -- all range from 0 - 255
  // color must be a valid canvas fillStyle. This will cover most anything
  // you'd want to use.
  // Examples:
  // colorToRGBA('red')  # [255, 0, 0, 255]
  // colorToRGBA('#f00') # [255, 0, 0, 255]
  let cvs, ctx;
  cvs = document.createElement('canvas');
  cvs.height = 1;
  cvs.width = 1;
  ctx = cvs.getContext('2d');
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 1, 1);
  return ctx.getImageData(0, 0, 1, 1).data;
}

function byteToHex(num) {
  // Turns a number (0-255) into a 2-character hex number (00-ff)
  return ('0' + num.toString(16)).slice(-2);
}

function colorToHex(color) {
  // Convert any CSS color to a hex representation
  // Examples:
  // colorToHex('red')            # '#ff0000'
  // colorToHex('rgb(255, 0, 0)') # '#ff0000'
  let rgba, hex;
  rgba = colorToRGBA(color);
  hex = [0, 1, 2]
    .map(function (idx) {
      return byteToHex(rgba[idx]);
    })
    .join('')
    .toUpperCase();
  return '#' + hex;
}
