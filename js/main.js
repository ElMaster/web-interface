$('.menu .item').tab();
$('.ui.search.dropdown')
    .dropdown('set selected', ['ru']);


$('.__mobile-segment .item')
    .tab({
        context: 'parent'
    })
// window.location.pathname.split( '/id')[1]