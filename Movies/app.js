/*
Author: Mahad Osman
Date: Oct 5th 2022
Exercise: Part two movies
Referenced: Springboard solution for jQuery Exercises
- Attempted in my part one JS but than followed the solution to build this.
 */


let id = 0;
let movies = [];

$('#movieForm').on("submit", function(e){
    e.preventDefault();

let title = $('#titleInput').val();
console.log(title);
let rating = $('#ratingInput').val();
console.log(rating);
//let part2 = $('#part2');
//let deleteBtn = $('<button id = "btnDelete"> DELETE ME </button>');
let movie = {title, rating, id};
console.log(movie);

const movieToAppend = createMovieDataHTML(movie);
console.log(movieToAppend);

//let newDiv = $(`<tr> <td> ${title} </td> </tr>`)
id++;
movies.push(movieToAppend)

//$("#movie-table").append(newDiv);
$("#movie-table").append(movieToAppend);

// const movie = $(`<p> ${title.val()} ${rating.val()} </p>`)
//movie.append(deleteBtn);
//part2.append(movie);
});

//Referenced the soultion as my remove only removed the most recent submission.
$("tbody").on("click", ".btn.btn-danger", function(evt) {
    // find the index where this movie is
    let indexToRemoveAt = movies.findIndex(movie => movie.id === +$(evt.target).data("deleteId"))
    
    // remove it from the array of movies
    movies.splice(indexToRemoveAt, 1)

    // remove it from the DOM
    $(evt.target)
      .closest("tr")
      .remove();
    
  });

//referenced theb solution for the better way to create this.
function createMovieDataHTML(data){
    return `
    <tr>
        <td>${data.title}</td>
        <td>${data.rating}</td>
    <td>
      <button class="btn btn-danger" data-delete-id=${data.id}>
        Delete
      </button>
    </td>
    </tr>
    `;
}

