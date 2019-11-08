let audio = document.querySelectorAll('.music');
let image = document.querySelectorAll('.images');
let text = document.querySelectorAll('.info-div');




function hideAll() {
  audio.forEach(function(el) {
    el.style.display = 'none';
  });
}

function hideText() {
  text.forEach(function(el) {
    el.style.display = 'none';
  });
}

// run that function right away
hideAll();
hideText();
// when any animal is clicked, make the suitable div appear
image.forEach(function(el) {
  el.onclick = (e) => {
    // hide all the divs to ensure that only one will be open
    hideAll();
    hideText();

    // here is a switch statement to handle opening the right div

    switch (e.target.getAttribute('id')) {
      case 'ep_image':
        document.querySelector('#better')
        	.style.display = 'block';
        document.querySelector('#ep_info')
          .style.display = 'block';
        break;
      case 'doo_wops_image':
        document.querySelector('#doo')
        	.style.display = 'block';
        document.querySelector('#first_album_info')
          .style.display = 'block';
        break;
      case 'uo_image':
        document.querySelector('#unorthodox')
          .style.display = 'block';
        document.querySelector('#second_album_info')
          .style.display = 'block';
        break;
      case '24k_magic_image':
        document.querySelector('#twentyfour')
          .style.display = 'block';
        document.querySelector('#third_album_info')
          .style.display = 'block';
        break;
    } // end of switch
    // switch does not need default for this
    let players = document.querySelectorAll('audio');
    players.forEach(function(el) {
            el.pause();
            el.currentTime = 0;
        });

  } // end of function for clicking

}); // end of forEach()
