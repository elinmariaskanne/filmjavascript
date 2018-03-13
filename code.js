function renderMovie(data){
    $(".infosection h1").text(data.title);   
    $(".infosection p").text(data.review);
    $(".poster").attr("src", data.imgUrl);
  
  $(".infosection ul").empty();
  for(let i=0; i<data.actors.length; i++){
    $(".infosection ul").append("<li>" + data.actors[i] + "</li>");
  }
}

    
function changeStarRating(rating){
      $(".filled").removeClass("filled");
      for(let i=1; i<=rating; i++){
        $("[data-rating-id=" + i + "]").addClass("filled");
      }
    }


$(".stars").on("click", "span", function(e){
  let star = $(e.target);
  let rating = parseInt(star.attr("data-rating-id"));
  changeStarRating(rating);
});

renderMovie(movieData);

  //   let actorList = "";
  //   for(let i=0; i<data.actors.length; i++){
  //     actorList += "<li>" + data.actors[i] + "</li>";
  //   }
  //   document.querySelector(".infosection ul").innerHTML = actorList;
  // }

  // function changeStarRating(rating){
  //   for(let i=1; i<=5; i++){
  //     let star = document.getElementById("star" + i);
  //     if (i <= rating){
  //       star.classList.add("filled");
  //     } else {
  //       star.classList.remove("filled");
  //     }
  //   }  
  // }
  
  // for(let i=1; i<=5; i++){
  //   let star = document.getElementById("star" + i);
  //   star.addEventListener("click", function(){
  //     changeStarRating(i); 
  //   });
  // }
