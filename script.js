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

// $(document).ready(function () {
//     $('.js-wwd-category').click(function () {
//         $(this).find('.js-wwd-category-content').slideToggle(100);
//     });
// });

$(document).ready(function () {
    $(".js-wwd-category-title").first().click();
});

$('.js-wwd-category-title').click(function (e) {
    e.preventDefault();

    let $this = $(this);

    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(200);

    } else {
        $this.parent().parent().find('.js-wwd-category-content').removeClass('show');
        $this.parent().parent().find('.js-wwd-category-content').slideUp(200);
        $this.next().toggleClass('show');
        $this.next().slideToggle(200);


        if ($(window).width() >= 1100) {
            // clone content into the visible area
            var $clone = $this.parent().find('.wwd-category-info__container').clone();
            $clone.attr("class", "right-content__body");
            $('.right-content').html($clone);
        }
    }
});

