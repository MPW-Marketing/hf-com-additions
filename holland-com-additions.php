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
