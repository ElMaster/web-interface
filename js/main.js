$('.menu .item').tab();
$('.ui.search.dropdown')
    .dropdown({
        useLabels: false,
        onChange: function(value, text, $selectedItem) {
            console.log(value)
        }
    });
// window.location.pathname.split( '/id')[1]