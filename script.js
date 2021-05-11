// var $categoryTitles = document.getElementsByClassName('js-wwd-category-title');
// var $categoryContents = document.getElementsByClassName('js-wwd-category-content');

// // console.log($categoryTitles);

// for (var element of $categoryTitles) {
//     initCategoryTitlesListener(element);
// }

// function initCategoryTitlesListener(element){
//     element.addEventListener('click', function(event) {
//         toggleCategory(event);
//     });
// }

// function toggleCategory(event) {
//     var nextCategoryContent = event.target.nextElementSibling;

//     if (nextCategoryContent.classList.contains('show')) {
//         nextCategoryContent.classList.remove('show');
//     } else {
//         // hide all category content
//         for (var element of $categoryContents) {
//             element.classList.remove('show');
//         }
//         // show nearest category content
//         nextCategoryContent.classList.add('show');
//     }
// }

$(document).ready(function () {
    $('.wwd-category').click(function () {
        $(this).find('.js-wwd-category-content').slideToggle(100);
    });
});

