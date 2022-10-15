/*
Author: Mahad Osman
Date: Oct 14, 2022
Exercise: jQuery DOM Pratice 
ReferencesL: Spring board soultions for Q7
*/

/* Part ONE */
//Q1
// $(window).ready(()=>{
//     console.log("Let's get ready to party with jQuery")
// });

//Q2
// $('article img').addClass('image-center')

//Q3
// $('p').last().remove()

//Q4
// let random = Math.floor(Math.random() * 100);
// console.log(random);
// $('#title').css('font-size', random);

//Q5
// $('ol').append('<li> HELLO IM NEW </li>')

//Q6
// const $aSide = $('aside')
// $aSide.children('ol').remove()
// $aSide.append('<p> I am so sorry for the horrible ordered list. God knows I hate order in anything.</p>')

//Q7
// $('input').change(()=>{
//    // console.log($(this));
//    let red = $(".form-control").eq(0).val();
//    let blue = $(".form-control").eq(1).val();
//    let green = $(".form-control").eq(2).val();

//    let color = `rgb(${red}, ${green}, ${blue})`

//    console.log(color)

//     $("body").css("background-color", color);
// })

// //Q8
// $('img').on('click',function () {
//     $(this).remove();
// });


/* Part Two */

// $('#btnSubmit').on('click', function(e){
//     e.preventDefault();

// let title = $('#titleInput');
// let rating = $('#ratingInput');
// let part2 = $('#part2');
// let deleteBtn = $('<button id = "btnDelete"> DELETE ME </button>');

// const movie = $(`<p> ${title.val()} ${rating.val()} </p>`)
// movie.append(deleteBtn);
// part2.append(movie);

// });



// $('#btnDelete').on('click', function(e){
//     e.preventDefault();
//     $(e.target).parent().remove();
// });
