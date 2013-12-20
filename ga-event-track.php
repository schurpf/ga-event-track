<?php
/*
Plugin Name: Auto Google Analytics Event Track
Plugin URI: http://github.com/schurpf/ga-event-track
Description: This plugin will automatically track the event.
Version: 1.0.0
Author: Michael Schurpf
Author URI: http://schurpf.com
License: GPL2
*/

function ga_event_track()  
{    
    wp_enqueue_script( 'ga-event-track',  plugins_url( '/ga-event-track.js', __FILE__ ), array( 'jquery' ));  
}  
add_action( 'wp_enqueue_scripts', 'ga_event_track' );  
