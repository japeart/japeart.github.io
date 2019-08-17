/* display a cascade image every five seconds */
var cascade = [
  "./res/cascade_amber.jpg",
  "./res/cascade_bag.jpg",
  "./res/cascade_cupid.jpg",
  "./res/cascade_gilded.jpg",
  "./res/cascade_lobster.jpg",
  "./res/cascade_scallop.jpg",
];

var cascadeIndex =  0;

function displayNextCascadeImage() {
  var length = cascade.length;
  cascadeIndex++;
  cascadeIndex = cascadeIndex % length;
  var next = '<img src="' + cascade[cascadeIndex] + '" alt="Cascade Image">';
  document.getElementById('fadeBox').innerHTML = next;
  console.log(cascadeIndex);
}

setInterval(displayNextCascadeImage, 3 * 1000);
