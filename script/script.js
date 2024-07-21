// 🗺️ Navigation
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// ⚙️ Settings
function openSet() {
  document.getElementById("settings").style.width = "300px";
}

function closeSet() {
  document.getElementById("settings").style.width = "0";
}

// ⬆️  Share
function openShare() {
  document.getElementById("share").style.display = block;
}

function closeShare() {
  document.getElementById("share").style.display = block;
}

// 🔴🟠🟡🟢🔵🟣⚫️ Color changer
function changecolor(el) {
  const newBackgroundColor = el.value;
  document.body.style.backgroundColor = newBackgroundColor;
    
  // Calculate the relative luminance of the background color
  const luminance = calculateLuminance(newBackgroundColor);

  // Set the text color to black for bright backgrounds, white for dark backgrounds
  const newTextColor = luminance > 0.5 ? 'black' : 'white';
  document.body.style.color = newTextColor;
}

// Function to calculate luminance - replace this with your preferred function
// This is a basic example, more sophisticated luminance calculations exist
function calculateLuminance(color) {
  // Convert hex color to RGB (replace with your preferred conversion function)
  const rgb = color.substring(1).match(/.{2}/g).map(val => parseInt(val, 16));

  // Calculate relative luminance (basic approximation)
  const lum = 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
  return lum / 255;
}
