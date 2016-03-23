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

orderSizeChange = function(selector, summary){
	var totCookies = currentCookies(selector);
	var selectCookies = sumjq(summary);
	if(jQuery.isNumeric(totCookies)){
		var remainCookies = totCookies - selectCookies;
		jQuery('.cookies-selected').html('You have selected <span id="cookies-selected-number">'+selectCookies+'</span> of <span id="cookies-total-number">'+totCook+'</span> cookies. Please select <span id="cookies-left">'+remainCookies+'</span> more cookies.');
	}

}

cookiesNumberChange = function (selector, summary){
	var totCookies = currentCookies(selector);
	var selectCookies = sumjq(summary);
  	if(jQuery.isNumeric(totCookies)){
  		var remainCookies = totCookies - selectCookies;
  		jQuery('#cookies-selected-number').html(selectCookies);
		jQuery('#cookies-total-number').html(totCookies);
		jQuery('#cookies-left').html(remainCookies);
  	}
}
jQuery( document ).ready( function () {
		jQuery( '.variations' ).on('change', '#pa_order-size' , function() {
		console.log('selec');
  		var selectCookies = sumjq('.tm-qty');
  		var totCookies = currentCookies('#pa_order-size');
			if(jQuery.isNumeric(totCookies)){
				var remainCookies = totCookies - selectCookies;
				jQuery('.cookies-selected').html('You have selected <span id="cookies-selected-number" class="cookie-number">'+selectCookies+'</span> of <span id="cookies-total-number" class="cookie-number">'+totCookies+'</span> cookies. <span class="cookie-alert"></span>');
				if (remainCookies > 0 ) {
				jQuery('.cookie-alert').html('Please select <span id="cookies-left" class="cookie-number">'+remainCookies+'</span> more cookies.');
				} else if (remainCookies < 0) {
					jQuery('.cookie-alert').html('You have selected <span id="cookies-left" class="cookie-number">'+Math.abs(remainCookies)+'</span> too many cookies, please adjust your order size or number of cookies');				} else if (remainCookies == 0 ) {
				jQuery('.cookie-alert').html('');
				} 
			}
	});


	jQuery( '.tm-qty' ).change(function() {
		var thisVal = jQuery(this).val()
			var holder = jQuery(this).parent().next('.tm-field-display').children('.tmcp-checkbox');
			var thyname = jQuery(this).prop('name');
			thyname = thyname.replace('_quantity' , '');
			holder = jQuery('.tmcp-checkbox[name="'+thyname+'"]');
		if (thisVal > 0) {
			jQuery(holder).prop( "checked", true );
		} else if (thisVal == 0) {
			jQuery(holder).prop( "checked", false );
		}

  		var selectCookies = sumjq('.tm-qty');
  		var totCookies = currentCookies('#pa_order-size');
  		if(jQuery.isNumeric(totCookies)){
  			var remainCookies = totCookies - selectCookies;
  			jQuery('#cookies-selected-number').html(selectCookies);
			jQuery('#cookies-total-number').html(totCookies);
			jQuery('#cookies-left').html(remainCookies);
			if (remainCookies > 0 ) {
				jQuery('.cookie-alert').html('Please select <span id="cookies-left" class="cookie-number">'+remainCookies+'</span> more cookies.');
				} else if (remainCookies < 0) {
					jQuery('.cookie-alert').html('You have selected <span id="cookies-left" class="cookie-number">'+Math.abs(remainCookies)+'</span> too many cookies, please adjust your order size or number of cookies');
				} else if (remainCookies == 0 ) {
				jQuery('.cookie-alert').html('');
				} 
  		}
  		console.log(totCookies+'cha');
	});
	
});