<script>

var sec = 3;
function myLoop () {           //  create a loop function
   setTimeout(function () {    //  call a 3s setTimeout when the loop is called
      document.getElementbyId("quotes").innerHTML ="Music so good your gurls legs shake";
      document.getElementbyId("quotes").innerHTML ="You can keep your helly cause we keep bringing the jams";
      document.getElementbyId("quotes").innerHTML ="You know we're above you cause these rocks roll";
      document.getElementbyId("quotes").innerHTML ="They said rock was dead so check this zombie out";
      document.getElementbyId("quotes").innerHTML ="We bop till we drop and the tunes just don't stop";
      document.getElementbyId("quotes").innerHTML ="Zoom zoom, bitch";
      sec++;                     //  increment the counter
      if (sec < 7) {            //  if the counter < 10, call the loop function
         myLoop();             //  ..  again which will trigger another
      }                        //  ..  setTimeout()
   }, 3000)
}

myLoop();                      //  start the loop/
</script>
