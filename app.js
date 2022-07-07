function selectMode(mode) {

    var color = "ghostWhite";
    var image = "/images/Fichier 1.png";
    var label = "Light Mode";
   
    if (mode === "dark") {
     color = "darkSlateBlue";
     image = "/images/Fichier 2.png";
     label = "Dark Mode";
   
    } else if (mode === "light") {
     color = "ghostWhite";
     image = "/images/Fichier 1.png";
     label = "Light Mode";
   
    } else {
     color = "dimGray";
     image = "/images/cloud.png";
     label = "cloudy Mode";
    }
   
    console.log(label);
   
   
    document.getElementById("icon").src = image;
    document.getElementById("theme").style.backgroundColor = color;
    document.getElementById("label").innerHTML = label;
   
   }
   