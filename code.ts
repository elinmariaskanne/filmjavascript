import * as $ from "jquery";
import {movieData} from "./data";

function renderMovie(data) {
    $(".infosection h1").text(data.title);
    $(".infosection p").text(data.review);
    $(".poster").attr("src", data.imgUrl);

    $(".infosection ul").empty();
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < data.actors.length; i++) {
    $(".infosection ul").append("<li>" + data.actors[i] + "</li>");
  }
}

function changeStarRating(rating) {
      $(".filled").removeClass("filled");
      for (let i = 1 ; i <= rating; i++) {
        $("[data-rating-id=" + i + "]").addClass("filled");
      }
    }

const ui = {

  title: $(".infosection h1"),

  review: $(".infosection p"),

  poster: $(".poster"),

  actors: $(".infosection ul"),

  rating: $(".stars"),

  stars: [

    $("[data-rating-id='1']"),

    $("[data-rating-id='2']"),

    $("[data-rating-id='3']"),

    $("[data-rating-id='4']"),

    $("[data-rating-id='5']"),

  ],

};
// tslint:disable-next-line:only-arrow-functions
ui.rating.on("click", "span", (e) => {
  const star = $(e.target);
  // tslint:disable-next-line:radix
  const rating = parseInt(star.attr("data-rating-id"));
  changeStarRating(rating);
});
// $(".stars").on("click", "span", function(e) {
// const star = $(e.target);
//   // tslint:disable-next-line:radix
//   const rating = parseInt(star.attr("data-rating-id"));
//   changeStarRating(rating);
// });

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
