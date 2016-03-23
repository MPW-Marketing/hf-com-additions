<?php
/*
Plugin Name: HF Commerce Addtions
Description: Additional features for Holland Farms
Version: 0.1.0
*/


function hf_com_scripts_method() {
    wp_enqueue_script( 'holland-commerce', plugins_url( '/js/holland-commerce.js' , __FILE__ ), array( 'jquery' ), '1.0', true );
}
add_action( 'wp_enqueue_scripts', 'hf_com_scripts_method' );


function add_total_cookies_fields () {
$cont = '<div class="cookies-selected">You have selected <span id="selected-cookies-number">0</span></div>';
echo $cont;
}

//add_action( 'woocommerce_single_product_summary', 'add_total_cookies_fields', 100, 0 );