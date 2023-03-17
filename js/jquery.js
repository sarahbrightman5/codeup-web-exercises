// $(function(work) {
//     alert( 'The DOM has finished loading!' );
// });
// window.onload = function(work) {
//     alert( 'The page has finished loading!' );
// }

// $(".text").css({
//     'display':'flex',
//
// });
// $('.column').css({
//     'color':'purple',
//
// });
// $('#list').css({
//     'color':'green',
// });
// $('.codeup').css({
//     'border': '1px solid red',
//     'margin': '5px',
//     'padding':'3px',
//
// });
// $('li').css({
//     'font-size':'20px',
// });
// $('h1,p,li').css({
//     'background-color': 'yellow',
// });
// const $mainHeaderText = $('h1');
// alert($mainHeaderText.text());

$('h1,li,p').css({
    "cursor": "pointer"
})

$('h1').click(
    function(){
        $(this).css('background-color','red');
}
);
$("p").dblclick(
    function(){
        $(this).css('font-size','18px')
}
);
$('li').hover(
    function() {
        $(this).css('color', 'red');
    },
    function() {
        $(this).css('color', 'black');
    }
);

