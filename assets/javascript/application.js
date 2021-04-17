

window.onload=function(){

    
      
}


window.onload = function() {
    document.getElementById('realestateexpanded').style.display = 'none';
    document.getElementById('estateplanningexpanded').style.display = 'none';
};


      function realestatefunction() {
        var x = document.getElementById("realestateexpanded");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
        document.getElementById("estateplanningexpanded").style.display = "none";

      }

      function estateplanningfunction() {
        var x = document.getElementById("estateplanningexpanded");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
        document.getElementById("realestateexpanded").style.display = "none";
      }