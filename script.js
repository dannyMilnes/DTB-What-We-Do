var $categoryTitles = document.getElementsByClassName('js-wwd-category-title');
var $categoryContents = document.getElementsByClassName('js-wwd-category-content');

// console.log($categoryTitles);

for (var element of $categoryTitles) {
    initCategoryTitlesListener(element);
}

function initCategoryTitlesListener(element){
    element.addEventListener('click', function(event) {
        toggleCategory(event);
    });
}

function toggleCategory(event) {
    var nextCategoryContent = event.target.nextElementSibling;

    if (nextCategoryContent.classList.contains('show')) {
        nextCategoryContent.classList.remove('show');
    } else {
        // hide all category content
        for (var element of $categoryContents) {
            element.classList.remove('show');
        }
        // show nearest category content
        nextCategoryContent.classList.add('show');
    }
}


// var insightDiv = document.querySelector(".insight");
// var insightBtn = document.querySelector(".insight");
// insightBtn.addEventListener("click", function () {
//     insightDiv.classList.add("elementToFadeOut");
//     setTimeout(function () { insightDiv.classList.remove("elementToFadeOut"); }, 500);
// });

// var piDiv = document.querySelector(".process-improvement");
// var piBtn = document.querySelector(".process-improvement");
// piBtn.addEventListener("click", function () {
//     piDiv.classList.add("elementToFadeOut");
//     setTimeout(function () { piDiv.classList.remove("elementToFadeOut"); }, 500);
// });

// var adDiv = document.querySelector(".application-development");
// var adBtn = document.querySelector(".application-development");
// adBtn.addEventListener("click", function () {
//     adDiv.classList.add("elementToFadeOut");
//     setTimeout(function () { adDiv.classList.remove("elementToFadeOut"); }, 500);
// });

// var cloudDiv = document.querySelector(".cloud");
// var cloudBtn = document.querySelector(".cloud");
// cloudBtn.addEventListener("click", function () {
//     cloudDiv.classList.add("elementToFadeOut");
//     setTimeout(function () { cloudDiv.classList.remove("elementToFadeOut"); }, 500);
// });

