sumjq = function(selector) {
    var sum = 0;
    jQuery(selector).each(function() {
        sum += Number(jQuery(this).val());
    });
    return sum;
}
