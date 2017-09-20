$(document).ready(function () {
    // $('#example').DataTable({
    //     "ajax": "data/arrays.txt",
    //     "deferRender": true // Use this option when working with large data sets
    // });


    // When data is available in object format then defines columns
    // $('#example').DataTable({
    //     "ajax": "data/objects.txt",
    //     "columns": [
    //         {"data": "name"},
    //         {"data": "position"},
    //         {"data": "office"},
    //         {"data": "extn"},
    //         {"data": "start_date"},
    //         {"data": "salary"}
    //     ]
    // });


    // Configuration to highlight searched text
    var table = $('#example').DataTable({
        "ajax": "data/objects.txt",
        "columns": [
            { "data": "name" },
            { "data": "position" },
            { "data": "office" },
            { "data": "extn" },
            { "data": "start_date" },
            { "data": "salary" }
        ],
        /*
        * For enabling search highlight
        */
        searchHighlight: true
    });

    table.on('draw', function () {
        var body = $(table.table().body());
        body.unhighlight();
        body.highlight(table.search());
    });

});