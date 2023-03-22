
"use strict"

// // let $dt = $('dt');
// let $dd = $('dd');
// $('button').click('toggle', function (){
//     $dd.toggleClass('invisible');
// });
// $dt.click('toggle', function (){
//     $(this).toggle('dt');
// });
$('button').on('click', function (){
    $('li').each(function(index) {
        if (index % 2 !== 0) {
            $(this).css('background-color', '#FF0');
        }
    });
});

$('h3').on('click', function (){
    $('li').each(function (){
        $(this).css('fontWeight','bold');
    });
});
$('ul').on('click', function (){
    $('li').first().css('color', 'blue');
});

