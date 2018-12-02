/*
 * Function that modifies the HTML nodes classes and format, to use the cards style of
 * the Projects widget. It only works with `talks_selected`.
 */
function updateStyle() {
  // Get the object of the talks
  var elem = document.getElementById("talks_selected").getElementsByClassName("col-12 col-lg-8")[0];
  
  // Change the classes
  elem.classList.add("row", "isotope", "projects-container", "js-layout-masonry");
  elem.classList.remove("col-12", "col-lg-8");

  
  // Now get each talk
  var indivs = document.getElementById("talks_selected").getElementsByClassName("pub-list-item");
  console.log(indivs)
  
  // Iterate backwards or otherwise it won't work.
  for(var t = indivs.length-1; t >= 0 ; t--) {
    // Change the class
    indivs[t].classList.add("card");
   
    // Create the wrapper
    var wrapper = document.createElement("div");
    wrapper.classList.add("col-12", "col-md-62", "col-lg-4", "project-item", "isotope-item", "js-id-data-science", "js-id-R");
    
    // Add the wrapper
    indivs[t].parentNode.insertBefore(wrapper, indivs[t]);
    wrapper.appendChild(indivs[t]);

    // Remove the class
    indivs[t].classList.remove("pub-list-item");

  }


  // Now remove the calendar icon
  var cards = document.getElementById("talks_selected").getElementsByClassName("fas fa-calendar-alt pub-icon");
  // Go backwards again
  for(var c = cards.length-1; c >= 0; c--) {
    cards[c].remove()
  }
}



// Call the function when loading the site.
window.onload = updateStyle;