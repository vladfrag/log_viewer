function apply() {
    'use strict';
    var filter_text, filter_regex, result;

    filter_text = $("#filter1_text").val();
    filter_regex = new RegExp(filter_text, "g");

    result = [];
    $("#input1 li").each(function () {
        filter_regex.lastIndex = 0;
        var s1 = filter_regex.exec($(this).text());
        if (s1) {
            result.push($(this).text());
        }
    });

    $("#result1").empty().append($("<ul/>"));
    var new_ul = $("#result1 ul");
    result.forEach(function (el) {
        new_ul.append($("<li/>").text(el));
    });
}


$(document).ready(function () {
    'use strict';
    console.log("ready");
    $("#apply_button").click(apply);
});
