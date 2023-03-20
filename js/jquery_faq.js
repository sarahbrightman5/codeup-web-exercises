
"use strict"

let $dt = $('dt');
let $dd = $('dd');
$('button').click('toggle', function (){
    $dd.toggleClass('invisible');
});
$dt.click('toggle', function (){
    $(this).toggle('dt');
});