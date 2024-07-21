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

// 🎨 Color changer
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

// ➕ a2a script
var a2a_config = a2a_config || {};
a2a_config.onclick = 1;

a2a_config.custom_services = [
  ["Substack Notes",
    "https://substack.com/home?action=compose&message=A2A_LINKNAME_ENC%20%0AA2A_LINKURL_ENC",
    "https://mirojones.github.io/notes/icons/substack.svg",
  ],
];

a2a_config.prioritize = [ 'x', 'facebook', 'whatsapp', 'print', 'copy_link' ];

a2a_config.exclude_services = [ 'amazon_wish_list' ];
