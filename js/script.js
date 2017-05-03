$( document ).ready(function() {

    var thePlane = document.querySelector("#plane");
    var container = document.querySelector("#map-container");

    container.addEventListener("click", getClickPosition, false);

    function getClickPosition(e) {
        var parentPosition = getPosition(e.currentTarget);
        var xPosition = e.clientX - parentPosition.x - (thePlane.clientWidth / 2);
        var yPosition = e.clientY - parentPosition.y - (thePlane.clientHeight / 2);

        thePlane.style.left = xPosition + "px";
        thePlane.style.top = yPosition + "px";
}
 
// Helper function to get an element's exact position
    function getPosition(el) {
      var xPos = 0;
      var yPos = 0;

      while (el) {
        if (el.tagName == "BODY") {
          // deal with browser quirks with body/window/document and page scroll
          var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
          var yScroll = el.scrollTop || document.documentElement.scrollTop;

          xPos += (el.offsetLeft - xScroll + el.clientLeft);
          yPos += (el.offsetTop - yScroll + el.clientTop);
        } else {
          // for all other non-BODY elements
          xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
          yPos += (el.offsetTop - el.scrollTop + el.clientTop);
        }

        el = el.offsetParent;
      }
      return {
        x: xPos,
        y: yPos
      };
    }
    
      document.getElementById("selection").onchange = function() {
        if (this.selectedIndex!==0) {
            window.location.href = this.value;
        }        
    };
});


    
   /* $(".destinations").append("kasia "); 
    for (var i=0; i < airplane_root.length; i ++) {
        $(".destinations").append(airplane_root[i]);
        $(".destinations").append(" ");
        $(".destinations").append(destinations_map[airplane_root[i]][0]);
        $(".destinations").append(" ");
        $(".destinations").append(destinations_map[airplane_root[i]][1]);
        $(".destinations").append("<br>");


destinations_map = {
    "London": [20, 30],
    "Paris": [40, 60],
    "Bruge": [50, 50],
    "Amsterdam": [60, 45],
    "Barcelona": [20, 80],
    "Prague": [70, 25],
    "Berlin": [10, 50],
    "Edinburgh": [10, 10]
}

airplane_root = [
    "London",
    "Barcelona",
    "Prague",
    "Edinburgh",
    "Paris",
    "Bruge",
    "Berlin",
    "Amsterdam",
    "Barcelona",
    "Prague",
    "Berlin",
    "London",
    "Amsterdam",
    "Edinburgh"
]
*/
