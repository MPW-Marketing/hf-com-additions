sumjq = function(selector) {
    var sum = 0;
    jQuery(selector).each(function() {
        sum += Number(jQuery(this).val());
    });
    return sum;
}

currentCookies = function(selector) {
    var current = 0;
    var selectValue = jQuery( selector ).val();
    current = selectValue.substring(0,2);
    return current;
}
