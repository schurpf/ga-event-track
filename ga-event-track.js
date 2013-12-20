// Plugin Name: Auto Google Analytics Event Track
// Plugin URI: http://github.com/schurpf/ga-event-track
// Description: This plugin will automatically track the event.
// Version: 1.0.0
// Author: Michael Schurpf
// Author URI: http://schurpf.com
// License: GPL2

jQuery(window).load(function(){
  
var myWebsite = new RegExp(location.host);
var myWebsiteAnchor = new RegExp('#+');
// var badlinkJs = new RegExp('^javascript:|onclick+');
// var badlinkJs = new RegExp('\.onclick+');
var socialMedia = new RegExp('plus|linkedin|pinterest|facebook|twitter+');
var affiliateLink = new RegExp('\/go\/+');
var isDownloadPdf = new RegExp('\.pdf$');
var isDownloadzip = new RegExp('\.zip$');

var curr_url = jQuery(location).attr('href');
  
jQuery('a').each(function(){

 
var url = jQuery(this).attr("href");

//Debug
// console.log(url);
// console.log(jQuery(this).attr('onclick'));
  
    if (jQuery(this).attr('onclick')){
	//do nothing when onclick existing
}
        else if (affiliateLink.test(url)){
		
		//Get affiliate name
		 var index = url.slice(0,-1).lastIndexOf("/") + 1;
		 var affiliate_name_temp = url.substr(index);
		 var affiliate_name = affiliate_name_temp.slice(0,-1);
		 
		 var curr_class = jQuery(this).closest("div").attr('class');
		
		//Debug
		 // console.log(url);
		 // console.log(curr_url);
		 // console.log(affiliate_name);
		 // console.log(curr_class);
		 
		 jQuery(this).addClass('ga-bound');
		
jQuery(this).click(function() { _gaq.push(['_trackEvent', 'Affiliate', affiliate_name, curr_url ]);});

		
//jQuery(this).click(function() { _gaq.push(['_trackEvent', affiliate_name, curr_class, curr_url ]);});

}
        else if (socialMedia.test(url)){
jQuery(this).click(function() { _gaq.push(['_trackEvent', 'Outbound', 'Social Media', url ]);});
}
        else if (myWebsiteAnchor.test(url)){
jQuery(this).click(function() { _gaq.push(['_trackEvent', 'Anchor', 'Click',  url]);});
}
        else if (! myWebsite.test(url)){
jQuery(this).click(function() { _gaq.push(['_trackEvent', 'Outbound', 'Other', url]);});
}    
    else if (isDownloadzip.test(url)){
jQuery(this).click(function() { _gaq.push(['_trackEvent', 'Download', 'Zip', url]);});
}
    else if (isDownloadPdf.test(url)){
jQuery(this).click(function() { _gaq.push(['_trackEvent', 'Download', 'Pdf', url]);});
}
     else { }
     
}); //End each function
  
}); //End window load function