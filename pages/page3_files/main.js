jQuery.support.cors = true; // IE 10 Cross Domain AJAX support

//to solve consol problem on IE
if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function () { };
if (!window.console.info) window.console.info = function () { };


var geo_country = 'United States';
var geo_country_code = 'US';
var geo_country_code_default = 'US';
var geo_state;
var geo_state_code;

var userHasMyBehrSavedContent = false;
var userProjectIds;
var pageSize = 8;
var lastPage = 0;
var pageNumber = 0;
var pagesRead = 0;
var numProjects = 0;

var userFBFirstName = "";
var userFBLastName = "";
var userFBUID = "";
var userFBEmail = "";

var SLIDER_SLIDE_TIME = 780;
var SLIDER_WAIT_TIME = 8500;
var sliderAutoIntent;
var DROPDOWN_WAIT_TIME = 225;
var dropdownIntent;
var uriSplit = window.location.pathname.split("/",2);
var consumerContext = "/" + uriSplit[1] + "/";
var renderImageContext = "/renderimage/";
var Colrs = "Colors";
var colrs = "colors";

//function to find if certain element exists in the DOM
$.fn.exists = function(callback) {
  var args = [].slice.call(arguments, 1);
  if (this.length) {
    callback.call(this, args);
  }
  return this;
};

navigator.clientBrowser = (function() {
	var ua = navigator.userAgent, N = navigator.appName, tem, M = ua
			.match(/(opera|chrome|safari|firefox|msie|trident)\/?\s*([\d\.]+)/i)
			|| [];
	M = M[2] ? [ M[1], M[2] ] : [ N, navigator.appVersion, '-?' ];
	if (M && (tem = ua.match(/version\/([\.\d]+)/i)) != null)
		M[2] = tem[1];
	return M.join(' ');
})();

(function($) {
	$.fn.extend( {
		limiter: function(limit, elem) {
			$(this).on("keyup focus", function() {
				setCount(this, elem);
			});
			function setCount(src, elem) {
				var chars = 0;
				if(typeof src != 'undefined'){
					chars = src.value.length;
					if (chars > limit) {
						src.value = src.value.substr(0, limit);
						chars = limit;
					}
				}
				elem.html( limit - chars );
			}
			setCount($(this)[0], elem);
		}
	});
})(jQuery);

function getContextRootUrl(){ 
	var url = window.location.href;
	var regExp = /^http:\/\/[0-9a-zA-Z.]*\/[0-9a-zA-Z]*\//
	var matches = url.match(regExp);
	//it will return http://www.behr.com/consumer/ if us consumer site
	return matches ;
}
/*function isTouchDevice() {
   var el = document.createElement('div');
   el.setAttribute('ongesturestart', 'return;');
   return typeof el.ongesturestart === "function";
}*/

function isTouchDevice() {
	return !!('ontouchstart' in window) || ('onmsgesturechange' in window) && !!(window.navigator.maxTouchPoints);
}

function mainNavHoverActions(ni) {

	if (!$(ni).length) {
		return false;
	}
	clearTimeout(dropdownIntent);
	$('.main_nav_wrapper a.nav_item').removeClass('dropdown_active');
	$('.main_nav-dropdown').hide();
	$(ni).addClass("dropdown_active");

	if ($(ni).attr('dropdown') == ''
			|| typeof ($(ni).attr('dropdown')) === 'undefined') {
		$('.main_nav_wrapper,.main_nav-dropdown-wrapper').css('overflow',
				'hidden');
		return false;
	}
	$('.main_nav_wrapper,.main_nav-dropdown-wrapper')
			.css('overflow', 'visible');
	$('.main_nav-dropdown-' + $(ni).attr('dropdown')).show();
	// -touch events
	$('.main_nav-dropdown-wrapper').on('touchend', function(e) {
		e.stopPropagation();
	});
	/*$('html,body').on('touchend', function(e) {
		//e.preventDefault();
		mainNavTouchOut();
	});*/
}
function mainNavHover() {
	mainNavHoverActions($(this));
}
function mainNavTouchOut() {
	$('.main_nav-dropdown').hide();
	$('.main_nav_wrapper,.main_nav-dropdown-wrapper').css('overflow', 'hidden');
	$('.main_nav_wrapper a.nav_item').removeClass('dropdown_active');
	$('html,body').off('touchend');
	$('.main_nav-dropdown-wrapper').off('touchend');
}
function mainNavOut() {
	dropdownIntent = setTimeout(mainNavTouchOut, DROPDOWN_WAIT_TIME);
	$('html,body').off('touchend');
	$('.main_nav-dropdown-wrapper').off('touchend');
}
function mainNavDropdownHover() {
	clearTimeout(dropdownIntent);
}
function handleNavLinkTouch(e) {
	e.preventDefault();
	e.stopPropagation();
	var a = e.target;
	if ($(a).attr('href')) {
		window.location = $(a).attr('href');
	}
}
function handleMainNavTouch(e) {
	var ni = e.target;
	
	if($(ni).hasClass("dropdown_active") || $(ni).parent().hasClass("dropdown_active")){
		var a = e.target;
		if ($(a).attr('href')) {
			window.location = $(a).attr('href');
		}
		return true
	} else {
		mainNavHoverActions(ni);
		e.preventDefault();
		e.stopPropagation();
		return false;	
	}
}
function setupMainNavHovers() {
	var isATouchDevice = isTouchDevice();
	if(!isATouchDevice) {
		$('.main_nav_wrapper a.nav_item').hover(mainNavHover, mainNavOut);
	}else{
		$('.main_nav_wrapper a.nav_item-colors').on('click', handleMainNavTouch);
		$('.main_nav_wrapper a.nav_item-inspiration').on('click', handleMainNavTouch);
		$('.main_nav_wrapper a.nav_item-products').on('click', handleMainNavTouch);
		$('.main_nav_wrapper a.nav_item-how-to').on('click', handleMainNavTouch);
		$('.main_nav_wrapper a.nav_item-whybehr').on('click', handleMainNavTouch);
		$('.main_nav_wrapper a.nav_item-services').on('click', handleMainNavTouch);

		$('.main_nav-dropdown-wrapper a').on('click', handleNavLinkTouch);	
		$('.main_nav-dropdown-wrapper a').on('touchend', handleNavLinkTouch);
	}
	$('.main_nav-dropdown').hover(mainNavDropdownHover, mainNavOut);
}

function oldCreatePopupOld(url, windowName, width, height) {
	var delayedTime = 0;
	if(url.indexOf("facebook") != -1){
		delayedTime = 4000;
	}
	//setTimeout(function(){createPopupTimer(url, windowName, width, height);},delayedTime);
}
function createPopup(url, windowName, width, height) {
	var currentWin = window.open(url, windowName, 'width=' + width + ',height=' + height + ',scrollbars=yes');
	currentWin.focus();
	//setTimeout(function(){currentWin.focus();},1000);
}

function socialShareAnalytics(socialCode,socialTitle){
	var inspirationGallery = false;
	var inspirationArticle = false;
	var howTo = false;
	var title = "";
	var category = "";
	if(location.href.indexOf('/inspiration/') >= 0 || location.href.indexOf('/how-to/') >= 0){
		if(location.href.indexOf('/photo-galleries/') >= 0){
			inspirationGallery = true;
			title = "Gallery";
			category = "Inspiration";
		}else if(location.href.indexOf('/design-advice/') >= 0){
			inspirationArticle = true;
			title = "Article";
			category = "Inspiration";
		}else if(location.href.indexOf('/how-to/exterior/') >= 0 || location.href.indexOf('/how-to/interior/') >= 0){
			howTo = true;
			title = "Article";
			category = "How To";
		}
		var label = $('.content_wrapper h1.imageTitle[style!="display:none"]').html();
		console.log("Title :- "+label);
		
		if(inspirationGallery || inspirationArticle || howTo){
			googleAnalyticsTagEvents('High Value_'+socialCode,category+' '+title+' Shared '+socialTitle,label);
		}
	}
}
function setupSharePopups() {
	//_gaq = _gaq || [];	
	$('.facebook_share_popup').click(
			function() {
				socialShareAnalytics('FB','on Facebook');
                                var anchor = $(this).attr('anchor');
                                var name = $(this).attr('name');
                                var picture = $(this).attr('picture');
                                var description = $(this).attr('description');  
                                var caption = $(this).attr('caption');                                 
                                //alert('hello11 ' + $(this).get(0).tagName + ' ' + anchor);
                                if (anchor == undefined) {
                                    createPopup('https://www.facebook.com/sharer/sharer.php?u='
				          + location.href, 'sharer', 626, 436);
                                } else {
                                    FB.ui( { 
                                    method: 'feed', 
                                    name: name, 
                                    link: window.location + "#" + anchor, 
                                    picture: picture, 
                                    description: description, 
                                    caption: caption 
                                }, function( response ) { 
                                    //alert(response);
                                    // do nothing 
                                } ); 
                                }                                				
			});
	$('.twitter_share_popup').click(		
			function() { 
				socialShareAnalytics('TW','on Twitter');
                                var anchor = $(this).attr('anchor');
                                var caption = $(this).attr('caption')
                                if (anchor == undefined) {
				    createPopup('http://twitter.com/share?text=&url='
						+ location.href, 'twitter', 575, 400);
                                } else {
                                    createPopup('https://twitter.com/intent/tweet?text=' + caption  + '&url=' + location.href + '%23' + anchor,
                                           'twitter', 575, 400); 
                                }
			});
	$('.pinterest_share_popup').click(                        
    		        function() {
                                socialShareAnalytics('Pin','on Pinterest');
                                var anchor = $(this).attr('anchor');
                                var picture = $(this).attr('picture');
                                var description = $(this).attr('description');   
				//getGalleryBGImageUrl();
                                if (anchor == undefined) {				
				    createPopup('http://pinterest.com/pin/create/button/?title='
						+ document.title + '&url=' + location.href + '&media='+getGalleryBGImageUrl(),
						'pinterest', 667, 631);
	                	} else {                           
                                    var newwindow = window.open('http://pinterest.com/pin/create/button/?url=' 
                                      + window.location + "%23" + anchor + '&amp;media=' + picture 
                                      + '&amp;description=' + description,  
                                      "_blank", 
                                      "toolbar=yes, scrollbars=no, resizable=no, top=500, left=500, width=764, height=570"); 
                                    newwindow.focus(); 
                                }
			});
}
// Floodlight Tag Starts(for the pages that user visits)
var axel = Math.random() + "";
	var a = axel * 10000000000000;
	var uri = window.location.pathname;
   var howUrl = window.location.href;
 if(uri.concat("/").indexOf("/consumer_ca/") !=-1){
  // AMNET pixel changes
    document.write('<iframe src="https://r.turn.com/server/beacon_call.js?b2=zH5L-ywIxAR0w1MZDj4ggC3gI8TZFVXdQr6jeUZkneH2YSojijCuADhyrLAEpLH_s5hmEM49glyVvfwxpJy6JA" width="1" height="1" frameborder="0" style="display:none"></iframe>');
	document.write('<iframe src="https://secure.leadback.advertising.com/adcedge/lb?site=695501&srvc=1&betr=51220=1315369[720]" width="1" height="1" frameborder="0" style="display:none"></iframe>');
	document.write('<iframe src="//pixel.mathtag.com/event/js?mt_id=816556&mt_adid=147193&v1=&v2=&v3=&s1=&s2=&s3=" width="1" height="1" frameborder="0" style="display:none"></iframe>');
   }
   else{
	switch (uri) {

		case consumerContext+"colors/stain":
		$( document ).ready(function() {
			googleAnalyticsTagEvents('Medium Value-StartWS','WoodSmart started','');
		});		
		document.write('<iframe src="http://1168945.fls.doubleclick.net/activityi;src=1168945;type=behr2611;cat=woods856;ord=1;num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
		break;
		
		case consumerContext+"woodsmart-by-behr":
		$( document ).ready(function() {
			googleAnalyticsTagEvents('Medium Value-StartWS','WoodSmart started','');
		});
		document.write('<iframe src="http://1168945.fls.doubleclick.net/activityi;src=1168945;type=behr2611;cat=woods856;ord=1;num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
		break;

		case consumerContext+"products/stain-calculator":
		document.write('<iframe src="http://1168945.fls.doubleclick.net/activityi;src=1168945;type=behr2611;cat=paint987;ord=1;num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
		break;

		case consumerContext+"inspiration/2014-color-trends":
		document.write('<iframe src="http://1168945.fls.doubleclick.net/activityi;src=1168945;type=behr2611;cat=20132031;ord=1;num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
		break;

		case consumerContext+"store-locator":
		document.write('<iframe src="http://1168945.fls.doubleclick.net/activityi;src=1168945;type=behr2611;cat=store956;ord=1;num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
		break;

		case consumerContext+"products/exterior-paint-and-primer":
		document.write('<iframe src="http://1168945.fls.doubleclick.net/activityi;src=1168945;type=behr2611;cat=exter476;ord=1;num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
		break;

		case consumerContext+"products/wood-stains-finishes-cleaners-and-strippers":
		document.write('<iframe src="http://1168945.fls.doubleclick.net/activityi;src=1168945;type=behr2611;cat=woods111;ord=1;num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
		break;

		case consumerContext+"products/floor-coatings-sealers-and-prep":
		document.write('<iframe src="http://1168945.fls.doubleclick.net/activityi;src=1168945;type=behr2611;cat=floor494;ord=1;num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
		break;

		case consumerContext+"products/interior-paint-and-primer":
		document.write('<iframe src="http://1168945.fls.doubleclick.net/activityi;src=1168945;type=behr2611;cat=inter166;ord=1;num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
		break;

		case consumerContext+"inspiration/project-ideas":
		document.write('<iframe src="http://1168945.fls.doubleclick.net/activityi;src=1168945;type=behr2611;cat=exter308;ord=1;num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
		break;

		case consumerContext+"how-to/floor-coating":
      $( document ).ready(function() {
			if (howUrl.indexOf("?") > -1) {
            howtoEmailPopup(howUrl);
         }
		});
		document.write('<iframe src="http://1168945.fls.doubleclick.net/activityi;src=1168945;type=behr2611;cat=howto605;ord=1;num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
		break;

		case consumerContext+"how-to/stain":
		document.write('<iframe src="http://1168945.fls.doubleclick.net/activityi;src=1168945;type=behr2611;cat=howto009;ord=1;num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
		break;

		case consumerContext+"how-to/exterior":
		document.write('<iframe src="http://1168945.fls.doubleclick.net/activityi;src=1168945;type=behr2611;cat=howto396;ord=1;num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
		break;

		case consumerContext+"how-to/interior":
		document.write('<iframe src="http://1168945.fls.doubleclick.net/activityi;src=1168945;type=behr2611;cat=howto831;ord=1;num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
		break;

		case consumerContext+"how-to/interior":
		document.write('<iframe src="http://1168945.fls.doubleclick.net/activityi;src=1168945;type=behr2611;cat=howto831;ord=1;num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
		break;

		case consumerContext+"inspiration/exterior":
		document.write('<iframe src="http://1168945.fls.doubleclick.net/activityi;src=1168945;type=behr2611;cat=brows846;ord=1;num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
		break;

		case consumerContext+"inspiration/interior":
		document.write('<iframe src="http://1168945.fls.doubleclick.net/activityi;src=1168945;type=behr2611;cat=brows226;ord=1;num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
		break;

		case consumerContext+"inspiration":
		document.write('<iframe src="http://1168945.fls.doubleclick.net/activityi;src=1168945;type=behr2611;cat=inspi957;ord=1;num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
		break;
		
		case consumerContext+"colors":
		document.write('<iframe src="http://1168945.fls.doubleclick.net/activityi;src=1168945;type=behr2611;cat=color727;ord=1;num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
		break;
		
		case consumerContext+"colors/mobile-apps":
		document.write('<iframe src="http://1168945.fls.doubleclick.net/activityi;src=1168945;type=behr2611;cat=visua247;ord=1;num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
		break;
		
		case consumerContext+"colors/paint":	
		document.write('<iframe src="http://1168945.fls.doubleclick.net/activityi;src=1168945;type=behr2611;cat=visua836;ord=1;num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
		break;
		
		case consumerContext+"colors/paint#":		
		document.write('<iframe src="http://1168945.fls.doubleclick.net/activityi;src=1168945;type=behr2611;cat=visua836;ord=1;num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
		break;

		case consumerContext+"":
		document.write('<iframe src="http://1168945.fls.doubleclick.net/activityi;src=1168945;type=behr2611;cat=behrh746;ord=1;num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
		break;

		case consumerContext+"products":
		document.write('<iframe src="http://1168945.fls.doubleclick.net/activityi;src=1168945;type=behr2611;cat=produ142;ord=1;num=' + a  + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
		break;
		
		case consumerContext+"inspiration/design-advice":
		document.write('<iframe src="http://1168945.fls.doubleclick.net/activityi;src=1168945;type=behr2611;cat=inter760;ord=1;num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
		break;
		
		case consumerContext+"shopping-cart":
		document.write('<iframe src="http://1168945.fls.doubleclick.net/activityi;src=1168945;type=behr2611;cat=behrs064;ord=1;num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
		break;	
		
		case consumerContext+"how-to":
		document.write('<iframe src="http://1168945.fls.doubleclick.net/activityi;src=1168945;type=behr2611;cat=howto969;ord=1;num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
		break;

		case consumerContext+"buy-samples":
		document.write('<iframe src="http://1168945.fls.doubleclick.net/activityi;src=1168945;type=behr2611;cat=buysa083;ord=1;num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
		break;
		
		case consumerContext+"paint-and-stain-calculator":
		document.write('<iframe src="http://1168945.fls.doubleclick.net/activityi;src=1168945;type=behr2611;cat=paint987;ord=1;num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
		break;
		
		case consumerContext+"mybehr/sign-up":
		document.write('<iframe src="http://1168945.fls.doubleclick.net/activityi;src=1168945;type=behr2611;cat=signu421;ord=1;num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
		break;	
	}
	}

function howtoEmailPopup(howtoUrl) {
   var param = getQueryParams(howtoUrl);
   setupHowToEmail(param);
   showOverlayByID("howtoemail_page");
}

function setupHowToEmail(param) {
   var i = 0;
   var j = 1;
   var currDomainTxt = getUserServiceURL();
   var values = "";
   
   for (i in param) {
      productValues = all_coatings[param[i]];      
      $('#Prep1').append("<b>" + productValues.name + "</b><br>");
      
      values += "<p><b>" + productValues.name + "</b><br>";
      for (i=1; i < (productValues.data.length + 1); i++) {
         productValues.data[i - 1].link = "http://" + currDomainTxt + productValues.data[i - 1].link;
         productValues.data[i - 1].text = productValues.data[i - 1].text + " >>";
         // add >>
         $('#Prep1').append("<div><a target='_blank' href='" + productValues.data[i - 1].link + "'>" + productValues.data[i - 1].text + "</a></div>");
         // update hidden form value
         values += "<div><a target='_blank' href='" + productValues.data[i - 1].link + "'>" + productValues.data[i - 1].text + "</a></div>";
         j++;
      }      
   }
   $('#Tips_for_Pjt_Form').append('<input type="hidden" name="values" value="' + values + '">');   
   $("input[name='postal").watermark('Zip/Postal');
   $('#emailOptIns').css({'height' : '16px'});
   $('#fcountry').css({'height' : '16px'});
}

function getQueryParams(hurl) {
    try {
        //url = window.location.href;
        query_str = hurl.substr(hurl.indexOf('?')+1, hurl.length-1);
        r_params = query_str.split('&');
        params = {}
        for( i in r_params) {
            param = r_params[i].split('=');
            params[ (param[0] + i) ] = param[1];
        }
        return params;
    }
    catch(e) {
       console.log('Error in getting query params howto landing');
       return {};
    }
}
  
function createDynamicFloodLightsTag(category){
	//floodlight Tag for registration
	var axel1 = Math.random() + "";
	var a1 = axel1 * 10000000000000;
	var iframe = document.createElement("iframe");
	iframe.setAttribute("src", "http://1168945.fls.doubleclick.net/activityi;src=1168945;type=behr2611;cat="+category+";ord=1;num=" + a1 + "?");
	iframe.setAttribute("width","1");
	iframe.setAttribute("height","1");
	iframe.setAttribute("frameborder","0");
	iframe.setAttribute("style","display:none");
	document.body.appendChild(iframe);
	// Floodlight Tag Ends
}
// Floodlight Tags Ends
function extractbackgroundUrl(input)
{
	if(typeof input === 'undefined' || input == null){
		//default Image;
		return "http://" + getUserServiceURL() + "/binaries/content/assets/behrdotcom/web/images/bgHomeProducts.jpg";
		//return "http://www.behr.com/cma/Behr/Marketing/Landing_Pages/landing/samplesLanding.jpg";
	}
 // remove quotes and wrapping url()
 return input.replace(/"/g,"").replace(/url\(|\)$/ig, "");
}
function getGalleryBGImageUrl(){
var sWrapper = $($('body').find('.slide_wrapper')[0]);
var SlideNum = parseInt(sWrapper.attr('currentSlide'));
var targetSlide = $(sWrapper).find('.slide')[SlideNum];
var url = extractbackgroundUrl($(targetSlide).css("background-image"));
return url;
}
function enableSliderButtons() {
	$('.slider_button-left').click(handleSliderButtonClick);
	$('.slider_button-right').click(handleSliderButtonClick);
	$('.slide_hud-element').click(handleHudClick);
	$('.color_gallery_scene.slider-interaction').click(
			handleInspirationGalleryDetailSlideClick);
}
function inspirationDetailSliderCallback() {
	var slideIndex = parseInt($($('body').find('.slide_wrapper')[0]).attr(
			'currentSlide'));
	if ($('.paint_chips-wrapper').length) {
		$('.paint_chips-wrapper').hide();
		$('.paint_chips-wrapper').eq(slideIndex).show();
	}
	if ($('h1.imageTitle').length) {
		$('h1.imageTitle').hide();
		$('h1.imageTitle').eq(slideIndex).show();
	}
	if ($('.interior_toolbar .color_chip_links').length) {
		$('.interior_toolbar .color_chip_links').hide();
		$('.interior_toolbar .color_chip_links').eq(slideIndex).show();
	}
}
function sliderAnimationCallback() {
	enableSliderButtons();
	if ($('body').hasClass('interior-inspiration_detail')) {
		inspirationDetailSliderCallback();
	}
}
function sliderDisable() {
	$('.slider-interaction').unbind();
}
function handleInspirationGalleryDetailSlideClick() {
	var targetSlideNum = parseInt($(this).attr('slide'));
	var sw = $($('body').find('.slide_wrapper')[0]);
	var currentSlide = parseInt(sw.attr('currentSlide'));
	if (currentSlide == targetSlideNum)
		return false;
	var leftClick = currentSlide > targetSlideNum;
	animateSlider(sw, targetSlideNum, leftClick);
}
function animateSlider(sliderMain, targetSlideNum, leftClick) {
	sliderDisable();
	var targetSlide = $(sliderMain).find('.slide')[targetSlideNum];
	$(targetSlide).css('left', (leftClick ? 0 : $(targetSlide).width() * 2));
	var currentSlide = $(sliderMain).find('.slide')[$(sliderMain).attr(
			'currentSlide')];
	$(targetSlide).stop().animate({
		'left' : $(currentSlide).width()
	}, SLIDER_SLIDE_TIME, sliderAnimationCallback);
	$(currentSlide).stop().animate({
		'left' : (leftClick ? $(currentSlide).width() * 2 : 0)
	}, SLIDER_SLIDE_TIME);
	$(sliderMain).attr('currentSlide', targetSlideNum);
	var sh = $(sliderMain).parent().find('.slider_hud')[0];
	$(sh).find('.slide_hud-element').removeClass('active');
	$(sh).find('.slide_hud-element.he-' + targetSlideNum).addClass('active');
}
function handleHudClick() {
	var targetSlideNum = parseInt($(this).attr('slide'));
	var sw = $(this).parent().parent().find('.slide_wrapper');
	var currentSlide = parseInt(sw.attr('currentSlide'));
	if (currentSlide == targetSlideNum)
		return false;
	var leftClick = currentSlide > targetSlideNum;
	animateSlider(sw, targetSlideNum, leftClick);
}
function handleSliderButtonClick() {
	var sliderMain = $(this).parent().find('.slide_wrapper')[0];
	var leftClick = $(this).hasClass('slider_button-left');
	var targetSlide;
	if (leftClick)
		targetSlideNum = parseInt($(sliderMain).attr('currentSlide')) === 0 ? $(
				sliderMain).attr('endSlide')
				: parseInt($(sliderMain).attr('currentSlide')) - 1;
	else
		targetSlideNum = $(sliderMain).attr('currentSlide') === $(sliderMain)
				.attr('endSlide') ? 0 : parseInt($(sliderMain).attr(
				'currentSlide')) + 1;
	animateSlider(sliderMain, targetSlideNum, leftClick);
}
function setupSliders() {
	$('.slider .slide_wrapper')
			.each(
					function() {
						var slides = $(this).find('.slide');
						var slideWidth = $(slides[0]).width();
						if (slides.length > 1) {
							$(this).width(slideWidth * 3);
							$(this).css('left', 0 - slideWidth);
							$(this).parent().prepend(
									'<div class="slider_hud"></div>');
							var sliderHUD = $(this).parent()
									.find('.slider_hud');
							var i = 0;
							$(slides)
									.each(
											function() {
												$(this).addClass('slide-' + i);
												$(this)
														.css(
																'left',
																slideWidth
																		+ (slideWidth * (i > 0)));
												if (sliderHUD.length) {
													var he = $(
															document
																	.createElement('DIV'))
															.attr('slide', i)
															.addClass(
																	'slider-interaction slide_hud-element he-'
																			+ i);
													if (!i)
														$(he)
																.addClass(
																		'active');
													sliderHUD.append(he);
												}
												i++;
											});
							if (sliderHUD.length) {
								sliderHUD.width(i * 21);
								sliderHUD.css('left', ($(this).width() / 6)
										- (sliderHUD.width() / 2));
							}
							$(this).attr('endSlide', i - 1).attr(
									'currentSlide', 0);
							$(this)
									.parent()
									.parent()
									.prepend(
											$(document.createElement('A'))
													.addClass(
															'slider-interaction slider_button slider_button-left')
													.html('&lt;'));
							$(this)
									.parent()
									.parent()
									.prepend(
											$(document.createElement('A'))
													.addClass(
															'slider-interaction slider_button slider_button-right')
													.html('&gt;'));
						}
						$(this).width(
								$(this).find('.slide').length
										* $($(this).find('.slide')[0]).width());
					});
	enableSliderButtons();
}
function sliderAutoSetup() {
	clearTimeout(sliderAutoIntent);
	sliderAutoIntent = setTimeout(sliderAutoMove, SLIDER_WAIT_TIME);
}
function sliderAutoMove() {
	$('a.slider-interaction.slider_button-right').click();
	sliderAutoSetup();
}
function initSliderAuto() {
	if ($('a.slider-interaction').length < 1
			|| $('body').hasClass('interior-inspiration_detail')) {
		return false;
	}
	$('.slider_wrapper').hover(function() {
		clearTimeout(sliderAutoIntent);
	}, sliderAutoSetup);
	sliderAutoSetup();
	return true;
}
function paletteSliderRight(slider) {
	var contents = $(slider).find('.palette_slider-contents')[0];
	var contentsOffset = parseInt(contents.style.left);
	if (contentsOffset >= 0)
		return false;
	$('.palette_slider-button').off('click', handlePaletteSliderButtonClick);
	$(contents).animate({
		left : contentsOffset + 576
	}, 1000, setupPaletteSliderButtons);
}
function paletteSliderLeft(slider) {
	var contents = $(slider).find('.palette_slider-contents')[0];
	var contentsOffset = parseInt(contents.style.left);
	if ($(contents).width() <= (Math.abs(contentsOffset) + 576))
		return false;
	$('.palette_slider-button').off('click', handlePaletteSliderButtonClick);
	$(contents).animate({
		left : (contentsOffset - 576)
	}, 1000, setupPaletteSliderButtons);
}
function handlePaletteSliderButtonClick(event) {
	var target = (event.currentTarget) ? event.currentTarget : event.srcElement;
	if ($(target).hasClass('palette_slider-button-right')) {
		paletteSliderLeft($(target).parent());
	} else {
		paletteSliderRight($(target).parent());
	}
}
function setupPaletteSliderButtons() {
	$('.palette_slider-wrapper').each(
		function() {
			if ($($(this).children('.palette_slider-contents')[0]).width() > $(this).width()) {
				$(this).parent().find('a.palette_slider-button').each(
				function() {
					$(this).on('click', handlePaletteSliderButtonClick);
				});
			}
		});
}
function setupPaletteSliders() {
	$('.palette_slider-wrapper').each(function() {
		var contents = $(this).children('.palette_slider-contents')[0];
		$(contents).css('left', 0);
		$(contents).width($(contents).children().length * 72);
	});
	//setupPaletteSliderButtons();
}
function setupColorDetailsContentNav() {
	$('.color_details-content-nav .orange_button').on(
			'click',
			function() {
				if (!$(this).attr('section'))
					return false;
				$('.color_details-content-section').hide();
				$('.color_details-content-section-' + $(this).attr('section'))
						.show();
				$('.color_details-content-nav .orange_button').addClass(
						'white_button');
				$(this).removeClass('white_button');
			});
}
function autoFillSearchText() {
	if ($(this).val() == '') {
		$(this).css('color', '#787878');
		$(this).val($(this).attr('default_value'));
	}
}
function autoEmptySearchText() {
	if ($(this).val() == $(this).attr('default_value')) {
		$(this).css('color', '#4B4B4B');
		$(this).val('');
	}
}
function setupFormInput(defaultInput) {
	$(defaultInput).val($(defaultInput).attr('default_value'));
	$(defaultInput).focus(autoEmptySearchText);
	$(defaultInput).blur(autoFillSearchText);
}
function setupFormDefaults() {
	$('form')
			.each(
					function() {
						var hasDefaults = false;
						$(this).find('input').each(function() {
							if ($(this).attr('default_value')) {
								setupFormInput(this);
								hasDefaults = true;
							}
						});
						if (hasDefaults) {
							$(this)
									.submit(
											function() {
												var formInputs = $(this).find(
														'input');
												if (!formInputs.length)
													return true;
												var hasDefaults = false;
												$(formInputs)
														.each(
																function() {
																	if ($(this)
																			.attr(
																					'default_value') != ''
																			&& $(
																					this)
																					.val() == $(
																					this)
																					.attr(
																							'default_value'))
																		hasDefaults = true;
																});
												return hasDefaults ? false
														: true;
											});
						}
					});
}

function validateMyBehrChangePasswordForm() {
	var pass1 = document.forms["password_change"]["new_password"].value;
	var pass2 = document.forms["password_change"]["new_password_confirm"].value;

	if (pass1 == null || pass1 == "" || pass1.length < 7) {
		$("#password_text").css("color", "red");
		$("#new_password").css("border-color", "red");
		$("#new_password_confirm").css("border-color", "red");
		$("#password_error_text").css("visibility", "hidden");
		return false;
	} else if (pass1 != pass2) {
		$("#password_error_text").css("visibility", "visible");
		$("#new_password").css("border-color", "red");
		$("#new_password_confirm").css("border-color", "red");
		$("#password_text").css("color", "#d8d8d8");
		return false;
	}
}

function isValidEmail(email) {
	var emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
	return (email != '' && emailRegex.test(email));
}
function isValidZip(zip) {
	var zipUpper = zip.toUpperCase();
	var zipRegex = /(^\d{5}(-\d{4})?$)|(^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$)/;
	return (zip != '' && zipRegex.test(zipUpper));
}
	MARQUEE_STORE_LOCATOR_RETURN_COUNT=3;
	var PAGEFLAG = "";
	var baseURI='http://';
	var serviceDomain=typeof(getUserServiceURL)=='function'?getUserServiceURL():'devpreview.behr.com';
	baseURI=baseURI+serviceDomain+'/storelocatorrestwebservice/';
	var forbiddenStates = ['CA', 'OR', 'CT', 'RI', 'VT'];

	function createCellDiv(cellClass,content){
		return $(document.createElement('div')).addClass('cell').addClass(cellClass).html(content);
	}
	function storeLocatorCallback(data,status,obj){
		$('.marquee_store_locator-search_results .results').empty();
		var message=$($(data).find('msg'));
		if(message.length){
			switch(message.text().toLowerCase()){
				case 'nomatchingresultsfound':
					if(PAGEFLAG == "SL") {
						var city=$('.marquee_store_locator-form input.city').val();
						var state=$('form.marquee_store_locator-form select.state').val();
						if ((state=='' || state==$('.marquee_store_locator-form select.state').attr('default_value')) 
							&& city == '' || city==$('.marquee_store_locator-form input.city').attr('default_value')) {
							$('form.marquee_store_locator-form .form-error_message').html('<strong>Sorry. We could not complete your search.</strong><br />Please enter a valid City and State/Province and/or a ZIP/Postal Code').show();
							return false;
						}
						PAGEFLAG = "LA";
						//requestURI=baseURI+'getstoresbycity/'+encodeURIComponent(city)+'/'+encodeURIComponent(state)+'/'+MARQUEE_STORE_LOCATOR_RETURN_COUNT;
						requestURI=baseURI+'getstoresbyproduct/M/'+encodeURIComponent(city)+'/'+encodeURIComponent(state)+'/'+MARQUEE_STORE_LOCATOR_RETURN_COUNT;
						$.ajax({
							url:requestURI,
							async:true
						})
						.done(storeLocatorCallback)
						.fail(storeLocatorFailure);
					} else {
						$('.marquee_store_locator-search_results .counter').html('Sorry. We could not complete your search. <br />Please call Customer Service at 1-800-854-0133 for assistance.').show();
					}
				break;
				default:
					if(PAGEFLAG == "SL") {
						var city=$('.marquee_store_locator-form input.city').val();
						var state=$('form.marquee_store_locator-form select.state').val();
						
						if ((state=='' || state==$('.marquee_store_locator-form select.state').attr('default_value')) 
							&& city == '' || city==$('.marquee_store_locator-form input.city').attr('default_value')) {
							$('form.marquee_store_locator-form .form-error_message').html('<strong>Sorry. We could not complete your search.</strong><br />Please enter a valid City and State/Province and/or a ZIP/Postal Code').show();
							return false;
						}
						PAGEFLAG = "LA";
						//requestURI=baseURI+'getstoresbycity/'+encodeURIComponent(city)+'/'+encodeURIComponent(state)+'/'+MARQUEE_STORE_LOCATOR_RETURN_COUNT;
						requestURI=baseURI+'getstoresbyproduct/M/'+encodeURIComponent(city)+'/'+encodeURIComponent(state)+'/'+MARQUEE_STORE_LOCATOR_RETURN_COUNT;
						//requestURI='http://devpreview.behr.com/storelocatorrestwebservice/getstoresbyproduct/M/92704/5';
						$.ajax({
							url:requestURI,
							async:true
						})
						.done(storeLocatorCallback)
						.fail(storeLocatorFailure);
					} else {
						$('.marquee_store_locator-search_results .counter').html('Sorry. We could not complete your search. <br />Please call Customer Service at 1-800-854-0133 for assistance.').show();
					}
				break;
			}
			return false;
		}
		var jsonObj = $.parseJSON(($.parseHTML(obj.responseText))[0].innerHTML);
		if(jQuery.isEmptyObject(jsonObj.result)){
			storeLocatorFailure();
			return false;
		}else{
			//Google Analytics
			googleAnalyticsTagEvents('High value-Other','Marquee Store Locator Results Achieved','');
		}
		
		var run=jsonObj.result.length;
		var result;
		if(run > 0){
			if(run == 1){
				$('.marquee_store_locator-search_results .counter').html('Here is the nearest store with MARQUEE Interior Paint.').show();
			}else{
				$('.marquee_store_locator-search_results .counter').html('Here are the 3 nearest stores with MARQUEE Interior Paint.').show();
			}
			for(var i=0; i<run; i++){
				cont=$(document.createElement('div')).addClass('store');
				//result=jsonObj.result[i];
				store=[];
				store.storeName='HOME DEPOT';
				store.storeNumber=jsonObj.result[i].store_num;
				store.phone=jsonObj.result[i].phone;
				store.phone = store.phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
				if(jQuery.isEmptyObject(jsonObj.result[i].address.line2) || jsonObj.result[i].address.line2 == ''){
					store.address=jsonObj.result[i].address.line1;
				}else{
					store.address=jsonObj.result[i].address.line1+'<br/>'+jsonObj.result[i].address.line2;
				}
				store.city=jsonObj.result[i].address.city;
				store.state=jsonObj.result[i].address.state_province;
				store.zip=jsonObj.result[i].address.postal_code;
				store.miles=parseFloat(jsonObj.result[i].miles).toFixed(2);
				store.lat=jsonObj.result[i].lat;
				store.long=jsonObj.result[i].lng;
				$(cont)
					.append(createCellDiv('name_and_number','<a target="_blank" href="http://www.homedepot.com">'+store.storeName+' #'+store.storeNumber+'</a><br />'+store.phone))
					.append(createCellDiv('address',store.address+'<br />'+store.city+', '+store.state+' '+store.zip))
					.append(createCellDiv('distance',store.miles+' mi'))
					.append(createCellDiv('actions','<a target="_blank" href="http://maps.google.com/?q='+encodeURIComponent(store.address)+','+encodeURIComponent(store.city)+','+encodeURIComponent(store.state)+','+encodeURIComponent(store.zip)+encodeURIComponent(' (HOME DEPOT)')+'&z=16">View Map</a>'));
				$('.marquee_store_locator-search_results .results').append(cont);
			}
			/*if(jQuery.inArray(jsonObj.result[0].address.state_province,forbiddenStates) != -1){
				$('.marquee_store_locator-search_results .online_sales_message').html('Please note that in your state '+jsonObj.result[0].address.state_province+', only paint samples can be purchased online').show();
			}else{
				$('.marquee_store_locator-search_results .online_sales_message').html('Too far? Now you can have paint delivered to your home. Free shipping on samples and orders over $45. <a href="/consumer/buy-online" target="_blank">Learn about buying paint online</a> <br> Disclaimer* - We currently do not ship 1Gal and 5Gals to these states CA,OR,CT,RI & VT.').show();
			}*/
			$('.marquee_store_locator-search_results .online_sales_message').html('Too far? Now you can have paint delivered to your home. Free shipping on samples and orders over $45. <a href="/consumer/buy-online" target="_blank">Learn about buying paint online</a> <br><br> <div style="font-size:10px">Disclaimer* - We currently do not ship 1Gal and 5Gals to these following states CA,OR,CT,RI & VT.</div>').show();
		}		
		
	}
	function storeLocatorFailure(response){
		$('.marquee_store_locator-search_results .results').empty();
		$('.marquee_store_locator-search_results .counter').html('Sorry. We could not complete your search. <br/>Please make sure to enter a valid City and State/Province or a valid Zip/Postal Code.').show();
	}
	function getZipCodeFromQuery(){
		var query_string = {};
		var query = window.location.search.substring(1);
		if(query=='')return false;
		var vars = query.split("&");
		for(var i=0;i<vars.length;i++){
			var pair = vars[i].split("=");
			if(pair[0]!='zip')continue;
			else return pair[1];
		}
		return false;
	}
	
function setupMarqueeStoreLocator() {					
	$('body')
			.on(
					'submit',
					'form.marquee_store_locator-form',
					function(e) {
						e.preventDefault();
						PAGEFLAG = "SL";
						$('.marquee_store_locator-search_results .results').empty();
						$('form.marquee_store_locator-form .form-error_message').empty().hide();
						$('.marquee_store_locator-search_results .counter').hide();
						$('.marquee_store_locator-search_results .results-border').hide();
						$('.marquee_store_locator-search_results .online_sales_message').hide();
						var requestURI='';
						var city=$('.marquee_store_locator-form input.city').val();
						var state=$('form.marquee_store_locator-form select.state').val();
						var zip=$('.marquee_store_locator-form input.zip_code').val().trim();			
						var zipRegex = /(^\d{5}(-\d{4})?$)|(^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$)/;
						if(zip!='' && zip!=$('.marquee_store_locator-form input.zip_code').attr('default_value')) {
							if(zipRegex.test(zip)){
								//requestURI=baseURI+'getstoresbyzipcode/'+encodeURIComponent(zip)+'/'+MARQUEE_STORE_LOCATOR_RETURN_COUNT;
								requestURI=baseURI+'getstoresbyproduct/M/'+encodeURIComponent(zip)+'/'+MARQUEE_STORE_LOCATOR_RETURN_COUNT;
							} else {
								$('form.marquee_store_locator-form .form-error_message').html('<strong>Sorry. We could not complete your search.</strong><br />Please enter a valid City and State/Province and/or a ZIP/Postal Code').show();
								return false;
							}
						} else {
							if ((state=='' || state==$('.marquee_store_locator-form select.state').attr('default_value')) 
							&& city == '' || city==$('.marquee_store_locator-form input.city').attr('default_value')) {
								$('form.marquee_store_locator-form .form-error_message').html('<strong>Sorry. We could not complete your search.</strong><br />Please enter a valid City and State/Province and/or a ZIP/Postal Code').show();
								return false;
							}
							//requestURI=baseURI+'getstoresbycity/'+encodeURIComponent(city)+'/'+encodeURIComponent(state)+'/'+MARQUEE_STORE_LOCATOR_RETURN_COUNT;
							requestURI=baseURI+'getstoresbyproduct/M/'+encodeURIComponent(city)+'/'+encodeURIComponent(state)+'/'+MARQUEE_STORE_LOCATOR_RETURN_COUNT;
						}

						$.ajax({
							url:requestURI,
							async:true
						})
						.done(storeLocatorCallback)
						.fail(storeLocatorFailure);
						return false;
						});
}

function marqueeInteriorFinder(param){
	var zip = $(param).parent().children("input:first").val(); 
	//$('#marqIntFinder').val();
	showDataOvelayByID('marquee_search_product',zip);
	$('#marqIntFinder').val('');
}

function setupLightRegForm() {
	$('body')
			.on(
					'submit',
					'form.newsletter_subscribe, form.newsletter_unsubscribe',
					function(e) {
						e.preventDefault();
						$('.overlay:visible .form-success_message').hide();
						$('.overlay:visible .form-error_message').empty()
								.hide();
						$(
								'.overlay:visible input, .overlay:visible select, .overlay:visible textarea')
								.removeClass('error');
						var form = e.currentTarget;
						var unsub = $(form).hasClass('newsletter_unsubscribe');
						//_gaq = _gaq || [];
						if (unsub) {
							//_gaq.push([ '_trackEvent', 'My Behr', 'Submit',
							//		'Consumer Newsletter Subscribe' ]);
							//googleAnalyticsTagEvents('High Value-Reg','Light Registration Complete','Subscribed');
							
						} else {
							//_gaq.push([ '_trackEvent', 'My Behr', 'Submit',
							//		'Consumer Newsletter Unsubscribe' ]);
							var evtLabel = 'Subscribed';
							googleAnalyticsTagEvents('High Value-Reg','Light Registration Complete',(readCookie('houzz_ref') == null)? 'Subscribed':'Subscribed-Houzz');
						}
						var email = $(form).find('input.email_address')[0];
						if (!isValidEmail($(email).val())) {
							$(email).addClass('error');
							if (unsub) {
								$(
										'.overlay:visible form.newsletter_unsubscribe .form-error_message')
										.html(
												'<br />Please enter a valid email address')
										.show();
							} else {
								$(
										'.overlay:visible form.newsletter_subscribe .form-error_message')
										.html(
												'<br />Please enter a valid email address')
										.show();
							}
						}
						var sendData = '';
						if (!unsub) {
							var country = $(form).find('select.country')[0];
							var houzzProfessional = $(form).find('select.houzzprofessional')[0];
							var zip = $(form).find('input.zip_code')[0];
							if (!isValidZip($(zip).val())) {
								$(zip).addClass('error');
								$(
										'.overlay:visible form.newsletter_subscribe .form-error_message')
										.html(
												'<br />Please select your country and enter a valid ZIP/Postal Code')
										.show();
							}
							sendData = '<Request><clientDomain>'+getUserServiceURL()+'</clientDomain><subscriber><email>'
									+ $(email).val() + '</email>' + '<country>'
									+ $(country).val() + '</country>'
									+ '<zipCode>' + $(zip).val()
									+ '</zipCode>'
									+ '<houzzProfessional>' + $(houzzProfessional).val()
									+ '</houzzProfessional>';
							
					        if (readCookie('houzz_ref') != null) {
					        	sendData = sendData + "<referredByHouzz>Y</referredByHouzz></subscriber></Request>"; 	
					        } else {
					        	sendData = sendData + "<referredByHouzz>N</referredByHouzz></subscriber></Request>"; 	
					        }
						} else {
							sendData = '<Request><clientDomain>'+getUserServiceURL()+'</clientDomain><subscriber><email>'
									+ $(email).val()
									+ '</email></subscriber></Request>';
						}
						if ($('.overlay:visible .form-error_message:visible').length) {
							var message = unsub ? '<strong>Sorry. We could not unsubscribe you.</strong>'
									: '<strong>Sorry. We could not subscribe you.</strong>';
							$('.overlay:visible .form-error_message:visible')
									.prepend(message);
							window.scrollTo(0, (form.offset().top - 120 < 0 ? 0
									: form.offset().top - 120));
							return false;
						}
						var serviceDomain = typeof (getUserServiceURL) == 'function' ? getUserServiceURL()
								: 'ws.behrpro.com';
						serviceURI = unsub ? '/user/rest/user/unsubscriber'
								: '/user/rest/user/subscriber';
						$
								.ajax(
										{
											url : 'http://' + serviceDomain
													+ serviceURI,
											type : 'POST',
											async : true,
											headers : {
												'Content-Type' : 'text/xml'
											},
											data : sendData,
											success : unsub ? function(data) {
												var xml = $.parseXML(data);
												var s = $(data).find('success')
														.text();
												if (s == 'true') {
													if ($(email).val() == readCookie('mybehr_user')) {
														document.cookie = "mybehr_optin=N; path=/";											
													}	
						
													$(
															'.overlay-newsletter:visible .form_content')
															.hide();
													$(
															'.overlay-newsletter:visible .newsletter-unsub-wrapper .form-success_message')
															.after(
																	'<div class="auto_close_message"><a class="button orange_button overlay-close">Close</a><div class="fl close_content">Closes automatically in 10 seconds.</div></div>')
															.show();
													
													setTimeout(
															function() {
																$(
																		'.overlay-newsletter:visible .overlay-close')
																		.click();
															}, 10000);
												}
												if (s == 'false') {
													$(
															'.overlay:visible form.newsletter_unsubscribe .form-error_message')
															.html(
																	'<strong>Sorry. We could not unsubscribe you.</strong><br />Please enter a valid email address.')
															.show();
												} else {
													$(
															'.overlay:visible form.newsletter_unsubscribe .form-error_message')
															.html(
																	'<strong>Sorry. We could not unsubscribe you.</strong><br />An error occurred. Please try again later.')
															.show();
												}
											}
													: function(data) {
														var xml = $
																.parseXML(data);
														var s = $(data).find(
																'success')
																.text();
														if (s == 'true') {
															if ($(email).val() == readCookie('mybehr_user')) {
																	document.cookie = "mybehr_optin=Y; path=/";											
															}															
															$(
																	'.overlay-newsletter:visible .form_content')
																	.hide();
															$(
																	'.overlay-dpsHouzz:visible .form_content')
																	.hide();
															$(
																	'.overlay:visible .newsletter-sub-wrapper .form-success_message')
																	.after(
																			'<div class="auto_close_message"><a class="button orange_button overlay-close">Close</a><div class="fl close_content">Closes automatically in 10 seconds.</div></div>')
																	.show();
															$(
																	'.overlay:visible .dpsHouzz-sub-wrapper .form-success_message')
																	.after(
																			'<div class="auto_close_message"><a class="button orange_button overlay-close">Close</a><div class="fl close_content">Closes automatically in 10 seconds.</div></div>')
																	.show();
															setTimeout(
																	function() {
																		$(
																				'.overlay-newsletter:visible .overlay-close')
																				.click();
																	}, 10000);
															setTimeout(
																	function() {
																		$(
																				'.overlay-dpsHouzz:visible .overlay-close')
																				.click();
																	}, 10000);
															setTimeout(
																	function() {
																		$(
																				'.overlay-dpsHouzz:visible .overlay-close')
																				.click();
																	}, 10000);
															if($(email).val() == readCookie('mybehr_user')){
																document.cookie = "mybehr_optin=Y; path=/";
															}
														} else {
															$(
																	'.overlay:visible form.newsletter_subscribe .form-error_message')
																	.html(
																			'<strong>Sorry. We could not subscribe you.</strong><br />Our system is temporarily unavailable. Please try again later.')
																	.show();
														}
													}
										})
								.fail(
										function() {
											$(
													'.overlay:visible .form-error_message')
													.html(
															'<strong>Sorry. We could not subscribe you.</strong><br />Our system is temporarily unavailable. Please try again later. ')
													.show();
										});
						return false;
					});
}

function setupHowToEmailOverlayForm() {
    $('body')
       .on(
       'submit',
       'form.Tips_for_Pjt',
       function(e) {
           // stop multiple email sends
           $("input[name='FC_submit").hide();
           e.preventDefault();
           var form = $(e.currentTarget);
           var errorContainer = $(form.find('.form-error_message')[0]);
           var myRecipient = $("input[name='recipient").val();
           $("input[name='sender").val(myRecipient);
           var data = {};
			  $(form).find('input,select').each(
			  		function() {
			  			data[$(this).attr('name')] = $(this).val();
			  			if ($(this).attr('name') == 'emailOptIn') {									
			  				if ($(this).val() == '1') {
                        document.cookie = "mybehr_optin=Y; path=/";
			  				} else {			  					
                        document.cookie = "mybehr_optin=N; path=/";
			  				}	
			  			}						
			  });
           $.ajax(
			     'http://' + getUserServiceURL() + '/mainService/services/csmail', {
		         data : data,
			      type : 'post',
			      dataType : 'json'
	        })
           .done(
					function(response) {
						//console.log("Send How to Email Response : -"+response);						
						if (response.SUCCESS) {
                     $(form)
								.find('.form-success_message').show();
								$(form).find('.form_row,input,.form-meta_info').hide();
                        $('.form_text2').replaceWith("");
								$('.overlay:visible .form-success_message')
									.after('<div class="fl close_content" style="margin-left:0px;padding-left:33px;margin-top:0px;margin-bottom:15px;">Closes automatically in 10 seconds.</div>').show();
                        $('#overlay-buttons').replaceWith('<div class="auto_close_message" style="height:45px;"><a class="button orange_button overlay-close" style="margin-left:270px;margin-top:7px;width:170px;">Close</a></div>').show();
								$('.overlay:visible').css("width", "725px");
								$('.overlay:visible .overlay-content').css("width", "450px");
								setTimeout(
								function() {
									$('.overlay:visible .overlay-close').click();
								}, 10000);
						} else {
							errorContainer
							.prepend('<strong>Sorry. We could not send your email.</strong><br />The form was unable to submit. Please try again later.');
							errorContainer.show();
							window
							.scrollTo(0,(form.offset().top - 120 < 0 ? 0 : form.offset().top - 120));
						}
					})
				.fail(
					function(response) {
						errorContainer
								.prepend('<strong>Sorry. We could not send your email.</strong><br />The form was unable to submit. Please try again later.');
						errorContainer.show();
						window
						.scrollTo(0, (form.offset().top - 120 < 0 ? 0 : form.offset().top - 120));
				});
       });
}

function setupEmailOverlayForm() {
	if (!$('form.send_page').length)
		return false;
	//_gaq = _gaq || [];
	//_gaq.push([ '_trackEvent', 'Page', 'Email', window.location.href ]);
	$('body')
			.on(
					'submit',
					'form.send_page',
					function(e) {
						e.preventDefault();

						var myBehrUserID = readCookie('mybehr_id');
						var form = $(e.currentTarget);
						var errorContainer = $(form.find('.form-error_message')[0]);
						$(errorContainer).empty().hide();
						$(form.find('.form-success_message')[0]).hide();

						form
								.find('input, select, textarea')
								.each(
										function() {
											$(this).removeClass('error');
											if ($(this).attr('required') === '1'
													&& ($(this).val() == null || $(
															this).val() == '')) {
												$(this).addClass('error');
												errorContainer
														.append(
																'<br />Please enter your name')
														.show();
											}
										});
						var email = form.find('input[type="email"]')[0];
						if (!isValidEmail($(email).val())) {
							$(email).addClass('error');
							errorContainer
									.append(
											'<br />Please enter a valid email address for yourself')
									.show();
						}
						
						var zipRegexUS = /^\d{5}(-\d{4})?$/;
						var zipRegexCanada = /^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$/i;
						var zipValue = form.find('input[name="postal"]').val();
						var countryTag = form.find('select[name="country"]');
						countryTag.attr("disabled", false);
						var countryValue = countryTag.val();

						if (countryValue == '') {
							countryTag.addClass('error');
							errorContainer
									.append(
											'<div>Please select your country and enter a valid ZIP / Postal Code.</div>')
									.show();
						} else if (countryValue == "us" || countryValue == "usa"
								|| countryValue == "US" || countryValue == "USA") {
							if (zipValue == '' || !zipRegexUS.test(zipValue)) {
								form.find('select[name="country"]').addClass('error');
								errorContainer
										.append(
												'<div>Please select your country and enter a valid ZIP / Postal Code</div>')
										.show();
							}
						} else {
							if (zipValue == '' || !zipRegexCanada.test(zipValue)) {
								form.find('select[name="country"]').addClass('error');
								errorContainer
										.append(
												'<div>Please select your country and enter a valid ZIP / Postal Code</div>')
										.show();
							}
						}
						
						var recips = form.find('#recipientList')[0];
						var testVals = $(recips).val().split(',');
						$(testVals)
								.each(
										function() {
											if (!isValidEmail(this)) {
												$(recips).addClass('error');
												errorContainer
														.append(
																'<br />Please enter valid email address(es) for additional recipient(s)')
														.show();
												return false;
											}
										});
						if (errorContainer.is(':visible')) {
							if(myBehrUserID != null) {
								countryTag.attr("disabled", true);
							}
							errorContainer
									.prepend('<strong>Sorry. We could not send your email.</strong>');
							window.scrollTo(0, (form.offset().top - 120 < 0 ? 0
									: form.offset().top - 120));
							return false;
						}
						var data = {};
						$(form).find('input,textarea,select,checkbox').each(
								function() {
									data[$(this).attr('name')] = $(this).val();
									if ($(this).hasClass('checkbox')) {
										data[$(this).attr('name')] = $(this)
												.is(':checked') ? '1' : '0';
									}
									if ($(this).attr('name') == 'emailOptIn') {									
										if(window.location.pathname.toLowerCase().concat("/").indexOf("/pro/") != -1 || window.location.pathname.toLowerCase().concat("/").indexOf("/architect/") != -1){
											if ($(this).val() == '1') {
												document.cookie = "mybehr_cBehrNews=Y; path=/";											
											} else {
												if ($(this).val() == '0') {
													document.cookie = "mybehr_cBehrNews=N; path=/";											
												}
											}
										} else {
											if ($(this).val() == '1') {
												document.cookie = "mybehr_optin=Y; path=/";											
											} else {
												if ($(this).val() == '0') {
													document.cookie = "mybehr_optin=N; path=/";
												}	
												
											}			
										}	
									}						
						});
						//data.pageURL = window.location.href;
						data.pageURL = $("input[name='pageURL']").val();
						
						// For first name in thank you message on contact a rep pro
						var tempFirstName = $(form).find('input[name="senderFName"]').val();
						//document.cookie = "temp_firstName=" + tempFirstName + "; path=/";
						socialShareAnalytics('Email','Via Email');
						$
								.ajax(
										'http://' + getUserServiceURL()
												+ '/mainService/services/csmail', {
											data : data,
											type : 'post',
											dataType : 'json'
										})
								.done(
										function(response) {
											//console.log("Send Email Response : -"+response);
											
											if (response.SUCCESS) {
												if (data['subject'].indexOf("Contact a Rep: HOME DEPOT") > -1)  {
													googleAnalyticsTagEvents('High Value-Rep','Email Sent to Rep', '');
													
													// Eloqua integration 
													elqContactRep_MyBehrPro();
												
												}
												// AB 20150722 removing because recipients emails 
												// should not be sent to Eloqua
												//if (data['recipientList'])  {
													//eloqua code
												//	var elqOptIn = data['emailOptIn'] == '1' ? '0' : '1';
												//	var elqData = "senderFName=" + data['senderFName'] +
												//		"&senderLName=" + data['senderLName'] +
												//		"&sender=" + data['sender'] +
												//		"&postal=" + data['postal'] +
												//		"&country=" + data['country'] +
												//	   "&emailOptIn=" + elqOptIn;
												//  elqSubmit('sendandshare',elqData);						
												//}	
											
											$(form)
														.find(
																'.form-success_message')
														.show();
												
												$(form)
														.find(
																'.form_row,input,.form-meta_info')
														.hide();
												$('span.contact_a_rep_success_message_first_name').text(', ' + tempFirstName);
												//console.info('did first name');
												//$(form.find('.form-success_message')[0]).show();
												
												$(
														'.overlay:visible .form-success_message')
														.after(
																'<div class="auto_close_message"><a class="button orange_button overlay-close">Close</a><div class="fl close_content">Closes automatically in 10 seconds.</div></div>')
														.show();
												$('.overlay:visible').css("width", "516px");
												$('.overlay:visible .overlay-content').css("width", "450px");
												setTimeout(
														function() {
															$(
																	'.overlay:visible .overlay-close')
																	.click();
														}, 10000);
											} else {
												errorContainer
														.prepend('<strong>Sorry. We could not send your email.</strong><br />The form was unable to submit. Please try again later.');
												errorContainer.show();
												window
														.scrollTo(
																0,
																(form.offset().top - 120 < 0 ? 0
																		: form
																				.offset().top - 120));
											}
										})
								.fail(
										function(response) {
											errorContainer
													.prepend('<strong>Sorry. We could not send your email.</strong><br />The form was unable to submit. Please try again later.');
											errorContainer.show();
											window
													.scrollTo(
															0,
															(form.offset().top - 120 < 0 ? 0
																	: form
																			.offset().top - 120));
										});
						if(myBehrUserID != null) {
							countryTag.attr("disabled", true);
						}
						return false;
					});
}

function sendCustomerServiceForm() {
	if (!$('form.customer_service_form').length)
		return false;
	//_gaq = _gaq || [];
	//_gaq.push([ '_trackEvent', 'Page', 'Email', window.location.href ]);
	$('body')
			.on(
					'submit',
					'form.customer_service_form',
					function(e) {
						if(window.FormData !== undefined) { // for HTML5 browsers
						    e.preventDefault();
                                                } 
						var form = $(e.currentTarget);
						var errorContainer = $(form.find('.form-error_message')[0]);
						$(errorContainer).empty().hide();
						$(form.find('.form-success_message')[0]).hide();
						//var email = form.find('input[type="email_address"]')[0];
						var email = form[0].email_address;
						if (!isValidEmail($(email).val())) {
							$(email).addClass('error');
							errorContainer
									.append(
											'<br />Please enter a valid email address for yourself')
									.show();
						}
						
						if (errorContainer.is(':visible')) {
							errorContainer
									.prepend('<strong>Sorry. We could not send your email.</strong>');
							window.scrollTo(0, (form.offset().top - 120 < 0 ? 0
									: form.offset().top - 120));
							return false;
						}
						var submitButton = $(form.find("input[name='btn_submit']")[0]);
						$(submitButton).attr('disabled','disabled');  
                  if(window.location.pathname.toLowerCase().concat("/").indexOf("/architect/") > -1) {
						   $(submitButton).attr('value','PLEASE WAIT...'); 
                  } else {
                     $(submitButton).attr('value','Please Wait...'); 
                  }
						//$(this).off(e);
						 $("input[name='sender']").val($("input[name='email']").val());
						 $("input[name='senderFName']").val($("input[name='firstName']").val());
						 $("input[name='senderLName']").val($("input[name='lastName']").val());
						 $("input[name='comment']").val($("textarea[id='question']").val());
						 $("input[name='country']").val($('select[id="country"]').find(":selected").text());
						 $("input[name='postal']").val($("input[id='zip_code']").val());
						 
						
						 
						var data = {};
						$(form).find('input,textarea,select,checkbox').each(
								function() {
									data[$(this).attr('name')] = $(this).val();
									if ($(this).hasClass('checkbox'))
										data[$(this).attr('name')] = $(this)
												.is(':checked') ? '1' : '0';
									if ($(this).hasClass('radio')){
										data[$(this).attr('name')] = $('input:radio[name=subject]:checked').val();
										data[$(this).attr('name')] = $('input:radio[name=sqFeet]:checked').val();
									}
									if ($(this).attr('name') == 'emailOptIn') {									
										if(window.location.pathname.toLowerCase().concat("/").indexOf("/pro/") != -1 || window.location.pathname.toLowerCase().concat("/").indexOf("/architect/") != -1) {
											if ($(this).val() == '1') {
												document.cookie = "mybehr_cBehrNews=Y; path=/";											
											} else {
												document.cookie = "mybehr_cBehrNews=N; path=/";											
												
											}
										} else {
											if ($(this).val() == '1') {
												document.cookie = "mybehr_optin=Y; path=/";											
											} else {
												document.cookie = "mybehr_optin=N; path=/";											
												
											}			
										}	
									}
									
								});
						
						data['subject'] = $('input:radio[name=subject]:checked').val();
						data['sqFeet'] = $('input:radio[name=sqFeet]:checked').val();
						data['pageURL'] = window.location.href;
						var inqType = form[0].inquiryType;
						if(($(inqType).val() == "product") || ($(inqType).val() == "color")){
					            if(window.FormData !== undefined) { // for HTML5 browsers 
							var formData = new FormData();
							$.each($("input[type=file]"), function(i, obj) {
									$.each(obj.files,function(j,file){
										formData.append('photo['+i+']', file);
									})
							});
							$.each(data, function( index, value ) {
							  formData.append(index,value);
							});
							$
								.ajax(
										'http://' + getUserServiceURL()
												+ '/mainService/services/csmailprodissue', {
											data : formData,
											type : 'post',
											enctype: 'multipart/form-data',
											//dataType : 'text'
											cache: false,
											contentType: false,
											processData: false
										})
								.done(function( msg ) {var respns = JSON.stringify(msg);
											if(respns.indexOf("SUCCESS")){
											var country = $('select[id="country"]').find(":selected").text();
											var zip = $("input[id='zip_code']").val();
											var state = $("input[name='state']").val();
											
											document.cookie = "mybehr_location=" + country + "; path=/";
											document.cookie = "mybehr_zip=" + zip+ "; path=/";
											document.cookie = "mybehr_cState=" + state + "; path=/";
											
											
										    redirectToCSLanding();
											}else{
												$('input:submit').attr("disabled", false);
												$('input:submit').attr('value','Send Email'); 
												alert( "Done :Failure - " + respns );
											}}).fail(function( msg ) {alert( 'Failed' + msg );$('input:submit').attr("disabled", false);
												$('input:submit').attr('value','Send Email'); });
                                                     } else {
                                                         myInterval =setInterval(function () {myTimer()}, 1000);
                                                         return true;  
                                                     }
												
																						 
				                 }else{
							$
								.ajax(
										'http://' + getUserServiceURL()
												+ '/mainService/services/csmail', {
											data : data,
											type : 'post',
											dataType : 'text'
										})
								.done(function( msg ) {var respns = JSON.stringify(msg);
											if(respns.indexOf("SUCCESS")){	
												//eloqua script
												if (form[0].name == 'general_feedback') {
													var elqOptIn = data['emailOptIn'] == '1' ? '0' : '1';
													var elqData = "country=" + (data['country'] == "USA" ? "US" : data['country']) +
													"&firstName=" + data['firstName'] +
													"&lastName=" + data['lastName'] +
													"&phone=" + data['phone'] +
													"&email=" + data['email'] +
													"&state=" + data['state'] +	
													"&address1=" + data['address1'] +
													"&address2=" + data['address2'] +
												   "&postal=" + data['postal'] +
												   "&city=" + data['city'] +
												   "&emailOptIn=" + elqOptIn;
													elqSubmit('procustomerservicegeneralfeedback', elqData);	
												} 
												document.cookie = "mybehr_location=" + data['country'] + "; path=/";
												document.cookie = "mybehr_cState=" + data['state'] + "; path=/";
												document.cookie = "mybehr_zip=" + data['postal']+ "; path=/";
												setTimeout("redirectToCSLanding()", 500);
											}else{
												$('input:submit').attr("disabled", false);
												$('input:submit').attr('value','Send Email'); 
												alert( "Done :Failure - " + respns );
											}}).fail(function( msg ) {alert( 'Failed' + msg );$('input:submit').attr("disabled", false);
												$('input:submit').attr('value','Send Email'); });
						
						}
						return true;
					});
						
}
function myTimer() {
    //alert(window.frames['upload_iframe'].document.body.innerHTML );
    window.clearInterval(myInterval);
    redirectToCSLanding();
    
}

function csThankYouMsg(){
	var popUpMsg = readCookie('firstname');
	var uri = window.location.pathname;
	if(window.location.pathname.toLowerCase().concat("/").indexOf("/consumer_ca/") > -1){
		consumerContext = "/consumer_ca/";
	}else if(window.location.pathname.toLowerCase().concat("/").indexOf("/pro/") > -1){
		consumerContext = "/pro/";
	}else if(window.location.pathname.toLowerCase().concat("/").indexOf("/architect/") > -1){
		consumerContext = "/architect/";
	}else{
		consumerContext = "/consumer/";
	}
	if(popUpMsg != null && uri == consumerContext+'customer-service'){
		var cookieRemove = $("#popUpMsg").val();		
		$("#fNameEmailID").text(popUpMsg);
		setTimeout(
		function() {
			showOverlayByID('general');
		},1000);
		var date = new Date();
		date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));
		var expires = "; expires=" + date.toGMTString();
		document.cookie = "firstname=" + cookieRemove
													+expires+ "; path=/";
	}
}
function redirectToCSLanding(){
	var date = new Date();
	date.setTime(date.getTime() + (60 * 1000)); // 1 mins
	var expires = "; expires=" + date.toGMTString();
	var fNameSender = $("#first_name").val();
	document.cookie = "firstname=" + fNameSender
	+ ";expires="+expires+"; path=/";
	$('input:submit').attr("disabled", false);
   if(window.location.pathname.toLowerCase().concat("/").indexOf("/architect/") > -1) {
	   $('input:submit').attr('value','SEND EMAIL');
   } else {
      $('input:submit').attr('value','Send Email');
   }
	var myBehrUserID = readCookie('mybehr_id');
	if(myBehrUserID != null){
		fillCustomerServiceForms();
	}
	if(window.location.pathname.toLowerCase().concat("/").indexOf("/consumer/") > -1){
		consumerContext = "/consumer/";
	}else if(window.location.pathname.toLowerCase().concat("/").indexOf("/consumer_ca/") > -1){
		consumerContext = "/consumer_ca/";
	}else if(window.location.pathname.toLowerCase().concat("/").indexOf("/pro/") > -1){
		consumerContext = "/pro/";
	}else if(window.location.pathname.toLowerCase().concat("/").indexOf("/architect/") > -1){
		consumerContext = "/architect/";
	}else{
		consumerContext = "/consumer/";
	}
	window.location.assign("http://" + getUserServiceURL()
													+ consumerContext+"customer-service");
}

function standardFormSubmit(e, formType) {
	var valid = true;

	if (formType == 'login') {
		valid = logInSubmit(e);
	} else if (formType == 'signup') {
		valid = signUpSubmit(e, false);
	} else if (formType == 'contact') {
		valid = updateEmailContact(e);
	} else if (formType == 'forgotpw') {
		valid = sendPasswordReset(e);
	} else if (formType == 'changepw') {
		valid = changePassword(e);
	} else if (formType == 'login_overlay') {
		valid = logInSubmit(e);
	} else if (formType == 'signup_overlay') {
		valid = signUpSubmit(e, true);
	}
	if (valid) {
		return true;
	} else {
		e.preventDefault();
		return false;
	}
}

function signUpSubmit(e, isOverlay) {

	/* Validation specific to sign up form */
	resetErrorMessages();
	$($(e.currentTarget).find('.form-success_message')[0]).hide();

	var form = $(e.currentTarget);
	var errorContainer = $(form.find('.form-error_message')[0]);
	var firstName = $(e.currentTarget).parent().find('#first_name').val();
	var lastName = $(e.currentTarget).parent().find('#last_name').val();
	var newPassword = $('#new_password').val();
	var newPasswordConfirm = $('#new_password_confirm').val();
	
	if (firstName == '' || lastName == '') {
		$(e.currentTarget).parent().find('#first_name').addClass('error');
		$(e.currentTarget).parent().find('#last_name').addClass('error');
		errorContainer
				.append(
						'<div>Please enter your first and last name - they will NOT be made public</div>')
				.show();
	}

	if (firstName.length > 64) {
		$(e.currentTarget).parent().find('#first_name').addClass('error');
		errorContainer.append(
				'<div>First Name must be 64 characters or less</div>').show();
	}

	if (lastName.length > 64) {
		$(e.currentTarget).parent().find('#last_name').addClass('error');
		errorContainer.append(
				'<div>Last Name must be 64 characters or less</div>').show();
	}

	var nameRegex = /^[a-zA-Z]*$/;

	if (!nameRegex.test(firstName)) {
		$(e.currentTarget).parent().find('#first_name').addClass('error');
		errorContainer.append('<div>First name can only include letters</div>')
				.show();
	}

	if (!nameRegex.test(lastName)) {
		$(e.currentTarget).parent().find('#last_name').addClass('error');
		errorContainer.append('<div>Last name can only include letters</div>')
				.show();
	}

	if (newPassword.length < 8) {
		$('#new_password').addClass('error');
		$('#new_password_confirm').addClass('error');
		errorContainer
				.append(
						'<div>Please enter a password that&apos;s at least 8 characters</div>')
				.show();
	}

	if (newPassword != newPasswordConfirm) {
		$('#new_password').addClass('error');
		$('#new_password_confirm').addClass('error');
		errorContainer
				.append(
						'<div>Password and confirmation didn&apos;t match each other</div>')
				.show();
	}

	var passwordRegex = /^[a-zA-Z0-9]*$/;

	if ($('#new_password').val() != ''
			&& !passwordRegex.test($('#new_password').val())) {
		$('#new_password').addClass('error');
		$('#new_password_confirm').addClass('error').addClass('error');
		errorContainer.append(
				'<div>Password can only include letters and numbers</div>')
				.show();
	}

	var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var emailValue = $(e.currentTarget).parent().find('#email_address').val();

	if (emailValue == '' || !emailRegex.test(emailValue)) {
		$(e.currentTarget).parent().find('#email_address').addClass('error');
		errorContainer.append('<div>Please enter a valid email address</div>')
				.show();
	}

	var zipRegexUS = /^\d{5}(-\d{4})?$/;
	var zipRegexCanada = /^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$/i;
	var zipValue = $(e.currentTarget).parent().find('#zip_code').val();
	var countryValue = $(e.currentTarget).parent().find('#country').val();

	if (countryValue == '') {
		$(e.currentTarget).parent().find('#country').addClass('error');
		errorContainer
				.append(
						'<div>Please select your country and enter a valid ZIP / Postal Code.</div>')
				.show();
	} else if (countryValue == "us" || countryValue == "usa"
			|| countryValue == "US" || countryValue == "USA") {
		if (zipValue == '' || !zipRegexUS.test(zipValue)) {
			$(e.currentTarget).parent().find('#zip_code').addClass('error');
			errorContainer
					.append(
							'<div>Please select your country and enter a valid ZIP / Postal Code</div>')
					.show();
		}
	} else {
		if (zipValue == '' || !zipRegexCanada.test(zipValue)) {
			$(e.currentTarget).parent().find('#zip_code').addClass('error');
			errorContainer
					.append(
							'<div>Please select your country and enter a valid ZIP / Postal Code</div>')
					.show();
		}
	}
	var optIn = $(e.currentTarget).parent().find('#special_offers').val();
	if (optIn == '') {
		$(e.currentTarget).parent().find('#special_offers').addClass('error');
		errorContainer
				.append(
						'<div>Please choose Yes or No on whether to receive BEHR® news and special offers via email.</div>')
				.show();
	} 	
	if (errorContainer.is(':visible')) {
		errorContainer
				.prepend('<div><strong>Sorry. We could not complete your sign up.</strong></div>');
		e.preventDefault();
		return false;
	}

	/* Ajax for sign up functionality */
	var url = 'http://';
	url += getUserServiceURL();
	url += '/user/rest/user/create';
	var loggedIn = false;

	if (optIn === 'Yes') {
		optIn = "Y";
	} else if (optIn === 'No') {
		optIn = "N";
	} else {
		optIn = "";
	}

	var myInterests = "e_mail_language=EN,e_mail_status=1";
	if (optIn == "Y") {
		myInterests = "email," + myInterests;
	}
	var houzzRef = "N";
	if (readCookie('houzz_ref') != null) {
	   houzzRef = "Y";
	}
	var userData = "<Request><clientDomain>"+getUserServiceURL()+"</clientDomain><user><email>"
			+ $(e.currentTarget).parent().find('#email_address').val()
			+ "</email>" + // 
			"<firstName>"
			+ $(e.currentTarget).parent().find('#first_name').val()
			+ "</firstName>" + // 
			"<lastName>" + $(e.currentTarget).parent().find('#last_name').val()
			+ "</lastName>" + // 
			"<password>"
			+ $(e.currentTarget).parent().find('#new_password').val()
			+ "</password>" + // 
			"<userName>"
			+ $(e.currentTarget).parent().find('#email_address').val()
			+ "</userName>" + // 
			"<country>" + $(e.currentTarget).parent().find('#country').val()
			+ "</country>" + // 
			"<zipCode>" + $(e.currentTarget).parent().find('#zip_code').val()
			+ "</zipCode>" + // 
			"<optInStatus>" + optIn + "</optInStatus>" + "<interests>"
			+ myInterests + "</interests>"
			+"<referredByHouzz>"+houzzRef+"</referredByHouzz></user></Request>";

	        
	$
			.ajax({
				type : 'post',
				accept : 'text/xml',
				headers : {
					'Accept' : 'text/xml',
					'Content-Type' : 'text/xml'
				},
				dataType : 'text',
				url : url,
				async : false,
				cache : false,
				data : userData,
				success : function(response) {
					var errorCode = parseInt($(response).find("error").text());

					if (errorCode == 0) {
						var userID = $(response).find("userId").text();
						var firstName = $(response).find("firstName").text();
						var lastName = $(response).find("lastName").text();
						var userName = $(response).find("userName").text();
						var country = $(response).find("country").first()
								.text();
						var zip = $(response).find("zipCode").first().text();
						var optInStatus = $(response).find("optInStatus")
								.first().text();
						document.cookie = "mybehr_optin=" + optInStatus
								+ "; path=/";
						document.cookie = "mybehr_id=" + userID + "; path=/";
						document.cookie = "mybehr_firstname=" + firstName
								+ "; path=/";
						document.cookie = "mybehr_lastname=" + lastName
								+ "; path=/";
						document.cookie = "mybehr_user=" + userName
								+ "; path=/";
						document.cookie = "mybehr_rem=no; path=/";
						document.cookie = "mybehr_location=" + country
								+ "; path=/";
						document.cookie = "mybehr_zip=" + zip + "; path=/";
						document.cookie = "mybehr_fbonly=no; path=/";
						document.cookie = "mybehr_interests=" + myInterests
								+ "; path=/";
						if (firstName.length > 15) {
							firstName = firstName.substr(0, 13) + "...";
						}

						$('a.my_behr div.my_behr_nav_welcome').html(
								'Hello, ' + firstName);
						loggedIn = true;
						checkRatingsSubmissionCookie();
						$('div.main_nav_wrapper a.my_behr').attr('href',
								consumerContext+'mybehr/dashboard');
					} else if (errorCode == 2) {
						resetErrorMessages();

						var errorMessage = $(response).find("messages").text();
						var form = $(e.currentTarget);
						var errorContainer = $(form.find('.form-error_message')[0]);

						errorContainer
								.append('<div><strong>Sorry. We could not complete your sign up.</strong></div>');
						errorContainer
								.append('<div>There is already an account associated with the requested email</div>');
						errorContainer.show();
						e.preventDefault();

						return false;
					} else {
						resetErrorMessages();

						var errorMessage = $(response).find("messages").text();
						var form = $(e.currentTarget);
						var errorContainer = $(form.find('.form-error_message')[0]);

						errorContainer
								.append('<div><strong>Sorry. We could not complete your sign up.</strong></div>');
						errorContainer.append('<div>Please try again</div>');
						errorContainer.show();

						e.preventDefault();
						return false;
					}
				},
				error : function(xhr) {
					var errorMessage = 'Error connecting or sending data to service. Please try again.['
			               + xhr.readyState+","+xhr.status+"]";
					//var errorMessage = 'Error connecting or sending data to service. Please try again.['
			        //       + xhr.readyState+","+xhr.status+"-"+xhr.statusText+","+xhr.timeout
					//	   +","+xhr.responseText+"]";
					resetErrorMessages();
					var form = $(e.currentTarget);
					var errorContainer = $(form.find('.form-error_message')[0]);
					errorContainer.append('<div><strong>Error:' + errorMessage
							+ '</strong></div>');
					errorContainer.show();
					window.scrollTo(0, (form.offset().top - 120 < 0 ? 0 : form
							.offset().top - 120));
					e.preventDefault();
					return false;
				}
			});

	if (loggedIn) {
		googleAnalyticsTagEvents('High Value-Reg','Registration Complete','Registered');
		createDynamicFloodLightsTag('mybeh293');
		resetErrorMessages();
		if (isOverlay) {
			return true;
		} else {
			var form = $(e.currentTarget);
			var errorContainer = $(form.find('.form-error_message')[0]);

			errorContainer.hide();
			$('div.sign-up-module-container').hide();
			$('div.thank-you-module-container').show();
			$('li.myBehrSwitchToProNavItem').html('<a href="/pro/my-behr/dashboard">My BEHRPRO<sup>&reg;</sup> Dashboard</a>');
			e.preventDefault();
			return false;
		}
	} else {
		e.preventDefault();
		return false; // return true;
	}
}

function isProTypeForContext(proType){
    //when a user can be both arch and consumer, the below logic need to be udpated - sc
    if (typeof proType == 'undefined' || proType == null){
        proType = '';
    }
    var rtnVal = false;
    
    if ((window.location.pathname.toLowerCase().concat("/").indexOf("/consumer/") != -1) 
        || (window.location.pathname.toLowerCase().concat("/").indexOf("/consumer_ca/") != -1)) {
        // fail only if proType == 'ARCH'
        if (proType !== 'ARCH'){
            rtnVal = true;
        }
    } else if (window.location.pathname.toLowerCase().concat("/").indexOf("/pro/") != -1){
        // fail only if proType == 'ARCH'
        if (proType !== 'ARCH'){
            rtnVal = true;
        }
    } else if (window.location.pathname.toLowerCase().concat("/").indexOf("/architect/") != -1){
        if (proType === 'ARCH'){
            rtnVal = true;
        }
    }
    return rtnVal;
}

function displayProWrongContextUserLoginMessage(e){
    var form = $(e.currentTarget);
    resetErrorMessages();
    var errorContainer = $(form.find('.form-error_message')[0]);
    errorContainer.append('<div><strong>Sorry. We could not log you in.</strong></div>');
    errorContainer.append('<div>You are not currently registered as an architect. To access architect features, please sign up with a new email address.</div>');
    errorContainer.show();
    e.preventDefault();
}

function displayArchWrongContextUserLoginMessage(e, isOnPro){
    var form = $(e.currentTarget);
    resetErrorMessages();
    var errorContainer = $(form.find('.form-error_message')[0]);
    errorContainer.append('<div><strong>Sorry. We could not log you in.</strong></div>');
    if (!isOnPro) {
        errorContainer.append('<div>You are not currently registered as a consumer. To access consumer features, please sign up with a new email address.</div>');
    } else {
        errorContainer.append('<div>You are not currently registered as a professional. To access professional features, please sign up with a new email address.</div>');
    }
    errorContainer.show();
    e.preventDefault();
}

function logInSubmit(e) {
	if(window.location.pathname.toLowerCase().concat("/").indexOf("/pro/") != -1 ||
	   window.location.pathname.toLowerCase().concat("/").indexOf("/architect/") != -1
	){
		var userData = "<Request><clientDomain>www.behrpro.com</clientDomain><user><email>"
			+ $(e.currentTarget).parent().find('#email_address').val()
			+ "</email>" + "<password>" + $(e.currentTarget).parent().find('#current_password').val()
			+ "</password></user></Request>";
	}else{
		var userData = "<Request><user><email>"
			+ $(e.currentTarget).parent().find('#email_address').val()
			+ "</email>" + "<password>" + $(e.currentTarget).parent().find('#current_password').val()
			+ "</password></user></Request>";
	}
	

	var rem = $('#remember_login').is(':checked');
	var loggedIn = false;

	resetErrorMessages();
	$($(e.currentTarget).find('.form-success_message')[0]).hide();

	var form = $(e.currentTarget);
	var errorContainer = $(form.find('.form-error_message')[0]);

	var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var emailValue = $(e.currentTarget).parent().find('#email_address').val();

	if (emailValue == '' || !emailRegex.test(emailValue)) {
		$(e.currentTarget).parent().find('#email_address').addClass('error');
		errorContainer.append('<div>Please enter a valid email address</div>')
				.show();
	}

	if ($(e.currentTarget).parent().find('#current_password').val() == '') {
		$(e.currentTarget).parent().find('#current_password').addClass('error');
		errorContainer.append('<div>Please enter your password</div>').show();
	}

	if (errorContainer.is(':visible')) {
		errorContainer
				.prepend('<div><strong>Sorry. We could not log you in.</strong></div>');
		e.preventDefault();
		return false;
	}

	var url = 'http://';
	url += getUserServiceURL();// window.location.hostname;//
	url += "/user/rest/user/authenticate";

	jQuery.support.cors = true;

	$.ajax({
				type : 'post',
				contentType : 'text/xml',
				url : url,
				async : false,
				cache : false,
				data : userData,
				success : function(response) {
					var errorCode = parseInt($(response).find("error").text());

					if (errorCode == 0) {
                                            
                                            
                                            //return failure if wrong site.
                                            var proType = $(response).find("proUserVO proType").first().text();
                                            if (!isProTypeForContext(proType)){
                                                if (proType !== 'ARCH'){
                                                    displayProWrongContextUserLoginMessage(e);
                                                } else if (proType === 'ARCH'){
                                                    displayArchWrongContextUserLoginMessage(e, (window.location.pathname.toLowerCase().concat("/").indexOf("/pro/") != -1));
                                                }
                                                return false;
                                            }
                                            
                                            
						var userID = $(response).find("userId").first().text();
						var firstName = $(response).find("firstName").first()
								.text();
						var lastName = $(response).find("lastName").first()
								.text();
						var userName = $(response).find("userName").first()
								.text();
						var country = $(response).find("country").first()
								.text();
						var zip = $(response).find("zipCode").last().text();
						var optInStatus = $(response).find("optInStatus")
								.first().text();
						var interests = $(response).find("interests").first()
								.text();
								
						/* Pro User */
						var cAddress1 = $(response).find("proUserVO address1").first().text();
						var cCity = $(response).find("proUserVO city").first().text();
						var cCompanyName = $(response).find("proUserVO companyName").first().text();
						var cProfession = $(response).find("proUserVO jobTitle").first().text();
						var cPhoneNumber = $(response).find("proUserVO phoneNo").first().text();
						var cInPaint = $(response).find("proUserVO additionalComments").first().text();
						var cBehrNews = $(response).find("proUserVO receiveEmail").first().text();
						var cState = $(response).find("proUserVO state").first().text();
						if(cState != null && cState != '' && cState.length > 2){
							cState = convert_state(cState,'abbrev');
						}
						var cZipCode = $(response).find("proUserVO zipCode").first().text();
						var cCountry = $(response).find("proUserVO country").first().text();
						var cProUser = $(response).find("proUserVO userType").first().text();
						var cAddress2 = $(response).find("proUserVO address2").first().text();
						var cLicenseNumber = $(response).find("proUserVO licenseNo").first().text();
						var cWODStatus = $(response).find("proUserVO WODUserVO status").first().text();
						var rewardNumberList =  $(response).find("proUserVO proRewardsId");
						var preferredLangList =  $(response).find("proUserVO preferredLanguage");
						var paintUsageList = $(response).find("proUserVO estimatedPaintUsage");
						var behrRepList = $(response).find("proUserVO contactByBehrPro");
						var rewardNumber = "";
						var preferredLang = "";	
						var paintUsage = "";
						var behrRep = "";
						var isRewardMember = "";
						if (rewardNumberList.length >0) { 
							rewardNumber = rewardNumberList.first().text();
							if (rewardNumber) {
								isRewardMember = "Yes";
							} else {
								isRewardMember = "No";
							}
						}
						if (preferredLangList.length >0) {
							preferredLang = preferredLangList.first().text();	
						}
						if (paintUsageList.length >0) {
							paintUsage = paintUsageList.first().text();
						}
						if (behrRepList.length >0) {
							behrRep = behrRepList.first().text();
						}	
						/* End Pro User */

						if (rem) {
							var date = new Date();
							date.setTime(date.getTime()
									+ (7 * 24 * 60 * 60 * 1000)); // days
							var expires = "; expires=" + date.toGMTString();
							document.cookie = "mybehr_firstname=" + firstName
									+ "; path=/";
							document.cookie = "mybehr_id=" + userID
									+ "; path=/";
							document.cookie = "mybehr_lastname=" + lastName
									+ "; path=/";
							document.cookie = "mybehr_user=" + userName
									+ expires + "; path=/";
							document.cookie = "mybehr_rem=yes; path=/";
							document.cookie = "mybehr_location=" + country
									+ "; path=/";
							document.cookie = "mybehr_zip=" + zip + "; path=/";
							document.cookie = "mybehr_fbonly=no; path=/";
							document.cookie = "mybehr_optin=" + optInStatus
									+ "; path=/";
							document.cookie = "mybehr_interests=" + interests
									+ "; path=/";
							if (firstName.length > 15) {
								firstName = firstName.substr(0, 13) + "...";
							}

							$('a.my_behr div.my_behr_nav_welcome').html(
									'Hello, ' + firstName);
									
							/* Pro User */		
							document.cookie = "mybehr_cAddress1=" + cAddress1 + "; path=/";
							document.cookie = "mybehr_cCity=" + cCity + "; path=/";
							document.cookie = "mybehr_cCompanyName=" + cCompanyName + "; path=/";
							document.cookie = "mybehr_cProfession=" + cProfession  + "; path=/";
							document.cookie = "mybehr_cPhoneNumber=" + cPhoneNumber + "; path=/";
							document.cookie = "mybehr_cInPaint=" + cInPaint + "; path=/";
							document.cookie = "mybehr_cBehrNews=" + cBehrNews + "; path=/";
							document.cookie = "mybehr_cState=" + cState + "; path=/";
							if(cState != null && cState != '' && cState.length > 2){
								cState = convert_state(cState,'abbrev');
							}
							document.cookie = "mybehr_cZipCode=" + cZipCode  + "; path=/";
							document.cookie = "mybehr_cCountry=" + cCountry  + "; path=/";
							document.cookie = "mybehr_cProUser=" + cProUser  + "; path=/";
							document.cookie = "mybehr_cAddress2=" + cAddress2 + "; path=/";
							document.cookie = "mybehr_cLicenseNumber=" + cLicenseNumber + "; path=/";
							document.cookie = "mybehr_cWodStatus=" + cWODStatus + "; path=/";
							document.cookie = "mybehr_proRewardsId=" + rewardNumber + "; path=/";
							document.cookie = "mybehr_preferredLang=" + preferredLang + "; path=/";	
							document.cookie = "mybehr_proRewards=" + isRewardMember + "; path=/";
							document.cookie = "mybehr_paintUsage=" + paintUsage + "; path=/";
							document.cookie = "mybehr_behrRep=" + behrRep + "; path=/";
														
							/* End Pro User */	
						} else {
							document.cookie = "mybehr_id=" + userID
									+ "; path=/";
							document.cookie = "mybehr_firstname=" + firstName
									+ "; path=/";
							document.cookie = "mybehr_lastname=" + lastName
									+ "; path=/";
							document.cookie = "mybehr_user=" + userName
									+ "; path=/";
							document.cookie = "mybehr_rem=no; path=/";
							document.cookie = "mybehr_location=" + country
									+ "; path=/";
							document.cookie = "mybehr_zip=" + zip + "; path=/";
							document.cookie = "mybehr_fbonly=no; path=/";
							document.cookie = "mybehr_optin=" + optInStatus
									+ "; path=/";
							document.cookie = "mybehr_interests=" + interests
									+ "; path=/";
							if (firstName.length > 15) {
								firstName = firstName.substr(0, 13) + "...";
							}

							$('a.my_behr div.my_behr_nav_welcome').html(
									'Hello, ' + firstName);
									
							/* Pro User */		
							document.cookie = "mybehr_cAddress1=" + cAddress1 + "; path=/";
							document.cookie = "mybehr_cCity=" + cCity + "; path=/";
							document.cookie = "mybehr_cCompanyName=" + cCompanyName + "; path=/";
							document.cookie = "mybehr_cProfession=" + cProfession  + "; path=/";
							document.cookie = "mybehr_cPhoneNumber=" + cPhoneNumber + "; path=/";
							document.cookie = "mybehr_cInPaint=" + cInPaint + "; path=/";
							document.cookie = "mybehr_cBehrNews=" + cBehrNews + "; path=/";
							document.cookie = "mybehr_cState=" + cState + "; path=/";
							if(cState != null && cState != '' && cState.length > 2){
								cState = convert_state(cState,'abbrev');
							}
							document.cookie = "mybehr_cZipCode=" + cZipCode  + "; path=/";
							document.cookie = "mybehr_cCountry=" + cCountry  + "; path=/";
							document.cookie = "mybehr_cProUser=" + cProUser  + "; path=/";
							document.cookie = "mybehr_cAddress2=" + cAddress2 + "; path=/";
							document.cookie = "mybehr_cLicenseNumber=" + cLicenseNumber + "; path=/";
							document.cookie = "mybehr_cWodStatus=" + cWODStatus + "; path=/";
							document.cookie = "mybehr_proRewardsId=" + rewardNumber + "; path=/";
							document.cookie = "mybehr_preferredLang=" + preferredLang + "; path=/";	
							document.cookie = "mybehr_proRewards=" + isRewardMember + "; path=/";
							document.cookie = "mybehr_paintUsage=" + paintUsage + "; path=/";
							document.cookie = "mybehr_behrRep=" + behrRep + "; path=/";							
							/* End Pro User */	
						}
						//alert("currentUrl" + currentUrl  + "- "+ currentUrl.contains('Behr-color-box') );
						loggedIn = true;
						 if(readCookie('mybehr_ratings_sub_url') == null ) {
                                                     if ((consumerContext.indexOf('pro') > -1) || (consumerContext.indexOf('architect') > -1)) {                                              
							$('div.main_nav_wrapper a.my_behr').attr('href',
									consumerContext+'my-behr/dashboard');
                                                     } else {
                                                        $('div.main_nav_wrapper a.my_behr').attr('href',
									consumerContext+'mybehr/dashboard'); 
                                                     } 
						}
					    } else {
						resetErrorMessages();

						var errorMessage = $(response).find("messages").text();
						var form = $(e.currentTarget);
						var errorContainer = $(form.find('.form-error_message')[0]);

						if (errorCode == -1) {
							errorContainer
									.append('<div><strong>Sorry. We could not log you in.</strong></div>');
							errorContainer
									.append('<div>Please confirm your email and password and try again</div>');
						} else if (errorCode == 2) {
							errorContainer
									.append('<div><strong>Sorry. We could not log you in.</strong></div>');
							errorContainer
									.append('<div>Please confirm your email and password and try again</div>');
						} else {
							errorContainer
									.append('<div><strong>Sorry. We could not log you in.</strong></div>');
							errorContainer
									.append('<div>Error with service, please try again</div>');
						}
						errorContainer.show();
						e.preventDefault();
						return false;
					}
					// return true;
				},
				error : function(xhr) {
					//var errorMessage = 'Error connecting or sending data to service. Please try again.['
			        //       + xhr.readyState+","+xhr.status+"-"+xhr.statusText+","+xhr.timeout
					//	   +","+xhr.responseText+"]";
					var errorMessage = 'Error connecting or sending data to service. Please try again.['
			               + xhr.readyState+","+xhr.status+"]";
					resetErrorMessages();
					var form = $(e.currentTarget);
					var errorContainer = $(form.find('.form-error_message')[0]);
					errorContainer.append('<div><strong>Error:' + errorMessage
							+ '</strong></div>');
					errorContainer.show();
					e.preventDefault();
					window.scrollTo(0, (form.offset().top - 120 < 0 ? 0 : form
							.offset().top - 120));
					return false;
				}
			});

	if (loggedIn) {
	   checkRatingsSubmissionCookie();
		return true;
	} else {
		e.preventDefault();
		return false;
	}
}

function sendPasswordReset(e) {
	resetErrorMessages();
	$($(e.currentTarget).find('.form-success_message')[0]).hide();

	var form = $(e.currentTarget);
	var errorContainer = $(form.find('.form-error_message')[0]);

	var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var emailValue = $(e.currentTarget).parent().find(
			'#forgot_password_email_address').val();

	if (emailValue == '' || !emailRegex.test(emailValue)) {
		$(e.currentTarget).parent().find('#email_address').addClass('error');
		errorContainer.append('<div>Please enter a valid email address</div>')
				.show();
	}

	if (errorContainer.is(':visible')) {
		errorContainer
				.prepend('<div><strong>Sorry. We could not send your link.</strong></div>');
		e.preventDefault();
		return false;
	}
	$($(e.currentTarget).find('.form-success_message')[0]).hide();

	var url = 'http://';
	url += getUserServiceURL();
	url += '/user/rest/user/sendpwreset';
	var resetLinkBasePath = "http://" + getUserServiceURL() + consumerContext;

	/*-----Determine reset link base path-----*/
	var currentUrl = window.location.host;
	var splitUrl = currentUrl.split('.');
	var subDomain = splitUrl[0];
	if(window.location.pathname.toLowerCase().concat("/").indexOf("/pro/") != -1
			 || window.location.pathname.toLowerCase().concat("/").indexOf("/architect/") != -1){
		resetLinkBasePath = resetLinkBasePath+'my-behr/change-password';
	}else{
		resetLinkBasePath = resetLinkBasePath+'mybehr/change-password';
	}

	/*----------------------------------------*/

	var userData = "<Request><user><email>"
			+ $('#forgot_password_email_address').val()
			+ "</email><resetLinkBasePath>" + resetLinkBasePath
			+ "</resetLinkBasePath></user></Request>";

	$
			.ajax({
				type : 'post',
				accept : 'text/xml',
				contentType : 'text/xml',
				url : url,
				async : false,
				cache : false,
				data : userData,
				success : function(response) {
					var errorCode = parseInt($(response).find("error").text());

					if (errorCode == 0) {
						var form = $(e.currentTarget);
						var errorContainer = $(form.find('.form-error_message')[0]);
						var successContainer = $(form
								.find('.form-success_message')[0]);
						errorContainer.hide();
						handleOverlayCloseClick();
						showOverlayByID('send_password_reset_success');
						setTimeout('handleOverlayCloseClick()', 10000);
						e.preventDefault();
						return false;
					} else if (errorCode == 1) {
						resetErrorMessages();

						var errorMessage = $(response).find("messages").text();
						var form = $(e.currentTarget);
						var errorContainer = $(form.find('.form-error_message')[0]);
						var successContainer = $(form
								.find('.form-success_message')[0]);
						successContainer.hide();
						errorContainer
								.append('<div><strong>Sorry. We could not send your link.</strong></div>');
						errorContainer
								.append('<div>There is no account associated with that email address</div>');
						errorContainer.show();
						e.preventDefault();
						return false;
					} else {
						resetErrorMessages();

						var errorMessage = $(response).find("messages").text();
						var form = $(e.currentTarget);
						var errorContainer = $(form.find('.form-error_message')[0]);
						var successContainer = $(form
								.find('.form-success_message')[0]);
						successContainer.hide();
						errorContainer
								.append('<div><strong>Sorry. We could not send your link.</strong></div>');
						errorContainer.append('<div>Please try again</div>');
						errorContainer.show();
						e.preventDefault();
						return false;
					}

				},
				error : function(xhr) {
					resetErrorMessages();
					var form = $(e.currentTarget);
					var errorContainer = $(form.find('.form-error_message')[0]);
					errorContainer
							.append('<div><strong>Error connecting or sending data to service. Please try again.</strong></div>');
					errorContainer.show();
					e.preventDefault();
					return false;
				}
			});

	e.preventDefault();
	return false; // return true;
}

function createPassword(e) {
	var myBehrUserID = readCookie('mybehr_id');

	if (myBehrUserID != null) {
		resetErrorMessages();
		$($(e.currentTarget).find('.form-success_message')[0]).hide();

		var form = $(e.currentTarget);
		var errorContainer = $(form.find('.form-error_message')[0]);

		var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		var emailValue = $(e.currentTarget).parent().find(
				'#email_address_create').val();

		if (emailValue == '' || !emailRegex.test(emailValue)) {
			$(e.currentTarget).parent().find('#email_address_create').addClass(
					'error');
			errorContainer.append(
					'<div>Please enter a valid email address</div>').show();
		}

		var newPassword = $(e.currentTarget).parent().find(
				'#new_password_create').val();
		var newPasswordC = $(e.currentTarget).parent().find(
				'#new_password_confirm_create').val();

		if (newPassword.length < 8) {
			$('#new_password_create').addClass('error');
			$('#new_password_confirm_create').addClass('error');
			errorContainer
					.append(
							'<div>Please enter a password that&apos;s at least 8 characters<</div>')
					.show();
		}

		if (newPassword != newPasswordC) {
			$('#new_password_create').addClass('error');
			$('#new_password_confirm_create').addClass('error');
			errorContainer
					.append(
							'<div>Password and confirmation didn&apos;t match each other</div>')
					.show();
		}

		var passwordRegex = /^[a-zA-Z0-9]*$/;

		if (!passwordRegex.test(newPassword)) {
			$('#new_password_create').addClass('error');
			$('#new_password_confirm_create').addClass('error').addClass(
					'error');
			errorContainer.append(
					'<div>Password can only include letters and numbers</div>')
					.show();
		}

		if (errorContainer.is(':visible')) {
			errorContainer
					.prepend('<div><strong>Sorry. We could not create your password.</strong></div>');
			e.preventDefault();
			return false;
		}

		$($(e.currentTarget).find('.form-success_message')[0]).hide();

		var url = 'http://';
		url += getUserServiceURL();
		url += '/user/rest/user/update';
		var userData = "<Request><user><userName>"
				+ emailValue
				+ "</userName><userId>"
				+ myBehrUserID
				+ "</userId><password>"
				+ $(e.currentTarget).parent().find('#new_password_create')
						.val() + "</password><email>" + emailValue
				//+ "</email><optInStatus>" + optIn
				//+ "</optInStatus></user></Request>";
				+ "</email></user></Request>";
		$
				.ajax({
					type : 'post',
					accept : 'text/xml',
					headers : {
						'Accept' : 'text/xml',
						'Content-Type' : 'text/xml'
					},
					contentType : 'text/xml',
					url : url,
					async : false,
					cache : false,
					data : userData,
					success : function(response) {
						var errorCode = parseInt($(response).find("error")
								.text());
						if (errorCode == 0) {
							$(
									$(e.currentTarget).find(
											'.form-success_message')[0]).show();
						} else {
							resetErrorMessages();

							var errorMessage = $(response).find("messages")
									.text();
							var form = $(e.currentTarget);
							var errorContainer = $(form
									.find('.form-error_message')[0]);

							errorContainer
									.append('<div><strong>Sorry. We could not create your password.</strong></div>');
							errorContainer
									.append('<div>There is already an account associated with the requested email</div>');
							errorContainer.show();
							e.preventDefault();
							window.scrollTo(0, (form.offset().top - 120 < 0 ? 0
									: form.offset().top - 120));

							return false;
						}
					},
					error : function(xhr) {
						var errorMessage = 'Error connecting or sending data to service. Please try again.';
						resetErrorMessages();
						var form = $(e.currentTarget);
						var errorContainer = $(form.find('.form-error_message')[0]);
						errorContainer
								.append('<div><strong>Sorry. We could not create your password.</strong></div>');
						errorContainer
								.append('<div>Error connecting or sending data to service</div>');

						errorContainer.show();
						e.preventDefault();
						window.scrollTo(0, (form.offset().top - 120 < 0 ? 0
								: form.offset().top - 120));
						return false;
					}
				});

		e.preventDefault();
		return false;
	}
}

function changePassword(e) {
	var resetKey = getURLParameters('data');
	var passChange = false;

	if (resetKey && resetKey != "No Parameters Found") {

		resetErrorMessages();
		$($(e.currentTarget).find('.form-success_message')[0]).hide();

		var form = $(e.currentTarget);
		var errorContainer = $(form.find('.form-error_message')[0]);

		if ($('#new_password').val().length < 8) {
			$('#new_password').addClass('error');
			$('#new_password_confirm').addClass('error');
			errorContainer.append('<div>Please enter a password that&apos;s at least 8 characters</div>').show();
		}

		if ($('#new_password').val() != $('#new_password_confirm').val()) {
			$('#new_password').addClass('error');
			$('#new_password_confirm').addClass('error');
			errorContainer.append('<div>Password and confirmation didn&apos;t match each other</div>').show();
		}

		var passwordRegex = /^[a-zA-Z0-9]*$/;

		if ($('#new_password').val() != '' && !passwordRegex.test($('#new_password').val())) {
			$('#new_password').addClass('error');
			$('#new_password_confirm').addClass('error').addClass('error');
			errorContainer.append('<div>Password can only include letters and numbers</div>').show();
		}

		if (errorContainer.is(':visible')) {
			errorContainer
					.prepend('<div><strong>Sorry. We could not change your password.</strong></div>');
			e.preventDefault();
			return false;
		}
		$($(e.currentTarget).find('.form-success_message')[0]).hide();

		var userData = "<Request><clientDomain>"+getContextRootUrl()+"</clientDomain><user><resetKey>" + resetKey
				+ "</resetKey><password>"
				+ $(e.currentTarget).parent().find('#new_password').val()
				+ "</password></user></Request>";
		var url = 'http://' + getUserServiceURL()
				+ '/user/rest/user/changepwbykey';
		$
				.ajax({
					type : 'post',
					accept : 'text/xml',
					headers : {
						'Accept' : 'text/xml',
						'Content-Type' : 'text/xml'
					},
					contentType : 'text/xml',
					url : url,
					async : false,
					cache : false,
					data : userData,
					success : function(response) {
						var errorCode = parseInt($(response).find("error")
								.text());
						if (errorCode == 0) {
							$($(e.currentTarget).find('.form-success_message')[0]).show();
							
							var userID = $(response).find("userId").first().text();
							var firstName = $(response).find("firstName").first().text();
							var lastName = $(response).find("lastName").first().text();
							var userName = $(response).find("userName").first().text();
							var country = $(response).find("country").first().text();
							var zip = $(response).find("zipCode").last().text();
							var optInStatus = $(response).find("optInStatus").first().text();
							var interests = $(response).find("interests").first().text();

							document.cookie = "mybehr_firstname=" + firstName + "; path=/";
							document.cookie = "mybehr_id=" + userID + "; path=/";
							document.cookie = "mybehr_lastname=" + lastName + "; path=/";
							document.cookie = "mybehr_user=" + userName	+ "; path=/";
							document.cookie = "mybehr_rem=no; path=/";
							document.cookie = "mybehr_location=" + country + "; path=/";
							document.cookie = "mybehr_zip=" + zip + "; path=/";
							document.cookie = "mybehr_fbonly=no; path=/";
							document.cookie = "mybehr_optin=" + optInStatus	+ "; path=/";
							document.cookie = "mybehr_interests=" + interests + "; path=/";
							
							if (firstName.length > 15) { 
								firstName = firstName.substr(0, 13) + "..."; 
							}

							$('div.main_nav_wrapper a.my_behr').attr('href', consumerContext+'mybehr/dashboard');
							$('a.my_behr div.my_behr_nav_welcome').html('Hello, ' + firstName);
							$('div.signed_in').html('Signed in as ' + firstName + ' ' + lastName + '&middot;&nbsp;<a href="#" class="heavy" onclick="myBehrLogOut()">Log Out</a>');
							e.preventDefault();
							return false;
						} else {
							resetErrorMessages();

							var errorMessage = $(response).find("messages").text();
							var form = $(e.currentTarget);
							var errorContainer = $(form.find('.form-error_message')[0]);

							errorContainer.append('<div><strong>Sorry. We could not reset your password.</strong></div>');
							errorContainer.append('<div>Please try again</div>');
							errorContainer.show();
							e.preventDefault();
							window.scrollTo(0, (form.offset().top - 120 < 0 ? 0
									: form.offset().top - 120));
							e.preventDefault();
							return false;
						}
					},
					error : function(xhr) {
						resetErrorMessages();
						var form = $(e.currentTarget);
						var errorContainer = $(form.find('.form-error_message')[0]);
						errorContainer
								.append('<div><strong>Sorry. We could not reset your password.</strong></div>');
						errorContainer
								.append('<div>Error connecting or sending data to service</div>');
						errorContainer.show();
						e.preventDefault();
						window.scrollTo(0, (form.offset().top - 120 < 0 ? 0
								: form.offset().top - 120));
						return false;
					}
				});
	} else {

		var myBehrUserID = readCookie('mybehr_id');
		if (myBehrUserID != null) {
			resetErrorMessages();
			$($(e.currentTarget).find('.form-success_message')[0]).hide();

			var form = $(e.currentTarget);
			var errorContainer = $(form.find('.form-error_message')[0]);

			if ($('#new_password').val().length < 8) {
				$('#new_password').addClass('error');
				$('#new_password_confirm').addClass('error');
				errorContainer
						.append(
								'<div>Please enter a password that&apos;s at least 8 characters</div>')
						.show();
			}

			if ($('#new_password').val() != $('#new_password_confirm').val()) {
				$('#new_password').addClass('error');
				$('#new_password_confirm').addClass('error');
				errorContainer
						.append(
								'<div>Password and confirmation didn&apos;t match each other</div>')
						.show();
			}

			var passwordRegex = /^[a-zA-Z0-9]*$/;

			if ($('#new_password').val() != ''
					&& !passwordRegex.test($('#new_password').val())) {
				$('#new_password').addClass('error');
				$('#new_password_confirm').addClass('error').addClass('error');
				errorContainer
						.append(
								'<div>Password can only include letters and numbers</div>')
						.show();
			}

			if (errorContainer.is(':visible')) {
				errorContainer
						.prepend('<div><strong>Sorry. We could not change your password.</strong></div>');
				e.preventDefault();
				return false;
			}
			$($(e.currentTarget).find('.form-success_message')[0]).hide();

			var url = 'http://' + getUserServiceURL()
					+ '/user/rest/user/update';
			var myBehrUser = readCookie('mybehr_user');
			var userData = "<Request><user><userName>" + myBehrUser
					+ "</userName><userId>" + myBehrUserID
					+ "</userId><password>"
					+ $(e.currentTarget).parent().find('#new_password').val()
					+ "</password></user></Request>";

			$
					.ajax({
						type : 'post',
						accept : 'text/xml',
						headers : {
							'Accept' : 'text/xml',
							'Content-Type' : 'text/xml'
						},
						contentType : 'text/xml',
						url : url,
						async : false,
						cache : false,
						data : userData,
						success : function(response) {
							var errorCode = parseInt($(response).find("error")
									.text());
							if (errorCode == 0) {
								$(
										$(e.currentTarget).find(
												'.form-success_message')[0])
										.show();
							} else {
								resetErrorMessages();

								var errorMessage = $(response).find("messages")
										.text();
								var form = $(e.currentTarget);
								var errorContainer = $(form
										.find('.form-error_message')[0]);

								errorContainer
										.append('<div><strong>Sorry. We could not reset your password.</strong></div>');
								errorContainer
										.append('<div>Please try again.</div>');
								errorContainer.show();
								e.preventDefault();
								window.scrollTo(0,
										(form.offset().top - 120 < 0 ? 0 : form
												.offset().top - 120));

								return false;
							}
						},
						error : function(xhr) {
							resetErrorMessages();
							var form = $(e.currentTarget);
							var errorContainer = $(form
									.find('.form-error_message')[0]);
							errorContainer
									.append('<div><strong>Sorry. We could not reset your password.</strong></div>');
							errorContainer
									.append('<div>Error connecting or sending data to service.</div>');

							errorContainer.show();
							e.preventDefault();
							window.scrollTo(0, (form.offset().top - 120 < 0 ? 0
									: form.offset().top - 120));
							return false;
						}
					});
		} else {
			// REdirect
		}
	}
	e.preventDefault();
	return false;
}

function updateEmailContact(e) {
	var myBehrUserID = readCookie('mybehr_id');
	var myInterests = readCookie('mybehr_interests');

	if (myBehrUserID != null) {
		resetErrorMessages();
		$($(e.currentTarget).find('.form-success_message')[0]).hide();
		var form = $(e.currentTarget);
		var errorContainer = $(form.find('.form-error_message')[0]);

		var url = 'http://';
		url += getUserServiceURL();
		url += '/user/rest/user/update';
		var optIn = $(e.currentTarget).parent().find('#special_offers_email').val();
		if (optIn == '') {
			$(e.currentTarget).parent().find('#special_offers_email').addClass('error');
			errorContainer
					.append(
							'<div>Would you like us to send you BEHR® news and special offers via email?*</div>')
					.show();
		} 	

		if (optIn === 'Yes') {
			optIn = "Y";
		} else if (optIn === 'No') {
			optIn = "N";
		} else {
			optIn = "";
		}
		var uFirstName = $(e.currentTarget).parent().find('#first_name').val();
		var uLastName = $(e.currentTarget).parent().find('#last_name').val();
		var uEmail = $(e.currentTarget).parent().find('#email_address').val();
		var uCountry = $(e.currentTarget).parent().find('#country').val();
		var uZip = $(e.currentTarget).parent().find('#zip_code').val();

		if (uFirstName == '' || uLastName == '') {
			$(e.currentTarget).parent().find('#first_name').addClass('error');
			$(e.currentTarget).parent().find('#last_name').addClass('error');
			errorContainer
					.append(
							'<div>Please enter your firat and last name - they will NOT be made public</div>')
					.show();
		}

		if (uFirstName.length > 64) {
			$(e.currentTarget).parent().find('#first_name').addClass('error');
			errorContainer.append(
					'<div>First Name must be 64 characters or less</div>')
					.show();
		}

		if (uLastName.length > 64) {
			$(e.currentTarget).parent().find('#last_name').addClass('error');
			errorContainer.append(
					'<div>Last Name must be 64 characters or less</div>')
					.show();
		}

		var nameRegex = /^[a-zA-Z]*$/;

		if (!nameRegex.test(uFirstName)) {
			$(e.currentTarget).parent().find('#first_name').addClass('error');
			errorContainer.append(
					'<div>First name can only include letters</div>').show();
		}

		if (!nameRegex.test(uLastName)) {
			$(e.currentTarget).parent().find('#last_name').addClass('error');
			errorContainer.append(
					'<div>Last name can only include letters</div>').show();
		}

		var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		if (uEmail == '' || !emailRegex.test(uEmail)) {
			$(e.currentTarget).parent().find('#email_address')
					.addClass('error');
			errorContainer.append(
					'<div>Please enter a valid email address</div>').show();
		}

		var zipRegexUS = /^\d{5}(-\d{4})?$/;
		var zipRegexCanada = /^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$/i;
		var zipValue = $(e.currentTarget).parent().find('#zip_code').val();
		var countryValue = $(e.currentTarget).parent().find('#country').val();

		if (countryValue == '') {
			$(e.currentTarget).parent().find('#country').addClass('error');
			errorContainer.append('<div>Please select your country and enter a valid ZIP / Postal Code.</div>').show();
		} else if (countryValue == "us" || countryValue == "usa"
				|| countryValue == "US" || countryValue == "USA") {
			if (zipValue == '' || !zipRegexUS.test(zipValue)) {
				$(e.currentTarget).parent().find('#zip_code').addClass('error');
				errorContainer.append('<div>Please select your country and enter a valid ZIP / Postal Code</div>').show();
			}
		} else {
			if (zipValue == '' || !zipRegexCanada.test(zipValue)) {
				$(e.currentTarget).parent().find('#zip_code').addClass('error');
				errorContainer.append('<div>Please select your country and enter a valid ZIP / Postal Code</div>').show();
			}
		}

		if (errorContainer.is(':visible')) {
			errorContainer.prepend('<div><strong>Sorry. We could not update your contact information.</strong></div>');
			e.preventDefault();
			return false;
		}

		// Fix for optin/optout defect
		if (!myInterests) {
			if (optIn == "Y") {
				myInterests = "email,e_mail_language=EN,e_mail_status=1";
			} else {
				myInterests = "e_mail_language=EN,e_mail_status=1";
			}
		} else {
			var inx = myInterests.indexOf("email");
			if (optIn == "Y") {
				// check if email in string and if it is not add it
				if (inx == -1) {
					// add email
					myInterests = "email," + myInterests;
				}
			} else {
				// check if email in string and if it is remove it
				if (inx != -1) {
					// remove email
					myInterests = myInterests.substring(inx + 6);
				}
			}
		}

		var userData = "<Request><user><email>"
				+ $(e.currentTarget).parent().find('#email_address').val()
				+ "</email>" + // 
				"<firstName>"
				+ $(e.currentTarget).parent().find('#first_name').val()
				+ "</firstName>" + //
				"<lastName>"
				+ $(e.currentTarget).parent().find('#last_name').val()
				+ "</lastName>" + //
				"<userName>"
				+ $(e.currentTarget).parent().find('#email_address').val()
				+ "</userName>" + //
				"<country>"
				+ $(e.currentTarget).parent().find('#country').val()
				+ "</country>" + //
				"<zipCode>"
				+ $(e.currentTarget).parent().find('#zip_code').val()
				+ "</zipCode>" + //
				"<userId>" + myBehrUserID + "</userId>" + "<optInStatus>"
				+ optIn + "</optInStatus>" + "<interests>" + escapeXML(myInterests)
				+ "</interests></user></Request>";

		$
				.ajax({
					type : 'post',
					accept : 'text/xml',
					headers : {
						'Accept' : 'text/xml',
						'Content-Type' : 'text/xml'
					},
					contentType : 'text/xml',
					url : url,
					async : false,
					data : userData,
					cache : false,
					success : function(response) {

						var errorCode = parseInt($(response).find("error")
								.text());

						if (errorCode == 0) {

							$(
									$(e.currentTarget).find(
											'.form-success_message')[0]).show();

							document.cookie = "mybehr_id=" + myBehrUserID
									+ "; path=/";
							document.cookie = "mybehr_firstname=" + uFirstName
									+ "; path=/";
							document.cookie = "mybehr_lastname=" + uLastName
									+ "; path=/";
							document.cookie = "mybehr_user=" + uEmail
									+ "; path=/";
							document.cookie = "mybehr_location=" + uCountry
									+ "; path=/";
							document.cookie = "mybehr_zip=" + uZip + "; path=/";
							document.cookie = "mybehr_optin=" + optIn
									+ "; path=/";
							document.cookie = "mybehr_interests=" + myInterests
									+ "; path=/";

							if (uFirstName.length > 15) {
								uFirstName = uFirstName.substr(0, 13) + "...";
							}

							$('a.my_behr div.my_behr_nav_welcome').html(
									'Hello, ' + uFirstName); // update name
							// in top nav

							fillEmailContact(); // change form for new
							// information

						} else if (errorCode == 2) {

							resetErrorMessages();

							var errorMessage = $(response).find("messages")
									.text();
							var form = $(e.currentTarget);
							var errorContainer = $(form
									.find('.form-error_message')[0]);

							errorContainer
									.append('<div><strong>Sorry. We could not update your contact information.</strong></div>');
							errorContainer
									.append('<div>There is already an account associated with the requested email</div>');
							errorContainer.show();
							e.preventDefault();
							window.scrollTo(0, (form.offset().top - 120 < 0 ? 0
									: form.offset().top - 120));

							return false;
						} else {

							resetErrorMessages();

							var errorMessage = $(response).find("messages")
									.text();
							var form = $(e.currentTarget);
							var errorContainer = $(form
									.find('.form-error_message')[0]);

							errorContainer
									.append('<div><strong>Sorry. We could not update your contact information.</strong></div>');
							errorContainer
									.append('<div>There was an error sending data to service</div>');
							errorContainer.show();
							e.preventDefault();
							window.scrollTo(0, (form.offset().top - 120 < 0 ? 0
									: form.offset().top - 120));

							return false;
						}
					},
					error : function(xhr) {

						var errorMessage = 'Error connecting or sending data to service. Please try again';
						resetErrorMessages();
						var form = $(e.currentTarget);
						var errorContainer = $(form.find('.form-error_message')[0]);
						errorContainer
								.append('<div><strong>Sorry. We could not update your contact information.</strong></div>');
						errorContainer
								.append('<div>Error connecting or sending data to service. Please try again.</div>');
						errorContainer.show();
						e.preventDefault();
						window.scrollTo(0, (form.offset().top - 120 < 0 ? 0
								: form.offset().top - 120));
						return false;
					}
				});
	} else {
		// redirect
	}
	e.preventDefault();
	return false;
}



function facebookSignUp(overlayStatus) {

	var isOverlay = false;

	if (overlayStatus == 'Overlay') {
		isOverlay = true;
	} else {
		isOverlay = false;
	}

	resetErrorMessages();

	var callService = false;

	/*
	 * FB.getLoginStatus(function(response) { if (response.status ===
	 * 'connected') {
	 * 
	 * FB.api('/me', function(response) { userFirstName = response.first_name;
	 * userLastName = response.last_name; userUID = response.id; userEmail =
	 * response.email; resetErrorMessages();
	 * 
	 * facebookSignUpSubmit(userFirstName, userLastName, userUID, userEmail);
	 * //form.find('.form-success_message')[0].show(); }); } else {
	 */

	FB.getLoginStatus(function(response) {
		if (response.status === 'connected') {

		} else {

		}
	}, true);

	FB.login(function(response) {
		if (response.authResponse) {

			FB.api('/me', function(response) {
				userFirstName = response.first_name;
				userLastName = response.last_name;
				userUID = response.id;
				userEmail = response.email;
				resetErrorMessages();

				userFBFirstName = response.first_name;
				userFBLastName = response.last_name;
				userFBUID = response.id;
				userFBEmail = response.email;
				
				
				// Check to see if user oauthUID is already registered
				var fbCheckUserData = "<Request><clientDomain>"+getContextRootUrl()+
				"</clientDomain><user><email>" + userFBEmail + 
		        "</email></user><oauthUser><oauthProvider>facebook</oauthProvider><oauthUID>"+ userFBUID + 
		        "</oauthUID></oauthUser></Request>";
				var fbCheckUserUrl = 'http://' + getUserServiceURL() + '/user/rest/user/finduserbyfbuidoremail';

				$.ajax({
					type : 'post',				
					contentType : 'text/xml',
					url : fbCheckUserUrl,
					async : false,
					cache : false,
					data : fbCheckUserData,
					success : function(response) {
						var fbCheckErrorCode = parseInt($(response).find("error").text());
						if (fbCheckErrorCode == 100) {
							// We got this user UID
							//console.log('found fb id, logging in');
							facebookLoginSubmit(userUID, userFBEmail, isOverlay, 'signup_error_div');

						} else if (fbCheckErrorCode == 101) {
								// Some user is already registered using this email

			                	var errorContainer = $('div.fb-signup-error_message');
								errorContainer.append('<div><strong>Sorry. We could not sign you up.</strong></div>');
								errorContainer.append('<div>There is already an account associated with the requested email</div>');
								errorContainer.show();

						} else if (fbCheckErrorCode == 1) {
								//console.log('did not find fb id');
							
								regForm = $('form.sign_up_facebook');
								regForm.find('input[name="first_name_fb"]').val(userFBFirstName);
								regForm.find('input[name="last_name_fb"]').val(userFBLastName);
								regForm.find('input[name="email_address_fb"]').val(userFBEmail);
							
								if(isOverlay) {
									$('div.my_behr_sign_in_with_facebook-overlay').hide();
									$('div.my_behr_or_signup_container-overlay').hide();
								}
								$('div.mb_signup.my_behr_sign_up_form_container').hide();
								$('div.my_behr_sign_up_form_container-facebook').show();
								$('div.my_behr_signup_text').hide();
								$('form[name="sign_up_facebook"]').submit(function(e) { facebookSignUpSubmit(e, isOverlay); });
								$('form[name="sign_up_facebook_pro"]').submit(function(e) { facebookSignUpSubmitPro(e, isOverlay); });
								$('form[name="sign_up_facebook_arch"]').submit(function(e) { facebookSignUpSubmitArchitect(e, isOverlay); });
						} else {
							// user service exception
							resetErrorMessages();
							var form = $('form[name="sign_up"]');
							if(form.length == 0) {
								form = $('form[name="sign_up_overlay"]');
							}
							var errorContainer = $(form.find('.form-error_message')[0]);
							errorContainer.append('<div><strong>Sorry. We could not complete your sign up.</strong></div>');
							errorContainer.append('<div>Error connecting or sending data to service.</div>');
							errorContainer.show();
						}
					},
					error : function(xhr) {
						resetErrorMessages();
						var form = $('form[name="sign_up"]');
						if(form.length == 0) {
							form = $('form[name="sign_up_overlay"]');
						}
						var errorMessage = "["+xhr.readyState+","+xhr.status+"]";
						//var errorMessage = xhr.readyState+","+xhr.status+"-"+xhr.statusText+","+xhr.timeout
						//	   +","+xhr.responseText+"]";
						var errorContainer = $(form.find('.form-error_message')[0]);
						errorContainer.append('<div><strong>Sorry. We could not complete your sign up.</strong></div>');
						errorContainer.append('<div>Error connecting or sending data to service.');
						errorContainer.append(errorMessage);
						errorContainer.append('</div>');
						errorContainer.show();
						// e.preventDefault();
						//window.scrollTo(0, (form.offset().top - 120 < 0 ? 0 : form.offset().top - 120));
						return false;
					}
				});
				
				// facebookSignUpSubmit(userFirstName, userLastName, userUID,
				// userEmail);
				// form.find('.form-success_message')[0].show();
			});
		} else {

			/*
			 * resetErrorMessages(); var form = $('form[name="sign_up"]'); var
			 * successContainer = $(form.find('.form-success_message')[0]);
			 * successContainer.hide();
			 * //form.find('.form-success_message')[0].hide(); var
			 * errorContainer = $(form.find('.form-error_message')[0]);
			 * errorContainer.append('<div><strong>Error: Facebook Login or
			 * Authorization was cancelled.</strong></div>');
			 * errorContainer.show();
			 */
			return false;
		}
	}, {
		scope : 'email'
	})
	/*
	 * } }, true);
	 */
}





function facebookSignUpSubmit(e, isOverlay) {
	resetErrorMessages();
	
	
	var loggedIn = false;

	var form = $('form[name="sign_up_facebook"]');
	var errorContainer = $(form.find('.form-error_message')[0]);
	var successContainer = $(form.find('.form-success_message')[0]);
	successContainer.hide();

	var nameRegex = /^[a-zA-Z]*$/;
	var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var zipRegexUS = /^\d{5}(-\d{4})?$/;
	var zipRegexCanada = /^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$/i;
	
	var firstName = $(e.currentTarget).parent().find('#first_name_fb').val();
	var lastName = $(e.currentTarget).parent().find('#last_name_fb').val();
	var emailValue = $(e.currentTarget).parent().find('#email_address_fb').val();
	var zipValue = $(e.currentTarget).parent().find('#zip_code_fb').val();
	var countryValue = $(e.currentTarget).parent().find('#country_fb').val();
	var optIn = $(e.currentTarget).parent().find('#special_offers_fb').val();
	
	if (firstName == '' || lastName == '') {
		$(e.currentTarget).parent().find('#first_name_fb').addClass('error');
		$(e.currentTarget).parent().find('#first_name_fb').addClass('error');
		errorContainer
			.append(
				'<div>Please enter your first and last name - they will NOT be made public</div>')
			.show();
	}
	
	if (firstName.length > 64) {
		$(e.currentTarget).parent().find('#first_name_fb').addClass('error');
		errorContainer.append(
				'<div>First Name must be 64 characters or less</div>').show();
	}

	if (lastName.length > 64) {
		$(e.currentTarget).parent().find('#last_name_fb').addClass('error');
		errorContainer.append(
				'<div>Last Name must be 64 characters or less</div>').show();
	}
	
	if (!nameRegex.test(firstName)) {
		$(e.currentTarget).parent().find('#first_name_fb').addClass('error');
		errorContainer.append('<div>First name can only include letters</div>')
				.show();
	}

	if (!nameRegex.test(lastName)) {
		$(e.currentTarget).parent().find('#last_name_fb').addClass('error');
		errorContainer.append('<div>Last name can only include letters</div>')
				.show();
	}
	
	if (emailValue == '' || !emailRegex.test(emailValue)) {
		$(e.currentTarget).parent().find('#email_address_fb').addClass('error');
		errorContainer.append('<div>Please enter a valid email address</div>')
				.show();
	}
	
	if (optIn == '') {
		$(e.currentTarget).parent().find('#special_offers_fb').addClass('error');
		errorContainer
				.append(
						'<div>Would you like us to send you BEHRÂ® news and special offers via email?*</div>')
				.show();
	} 		

	if (countryValue == '') {
		$(e.currentTarget).parent().find('#country_fb').addClass('error');
		errorContainer
				.append(
						'<div>Please select your country and enter a valid ZIP / Postal Code.</div>')
				.show();
	} else if (countryValue == "us" || countryValue == "usa"
			|| countryValue == "US" || countryValue == "USA") {
		if (zipValue == '' || !zipRegexUS.test(zipValue)) {
			$(e.currentTarget).parent().find('#zip_code_fb').addClass('error');
			errorContainer
					.append(
							'<div>Please select your country and enter a valid ZIP / Postal Code</div>')
					.show();
		}
	} else {
		if (zipValue == '' || !zipRegexCanada.test(zipValue)) {
			$(e.currentTarget).parent().find('#zip_code_fb').addClass('error');
			errorContainer
					.append(
							'<div>Please select your country and enter a valid ZIP / Postal Code</div>')
					.show();
		}
	}

	if (errorContainer.is(':visible')) {
		errorContainer
				.prepend('<div><strong>Sorry. We could not complete your sign up.</strong></div>');
		e.preventDefault();
		return false;
	}

	if (userFBFirstName.length > 64) {
		firstName = firstName.substr(64);
	}

	if (userFBLastName.length > 64) {
		lastName = lastName.substr(64);
	}

	var url = 'http://';
	url += getUserServiceURL();
	url += '/user/rest/user/registerfbuser';

	if (optIn === 'Yes') {
		optIn = "Y";
	} else if (optIn === 'No') {
		optIn = "N";
	} else {
		optIn = "";
	}
	var myInterests = "e_mail_language=EN,e_mail_status=1";
	if (optIn == "Y") {
		myInterests = "email," + myInterests;
	}
	
	var userData = "<Request><clientDomain>"+getUserServiceURL()
			+"</clientDomain><user><email>" + emailValue
			+ "</email><firstName>" + firstName 
			+ "</firstName><lastName>" + lastName + "</lastName><userName>"
			+ emailValue + "</userName>" + "<country>" + countryValue
			+ "</country>" + "<zipCode>" + zipValue + "</zipCode>"
			+ "<optInStatus>" + optIn + "</optInStatus>"	+ "<interests>"
			+ myInterests + "</interests>"
			+ "<password></password></user>"
			+ "<oauthUser><oauthProvider>facebook</oauthProvider><oauthUID>"
			+ userFBUID + "</oauthUID></oauthUser></Request>";

	/* Clear global variables */
	userFBFirstName = "";
	userFBLastName = "";
	userFBUID = "";
	userFBEmail = "";

	$.ajax({
				type : 'post',
				accept : 'text/xml',
				headers : {
					'Accept' : 'text/xml',
					'Content-Type' : 'text/xml'
				},
				contentType : 'text/xml',
				url : url,
				async : false,
				data : userData,
				success : function(response) {

					var errorCode = parseInt($(response).find("error").text());

					if (errorCode == 0) {
						var userID = $(response).find("userId").first().text();
						var firstName = $(response).find("firstName").first()
								.text();
						var lastName = $(response).find("lastName").first()
								.text();
						var userName = $(response).find("userName").first()
								.text();
						var country = $(response).find("country").first()
								.text();
						var zip = $(response).find("zipCode").first().text();
						var optInStatus = $(response).find("optInStatus")
								.first().text();
						document.cookie = "mybehr_optin=" + optInStatus
								+ "; path=/";
						document.cookie = "mybehr_id=" + userID + "; path=/";
						document.cookie = "mybehr_firstname=" + firstName
								+ "; path=/";
						document.cookie = "mybehr_lastname=" + lastName
								+ "; path=/";
						document.cookie = "mybehr_user=" + userName
								+ "; path=/";
						document.cookie = "mybehr_rem=no; path=/";
						document.cookie = "mybehr_location=" + country
								+ "; path=/";
						document.cookie = "mybehr_zip=" + zip + "; path=/";
						document.cookie = "mybehr_fbonly=yes; path=/";

						if (firstName.length > 15) {
							firstName = firstName.substr(0, 13) + "...";
						}

						$('a.my_behr div.my_behr_nav_welcome').html(
								'Hello, ' + firstName);

						$('div.main_nav_wrapper a.my_behr').attr('href',
								consumerContext+'mybehr/dashboard');
						// e.preventDefault();
						checkRatingsSubmissionCookie()// R&R check
						loggedIn = true;
					} else if (errorCode == 2) {
						resetErrorMessages();
						var errorMessage = $(response).find("messages").text();
						var form = $(e.currentTarget);
						var errorContainer = $(form.find('.form-error_message')[0]);
						errorContainer.append('<div><strong>Sorry. We could not complete your sign up.</strong></div>');
						errorContainer.append('<div>There is already an account associated with the requested email</div>');
						errorContainer.show();
						window.scrollTo(0, (form.offset().top - 120 < 0 ? 0 
								: form.offset().top - 120));
						loggedIn = false;
						return false;
					} else {
						resetErrorMessages();

						var form = $('form[name="sign_up_facebook"]');
						if(form.length == 0) {
								form = $('form[name="sign_up_overlay"]');
							}
						var errorContainer = $(form.find('.form-error_message')[0]);
						// var successContainer =
						// $(form.find('.form-success_message')[0]);
						// successContainer.hide();
						var errorMessage = $(response).find("messages").text();
						errorContainer
								.append('<div><strong>Sorry. We could not complete your sign up.</strong></div>');
						errorContainer.append('<div>Please try again.');
						errorContainer.append(errorMessage);
						errorContainer.append('</div>');
						errorContainer.show();
						loggedIn = false;
						e.preventDefault();
						window.scrollTo(0, (form.offset().top - 120 < 0 ? 0
								: form.offset().top - 120));

						return false;
					}
				},
				error : function(xhr) {

					resetErrorMessages();
					var form = $('form[name="sign_up_facebook"]');
					if(form.length == 0) {
								form = $('form[name="sign_up_overlay"]');
							}
					var errorContainer = $(form.find('.form-error_message')[0]);
					var errorMessage = "["+ xhr.readyState+","+xhr.status+"]";
					//var errorMessage = '['
			        //       + xhr.readyState+","+xhr.status+"-"+xhr.statusText+","+xhr.timeout
					//	   +","+xhr.responseText+"]";
					errorContainer
							.append('<div><strong>Sorry. We could not complete your sign up.</strong></div>');
					errorContainer
							.append('<div>Error connecting or sending data to service.');
					errorContainer.append(errorMessage);
					errorContainer.append('</div>');
					errorContainer.show();
					// e.preventDefault();
					window.scrollTo(0, (form.offset().top - 120 < 0 ? 0 : form
							.offset().top - 120));
					return false;
				}
			});

	if (loggedIn) {
		createDynamicFloodLightsTag('behrf543');
		resetErrorMessages();
		if (isOverlay) {
			overlaySignUpSuccess();
			//return true;
		} else {
			var form = $(e.currentTarget);
			var errorContainer = $(form.find('.form-error_message')[0]);
			var successContainer = $(form.find('.form-success_message')[0]);
			errorContainer.hide();
			// successContainer.show();
			$('div.sign-up-module-container').hide();
			$('div.log-in-module-container').hide();	// NATFB
			$('div.thank-you-module-container').show();
			$('li.myBehrSwitchToProNavItem').html('<a href="/pro/my-behr/dashboard">My BEHRPRO<sup>&reg;</sup> Dashboard</a>');
			e.preventDefault();
			return false;
		}
	} else {
		e.preventDefault();
		return false; // return true;
	}
}



function facebookLogin(overlayStatus) {
	var isOverlay = false;

	if (overlayStatus == 'noOverlay') {
		isOverlay = false;
	} else {
		isOverlay = true;
	}

	resetErrorMessages();

	var userUID = "";

	/*
	 * FB.getLoginStatus(function(response) { if (response.status ===
	 * 'connected') {
	 * 
	 * FB.api('/me', function(response) { userUID = response.id;
	 * resetErrorMessages();
	 * 
	 * facebookLoginSubmit(userUID); }); } else {
	 */

	FB.getLoginStatus(function(response) {
		if (response.status === 'connected') {

		} else {

		}
	}, true);

	FB.login(function(response) {
		if (response.authResponse) {

			FB.api('/me', function(response) {
				userUID = response.id;
				// will be used by event to handle users who are not associated by their fb account
				userFBFirstName = response.first_name;
				userFBLastName = response.last_name;
				userFBUID = response.id;
				userFBEmail = response.email;
				
				resetErrorMessages();
				facebookLoginSubmit(userUID, userFBEmail, isOverlay);

			});
		} else {

			/*
			 * var form = $('form[name="log_in"]'); var successContainer =
			 * $(form.find('.form-success_message')[0]);
			 * successContainer.hide();
			 * //form.find('.form-success_message')[0].hide(); var
			 * errorContainer = $(form.find('.form-error_message')[0]);
			 * errorContainer.append('<div><strong>Error: Facebook Login or
			 * Authorization was cancelled.</strong></div>');
			 * errorContainer.show();
			 */
			return false;
		}
	}, {
		scope : 'email'
	})
	/*
	 * } }, true);
	 */
}


function facebookLoginSubmit(userUID, userFBEmail, isOverlay, signup_error_div) {
	var userData = "<Request><clientDomain>"+getContextRootUrl()+
    "</clientDomain><user><email>" + userFBEmail + 
    "</email></user><oauthUser><oauthProvider>facebook</oauthProvider><oauthUID>"+ userUID + 
    "</oauthUID></oauthUser></Request>";
	var rem = $('#remember_login').is(':checked');
	var loggedIn = false;

	var url = 'http://';
	url += getUserServiceURL();
	url += '/user/rest/user/finduserbyfbuidoremail';

	$.ajax({

		type : 'post',				
		contentType : 'text/xml',
		url : url,
		async : false,
		cache : false,
		data : userData,
		success : function(response) {
			var errorCode = parseInt($(response).find("error").text());
				if (errorCode == 100) {
                    // facebook acc found
	                //return failure if wrong site.
	                var proType = $(response).find("proUserVO proType").first().text();
	                if (typeof proType != 'undefined' && proType != null && proType == 'ARCH'){

	                	if (signup_error_div == undefined){
	                		var form = $('form[name="log_in"]');
	                    	if(form.length == 0) {
	                    		form = $('form[name="log_in_overlay"]');
	                    	}
	                    	var errorContainer = $('div.fb-login-error_message');
	                	} else {
	                	   var errorContainer = $('div.fb-signup-error_message');
	                	}
	                	errorContainer.append('<div><strong>Sorry. We could not log you in.</strong></div>');
	                	errorContainer.append('<div><strong>You are not currently registered as a consumer. To access this site features, please sign up with a new email address.<br>&nbsp;</strong></div>');
	                	errorContainer.show();
	                	return false;
	                }
					
					var userID = $(response).find("userId").first().text();
					var firstName = $(response).find("firstName").text();
					var lastName = $(response).find("lastName").text();
					var userName = $(response).find("userName").text();
					var country = $(response).find("country").first().text();
					var zip = $(response).find("zipCode").last().text();
					var optInStatus = $(response).find("optInStatus").first().text();
					var password = $(response).find("password").text();
					var fbOnlyStatus = "no";

					if (password == "0") {
						fbOnlyStatus = "yes";
					}
					
					/* Pro User */
					var cAddress1 = $(response).find("proUserVO address1").first().text();
					var cCity = $(response).find("proUserVO city").first().text();
					var cCompanyName = $(response).find("proUserVO companyName").first().text();
					var cProfession = $(response).find("proUserVO jobTitle").first().text();
					var cPhoneNumber = $(response).find("proUserVO phoneNo").first().text();
					var cInPaint = $(response).find("proUserVO additionalComments").first().text();
					var cBehrNews = $(response).find("proUserVO receiveEmail").first().text();
					var cState = $(response).find("proUserVO state").first().text();
					if(cState != null && cState != '' && cState.length > 2){
						cState = convert_state(cState,'abbrev');
					}
					var cZipCode = $(response).find("proUserVO zipCode").first().text();
					var cCountry = $(response).find("proUserVO country").first().text();
					var cProUser = $(response).find("proUserVO userType").first().text();
					var cAddress2 = $(response).find("proUserVO address2").first().text();
					var cLicenseNumber = $(response).find("proUserVO licenseNo").first().text();
					var cWODStatus = $(response).find("proUserVO WODUserVO status").first().text();
					var rewardNumber = $(response).find("proUserVO proRewardsId").first().text();
					var preferredLang = $(response).find("proUserVO preferredLanguage").first().text();	
					var paintUsage = $(response).find("proUserVO estimatedPaintUsage").first().text();
					var behrRep = $(response).find("proUserVO contactByBehrPro").first().text();
					
					/* End Pro User */

						if (rem) {
							var date = new Date();
							date.setTime(date.getTime()
									+ (7 * 24 * 60 * 60 * 1000)); // days
							var expires = "; expires=" + date.toGMTString();
							document.cookie = "mybehr_firstname=" + firstName
									+ "; path=/";
							document.cookie = "mybehr_id=" + userID
									+ "; path=/";
							document.cookie = "mybehr_lastname=" + lastName
									+ "; path=/";
							document.cookie = "mybehr_user=" + userName
									+ expires + "; path=/";
							document.cookie = "mybehr_rem=yes; path=/";
							document.cookie = "mybehr_location=" + country
									+ "; path=/";
							document.cookie = "mybehr_zip=" + zip + "; path=/";
							document.cookie = "mybehr_fbonly=" + fbOnlyStatus
									+ "; path=/";
							document.cookie = "mybehr_optin=" + optInStatus
									+ "; path=/";
									
									
							/* Pro User */		
							document.cookie = "mybehr_cAddress1=" + cAddress1 + "; path=/";
							document.cookie = "mybehr_cCity=" + cCity + "; path=/";
							document.cookie = "mybehr_cCompanyName=" + cCompanyName + "; path=/";
							document.cookie = "mybehr_cProfession=" + cProfession  + "; path=/";
							document.cookie = "mybehr_cPhoneNumber=" + cPhoneNumber + "; path=/";
							document.cookie = "mybehr_cInPaint=" + cInPaint + "; path=/";
							document.cookie = "mybehr_cBehrNews=" + cBehrNews + "; path=/";
							document.cookie = "mybehr_cState=" + cState + "; path=/";
							if(cState != null && cState != '' && cState.length > 2){
								cState = convert_state(cState,'abbrev');
							}
							document.cookie = "mybehr_cZipCode=" + cZipCode  + "; path=/";
							document.cookie = "mybehr_cCountry=" + cCountry  + "; path=/";
							document.cookie = "mybehr_cProUser=" + cProUser  + "; path=/";
							document.cookie = "mybehr_cAddress2=" + cAddress2 + "; path=/";
							document.cookie = "mybehr_cLicenseNumber=" + cLicenseNumber + "; path=/";
							document.cookie = "mybehr_cWodStatus=" + cWODStatus + "; path=/";
							document.cookie = "mybehr_proRewardsId=" + rewardNumber + "; path=/";
							document.cookie = "mybehr_preferredLang=" + preferredLang + "; path=/";	
							document.cookie = "mybehr_behrRep=" + behrRep + "; path=/";				
							
							if (rewardNumber) {
								document.cookie = "mybehr_proRewards=Yes; path=/";
							} else {
								document.cookie = "mybehr_proRewards=No; path=/";
							}								
							/* End Pro User */			

							if (firstName.length > 15) {
								firstName = firstName.substr(0, 13) + "...";
							}

							$('a.my_behr div.my_behr_nav_welcome').html(
									'Hello, ' + firstName);
						} else {
							document.cookie = "mybehr_id=" + userID
									+ "; path=/";
							document.cookie = "mybehr_firstname=" + firstName
									+ "; path=/";
							document.cookie = "mybehr_lastname=" + lastName
									+ "; path=/";
							document.cookie = "mybehr_user=" + userName
									+ "; path=/";
							document.cookie = "mybehr_rem=no; path=/";
							document.cookie = "mybehr_location=" + country
									+ "; path=/";
							document.cookie = "mybehr_zip=" + zip + "; path=/";
							document.cookie = "mybehr_fbonly=" + fbOnlyStatus
									+ "; path=/";
							document.cookie = "mybehr_optin=" + optInStatus
									+ "; path=/";
									
							/* Pro User */		
							document.cookie = "mybehr_cAddress1=" + cAddress1 + "; path=/";
							document.cookie = "mybehr_cCity=" + cCity + "; path=/";
							document.cookie = "mybehr_cCompanyName=" + cCompanyName + "; path=/";
							document.cookie = "mybehr_cProfession=" + cProfession  + "; path=/";
							document.cookie = "mybehr_cPhoneNumber=" + cPhoneNumber + "; path=/";
							document.cookie = "mybehr_cInPaint=" + cInPaint + "; path=/";
							document.cookie = "mybehr_cBehrNews=" + cBehrNews + "; path=/";
							document.cookie = "mybehr_cState=" + cState + "; path=/";
							if(cState != null && cState != '' && cState.length > 2){
								cState = convert_state(cState,'abbrev');
							}
							document.cookie = "mybehr_cZipCode=" + cZipCode  + "; path=/";
							document.cookie = "mybehr_cCountry=" + cCountry  + "; path=/";
							document.cookie = "mybehr_cProUser=" + cProUser + "; path=/";
							document.cookie = "mybehr_cAddress2=" + cAddress2 + "; path=/";
							document.cookie = "mybehr_cLicenseNumber=" + cLicenseNumber + "; path=/";
							document.cookie = "mybehr_cWodStatus=" + cWODStatus + "; path=/";
							/* End Pro User */	

							if (firstName.length > 15) {
								firstName = firstName.substr(0, 13) + "...";
							}

							$('a.my_behr div.my_behr_nav_welcome').html(
									'Hello, ' + firstName);
						}

						$('div.main_nav_wrapper a.my_behr').attr('href',
								consumerContext+'mybehr/dashboard');
						loggedIn = true;

						return true;
					} else {
						resetErrorMessages();

						var errorCode = parseInt($(response).find("error")
								.text());
						var errorMessage = "";
						// var errorMessage =
							// $(response).find("messages").text();
						
	                	if (signup_error_div == undefined){
	                		var form = $('form[name="log_in"]');
	                    	if(form.length == 0) {
	                    		form = $('form[name="log_in_overlay"]');
	                    	}
	                    	var errorContainer = $('div.fb-login-error_message');
	                	} else {
	                	   var errorContainer = $('div.fb-signup-error_message');
	                	}


						//var errorContainer = $(form.find('.form-error_message')[0]);
							// var successContainer =
							// $(form.find('.form-success_message')[0]);
							// successContainer.hide();
							
						if (errorCode == 101) {
							
							// Some user is already registered using this email but not throught FB
							errorContainer.append('<div><strong>Sorry. We could not log you in.</strong></div>');
							errorContainer.append('<div>Please use the Sign Up tab to register.</div>');
							errorContainer.show();
							
						} else if (errorCode == 1) {
							//	errorMessage = "There is no user associated with the current Facebook account. Please sign up.";
							//	errorContainer.append('<div><strong>Sorry. We could not log you in.</strong></div>');
							/* 	FOR USERS TRYING TO LOGIN BY FB BUT ARE NOT ASSOCIATED THROUGH FB */
							document.cookie = "mybehr_fbsignup=true; path=/";
							if (isOverlay) {
								$('.my_behr_signup_header_right').children('.signup_login_button').eq(0).trigger("click");
								$('div.my_behr_sign_in_with_facebook-overlay').hide();
								$('div.my_behr_or_signup_container-overlay').hide();
								$('div.mb_signup.my_behr_sign_up_form_container').hide();
								$('div.my_behr_sign_up_form_container-facebook').show();
								$('div.my_behr_signup_text').hide();
								$('div.my_behr_sign_up_form_container').hide();								
							} else {
								/* 	FOR USERS TRYING TO LOGIN BY FB BUT ARE NOT ASSOCIATED THROUGH FB */
								$('.natfb_hide').hide();
								$('.not_assoc_fb').show();
								$('.my_behr_signup_header_right').children('.signup_login_button').eq(0).removeClass('white_button').addClass('grey_button');
								$('.my_behr_signup_header_right').children('.signup_login_button').eq(1).removeClass('grey_button').addClass('white_button');
							}

							regForm = $('form.sign_up_facebook');
							regForm.find('input[name="first_name_fb"]').val(userFBFirstName);
							regForm.find('input[name="last_name_fb"]').val(userFBLastName);
							regForm.find('input[name="email_address_fb"]').val(userFBEmail);

							$('form[name="sign_up_facebook"]').submit(function(e) { facebookSignUpSubmit(e, isOverlay); });
						} else {
							errorMessage = "Error connecting or sending data to service. Please try again";
							errorContainer.append('<div><strong>Sorry. We could not log you in.</strong></div>');
							errorContainer.append('<div><strong>' + errorMessage + '</strong></div>');
							errorContainer.show();
						}
						return false;
					}
					// return true;
				},
				error : function(xhr) {
					resetErrorMessages();
                	if (signup_error_div == undefined){
                		var form = $('form[name="log_in"]');
                    	if(form.length == 0) {
                    		form = $('form[name="log_in_overlay"]');
                    	}
                    	var errorContainer = $('div.fb-login-error_message');
                	} else {
                	   var errorContainer = $('div.fb-signup-error_message');
                	}

					//var errorContainer = $(form.find('.form-error_message')[0]);
					// var successContainer =
					// $(form.find('.form-success_message')[0]);
					// successContainer.hide();
					//var errorMessage = '['
			        //       + xhr.readyState+","+xhr.status+"-"+xhr.statusText+","+xhr.timeout
					//	   +","+xhr.responseText+"]";
					var errorMessage = '['+xhr.readyState+","+xhr.status+"]";
					errorContainer
							.append('<div><strong>Sorry. We could not log you in.</strong></div>');
					errorContainer
							.append('<div>Error connecting or sending data to service. Please try again.');
					errorContainer.append(errorMessage);
					errorContainer.append('</div>');
					errorContainer.show();
					return false;
				}
			});

	if (loggedIn) {
		if (readCookie('mybehr_ratings_sub_url') == null) {// check if coming
			// from Ratings Page

			if (isOverlay) {
				overlayLoginSuccess();

				return false;
			} else {
				window.location.replace(consumerContext+"mybehr/dashboard");
				return true;
			}

		} else {
			checkRatingsSubmissionCookie();
		}
		return true;
	} else {

		return false;
	}

}




function resetErrorMessages() {
	$('.form-error_message').empty().hide();
	$('.page_wrapper form  input, .page_wrapper form  select, .page_wrapper form textarea').removeClass('error');
	$('div.fb-signup-error_message').hide();
}

function overlayLoginSignUp(div) {
	if (div == 'login') {
		$('div.overlay-sl-sign_up').hide();
		$('div.overlay-sl-log_in').show();

	} else {
		$('div.overlay-sl-log_in').hide();
		$('div.overlay-sl-sign_up').show();
		$('div.mb_signup.my_behr_sign_up_form_container').show();
		$('div.my_behr_sign_up_form_container-facebook').hide();
	}
	$('div.my_behr_sign_in_with_facebook-overlay').show();
	$('div.my_behr_or_signup_container-overlay').show();
}

function overlayLoginSuccess() {
	var colorIdCookie = readCookie('mybehr_colorid');

	if (colorIdCookie != null && colorIdCookie != "") {
		var colorList = colorIdCookie .split(',');
		if(colorList.length > 1) {
			saveColorsToMyBehr(colorIdCookie);
		} else {
			saveColorToMyBehr(colorIdCookie);
		}
		var date = new Date();
		date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));
		var expires = "; expires=" + date.toGMTString();
		document.cookie = "mybehr_colorid=" + "" + expires + "; path=/";
	} else {
		handleOverlayCloseClick();
		showOverlayByID('signup_login-success');
		handleVisibleOverlayPositionScroll();
		$('div.overlay-sl-sign_up-success').hide();
		$('div.overlay-sl-log_in-success').show();
	}
	setTimeout('handleOverlayCloseClick()', 10000);
}

function overlaySignUpSuccess() {
	var colorIdCookie = readCookie('mybehr_colorid');
	if (colorIdCookie != null && colorIdCookie != "") {
		var colorList = colorIdCookie.split(',');
		if(colorList.length > 1) {
			saveColorsToMyBehr(colorIdCookie);
		} else {
			saveColorToMyBehr(colorIdCookie);
		}
		var date = new Date();
		date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));
		var expires = "; expires=" + date.toGMTString();
		document.cookie = "mybehr_colorid=" + "" + expires + "; path=/";
	} else {
		handleOverlayCloseClick();
		showOverlayByID('signup_login-success');
		handleVisibleOverlayPositionScroll();
		$('div.overlay-sl-log_in-success').hide();
		$('div.overlay-sl-sign_up-success').show();
	}
	setTimeout('handleOverlayCloseClick()', 10000);
}
/*-**************************************************************************************************************************************************************/

function signUpLite(){
	showOverlayByID('newsletter');
}

function setupLeftNavIndicator() {
	$('.my_behr_left_nav a.active')
			.each(
					function() {
						$(this).parent().prepend(
								$(document.createElement('div')).addClass(
										'indicator'));
					});
}

function whiteButtonClick() {

	if (!$(this).attr('show')) {
		return false;
	}
	var context = $(this).parent().parent();
	$(context).find('.grey_button').addClass('white_button');
	$(context).find('.grey_button').removeClass('grey_button');
	$(context).find('.white_button_change').hide();
	$(context).find('.white_button_change-' + $(this).attr('show')).show();
	$(this).addClass('grey_button');
	$(this).removeClass('white_button');
}

function leftNavTabClick() {
	if ($(this).attr('group') == '')
		return false;
	$('.left_nav-tabbed').removeClass('active');
	$('.left_nav-tab').hide();
	$('.left_nav-tab-' + $(this).attr('tab')).show();
	$(this).addClass('active');
}
function setupLeftNavTabs() {
	$('.left_nav-tabbed').click(leftNavTabClick);
}

function setupTooltips() {
	$('.has_tooltip').hover(
			function() {
				if (!$(this).attr('copy'))
					return false;
				var tt = $(document.createElement('DIV'));
				$(this).prepend(
						tt.addClass('tooltip tooltip-grey').html(
								$(this).attr('copy')));
				tt.css('top', 0 - ($(tt).outerHeight() + 11)).append(
						$(document.createElement('DIV')).addClass(
								'triangle_indicator'));
			}, function() {
				$('.tooltip').remove();
			});
}
function createOverlayBG() {

	var bg = $(document.createElement('div')).addClass('overlay_background')
			.addClass('overlay_background_grey').height(
					$(document).outerHeight()).width($(document).outerWidth());
	$('body').prepend(bg);
	$(bg).click(handleOverlayCloseClick);
}

function createGreyOverlayBG() {
	var bg = $(document.createElement('div')).addClass('overlay_background')
			.addClass('overlay_background_grey').height(
					$(document).outerHeight()).width($(document).outerWidth());
	$('body').prepend(bg);
	$(bg).click(handleOverlayCloseClick);
}

function handleOverlayCloseClick() {

	$('.overlay:visible').remove();
	$('.overlay_background').remove();
	$(window).off('resize', handleVisibleOverlayPositionResize);
	$(window).off('scroll', handleVisibleOverlayPositionScroll);
}
function handleOverlayCloseClick(event) {
	if ($('.overlay:visible .marquee_store_locator-form:visible').length) {
		$('.marquee_store_locator-search_results .results').empty();
		$('form.marquee_store_locator-form .form-error_message').empty().hide();
		$('.marquee_store_locator-search_results .counter').hide();
	}
	$('.overlay:visible').remove();
	$('.overlay_background').remove();
	if ((typeof event != 'undefined')) {
		if((typeof event.data != 'undefined') && event.data != null ) {
			$(event.data.arg).hide();
			$('body').prepend(event.data.arg);	
		}	
	}
	$(window).off('resize', handleVisibleOverlayPositionResize);
	$(window).off('scroll', handleVisibleOverlayPositionScroll);
}
function handleVisibleOverlayPositionResize() {
	$('.overlay:visible').each(
			function() {
				if ($(window).width() <= $(this).outerWidth()) {
					$(this).css('left', 0);
					window.scrollTo(0, $(window).scrollTop());
				} else
					$(this).css(
							'left',
							($(window).width() / 2)
									- ($(this).outerWidth() / 2));
				if ($(window).height() <= $(this).outerHeight()) {
					$(this).css('top', 0);
					window.scrollTo($(window).scrollLeft(), 0);
				} else
					$(this).css(
							'top',
							($(window).height() / 2)
									- ($(this).outerHeight() / 2)
									+ $('body').scrollTop());
			});
}
function handleVisibleOverlayPositionScroll() {
	$('.overlay:visible').each(
			function() {
				if ($(window).width() <= $(this).outerWidth())
					return false;
				else
					$(this).css(
							'left',
							($(window).width() / 2)
									- ($(this).outerWidth() / 2));
				if ($(window).height() <= $(this).outerHeight())
					return false;
				else
					$(this).css(
							'top',
							($(window).height() / 2)
									- ($(this).outerHeight() / 2)
									+ $(window).scrollTop());
			});
}
function addPreparedOverlay(overlay) {
	createOverlayBG();
	$('body').prepend(overlay);

	if ($(window).width() > $(this).outerWidth())
		$(overlay).css('left',
				($(window).width() / 2) - ($(this).outerWidth() / 2));
	if ($(window).height() > $(this).outerHeight())
		$(overlay).css(
				'top',
				($(window).height() / 2) - ($(this).outerHeight() / 2)
						+ $(window).scrollTop());
	
	
	$(overlay).show();

	handleVisibleOverlayPositionResize();
	handleVisibleOverlayPositionScroll();

	$('body').on('click', '.overlay:visible .overlay-close',
			handleOverlayCloseClick);
	$('.overlay:visible').find('form[name="forgot_password"]').first().submit(
			function(e) {
				standardFormSubmit(e, 'forgotpw');
			});
	$('.overlay:visible form[name="log_in_overlay"]').submit(function(e) {
		standardFormSubmit(e, 'login_overlay');
	});
	$('.overlay:visible form[name="sign_up_overlay"]').submit(function(e) {
		standardFormSubmit(e, 'signup_overlay');
	});
	$('.overlay:visible form[name="sign_up_overlay_pro"]').submit(function(e) {
		signUpMyBehrPro(e, true);
	});
	$('.overlay:visible form[name="sign_up_overlay_arch"]').submit(function(e) {
		signUpMyBehrArchitect(e, true);
	});
	$(window).resize(handleVisibleOverlayPositionResize);
	// $(window).scroll(handleVisibleOverlayPositionScroll);
}
function getEmailSubject(shareURL){
	var subjectLine = "A friend sent you this link to behr.com.";
	if (shareURL != null && shareURL != "") {
		if(shareURL.toLowerCase().indexOf("fr.behr") != -1){
			subjectLine = "Un ami vous a envoyé lien behr.com.";
		}else if(shareURL.toLowerCase().indexOf("es.behr") != -1){
			subjectLine = "Un amigo te ha enviado este enlace para behr.com.";
		}
	}
	return subjectLine;
}
function addPreparedOverlayShare(overlay,shareURL) {
	createOverlayBG();
	$('body').prepend(overlay);

	if ($(window).width() > $(this).outerWidth())
		$(overlay).css('left',
				($(window).width() / 2) - ($(this).outerWidth() / 2));
	if ($(window).height() > $(this).outerHeight())
		$(overlay).css(
				'top',
				($(window).height() / 2) - ($(this).outerHeight() / 2)
						+ $(window).scrollTop());
	//inspiration fix
	//color_details-overlay-right
	var tempsrc = $(overlay).find('.room_preview').attr('data-src');
	$(overlay).find('.room_preview').attr('src', tempsrc);
	
	$(overlay).show();

	handleVisibleOverlayPositionResize();
	handleVisibleOverlayPositionScroll();
	
	$(overlay).find('form[name="send_page-email"]').find('input[name="subject"]').val(getEmailSubject(shareURL));
	
	$("input[name='pageURL']").val(shareURL);
	//$("input[name='pageURL']").val(window.location.href);
	
    if ($(overlay).get(0).id == 'overlay-signup_login') {
    	$('body').on('click', '.overlay:visible .overlay-close',{arg:overlay},
    			handleOverlayCloseClick);    	
    } else { 
    	$('body').on('click', '.overlay:visible .overlay-close',
    			handleOverlayCloseClick);
    }
	$('.overlay:visible').find('form[name="forgot_password"]').first().submit(
			function(e) {
				standardFormSubmit(e, 'forgotpw');
			});
	$('.overlay:visible form[name="log_in_overlay"]').submit(function(e) {
		standardFormSubmit(e, 'login_overlay');
	});
	$('.overlay:visible form[name="sign_up_overlay"]').submit(function(e) {
		standardFormSubmit(e, 'signup_overlay');
	});
	$('.overlay:visible form[name="sign_up_overlay_pro"]').submit(function(e) {
		signUpMyBehrPro(e, true);
	});
	$('.overlay:visible form[name="sign_up_overlay_arch"]').submit(function(e) {
		signUpMyBehrArchitect(e, true);
	});
   $('.overlay:visible form[name="Tips_for_Pjt"]').submit(function(e) {
		//standardFormSubmit(e, 'howto_overlay');
	});
	$(window).resize(handleVisibleOverlayPositionResize);
	// $(window).scroll(handleVisibleOverlayPositionScroll);
}
function addPreparedOverlayColor(overlay, userColorId) {

	createGreyOverlayBG();
	$('body').prepend(overlay);
	$(overlay).show();
	handleVisibleOverlayPositionResize();
	handleVisibleOverlayPositionScroll();
	$('.overlay:visible .overlay-close').on('click', handleOverlayCloseClick);
	$('.overlay:visible .overlay-action').on('click', {
		userColorId : userColorId
	}, deleteColorFromMyBehr);
	$(window).resize(handleVisibleOverlayPositionResize);
	// $(window).scroll(handleVisibleOverlayPositionScroll);
	// $(window).resize(handleVisibleOverlayPositionResize);
	// $(window).scroll(handleVisibleOverlayPosition);
}
function addPreparedOverlayProject(overlay, userProjectId) {
	createGreyOverlayBG();
	$('body').prepend(overlay);
	$(overlay).show();
	handleVisibleOverlayPositionResize();
	handleVisibleOverlayPositionScroll();
	$('.overlay:visible .overlay-close').on('click', handleOverlayCloseClick);
	$('.overlay:visible .overlay-action').on('click', {
		userProjectId : userProjectId
	}, deleteProjectFromMyBehr);
	$(window).resize(handleVisibleOverlayPositionResize);
	// $(window).scroll(handleVisibleOverlayPositionScroll);
	// $(window).resize(handleVisibleOverlayPosition);
	// $(window).scroll(handleVisibleOverlayPosition);
}
function addPreparedOverlayProjectAs(overlay, userProjectId) {
	createGreyOverlayBG();
	$('body').prepend(overlay);
	$(overlay).show();
	handleVisibleOverlayPositionResize();
	handleVisibleOverlayPositionScroll();
	$('.overlay:visible .overlay-close').on('click', handleOverlayCloseClick);
	$('.overlay:visible form[name="save_project_as"]').submit(function(e) {
		saveMyBehrProjectAs(e, userProjectId);
	});
	$(window).resize(handleVisibleOverlayPositionResize);
	// $(window).scroll(handleVisibleOverlayPositionScroll);
	// $(window).resize(handleVisibleOverlayPosition);
	// $(window).scroll(handleVisibleOverlayPosition);
}
function addPreparedOverlayDeleteItem(overlay, colorCode) {

	var bg = $(document.createElement('div')).addClass('overlay_background')
			.addClass('overlay_background_grey').height(
					$(document).outerHeight());
	$('body').prepend(bg);
	$(bg).click(handleOverlayCloseClick);
	$('body').prepend(overlay);
	$(overlay).show();
	handleVisibleOverlayPositionResize();
	handleVisibleOverlayPositionScroll();
	$('.overlay:visible .overlay-close').on('click', handleOverlayCloseClick);
	$('.overlay:visible .overlay-action').on('click', {
		colorCode : colorCode
	}, deleteItemFromCart);
	$(window).resize(handleVisibleOverlayPositionResize);
	// $(window).scroll(handleVisibleOverlayPositionScroll);
	// $(window).resize(handleVisibleOverlayPosition);
	// $(window).scroll(handleVisibleOverlayPosition);
}
function showOverlayByID(oid) {
	
	if ($('.overlay#overlay-' + oid).length == 0)
		return false;
	var o = $('.overlay#overlay-' + oid)[0];

	var newo = $(o).clone();
	if (oid == 'signup_login') {	
		$('.overlay#overlay-' + oid).remove();	
	}		
	handleOverlayCloseClick();
	//addPreparedOverlay(newo);   
	addPreparedOverlayShare(newo,window.location.href);
	if (oid == 'processing_search') {
		// addPreparedOverlay();
	}
	if (oid == 'signup_login') {
		if ((window.location.pathname.toLowerCase().concat("/").indexOf("/pro/") != -1)
		   && typeof(setupSignUpMyBehrPro) == 'function') {
			setupSignUpMyBehrPro();
		} else if ((window.location.pathname.toLowerCase().concat("/").indexOf("/architect/") != -1)
		   && typeof(setupSignUpMyBehrArchitect) == 'function') {
			setupSignUpMyBehrArchitect();
		}
	}
	if (oid == 'email_page' || oid == 'contact_rep') {
		fillSendPageByEmail();
	}
   if (oid == 'howtoemail_page') {
		fillHowtoPopupEmail();
	}
	
	//for houzz only
	if($('.houzzprofessional').is(':visible')) {
		$(".houzzprofessional").prop('required',true);
	}else{
		$('.houzzprofessional').removeAttr('required');
	}
	if($('.overlay-marquee_search_product').is(':visible')){
		$('.marquee_store_locator-search_results .results').empty();
		$('form.marquee_store_locator-form .form-error_message').empty().hide();
		$('.marquee_store_locator-search_results .counter').hide();
		$('.marquee_store_locator-search_results .results-border').hide();
		$('.marquee_store_locator-search_results .online_sales_message').hide();
		
	}
}

function showOverlayByIDshare(oid,url) {
	if ($('.overlay#overlay-' + oid).length == 0)
		return false;
	var o = $('.overlay#overlay-' + oid)[0];

	var newo = $(o).clone();
	handleOverlayCloseClick();
	addPreparedOverlayShare(newo,url);
}

function showDataOvelayByID(oid, dataId) {
	if ($('.overlay#overlay-' + oid).length == 0)
		return false;

	var o = $('.overlay#overlay-' + oid)[0];
	var newo = $(o).clone();

	switch (oid) {
	case 'marquee_search_product':
		  handleOverlayCloseClick();
		  addPreparedOverlayShare(newo,window.location.href);
		  $('.marquee_store_locator-search_results .results').empty();
		  $('form.marquee_store_locator-form .form-error_message').empty().hide();
		  $('.marquee_store_locator-search_results .counter').hide();
		  $('.marquee_store_locator-search_results .results-border').hide();
		  $('.marquee_store_locator-search_results .online_sales_message').hide();
		  $('.marquee_store_locator-form input.zip_code').val(dataId);
		  $('form.marquee_store_locator-form').trigger('submit');
		  break;
	case 'delete_color':
		addPreparedOverlayColor(newo, dataId);
		break;
	case 'delete_project':
		addPreparedOverlayProject(newo, dataId);
		break;
	case 'save_project_as':
		addPreparedOverlayProjectAs(newo, dataId);
		break;
	case 'delete_item':
		addPreparedOverlayDeleteItem(newo, dataId);
		break;
	default:
		addPreparedOverlay(newo);
		break;
	}
}

function showOverlayForVideoWithParagraph(videoLink,htmlTitle) {
    var overlay = $(document.createElement('div')).addClass('overlay');
    $(overlay)
            .html(
                    '<div class="overlay-top"><a class="overlay-close button"></a></div>'
                            + '<iframe width="640" height="390" src="'
                            + videoLink
                            + '" frameborder="0" allowfullscreen style="padding: 25px;"></iframe>'
                            + '<div class="overlay-bottom">'
                            + '<iframe width="640" height="185" src="'
                            + htmlTitle
                            + '" frameborder="0" allowfullscreen style="padding: 0px 25px 25px 25px;"></iframe>'
                            + '</div>');
    addPreparedOverlay(overlay);
}
function showOverlayForVideo(videoLink) {
	var overlay = $(document.createElement('div')).addClass('overlay');
	$(overlay)
			.html(
					'<div class="overlay-top"><a class="overlay-close button"></a></div>'
							+ '<iframe width="640" height="390" src="'
							+ videoLink
							+ '" frameborder="0" allowfullscreen style="padding:15px 20px;"></iframe>'
							+ '<div class="overlay-bottom"></div>');
	addPreparedOverlay(overlay);
}
function setupOverlayWithID() {

	$('.overlay-trigger').click(
			function() {

				if ($(this).attr('overlay_id') != ''
						&& $(this).attr('overlay_id') != null) {
					if ($(this).attr('overlay_id') == 'delete_color'
							|| $(this).attr('overlay_id') == 'delete_project'
							|| $(this).attr('overlay_id') == 'save_project_as'
							|| $(this).attr('overlay_id') == 'delete_item') {

						showDataOvelayByID($(this).attr('overlay_id'), $(this)
								.attr('user_color_id'));

					} else {
						showOverlayByID($(this).attr('overlay_id'));

					}
				} else if ($(this).attr('video_link') != ''
						&& $(this).attr('video_link') != null)
					showOverlayForVideo($(this).attr('video_link'));
				else
					return false;
			});
}

/*-----Buy Samples Color Search-----*/
function colorSearch(e) {
	showOverlayByID('processing_search');
	window.setTimeout(colorSearchMain, 500);	// To allow processing overlay to show while 
	e.preventDefault();
	return false;
}

function colorSearchMain() {
	var colorQuery = $('#color_search_input').val();
	colorQuery = colorQuery.replace(/\\/g, '');
	var colorSearchResults = ColorUtilities.search(colorQuery);
	var productInfo = "";
	var colorCode;
	var colorName;
	var colorHexRgb;

	$('div.no_results').hide();
	$('div.color_search_default_content').hide();
	
	var nshoppingCartItemHTML = $('div.color_search_result_n').html();
	var shoppingCartItemHTML = $('div.color_search_result').html();

	if (colorSearchResults.length > 0) {
		$('div.search_results').show();
		$('div.color_search_results_container').show();
		$('div.color_search_results_container').html("");

		for (var colorSearchCounter = 0; colorSearchCounter < colorSearchResults.length; colorSearchCounter++) {
			colorCode = colorSearchResults[colorSearchCounter].id;
			colorName = colorSearchResults[colorSearchCounter].name;
			colorName = toTitleCase(colorName);
			colorHexRgb = colorSearchResults[colorSearchCounter].rgb;

			var url = 'http://' + getUserServiceURL()
					+ '/omsproductservice/services/getOmsByColorId?colorId='
					+ colorCode;

			$.ajax({
				type : 'get',
				url : url,
				dataType : 'json',
				contentType : 'application/json; charset=utf-8',
				async : false,
				crossDomain : true,
				success : function(response) {
					productInfo = JSON.stringify(response);

				},
				error : function(xhr) {
					alert('Error connecting or sending data to service. Please try again.');
					colorSearchCounter = colorSearchResults.length;
				}
			});

			if (productInfo.length < 5) {
                var wrappedContent = $("<div>" + nshoppingCartItemHTML + "</div>");
                wrappedContent.find('div.paint_chip-chip').css('background-color', colorHexRgb);
                nshoppingCartItemHTML = wrappedContent.html();
                newShoppingCartItemHTML = nshoppingCartItemHTML.format([colorCode, colorName, colorHexRgb]);
				$('div.color_search_results_container').append(newShoppingCartItemHTML);
			} else {
                var wrappedContent = $("<div>" + shoppingCartItemHTML + "</div>");
                wrappedContent.find('div.paint_chip-chip').css('background-color', colorHexRgb);
                shoppingCartItemHTML = wrappedContent.html();
				newShoppingCartItemHTML = shoppingCartItemHTML.format([colorCode, colorName, colorHexRgb]);
				$('div.color_search_results_container').append(newShoppingCartItemHTML);
			}
		}
		$('div.no_results').hide();
		$('div.color_search_default_content').hide();
		$('div.color_search_results_container').show();
	} else {
		$('div.color_search_results_container').html("");
		$('div.color_search_results_container').hide("");
		$('div.color_search_default_content').hide();
		$('div.search_results').show();
		$('div.no_results').show();
	}
	
	handleOverlayCloseClick();
}



function redirectToDashBoard(){
  // alert(window.location.pathname.toLowerCase());
	if(window.location.pathname.toLowerCase().concat("/").indexOf("/pro/") != -1){
		window.location.replace("/pro/my-behr/dashboard");
	}else if(window.location.pathname.toLowerCase().concat("/").indexOf("/architect/") != -1){
	     window.location.replace("/architect/my-behr/dashboard");
	} else if(window.location.pathname.toLowerCase().concat("/").indexOf("/consumer_ca/") != -1){
		window.location.replace("/consumer_ca/mybehr/dashboard");
	} else {
		window.location.replace("/consumer/mybehr/dashboard");
	}
}

/*-----My Behr Functions-----*/
function setupMyBehr() {
	var myBehrUserID = readCookie('mybehr_id');
	var myBehrFirstName = readCookie('mybehr_firstname');
	var myBehrLastName = readCookie('mybehr_lastname');
    var myBehrFBOnlyStatus = readCookie('mybehr_fbonly');
	var myBehrProStatus = readCookie('mybehr_cProUser');

	if (myBehrUserID != null && myBehrUserID != "") {
		if(window.location.pathname.toLowerCase().concat("/").indexOf("/pro/") != -1){
			$('div.signed_in').html('Signed in as ' + myBehrFirstName + ' ' + myBehrLastName + '&middot;&nbsp;<a href="#" class="heavy" onclick="myBehrLogOutPro()">Log Out</a>');
		}else if(window.location.pathname.toLowerCase().concat("/").indexOf("/architect/") != -1){
			$('div.signed_in').html('Signed in as ' + myBehrFirstName + ' ' + myBehrLastName + '&middot;&nbsp;<a href="#" class="heavy" onclick="myBehrLogOutArchitect()">Log Out</a>');
		}else{
			$('div.signed_in').html('Signed in as ' + myBehrFirstName + ' ' + myBehrLastName + '&middot;&nbsp;<a href="#" class="heavy" onclick="myBehrLogOut()">Log Out</a>');
		}
		$('div.signed_in_pro').html('Signed in as ' + myBehrFirstName + ' ' + myBehrLastName + '&middot;&nbsp;<a href="#" class="heavy" onclick="myBehrLogOutPro()">Log Out</a>');
		$('div.signed_in_arch').html('Signed in as ' + myBehrFirstName + ' ' + myBehrLastName + '&middot;&nbsp;<a href="#" class="heavy" onclick="myBehrLogOutArchitect()">Log Out</a>');
		$('div.mybehr_welcome').html('<h2>Hello, ' + myBehrFirstName + '</h2>');
		$('div.main_nav_wrapper a.my_behr').attr('href', consumerContext+'mybehr/dashboard');
		if(window.location.pathname.toLowerCase().concat("/").indexOf("/pro/") != -1){
			$('div.main_nav_wrapper a.my_behr.my_behr_pro').attr('href', '/pro/my-behr/dashboard');
		}else if(window.location.pathname.toLowerCase().concat("/").indexOf("/architect/") != -1){
		    $('div.main_nav_wrapper a.my_behr.my_behr_pro').attr('href', '/architect/my-behr/dashboard');
		}
		
		
		if (myBehrFirstName.length > 15) {
			myBehrFirstName = uFirstName.substr(0, 13) + "...";
		}
        
        $('div.main_nav_wrapper a.my_behr div.my_behr_nav_welcome').html('<div>Hello, ' + myBehrFirstName + '</div>');
                
        if(myBehrFBOnlyStatus == "yes") {
            $('li.myBehrChangePasswordNavItem').html('<a href=consumerContext+"mybehr/account-management">Account Management</a>');
        }
		if(window.location.pathname.toLowerCase().concat("/").indexOf("/consumer/") != -1){
			if(myBehrProStatus != null && myBehrProStatus.toLowerCase().indexOf("pro") != -1) {
				$('li.myBehrSwitchToProNavItem').html('<a href="/pro/my-behr/dashboard">My BEHRPRO<sup>&reg;</sup> Dashboard</a>');
			}
		}

		if ($('div.my_behr_saved_colors_dashboard').length > 0) {
			setUpMyBehrDashboard();
		} else if ($('div.my_behr_saved_colors_all').length > 0) {
			setUpMyBehrSavedColors();
		} else if ($('div.my_behr_saved_projects_all').length > 0) {
			//showOverlayByID('processing_projects');
			//window.setTimeout(setUpMyBehrSavedProjects, 500);	// To allow processing overlay to show while 
			setUpMyBehrSavedProjects();
		} else if ($('form[name="email_contact"]').length > 0) {
			fillEmailContact();
		} else if ($('form[name="create_password"]').length > 0) {
			fillCreatePassword()
		} else if (window.location.pathname.toLowerCase().indexOf("behr/sign-up") != -1){
			redirectToDashBoard();			
		} else if ($('form.login_page_form').length > 0) {
			redirectToDashBoard();
		}
	} else {
		$('div.signed_in').html('Not Signed In&nbsp;&middot;&nbsp;<a href=consumerContext+"mybehr/log-in" class="heavy">Log In</a>');
		$('div.mybehr_welcome').html('<h2>Hello.</h2>');
		$('div.main_nav_wrapper a.my_behr').attr('href', consumerContext+'mybehr/log-in');
	    if(window.location.pathname.toLowerCase().concat("/").indexOf("/pro/") != -1){
		     $('div.main_nav_wrapper a.my_behr.my_behr_pro').attr('href', '/pro/my-behr/log-in');
	    } else {
		     $('div.main_nav_wrapper a.my_behr.my_behr_pro').attr('href', '/architect/my-behr/log-in');
		}
		$('div.main_nav_wrapper a.my_behr div.my_behr_nav_welcome').html('<div>Log In / Sign Up</div>');
		
		if ($('form.login_page_form').length > 0) {
			var loginForm = $('form.login_page_form');
			var myBehrUser = readCookie('mybehr_user');
			if(myBehrUser != null){
				loginForm.find('#email_address').val("");
				loginForm.find('#email_address').val(myBehrUser);
				loginForm.find('#remember_login').prop('checked', true);
			}
		}

		if ($('form[name="change_password"]').length > 0) {
			var dataParam = getURLParameters('data');

			if (dataParam == "No Parameters Found") {
				window.location.replace(consumerContext+"mybehr/log-in");
			}
		}
	}
}

function fillEmailContact() {
	var emailContactForm = $('form[name="email_contact"]');
	var myBehrUserID = readCookie('mybehr_id');
	var myBehrFirstName = readCookie('mybehr_firstname');
	var myBehrLastName = readCookie('mybehr_lastname');
	var myBehrUser = readCookie('mybehr_user');
	var myBehrLocation = readCookie('mybehr_location');
	var myBehrZip = readCookie('mybehr_zip');
	var myBehrOptIn = readCookie('mybehr_optin');

	if (myBehrLocation == 'USA') {
		myBehrLocation = 'US'
	}

	emailContactForm.find('#email_address').val("");
	emailContactForm.find('#first_name').val("");
	emailContactForm.find('#last_name').val("");
	emailContactForm.find('#country').val("");
	emailContactForm.find('#zip_code').val("");

	emailContactForm.find('#email_address').val(myBehrUser);
	emailContactForm.find('#first_name').val(myBehrFirstName);
	emailContactForm.find('#last_name').val(myBehrLastName);
	emailContactForm.find('#country').val(myBehrLocation);
	emailContactForm.find('#zip_code').val(myBehrZip);
	
	if (myBehrOptIn === 'Y') {
		myBehrOptIn = 'Yes';
	} else if (myBehrOptIn === 'N') {
		myBehrOptIn = 'No';
	} else {
		myBehrOptIn = '';
	}

	emailContactForm.find('select[name="special_offers_email"]').val(myBehrOptIn);

}

function fillCustomerServiceForms() {
	var csForm = null;

	if($('form.customer_service_form')) {
		csForm = $('form.customer_service_form');
	}

	if(csForm != null) {
		var myBehrUserID = readCookie('mybehr_id');
		if(myBehrUserID != null){
			
			var myBehrFirstName = readCookie('mybehr_firstname');
			var myBehrLastName = readCookie('mybehr_lastname');
			var myBehrUser = readCookie('mybehr_user');
			var myBehrLocation = readCookie('mybehr_location');
			var myBehrZip = readCookie('mybehr_zip');
			var myBehrOptIn = "";	
			var myBehrNews = "";			
			if (readCookie('mybehr_optin')) {
				myBehrOptIn = readCookie('mybehr_optin')== 'Y'? '1':'0';
			}
			if (readCookie('mybehr_cBehrNews')) {
				myBehrNews = readCookie('mybehr_cBehrNews') == 'Y'? '1':'0';
			}				
			var myBehrState = readCookie('mybehr_cState');
			
			if(window.location.pathname.toLowerCase().concat("/").indexOf("/pro/") != -1 || window.location.pathname.toLowerCase().concat("/").indexOf("/architect/") != -1){
				csForm.find('select[name="emailOptIn"]').val(myBehrNews);
			} else {
				csForm.find('select[name="emailOptIn"]').val(myBehrOptIn);
			}	
			csForm.find('input[name="email"]').val(myBehrUser);
			csForm.find('input[name="firstName"]').val(myBehrFirstName);
			csForm.find('input[name="lastName"]').val(myBehrLastName);
			if(myBehrLocation == "US"){
				csForm.find('select[name="country"]').val("USA");
			}else{
				csForm.find('select[name="country"]').val(myBehrLocation);
			}
			csForm.find('input[name="postal"]').val(myBehrZip);
			csForm.find('select[name="state"]').val(myBehrState);
			
		}
	}
}

function fillHowtoPopupEmail() {
	var myBehrUserID = readCookie('mybehr_id');
	if (myBehrUserID != null) {
        var myBehrOptIn = readCookie('mybehr_optin')== 'Y'? '1':'0';
        var myBehrCountry = readCookie('mybehr_location');
        var myBehrZipcode = readCookie('mybehr_zip');
        var myBehrUser = readCookie('mybehr_user');

        $("input[name='recipient").val(myBehrUser);
        $("input[name='recipient").prop("readonly", true);
        $("input[name='recipient").css("color", "#999999");
        
        $("select[name='emailOptIn").val(myBehrOptIn);
        if (myBehrCountry == "US") {
           $("select[name='country").val("USA");
		} else {
			$("select[name='country").val(myBehrCountry);
		}
        $("select[name='country").attr("disabled", true);
        $("input[name='postal").val(myBehrZipcode);
        $("input[name='postal").prop("readonly", true);
	}
}

function fillSendPageByEmail() {
	var csForm = null;

	if($('form.send_page')) {
		csForm = $('form.send_page:visible');		
	}

	if(csForm != null) {
		var myBehrUserID = readCookie('mybehr_id');

		if(myBehrUserID != null){		
			var myBehrFirstName = readCookie('mybehr_firstname');
			var myBehrLastName = readCookie('mybehr_lastname');
			var myBehrUser = readCookie('mybehr_user');
			var sender = csForm.find('input[name="sender"]');
			var senderFName = csForm.find('input[name="senderFName"]');
			var senderLName = csForm.find('input[name="senderLName"]');
			var state = csForm.find('select[name="state"]');
			var country = csForm.find('select[name="country"]');
			var postal = csForm.find('input[name="postal"]');
			var emailOptIn = csForm.find('select[name="emailOptIn"]');
			var myBehrOptIn = "";	
			var myBehrNews = "";			
			if (readCookie('mybehr_optin')) {
				myBehrOptIn = readCookie('mybehr_optin')== 'Y'? '1':'0';
			}
			if (readCookie('mybehr_cBehrNews')) {
				myBehrNews = readCookie('mybehr_cBehrNews') == 'Y'? '1':'0';
			}	
			var myBehrState = readCookie('mybehr_cState');
			var myBehrCountry = readCookie('mybehr_location');
			var myBehrZipcode = readCookie('mybehr_zip');

			if(window.location.pathname.toLowerCase().concat("/").indexOf("/pro/") != -1 || window.location.pathname.toLowerCase().concat("/").indexOf("/architect/") != -1){
				emailOptIn.val(myBehrNews);
			} else {
				emailOptIn.val(myBehrOptIn);
			}	
			emailOptIn.css("color", "#000000");
			
			sender.val(myBehrUser);
			sender.prop("readonly", true);
			sender.css("color", "#999999");
			
			senderFName.val(myBehrFirstName);
			senderFName.prop("readonly", true);
			senderFName.css("color", "#999999");
			
			senderLName.val(myBehrLastName);	
			senderLName.prop("readonly", true);
			senderLName.css("color", "#999999");
			
			state.val(myBehrState);
			if(myBehrCountry == "US"){
				country.val("USA");
			}else{
				country.val(myBehrCountry);
			}
			country.attr("disabled", true);
			
			postal.val(myBehrZipcode);
			postal.prop("readonly", true);
			postal.css("color", "#999999");

		}
	}	
}	

function fillCreatePassword() {
	var form = $('form[name="create_password"]');
	var myBehrUserID = readCookie('mybehr_id');
	var myBehrUser = readCookie('mybehr_user');
	var myBehrOptIn = readCookie('mybehr_optin');

	form.find('#email_address_create').val(myBehrUser);

	//if (myBehrOptIn == 'Y' || myBehrOptIn == 'y') {
		//$('#special_offers_email_create').prop('checked', true);
		
	//}
}

function myBehrLogOut() {

	var date = new Date();
	date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));
	var expires = "; expires=" + date.toGMTString();
	
	var rem = readCookie("mybehr_rem");

	document.cookie = "mybehr_id=" + "" + expires + "; path=/";
	document.cookie = "mybehr_firstname=" + "" + expires + "; path=/";
	document.cookie = "mybehr_lastname=" + "" + expires + "; path=/";
	if(rem == "no") {
		document.cookie = "mybehr_user=" + "" + expires + "; path=/";
	}
	document.cookie = "mybehr_location=" + "" + expires + "; path=/";
	document.cookie = "mybehr_zip=" + "" + expires + "; path=/";
	document.cookie = "mybehr_fbonly=" + "" + expires + "; path=/";
	document.cookie = "mybehr_interests=" + "" + expires + "; path=/";
	document.cookie = "mybehr_optin=" + "" + expires + "; path=/";
	document.cookie = "mybehr_cCompanyName=" + "" + expires + "; path=/";
	document.cookie = "mybehr_cProfession=" + "" + expires + "; path=/";
	document.cookie = "mybehr_cAddress1=" + "" + expires + "; path=/";
	document.cookie = "mybehr_cCity=" + "" + expires + "; path=/";
	document.cookie = "mybehr_cState=" + "" + expires + "; path=/";
	document.cookie = "mybehr_cZipCode=" + "" + expires + "; path=/";
	document.cookie = "mybehr_cCountry=" + "" + expires + "; path=/";
	document.cookie = "mybehr_cProUser=" + "" + expires + "; path=/";
	document.cookie = "mybehr_cPhoneNumber=" + "" + expires + "; path=/";
	document.cookie = "mybehr_cBehrNews=" + "" + expires + "; path=/";
	document.cookie = "mybehr_cInPaint=" + "" + expires + "; path=/";
	document.cookie = "mybehr_cAddress2=" + expires + "; path=/";
	document.cookie = "mybehr_cLicenseNumber=" + expires + "; path=/";
	document.cookie = "mybehr_cWodStatus=" + expires + "; path=/";
	document.cookie = "mybehr_proRewardsId=" + expires + "; path=/";
	document.cookie = "mybehr_preferredLang=" + expires + "; path=/";	
	document.cookie = "mybehr_proRewards=" + expires + "; path=/";	
	document.cookie = "mybehr_paintUsage=" + expires + "; path=/";
	document.cookie = "mybehr_behrRep=" + expires + "; path=/";	

	var myBehrUserID = readCookie('mybehr_id');
	$('a.my_behr div.my_behr_nav_welcome').html('Log In / Sign Up');
	window.location.replace(consumerContext+"");
}

function setUpMyBehrDashboard() {
	var myBehrUserID = readCookie('mybehr_id');
	userHasMyBehrSavedContent = false;

	if (myBehrUserID != null) {
		setUpMyBehrCurrentProjectDashboard(); // Display Current Project
		setUpMyBehrDashboardColors(); // Display First Six Colors

		if (userHasMyBehrSavedContent) {
			$('div.my_behr_new_user_default_content').hide();

		} else {
			$('div.my_behr_new_user_default_content').show();

		}
		
		var myBehrLocation = readCookie('mybehr_location');
		var myBehrZip = readCookie('mybehr_zip');
		
		if(myBehrLocation == null || myBehrLocation == "" || myBehrZip == null || myBehrZip == "") {
			showOverlayByID('no_information');
			setTimeout('handleOverlayCloseClick()', 10000);
		} 
		
	} else {
		$('div.my_behr_saved_colors_dashboard').html('User Not Logged In');
	}
}

function setUpMyBehrSavedColors() {

	var myBehrUserID = readCookie('mybehr_id');

	if (myBehrUserID != null) {
		var url = 'http://' + getUserServiceURL()
				+ '/usercolor/nextgen/getusercolors?userid=' + myBehrUserID
				+ '&isoldcolorontop=true';
		var userColors;
		var userColorId;
		var colorId;
		var userId;
		var colorName;
		var hexRgb;
		var createdDate;
		var userColorHTML;
		var newUserColorHTML;
                var savedColors;

		$.ajax({
			type : 'get',
			url : url,
			headers : {
				'Content-Type' : 'text/plain'
			},
			async : false,
			cache : false,
			success : function(response) {
				userColors = response;
			},
			error : function(xhr) {
				alert('Error connecting or sending data to service. Please try again.');
			}
		});
                if(window.location.pathname.toLowerCase().concat("/").indexOf("/consumer_ca/") > -1){
                    savedColors = 'Saved Colours';
                } else {
                    savedColors = 'Saved Colors'; 
                }  
                if (userColors.userColorList.length > 0) {
			$('h3.my_behr_saved_colors_teaser').show();
			$('div.my_behr_saved_colors_all').html(
					'<div class="dashboard_title"><h3>'
							+ userColors.userColorList.length
							+ ' ' + savedColors + '</h3></div>');
			$('div.my_behr_saved_colors_all-colors-container').html('');
			$('div.my_behr_saved_colors-footer-no-colors').hide();
			$('div.my_behr_saved_colors-footer').show();

		} else {
			$('h3.my_behr_saved_colors_teaser').hide();
			$('div.my_behr_saved_colors_all').html('');
			$('div.my_behr_saved_colors_all-colors-container').html('');
			$('div.break_small-saved-colors').hide();
			$('div.my_behr_saved_colors-footer').hide();
			$('div.my_behr_saved_colors_default_content').show();
		}

		/* Temporary - HTML to be put back in HTML file after bugs are done */
		userColorHTML = '<a class="button overlay-trigger delete_saved_color" overlay_id="delete_color" user_color_id="{3}"></a>';
		userColorHTML += '<a href="../ColorDetailView/{0}" class="paint_chip paint_chip-vertical paint_chip-78 fl">';
		userColorHTML += '<div class="paint_chip-chip" style="background-color:#{2}"></div>';
		userColorHTML += '<div class="paint_chip-copy">';
		userColorHTML += '<span class="paint_chip-name">{1}</span><br />';
		userColorHTML += '<span class="paint_chip-id">{0}</span>';
		userColorHTML += '</div></a></div>';

		var userColorsEnd = 0;
		var userColorsStart = userColors['userColorList'].length - 1;
		var jCount = 0;

		for ( var i = userColorsStart; i >= userColorsEnd; i--) {
			userColorId = userColors['userColorList'][i]['userColorId'];
			colorId = userColors['userColorList'][i]['colorId'];
			colorName = userColors['userColorList'][i]['colorName'];
			colorName = toTitleCase(colorName);
			hexRgb = userColors['userColorList'][i]['hexRgb'];

			if (hexRgb == null) {
				hexRgb = 'ffffff';
			} else {
				hexRgb = hexRgb.substr(2);
				
				// Workaround
				if(hexRgb.length == 5) {
					hexRgb = "0" + hexRgb;
				} else if(hexRgb.length == 4) {
					hexRgb = "00" + hexRgb;
				}
			}

			if (jCount == 0) {
				newUserColorHTML = '<div class="saved_color_container">';
			} else {
				var remainder = (jCount + 1) % 6;
				if (remainder == 0) {
					newUserColorHTML = '<div class="saved_color_container  saved_color_container-right">';
				} else {
					newUserColorHTML = '<div class="saved_color_container">';
				}
			}

			newUserColorHTML += userColorHTML.format([ colorId, colorName,
					hexRgb, userColorId ]);
			// newUserColorHTML += "</div>";
			$('div.my_behr_saved_colors_all-colors-container').append(
					newUserColorHTML);
			jCount = jCount + 1;
		}
	} else {
		$('div.my_behr_saved_colors_all').html('User Not Logged In');
	}
}

function setUpMyBehrSavedProjects() {
	var myBehrUserID = readCookie('mybehr_id');

	if (myBehrUserID != null) {
		var url = 'http://' + getUserServiceURL() + '/project/nextgen/getallprojectids?userid=' + myBehrUserID;

		//var userProjectIds;

		$.ajax({
			type : 'get',
			headers : {
				'Content-Type' : 'application/json'
			},
			url : url,
			data : 'application/json',
			async : false,
			cache : false,
			success : function(response) {
				userProjectIds = response;
			},
			error : function(xhr) {
				userProjectIds = "noresponsedata";
			}
		});

		if (userProjectIds != "noresponsedata") {
			userProjectIds = JSON.stringify(userProjectIds);
			userProjectIds = $.parseJSON(userProjectIds);
         lastPage = Math.ceil(userProjectIds["NextGenProjectVO"].length / pageSize);
         // This makes sure lastPage cannot be less than 1
         if(lastPage < 1) {
            lastPage = 1;
            pageNumber = 0;
         } else {
            pageNumber = 1;
            pagesRead = 1;
         }

			if (userProjectIds["NextGenProjectVO"] && userProjectIds["NextGenProjectVO"].length > 0) {
				numProjects = userProjectIds["NextGenProjectVO"].length;
            var firstPage = numProjects;
            if (firstPage > pageSize) {
                firstPage = pageSize;
            }

            for (var pCounter = 0; pCounter < firstPage; pCounter++) {
					var projectId = userProjectIds["NextGenProjectVO"][pCounter]["projectId"];
					var projectJSON;
					url = 'http://' + getUserServiceURL() + '/project/nextgen/getproject?projectid=' + projectId;

					$.ajax({
						type : 'get',
						headers : {
							'Content-Type' : 'application/json'
						},
						url : url,
						data : 'application/json',
						async : false,
						cache : false,
						success : function(response) {
							projectJSON = response;
						},
						error : function(xhr) {
							projectJSON = "noproject";
						}
					});

					if (projectJSON != "noproject" && projectJSON != "") { // Is
						// project
						// data
						userHasMyBehrSavedContent = true;
						$('div.my_behr_saved_projects_default_content').hide();

						var currentProjectHTML = "";

						if (projectJSON["NextGenProjectVO"]) {
							var jsonData = $.parseJSON(projectJSON["NextGenProjectVO"]["jsonData"]);
							var projectName = jsonData.NextGenProjectVO.projectName;
							var paletteInfo = new Array();
							var paletteCodes = new Array();
							
							var projectIsPYP = false;
							if(jsonData.NextGenProjectVO.hasOwnProperty('projectAppType')) {
								if(jsonData.NextGenProjectVO.projectAppType == "pyp") {
									projectIsPYP = true;
								} else {
									//console.info('is not pyp project');
								}
							} else {
								//console.info('cannot read property project app type');
							}

							for (var i = 0; i < 8; i++) {
								paletteInfo[i] = new Array();
								paletteCodes[i] = jsonData.NextGenProjectVO.palette[i];
								if (paletteCodes[i] == null) {
									paletteInfo[i][0] = "";
									paletteInfo[i][1] = "#ffffff";
									paletteCodes[i] = "";
								} else {
									paletteInfo[i] = getColorInformation(
											paletteCodes[i]).split(',');
									paletteInfo[i][0] = toTitleCase(paletteInfo[i][0]);
								}
							}
							
							if (jsonData.NextGenProjectVO.paletteQuad) {
								var quadPalette = true;
							} else {
								var quadPalette = false;
							}

							var rooms = jsonData.NextGenProjectVO.rooms;
							var roomId = jsonData.NextGenProjectVO.currentRoomId;
							var palette = jsonData.NextGenProjectVO.palette;

							var drawingCanvasURL = "";
							
							if(projectIsPYP) {
								// Get canvas data for project
								var canvasesWebService =  "http://" + getUserServiceURL() + "/project/nextgen/getprojectbinary?projectid=" + projectId + "&keys=drawingCanvas";
											
								$.ajax({
									type: "get",
									dataType: "json",
									url : canvasesWebService,
									async : false,
									cache : false,
									success : function(json) {
										drawingCanvasURL = json.drawingCanvas;
									},
									error : function() {
										drawingCanvasURL = "/binaries/content/assets/behrdotcom/web/images/myBehr/girlsInField.jpg";
									}
								});
								
								renderString = 'src="' + drawingCanvasURL + '"';
								
							} else {
								var bindings;
								var surfaces = new Array();
								surfaces.length = 10;
								var colors = new Array();
								colors.length = 10;

								for ( var i = 0; i < surfaces.length; i++) {
									surfaces[i] = "";
									colors[i] = "";
								}

								if ((rooms != null) && (rooms.length > 0)) {
									if (roomId == null || roomId == "") {
										roomId = rooms[0]['id'];
										bindings = rooms[0]['bindings'];
									} else {
										$.each(rooms, function(i, row) {
											id = row['id'];
											if (id == roomId) {
												bindings = row['bindings']
											}
										})

										for ( var i = 0; i < bindings.length; i++) {
											if (typeof bindings[i] === "undefined") {

											} else {
												if (bindings[i] >= 0) {
													surfaces[i] = i + 1;
													colors[i] = palette[bindings[i]];
												}
											}
										}
									}
								}
								
								//remove the deleted colors
								for (var i = 0; i < 10; i++) {
									if (colors[i].length > 0) {
										if( isDeletedColor(colors[i]) ) {
											colors[i] = "";
											surfaces [i] = "";
										}
									}
								}

								renderString = renderImageContext+'render?roomId=' + roomId + '&surfaceId1=' + surfaces[0]
										+ '&color1=' + colors[0] + '&surfaceId2=' + surfaces[1] + '&color2=' + colors[1]
										+ '&surfaceId3=' + surfaces[2] + '&color3='	+ colors[2] + '&surfaceId4=' + surfaces[3]
										+ '&color4=' + colors[3] + '&surfaceId5='+ surfaces[4] + '&color5=' + colors[4]
										+ '&surfaceId6=' + surfaces[5] + '&color6='	+ colors[5] + '&surfaceId7=' + surfaces[6]
										+ '&color7=' + colors[6] + '&surfaceId8=' + surfaces[7] + '&color8=' + colors[7]
										+ '&surfaceId9=' + surfaces[8] + '&color9='	+ colors[8] + '&surfaceId10=' + surfaces[9]
										+ '&color10=' + colors[9];
							}

							if (quadPalette) {
								if(projectIsPYP) {
									currentProjectHTML = $('div.nextgenpypproject_quadpalette_template').html();								
								} else {
									currentProjectHTML = $('div.nextgenproject_quadpalette_template').html();
								}
							} else {
								if(projectIsPYP) {
									currentProjectHTML = $('div.nextgenpypproject_notquadpalette_template').html();								
								} else {
									currentProjectHTML = $('div.nextgenproject_notquadpalette_template').html();
								}
							}
                            
                            var wrappedContent = $("<div>" + currentProjectHTML + "</div>");
                            wrappedContent.find('div.project_color_1_palette').css('background-color', '#' + paletteInfo[0][1]);
                            wrappedContent.find('div.project_color_2_palette').css('background-color', '#' + paletteInfo[1][1]);
                            wrappedContent.find('div.project_color_3_palette').css('background-color', '#' + paletteInfo[2][1]);
                            wrappedContent.find('div.project_color_4_palette').css('background-color', '#' + paletteInfo[3][1]);
							wrappedContent.find('div.project_color_5_palette').css('background-color', '#' + paletteInfo[4][1]);
                            wrappedContent.find('div.project_color_6_palette').css('background-color', '#' + paletteInfo[5][1]);
                            wrappedContent.find('div.project_color_7_palette').css('background-color', '#' + paletteInfo[6][1]);
                            wrappedContent.find('div.project_color_8_palette').css('background-color', '#' + paletteInfo[7][1]);
							
                            wrappedContent.find('div.project_color1').css('background-color', '#' + paletteInfo[0][1]);
                            wrappedContent.find('div.project_color2').css('background-color', '#' + paletteInfo[1][1]);
                            wrappedContent.find('div.project_color3').css('background-color', '#' + paletteInfo[2][1]);
                            wrappedContent.find('div.project_color4').css('background-color', '#' + paletteInfo[3][1]);
							wrappedContent.find('div.project_color5').css('background-color', '#' + paletteInfo[4][1]);
                            wrappedContent.find('div.project_color6').css('background-color', '#' + paletteInfo[5][1]);
                            wrappedContent.find('div.project_color7').css('background-color', '#' + paletteInfo[6][1]);
                            wrappedContent.find('div.project_color8').css('background-color', '#' + paletteInfo[7][1]);
							
							wrappedContent.find('div.color_name_container a').each(function() {
							   var _href = $(this).attr("href"); 
							   $(this).attr("href", decodeURIComponent(_href));
							});
							
                            currentProjectHTML = wrappedContent.html();
                            
							currentProjectHTML = currentProjectHTML.format([
									projectId, myBehrUserID, projectName, paletteCodes[0],
									paletteInfo[0][0], paletteInfo[0][1], paletteCodes[1],
									paletteInfo[1][0], paletteInfo[1][1], paletteCodes[2],
									paletteInfo[2][0], paletteInfo[2][1], paletteCodes[3],
									paletteInfo[3][0], paletteInfo[3][1], renderString, 
									paletteCodes[4], paletteInfo[4][0], paletteInfo[4][1],
									paletteCodes[5], paletteInfo[5][0], paletteInfo[5][1],
									paletteCodes[6], paletteInfo[6][0], paletteInfo[6][1],
									paletteCodes[7], paletteInfo[7][0], paletteInfo[7][1],]);

							if (pCounter == 0) {
								$('div.my_behr_saved_projects_default_content').hide();
								//$('div.my_behr_saved_projects_all').html("");
								//$('div.my_behr_saved_projects_all').append('<div class="dashboard_title"><h3>Most Recent Project</h3></div>');
							}
							if (pCounter == 1) {
								var displayNumProjects = numProjects - 1;
								//$('div.my_behr_saved_projects_all').append('<div class="dashboard_title"><h3>'	+ displayNumProjects + ' Other Saved Projects</h3></div>');
							}

							$('div.my_behr_saved_projects_all').append(currentProjectHTML);

						} else if (projectJSON["com.behr.colorsmart4.project.service.ProjectVO"]) {
							var useImageMessaging = true;
							var projectName = projectJSON["com.behr.colorsmart4.project.service.ProjectVO"]['projectName'];
							var palette = projectJSON["com.behr.colorsmart4.project.service.ProjectVO"]['palette'];
							var paletteVO = palette.paletteColors.set["com.behr.palette.service.PaletteColorVO"];
							var paletteType = palette.paletteType;
							var paletteInfo = new Array();
							var paletteCodes = new Array();

							if (paletteVO.length) {
								paletteVO = sortJSON(paletteVO, 'order');
							}

							for ( var i = 0; i < 4; i++) {
								paletteInfo[i] = new Array();
								if (paletteVO[i]) {
									if (paletteVO[i].colorId) {
										paletteCodes[i] = paletteVO[i].colorId;
										paletteInfo[i][0] = paletteVO[i].colorName;
										paletteInfo[i][1] = paletteVO[i].hexRgb
												.substr(2);
									} else {
										paletteInfo[i][0] = "";
										paletteInfo[i][1] = "#ffffff";
										paletteCodes[i] = "";
									}
								} else {
									paletteInfo[i][0] = "";
									paletteInfo[i][1] = "#ffffff";
									paletteCodes[i] = "";
								}
							}
							
							var legacyImageMessaging = "Projects created by the legacy Paint Your Place<sup>&trade;</sup> is not available for updating. Please try our new Paint Your Place<sup>&trade;</sup> with your "+colrs+".";
							var legacyImageButtonMessaging = "Start a New Project with These "+Colrs; 

							if (projectJSON["com.behr.colorsmart4.project.service.ProjectVO"]['previewImageURL']) {
								var oldRenderString = projectJSON["com.behr.colorsmart4.project.service.ProjectVO"]['previewImageURL'];

								if (oldRenderString.indexOf('http://scene7') === 0) {
								
									legacyImageMessaging = "Note: The image used in this project is no longer available for preview. Please select a new image by opening the project.";
									legacyImageButtonMessaging = "Open Project"; 
								
									renderString = 'http://'
											+ getUserServiceURL()
											+ '/colorsmart4/previewRepaintServlet?';
									var url = oldRenderString.split('?');
									var urlVariablesString = url[1];
									var urlVariables = urlVariablesString
											.split('&');
									var scene7XPositions = new Array();
									var scene7YPositions = new Array();
									var scene7Colors = new Array();
									var data;
									var dataSplit;
									var currentVariable;

									for ( var k = 0; k < urlVariables.length; k++) {
										currentVariable = urlVariables[k];

										if (currentVariable.indexOf("s_x") === 0) {
											data = currentVariable.split('=');
											scene7XPositions.push(data[1]);
										} else if (currentVariable
												.indexOf("s_y") === 0) {
											data = currentVariable.split('=');
											scene7YPositions.push(data[1]);
										} else if (currentVariable
												.indexOf("s_dbstring") === 0) {
											data = currentVariable.split('=');
											dataSplit = data[2].split(';');
											scene7Colors.push(dataSplit[0]);
										}
									}
									renderString += "x=";
									for (k = 0; k < scene7XPositions.length; k++) {
										renderString += scene7XPositions[k]
												+ ";";
									}
									renderString += "&y=";
									for (k = 0; k < scene7YPositions.length; k++) {
										renderString += scene7YPositions[k]
												+ ";";
									}
									renderString += "&values=";
									for (k = 0; k < scene7Colors.length; k++) {
										renderString += scene7Colors[k] + ";";
									}
									var frontURL = url[0].split('scene7:79');
									var imageFromURL = frontURL[1];
									renderString += "&img=" + imageFromURL;
								} else {
									renderString = oldRenderString
											.replace(
													'\/colorsmart-pyp-server\/',
													'http://'
															+ getUserServiceURL()
															+ '/colorsmart-pyp-server/');// devpreview.behr.com
								}
							} else {
								useImageMessaging = false;
								renderString = '/binaries/content/assets/behrdotcom/web/images/myBehr/girlsInField.jpg';
								legacyImageButtonMessaging = "Open Project";
							}

							if (paletteType == "0") {
								currentProjectHTML = $(
										'div.legacyproject_quadpalette_template')
										.html();
							} else {
								currentProjectHTML = $(
										'div.legacyproject_notquadpalette_template')
										.html();
							}

                            var wrappedContent = $("<div>" + currentProjectHTML + "</div>");
                            wrappedContent.find('div.project_color_1_palette').css('background-color', '#' + paletteInfo[0][1]);
                            wrappedContent.find('div.project_color_2_palette').css('background-color', '#' + paletteInfo[1][1]);
                            wrappedContent.find('div.project_color_3_palette').css('background-color', '#' + paletteInfo[2][1]);
                            wrappedContent.find('div.project_color_4_palette').css('background-color', '#' + paletteInfo[3][1]);
                            wrappedContent.find('div.project_color1').css('background-color', '#' + paletteInfo[0][1]);
                            wrappedContent.find('div.project_color2').css('background-color', '#' + paletteInfo[1][1]);
                            wrappedContent.find('div.project_color3').css('background-color', '#' + paletteInfo[2][1]);
                            wrappedContent.find('div.project_color4').css('background-color', '#' + paletteInfo[3][1]);
                            
							wrappedContent.find('div.color_name_container a').each(function() {
							   var _href = $(this).attr("href"); 
							   $(this).attr("href", decodeURIComponent(_href));
							});
							
							currentProjectHTML = wrappedContent.html();
                                             
							currentProjectHTML = currentProjectHTML.format([
									projectId, myBehrUserID, projectName,
									paletteCodes[0], paletteInfo[0][0],
									paletteInfo[0][1], paletteCodes[1],
									paletteInfo[1][0], paletteInfo[1][1],
									paletteCodes[2], paletteInfo[2][0],
									paletteInfo[2][1], paletteCodes[3],
									paletteInfo[3][0], paletteInfo[3][1],
									renderString, legacyImageMessaging, legacyImageButtonMessaging]);
									
							if(!useImageMessaging) {		
								var wrappedProjectContent = $("<div>" + currentProjectHTML + "</div>");
								wrappedProjectContent.find('div.legacy_imaging_container').remove();
								currentProjectHTML = wrappedProjectContent.html();		
							}
							
							if (pCounter == 0) {
								$('div.my_behr_saved_projects_default_content').hide();
                        //$('div.my_behr_saved_projects_all').html('<div class="dashboard_title"><h3>Most Recent Project</h3></div>');
								$('div.my_behr_saved_projects_all').append(currentProjectHTML);
							} else {
								if (pCounter == 1) {
									var showNumProjects = numProjects - 1;
                           //$('div.my_behr_saved_projects_all').append('<div class="dashboard_title"><h3>'+ showNumProjects + ' Other Saved Projects</h3></div>');
								}
								$('div.my_behr_saved_projects_all').append(currentProjectHTML);
							}

						} else {
							$('h3.saved_projects_sub').hide();
							$('div.my_behr_saved_projects_current').html('<h3 style="color:red">Error no data returned for project.</h3>'); // Error
							// with
							// data
							$('div.my_behr_saved_projects_all').html("");
							pCounter = numProjects;
						}

					} else { // Error with service
						$('h3.saved_projects_sub').hide();
						$('div.my_behr_saved_projects_current').html('<h3 style="color:red">Error connecting or sending data to project service.</h3>');
						$('div.my_behr_saved_projects_all').html("");
					}
				}
			} else { // No Saved Projects
				$('div.my_behr_saved_projects_default_content').show();
				$('h3.saved_projects_sub').hide();
				$('div.my_behr_saved_projects_current').html("");
				$('div.my_behr_saved_projects_all').html("");
			}
		} else { // Error with service
			$('h3.saved_projects_sub').hide();
			$('div.my_behr_saved_projects_current')
					.html(
							'<h3 style="color:red">Error connecting or sending data to project service.</h3>');
			$('div.my_behr_saved_projects_all').html("");
		}
	} else {
		$('div.my_behr_saved_projects_all').append('Not Logged In');
	}
   
   if(lastPage > 1) {
      $('div.my_behr_saved_projects_all').append('<div class="appendProjSpc"></div><div id="pagenav" class="appendProj" onclick="request_page('+(myBehrUserID)+','+(pageNumber+1)+')"><span>Load More Projects</span></div>');
   }

	setupOverlayWithID();
	handleDeletedColors();
	//handleOverlayCloseClick();	// Remove processing overlay
}

function isDeletedColor(colorID) {
	var resultBool = false;
	if (colorID != '570C-2'){
		var rtnVal = getColorInformation(colorID);
		if (rtnVal.split(",")[0].toUpperCase() == "MYSTIC HARBOR"){
			resultBool = true;
		}
	} 	
	return resultBool;
}

function handleDeletedColors() {

	var spanColorCodes = $('span.color_code').filter(function () { return this.innerHTML.match(/[^};]$/); });	
	var spanContents;
	var clrCode;
	var openProjBtn;
	var hrefString;
	var allClrCodesInTheProject;
	var numOfCodes = 0;
	var numOfOldCodes = 0;
	
	var buyPaintHrefForOldColor;
	var buyPaintHref;
	var allClrCodesHrefs;
	
	var openProjectHref;
	var colorCodeElementsOnCurrentProject;
	var urlFromOpenPrjBtn;
	var baseUrlForProject;
	var colorCodeString;
	var colorCode;
	
	for (var index=0; index<spanColorCodes.length; index++) {
	
		if ($(spanColorCodes[index]).hasClass('deletedColorHandled')){
			continue;
		}
	
	  spanContents = $(spanColorCodes[index]).html();
	  clrCode = spanContents.split(";")[1];
	  
	  if (isDeletedColor(clrCode)){
			$(spanColorCodes[index]).addClass ('deletedColorHandled');	
			$(spanColorCodes[index]).parent().parent().append ('<div><span style="font-size:10px; line-height:9px; color:red">We’re sorry, this color is no longer available.</span></div>');
			$(spanColorCodes[index]).parent().children().css({"font-size": "11px", "line-height":"10px"});
			$(spanColorCodes[index]).parent().contents().unwrap(); // remove <a> tag
			
			if ( $(spanColorCodes[index]).prev().html().toUpperCase() == "MYSTIC HARBOR") {
				$(spanColorCodes[index]).prev().html("");
				$(spanColorCodes[index]).parent().prev().css({"background":"rgb(255, 255, 255)", "width":"21px", "height":"21px", "border":"1px solid black"}); //border is added. decrease the chip by 2px
			}
			
			//Update "Buy Paint" button's href
			buyPaintHref = $(spanColorCodes[index]).parents('.print_project_container').find("a:last").prev().attr("href");
			buyPaintHrefForOldColor = buyPaintHref.split("?")[0] + "?buyType=PAINT&buy=";
			//get all paint codes and update href string
			allClrCodesHrefs = $(spanColorCodes[index]).parents('div.saved_project_palette_main').find('a');
			$(allClrCodesHrefs).each( function( index, element ){
				if ($( this ).find("span.color_code").text().trim().length > 0 ) {
					buyPaintHrefForOldColor = buyPaintHrefForOldColor + $( this ).find("span.color_code").text().trim() + ",";
				}
			});
			$(spanColorCodes[index]).parents('.print_project_container').find("a:last").prev().attr("href", buyPaintHrefForOldColor.substring(0, buyPaintHrefForOldColor.length - 1));
			
			
			//Update "Open Project" button's href
			openProjBtn = $(spanColorCodes[index]).parents('.print_project_container').find("a:last");
				
			hrefString = $(openProjBtn).attr("href");
			if (typeof hrefString == "string") {
				$(openProjBtn).attr("href", hrefString.replace(clrCode, "").replace("qpalette", "palette"));
			}
			//Update href on project name's link
			$(spanColorCodes[index]).parents('.print_project_container').find("a:first").attr("href", $(openProjBtn).attr("href"));
			
			
			//When new projects with href format "colors/paint?project=" have deleted colors, rebuild the href in the form of "?palette=",
			//which will open a new project with available colors.
			urlFromOpenPrjBtn = $(spanColorCodes[index]).parents('.print_project_container').find("a:last").attr("href");
			baseUrlForProject = urlFromOpenPrjBtn.split("?")[0] + "?palette=";
			
			if (hrefString.indexOf("colors/paint?project=") > 0) { // if new project which has href string "colors/paint?project="
				
				//find siblings with existing colors only and create href link
				colorCodeElementsOnCurrentProject = $(spanColorCodes[index]).parents('.print_project_container').find('span.color_code');
				
				for (var k=0; k < colorCodeElementsOnCurrentProject.length; k++) {
					if ($(colorCodeElementsOnCurrentProject[k]).hasClass('deletedColorHandled')){ // don't include deleted colors
						continue;
					}
					
					colorCodeString = $(colorCodeElementsOnCurrentProject[k]).html();
					colorCode = colorCodeString.split(";")[1];
					
					if(colorCode.length > 0) {
						baseUrlForProject = baseUrlForProject + colorCode + ",";
					}
				}
				
				openProjectHref = $(spanColorCodes[index]).parents('.print_project_container').find("a:last").attr("href");
				// update Open Project's href
				$(spanColorCodes[index]).parents('.print_project_container').find("a:last").attr("href", baseUrlForProject.substring(0, baseUrlForProject.length - 1));
				// update href on project name's link
				$(spanColorCodes[index]).parents('.print_project_container').find("a:first").attr("href", baseUrlForProject.substring(0, baseUrlForProject.length - 1));
			}
			
			//Handle when all colors in the project are deleted colors
			allClrCodesInTheProject = $(spanColorCodes[index]).parents('.print_project_container').find('span.color_code');
			numOfCodes = 0;
			numOfOldCodes = 0;
			$(allClrCodesInTheProject).each( function( index, element ){
				if ($( this ).text().trim().length > 0) {
					numOfCodes ++;
				}
				
				if ($( this ).next().length > 0) { //if it's followed by a div element which has sorry message, it's deleted color.
					numOfOldCodes ++;
				}
			});
			
			if (numOfCodes == numOfOldCodes) {

				$(spanColorCodes[index]).parents('.print_project_container').find('.interior_toolbar.interior_toolbar-saved-project').children().css('visibility','hidden'); //hide all the links for buying, opening, printing etc.
				//remove the link on the project name at the beginning of the .print_project_container
				$(spanColorCodes[index]).parents('.print_project_container').find("a:first").children().unwrap();
			}
		}
	}
}

function handleDeletedColorsForPrintProject(objToPrint) {

	var spanColorCodes = $(objToPrint).find('span.color_code').filter(function () { return this.innerHTML.match(/[^};]$/); });	
	var spanContents;
	var clrCode;
	
	for (var index=0; index<spanColorCodes.length; index++) {
	
		if ($(spanColorCodes[index]).hasClass('deletedColorHandled')){
			continue;
		}
		$(spanColorCodes[index]).addClass ('deletedColorHandled');	
	
	  spanContents = $(spanColorCodes[index]).html();
	  clrCode = spanContents.split(";")[1];
	  
	  if (isDeletedColor(clrCode)){
			$(spanColorCodes[index]).parent().parent().append ('<div><span style="font-size:10px; line-height:9px; color:red">We’re sorry, this color is no longer available.</span></div>');
			$(spanColorCodes[index]).parent().children().css({"font-size": "11px", "line-height":"10px"});
			$(spanColorCodes[index]).parent().contents().unwrap(); // remove <a> tag
			
			if ( $(spanColorCodes[index]).prev().html().toUpperCase() == "MYSTIC HARBOR") {
				$(spanColorCodes[index]).prev().html("");
				$(spanColorCodes[index]).parent().prev().css({"background":"rgb(255, 255, 255)", "width":"21px", "height":"21px", "border":"1px solid black"}); //border is added. decrease the chip by 2px
			}
		}
	}
	return objToPrint;
}

function request_page(userId,pn) {
   $('#pagenav').remove();
   var start = ((pn - 1) * pageSize);
   var end = (pn * pageSize);
   // last page adjustment
   if (end > numProjects) {
      end = numProjects;
   }

   // get page from backend if pn > pagesRead
   if(pn > pagesRead) {
      var projectJSON;
      var projectJSONArray = new Array();

      url = 'http://' + getUserServiceURL() + '/project/nextgen/getproject?projectid=';
      for (var pCounter = start; pCounter < end; pCounter++) {
         var projectId = userProjectIds["NextGenProjectVO"][pCounter]["projectId"];
         url = 'http://' + getUserServiceURL() + '/project/nextgen/getproject?projectid=' + projectId;
         $.ajax({
         	type : 'get',
         	headers : {
         		'Content-Type' : 'application/json'
         	},
         	url : url,
         	data : 'application/json',
         	async : false,
         	cache : false,
         	success : function(response) {
         		projectJSON = response;
         	},
         	error : function(xhr) {
         		projectJSON = "noproject";
         	}
         });
         projectJSONArray.push(projectJSON)
      }
      pagesRead++;      
      showpages(userId, projectJSONArray, pn);
   }   
}

function showpages(usrId, pArry, pn) {
    var projectJSON;
    // loop through pages from backend or already cached
    var arrayLength = pArry.length;
    for (var pCounter = 0; pCounter < arrayLength; pCounter++) {
      projectJSON = pArry[pCounter];
      if (projectJSON != "noproject" && projectJSON != "") { // Is
			 // project
			 // data
			 userHasMyBehrSavedContent = true;
			 $('div.my_behr_saved_projects_default_content').hide();
                
			 var currentProjectHTML = "";
                
			 if (projectJSON["NextGenProjectVO"]) {
            var projectId = projectJSON["NextGenProjectVO"]["projectId"];
			 	var jsonData = $.parseJSON(projectJSON["NextGenProjectVO"]["jsonData"]);
			 	var projectName = jsonData.NextGenProjectVO.projectName;
			 	var paletteInfo = new Array();
			 	var paletteCodes = new Array();
                
				var projectIsPYP = false;
				if(jsonData.NextGenProjectVO.hasOwnProperty('projectAppType')) {
					if(jsonData.NextGenProjectVO.projectAppType == "pyp") {
						projectIsPYP = true;
					} else {
						//console.info('is not pyp project');
					}
				} else {
					//console.info('cannot read property project app type');
				}
				
				for (var i = 0; i < 8; i++) {
			 		paletteInfo[i] = new Array();
			 		paletteCodes[i] = jsonData.NextGenProjectVO.palette[i];
			 		if (paletteCodes[i] == null) {
			 			paletteInfo[i][0] = "";
			 			paletteInfo[i][1] = "#ffffff";
			 			paletteCodes[i] = "";
			 		} else {
			 			paletteInfo[i] = getColorInformation(
			 					paletteCodes[i]).split(',');
			 		}
			 }
                
			 var rooms = jsonData.NextGenProjectVO.rooms;
			 var roomId = jsonData.NextGenProjectVO.currentRoomId;
			 var palette = jsonData.NextGenProjectVO.palette;
                
			 if (jsonData.NextGenProjectVO.paletteQuad) {
			 	var quadPalette = true;
			 } else {
			 	var quadPalette = false;
			 }
			 
			var drawingCanvasURL = "";
							
			if(projectIsPYP) {
				// Get canvas data for project
				var canvasesWebService =  "http://" + getUserServiceURL() + "/project/nextgen/getprojectbinary?projectid=" + projectId + "&keys=drawingCanvas";
									
				$.ajax({
					type: "get",
					dataType: "json",
					url : canvasesWebService,
					async : false,
					cache : false,
					success : function(json) {
						drawingCanvasURL = json.drawingCanvas;
					},
					error : function() {
						drawingCanvasURL = "/binaries/content/assets/behrdotcom/web/images/myBehr/girlsInField.jpg";
					}
				});
					
				renderString = 'src="' + drawingCanvasURL + '"';
								
			} else {
                
			 var bindings;
			 var surfaces = new Array();
			 surfaces.length = 10;
			 var colors = new Array();
			 colors.length = 10;
                
			 for ( var i = 0; i < surfaces.length; i++) {
			 	surfaces[i] = "";
			 	colors[i] = "";
			 }
                
			 if ((rooms != null) && (rooms.length > 0)) {
			 	if (roomId == null || roomId == "") {
			 		roomId = rooms[0]['id'];
			 		bindings = rooms[0]['bindings'];
			 	} else {
			 		$.each(rooms, function(i, row) {
			 			id = row['id'];
			 			if (id == roomId) {
			 				bindings = row['bindings']
			 			}
			 	   })
               
			 		for ( var i = 0; i < bindings.length; i++) {
			 			if (typeof bindings[i] === "undefined") {
               
			 			} else {
			 				if (bindings[i] >= 0) {
			 					surfaces[i] = i + 1;
			 					colors[i] = palette[bindings[i]];
			 				}
			 			}
			 		}
			 	}
			 }
			 
			 //remove the deleted colors
			for (var i = 0; i < 10; i++) {
				if (colors[i].length > 0) {
					if( isDeletedColor(colors[i]) ) {
						colors[i] = "";
						surfaces [i] = "";
					}
				}
			}
                
			 renderString = renderImageContext+'render?roomId='
			 			+ roomId + '&surfaceId1=' + surfaces[0]
			 			+ '&color1=' + colors[0] + '&surfaceId2='
			 			+ surfaces[1] + '&color2=' + colors[1]
			 			+ '&surfaceId3=' + surfaces[2] + '&color3='
			 			+ colors[2] + '&surfaceId4=' + surfaces[3]
			 			+ '&color4=' + colors[3] + '&surfaceId5='
			 			+ surfaces[4] + '&color5=' + colors[4]
			 			+ '&surfaceId6=' + surfaces[5] + '&color6='
			 			+ colors[5] + '&surfaceId7=' + surfaces[6]
			 			+ '&color7=' + colors[6] + '&surfaceId8='
			 			+ surfaces[7] + '&color8=' + colors[7]
			 			+ '&surfaceId9=' + surfaces[8] + '&color9='
			 			+ colors[8] + '&surfaceId10=' + surfaces[9]
			 			+ '&color10=' + colors[9];
                
			}	
			if (quadPalette) {
				if(projectIsPYP) {
					currentProjectHTML = $('div.nextgenpypproject_quadpalette_template').html();								
				} else {
					currentProjectHTML = $('div.nextgenproject_quadpalette_template').html();
				}
			} else {
				if(projectIsPYP) {
					currentProjectHTML = $('div.nextgenpypproject_notquadpalette_template').html();								
				} else {
					currentProjectHTML = $('div.nextgenproject_notquadpalette_template').html();
				}
			}
                          
          var wrappedContent = $("<div>" + currentProjectHTML + "</div>");
          wrappedContent.find('div.project_color_1_palette').css('background-color', '#' + paletteInfo[0][1]);
          wrappedContent.find('div.project_color_2_palette').css('background-color', '#' + paletteInfo[1][1]);
          wrappedContent.find('div.project_color_3_palette').css('background-color', '#' + paletteInfo[2][1]);
          wrappedContent.find('div.project_color_4_palette').css('background-color', '#' + paletteInfo[3][1]);
			 wrappedContent.find('div.project_color_5_palette').css('background-color', '#' + paletteInfo[4][1]);
          wrappedContent.find('div.project_color_6_palette').css('background-color', '#' + paletteInfo[5][1]);
          wrappedContent.find('div.project_color_7_palette').css('background-color', '#' + paletteInfo[6][1]);
          wrappedContent.find('div.project_color_8_palette').css('background-color', '#' + paletteInfo[7][1]);
			 	
          wrappedContent.find('div.project_color1').css('background-color', '#' + paletteInfo[0][1]);
          wrappedContent.find('div.project_color2').css('background-color', '#' + paletteInfo[1][1]);
          wrappedContent.find('div.project_color3').css('background-color', '#' + paletteInfo[2][1]);
          wrappedContent.find('div.project_color4').css('background-color', '#' + paletteInfo[3][1]);
			 wrappedContent.find('div.project_color5').css('background-color', '#' + paletteInfo[4][1]);
          wrappedContent.find('div.project_color6').css('background-color', '#' + paletteInfo[5][1]);
          wrappedContent.find('div.project_color7').css('background-color', '#' + paletteInfo[6][1]);
          wrappedContent.find('div.project_color8').css('background-color', '#' + paletteInfo[7][1]);
			 	
          currentProjectHTML = wrappedContent.html();
			 currentProjectHTML = decodeURIComponent(currentProjectHTML);
			 currentProjectHTML = currentProjectHTML.format([
			 			projectId, myBehrUserID, projectName, paletteCodes[0],
			 			paletteInfo[0][0], paletteInfo[0][1], paletteCodes[1],
			 			paletteInfo[1][0], paletteInfo[1][1], paletteCodes[2],
			 			paletteInfo[2][0], paletteInfo[2][1], paletteCodes[3],
			 			paletteInfo[3][0], paletteInfo[3][1], renderString, 
			 			paletteCodes[4], paletteInfo[4][0], paletteInfo[4][1],
			 			paletteCodes[5], paletteInfo[5][0], paletteInfo[5][1],
			 			paletteCodes[6], paletteInfo[6][0], paletteInfo[6][1],
			 			paletteCodes[7], paletteInfo[7][0], paletteInfo[7][1],]);
                
			 if (pCounter == 0) {
			 	$('div.my_behr_saved_projects_default_content').hide();
			 	//$('div.my_behr_saved_projects_all').html("");
			 	//$('div.my_behr_saved_projects_all').append('<div class="dashboard_title"><h3>Most Recent Project</h3></div>');
			 }
			 if (pCounter == 1) {
			 	var displayNumProjects = numProjects - 1;
			 	//$('div.my_behr_saved_projects_all').append('<div class="dashboard_title"><h3>'	+ displayNumProjects + ' Other Saved Projects</h3></div>');
			 }
			 $('div.my_behr_saved_projects_all').append(currentProjectHTML);
                
			} else if (projectJSON["com.behr.colorsmart4.project.service.ProjectVO"]) {
            var projectId = projectJSON["com.behr.colorsmart4.project.service.ProjectVO"]["projectId"];
			 	var useImageMessaging = true;
			 	var projectName = projectJSON["com.behr.colorsmart4.project.service.ProjectVO"]['projectName'];
			 	var palette = projectJSON["com.behr.colorsmart4.project.service.ProjectVO"]['palette'];
			 	var paletteVO = palette.paletteColors.set["com.behr.palette.service.PaletteColorVO"];
			 	var paletteType = palette.paletteType;
			 	var paletteInfo = new Array();
			 	var paletteCodes = new Array();
                
			 	if (paletteVO.length) {
			 		paletteVO = sortJSON(paletteVO, 'order');
			 	}
                
			 	for ( var i = 0; i < 4; i++) {
			 		paletteInfo[i] = new Array();
			 		if (paletteVO[i]) {
			 			if (paletteVO[i].colorId) {
			 				paletteCodes[i] = paletteVO[i].colorId;
			 				paletteInfo[i][0] = paletteVO[i].colorName;
			 				paletteInfo[i][1] = paletteVO[i].hexRgb
			 						.substr(2);
			 			} else {
			 				paletteInfo[i][0] = "";
			 				paletteInfo[i][1] = "#ffffff";
			 				paletteCodes[i] = "";
			 			}
			 		} else {
			 			paletteInfo[i][0] = "";
			 			paletteInfo[i][1] = "#ffffff";
			 			paletteCodes[i] = "";
			 		}
			 	}
			 	
			 	var legacyImageMessaging = "Projects created by the legacy Paint Your Place<sup>&trade;</sup> is not available for updating. Please try our new Paint Your Place<sup>&trade;</sup> with your "+colrs+".";
			 	var legacyImageButtonMessaging = "Start a New Project with These "+Colrs; 
                
			 	if (projectJSON["com.behr.colorsmart4.project.service.ProjectVO"]['previewImageURL']) {
			 		var oldRenderString = projectJSON["com.behr.colorsmart4.project.service.ProjectVO"]['previewImageURL'];
                
			 		if (oldRenderString.indexOf('http://scene7') === 0) {
			 		
			 			legacyImageMessaging = "Note: The image used in this project is no longer available for preview. Please select a new image by opening the project.";
			 			legacyImageButtonMessaging = "Open Project"; 
			 		
			 			renderString = 'http://'
			 					+ getUserServiceURL()
			 					+ '/colorsmart4/previewRepaintServlet?';
			 			var url = oldRenderString.split('?');
			 			var urlVariablesString = url[1];
			 			var urlVariables = urlVariablesString
			 					.split('&');
			 			var scene7XPositions = new Array();
			 			var scene7YPositions = new Array();
			 			var scene7Colors = new Array();
			 			var data;
			 			var dataSplit;
			 			var currentVariable;
                
			 			for ( var k = 0; k < urlVariables.length; k++) {
			 				currentVariable = urlVariables[k];
                
			 				if (currentVariable.indexOf("s_x") === 0) {
			 					data = currentVariable.split('=');
			 					scene7XPositions.push(data[1]);
			 				} else if (currentVariable
			 						.indexOf("s_y") === 0) {
			 					data = currentVariable.split('=');
			 					scene7YPositions.push(data[1]);
			 				} else if (currentVariable
			 						.indexOf("s_dbstring") === 0) {
			 					data = currentVariable.split('=');
			 					dataSplit = data[2].split(';');
			 					scene7Colors.push(dataSplit[0]);
			 				}
			 			}
			 			renderString += "x=";
			 			for (k = 0; k < scene7XPositions.length; k++) {
			 				renderString += scene7XPositions[k] + ";";
			 			}
			 			renderString += "&y=";
			 			for (k = 0; k < scene7YPositions.length; k++) {
			 				renderString += scene7YPositions[k] + ";";
			 			}
			 			renderString += "&values=";
			 			for (k = 0; k < scene7Colors.length; k++) {
			 				renderString += scene7Colors[k] + ";";
			 			}
			 			var frontURL = url[0].split('scene7:79');
			 			var imageFromURL = frontURL[1];
			 			renderString += "&img=" + imageFromURL;
			 		} else {
			 			renderString = oldRenderString.replace('\/colorsmart-pyp-server\/','http://'+ getUserServiceURL()+ '/colorsmart-pyp-server/');// devpreview.behr.com
			 		}
			 	} else {
			 		useImageMessaging = false;
			 		renderString = '/binaries/content/assets/behrdotcom/web/images/myBehr/girlsInField.jpg';
			 		legacyImageButtonMessaging = "Open Project";
			 	}
                
			 	if (paletteType == "0") {
			 		currentProjectHTML = $('div.legacyproject_quadpalette_template').html();
			 	} else {
			 		currentProjectHTML = $('div.legacyproject_notquadpalette_template').html();
			 	}
                
               var wrappedContent = $("<div>" + currentProjectHTML + "</div>");
               wrappedContent.find('div.project_color_1_palette').css('background-color', '#' + paletteInfo[0][1]);
               wrappedContent.find('div.project_color_2_palette').css('background-color', '#' + paletteInfo[1][1]);
               wrappedContent.find('div.project_color_3_palette').css('background-color', '#' + paletteInfo[2][1]);
               wrappedContent.find('div.project_color_4_palette').css('background-color', '#' + paletteInfo[3][1]);
               wrappedContent.find('div.project_color1').css('background-color', '#' + paletteInfo[0][1]);
               wrappedContent.find('div.project_color2').css('background-color', '#' + paletteInfo[1][1]);
               wrappedContent.find('div.project_color3').css('background-color', '#' + paletteInfo[2][1]);
               wrappedContent.find('div.project_color4').css('background-color', '#' + paletteInfo[3][1]);
               
               currentProjectHTML = wrappedContent.html();                                       
			 	   currentProjectHTML = currentProjectHTML.format([
			 			projectId, myBehrUserID, projectName,
			 			paletteCodes[0], paletteInfo[0][0],
			 			paletteInfo[0][1], paletteCodes[1],
			 			paletteInfo[1][0], paletteInfo[1][1],
			 			paletteCodes[2], paletteInfo[2][0],
			 			paletteInfo[2][1], paletteCodes[3],
			 			paletteInfo[3][0], paletteInfo[3][1],
			 			renderString, legacyImageMessaging, legacyImageButtonMessaging]);
			 			
			 	if(!useImageMessaging) {		
			 		var wrappedProjectContent = $("<div>" + currentProjectHTML + "</div>");
			 		wrappedProjectContent.find('div.legacy_imaging_container').remove();
			 		currentProjectHTML = wrappedProjectContent.html();		
			 	}
			 	
			 	if (pCounter == 0) {
			 		$('div.my_behr_saved_projects_default_content').hide();
			 		//$('div.my_behr_saved_projects_all').html('<div class="dashboard_title"><h3>Most Recent Project</h3></div>');
			 		$('div.my_behr_saved_projects_all').append(currentProjectHTML);
			 	} else {
			 		if (pCounter == 1) {
			 			var showNumProjects = numProjects - 1;
			 			//$('div.my_behr_saved_projects_all').append('<div class="dashboard_title"><h3>'+ showNumProjects+ ' Other Saved Projects</h3></div>');
			 		}
			 		$('div.my_behr_saved_projects_all').append(currentProjectHTML);
			 	}
                
			} else {
			 	$('h3.saved_projects_sub').hide();
			 	$('div.my_behr_saved_projects_current').html('<h3 style="color:red">Error no data returned for project.</h3>'); // Error
			 	// with
			 	// data
			 	$('div.my_behr_saved_projects_all').html("");
			 	pCounter = numProjects;
			}

	   }
   }

   if(pn != lastPage) {
      pageNumber = pn;
      $('div.my_behr_saved_projects_all').append('<div class="appendProjSpc"></div><div id="pagenav" class="appendProj" onclick="request_page('+(myBehrUserID)+','+(pageNumber+1)+')"><span>Load More Projects</span></div>');
   }
   setupOverlayWithID();
   handleDeletedColors();
}   

function setUpMyBehrCurrentProjectDashboard() {
	var myBehrUserID = readCookie('mybehr_id');

	if (myBehrUserID != null) {
		var sessionProject = readCookie('projectData');
		var jsonData = JSON.parse(sessionProject);
		var sessionUserID = "";
		var firstColor = "";
		var palette;
		
		var hasAllSessionData = true;
		
		if (jsonData && jsonData != null && jsonData != "") {
			sessionUserID = jsonData.userId;
			palette = jsonData.palette;
			firstColor = palette[0];
			
			if(jsonData.hasOwnProperty('projectAppType')) {
				if(jsonData.projectAppType == "pyp") {
					if(sessionStorage.drawingCanvas) {
						if(sessionStorage.drawingCanvas == "") {
							hasAllSessionData = false;
						}
					} else {
						hasAllSessionData = false;
					}
				}
			} 
		}
			
		if (sessionProject && sessionProject != null && sessionProject != ""
				&& sessionUserID == myBehrUserID && firstColor != null && firstColor != "" && hasAllSessionData) {
			userHasMyBehrSavedContent = true;
			$('div.my_behr_saved_projects_default_content').hide();
			$('div.my_behr_saved_projects_current').html('<div class="dashboard_title"><h3>My Current Project</h3></div>');

			var projectId = jsonData.projectId;
			var projectName = jsonData.projectName;
			var paletteInfo = new Array();
			var paletteCodes = new Array();
	
			for ( var i = 0; i < 8; i++) {
				paletteInfo[i] = new Array();
				paletteCodes[i] = palette[i];
				if (paletteCodes[i] == null) {
					paletteInfo[i][0] = "";
					paletteInfo[i][1] = "#ffffff";
					paletteCodes[i] = "";
				} else {
					paletteInfo[i] = getColorInformation(paletteCodes[i]).split(',');
					 paletteInfo[i][0] = toTitleCase(paletteInfo[i][0]);
				}
			}

			if (jsonData.paletteQuad) {
				var quadPalette = true;
			} else {
				var quadPalette = false;
			}
			
			var currentProjectIsPYP = false;
			
			if(jsonData.hasOwnProperty('projectAppType')) {
				if(jsonData.projectAppType == "pyp") {
					currentProjectIsPYP = true;	
					//console.info('is pyp');
				} else {
					//console.info('not pyp');
				}
			} else {
				//console.info('cannot read property');
			}
			
			if(currentProjectIsPYP) {
				renderString = 'src="' + sessionStorage.drawingCanvas + '"';			
			} else {
				var rooms = jsonData.rooms;
				var roomId = jsonData.currentRoomId;

				var bindings;
				var surfaces = new Array();
				surfaces.length = 10;
				var colors = new Array();
				colors.length = 10;

				for ( var i = 0; i < surfaces.length; i++) {
					surfaces[i] = "";
					colors[i] = "";
				}

				if ((rooms != null) && (rooms.length > 0)) {
					if (roomId == null || roomId == "") {
						roomId = rooms[0]['id'];
						bindings = rooms[0]['bindings'];
					} else {
						bindings = rooms[0]['bindings'];
						$.each(rooms, function(i, row) {
							id = row['id'];
							if (id == roomId) {
								bindings = row['bindings']
							}
						})

						for ( var i = 0; i < bindings.length; i++) {
							if (typeof bindings[i] === "undefined") {
							} else {
								if (bindings[i] >= 0) {
									surfaces[i] = i + 1;
									colors[i] = palette[bindings[i]];
								}
							}
						}
					}
				}
				
				//remove the deleted colors
				for (var i = 0; i < 10; i++) {
					if (colors[i].length > 0) {
						if( isDeletedColor(colors[i]) ) {
							colors[i] = "";
							surfaces [i] = "";
						}
					}
				}

				renderString = renderImageContext+'render?roomId=' + roomId
						+ '&surfaceId1=' + surfaces[0] + '&color1=' + colors[0]
						+ '&surfaceId2=' + surfaces[1] + '&color2=' + colors[1]
						+ '&surfaceId3=' + surfaces[2] + '&color3=' + colors[2]
						+ '&surfaceId4=' + surfaces[3] + '&color4=' + colors[3]
						+ '&surfaceId5=' + surfaces[4] + '&color5=' + colors[4]
						+ '&surfaceId6=' + surfaces[5] + '&color6=' + colors[5]
						+ '&surfaceId7=' + surfaces[6] + '&color7=' + colors[6]
						+ '&surfaceId8=' + surfaces[7] + '&color8=' + colors[7]
						+ '&surfaceId9=' + surfaces[8] + '&color9=' + colors[8]
						+ '&surfaceId10=' + surfaces[9] + '&color10=' + colors[9];
					
			}

			if (quadPalette) {
				if(currentProjectIsPYP) {
					currentProjectHTML = $('div.nextgenpypproject_quadpalette_template').html();				
				} else {
					currentProjectHTML = $('div.nextgenproject_quadpalette_template').html();
				}
			} else {
				if(currentProjectIsPYP) {
					currentProjectHTML = $('div.nextgenpypproject_notquadpalette_template').html();				
				} else {
					currentProjectHTML = $('div.nextgenproject_notquadpalette_template').html();
				}
			}

			var wrappedContent = $("<div>" + currentProjectHTML + "</div>");
			wrappedContent.find('.open_project_link').attr("href", "../colors/paint#paint");
			wrappedContent.find('.save_project_link').text("Save");
			wrappedContent.find('.save_project_link').attr("user_color_id", "unsaved");
			wrappedContent.find('.print_project').attr("onclick", "printUnsavedProject()");
			wrappedContent.find('div.delete_project').remove();
            wrappedContent.find('div.project_color_1_palette').css('background-color', '#' + paletteInfo[0][1]);
            wrappedContent.find('div.project_color_2_palette').css('background-color', '#' + paletteInfo[1][1]);
            wrappedContent.find('div.project_color_3_palette').css('background-color', '#' + paletteInfo[2][1]);
            wrappedContent.find('div.project_color_4_palette').css('background-color', '#' + paletteInfo[3][1]);
			wrappedContent.find('div.project_color_5_palette').css('background-color', '#' + paletteInfo[4][1]);
            wrappedContent.find('div.project_color_6_palette').css('background-color', '#' + paletteInfo[5][1]);
            wrappedContent.find('div.project_color_7_palette').css('background-color', '#' + paletteInfo[6][1]);
            wrappedContent.find('div.project_color_8_palette').css('background-color', '#' + paletteInfo[7][1]);
							
            wrappedContent.find('div.project_color1').css('background-color', '#' + paletteInfo[0][1]);
            wrappedContent.find('div.project_color2').css('background-color', '#' + paletteInfo[1][1]);
            wrappedContent.find('div.project_color3').css('background-color', '#' + paletteInfo[2][1]);
            wrappedContent.find('div.project_color4').css('background-color', '#' + paletteInfo[3][1]);
			wrappedContent.find('div.project_color5').css('background-color', '#' + paletteInfo[4][1]);
            wrappedContent.find('div.project_color6').css('background-color', '#' + paletteInfo[5][1]);
            wrappedContent.find('div.project_color7').css('background-color', '#' + paletteInfo[6][1]);
            wrappedContent.find('div.project_color8').css('background-color', '#' + paletteInfo[7][1]);
            
			if(projectId == null || projectId == "null") {
				wrappedContent.find('a.share_icon-email').attr("onclick", "shareMyBehrProjectUnsaved('email')");
				wrappedContent.find('a.share_icon-facebook').attr("onclick", "shareMyBehrProjectUnsaved('facebook')");
				wrappedContent.find('a.share_icon-twitter').attr("onclick", "shareMyBehrProjectUnsaved('twitter')");
				wrappedContent.find('a.share_icon-pinterest').attr("onclick", "shareMyBehrProjectUnsaved('pinterest')");
			}
			
            currentProjectHTML = wrappedContent.html();

			currentProjectHTML = currentProjectHTML.format([ projectId,
					myBehrUserID, projectName, paletteCodes[0],
					paletteInfo[0][0], paletteInfo[0][1], paletteCodes[1],
					paletteInfo[1][0], paletteInfo[1][1], paletteCodes[2],
					paletteInfo[2][0], paletteInfo[2][1], paletteCodes[3],
					paletteInfo[3][0], paletteInfo[3][1], renderString, 
					paletteCodes[4], paletteInfo[4][0], paletteInfo[4][1],
					paletteCodes[5], paletteInfo[5][0], paletteInfo[5][1],
					paletteCodes[6], paletteInfo[6][0], paletteInfo[6][1],
					paletteCodes[7], paletteInfo[7][0], paletteInfo[7][1],]);
			$('div.my_behr_saved_projects_current').append(currentProjectHTML);
			// $('.open_project_link').attr("href", consumerContext+"color/paint");
		} else {
			var url = 'http://';
			url += getUserServiceURL();
			url += '/project/nextgen/getallprojectids?userid=' + myBehrUserID;

			var userProjectIds;

			$.ajax({
				type : 'get',
				headers : {
					'Content-Type' : 'application/json'
				},
				url : url,
				data : 'application/json',
				async : false,
				cache : false,
				success : function(response) {
					userProjectIds = response;
				},
				error : function(xhr) {
					userProjectIds = "noresponsedata";
				}
			});

			if (userProjectIds != "noresponsedata") {
				userProjectIds = JSON.stringify(userProjectIds);
				userProjectIds = $.parseJSON(userProjectIds);

				if (userProjectIds["NextGenProjectVO"]
						&& userProjectIds["NextGenProjectVO"].length > 0) {
					var projectId = userProjectIds["NextGenProjectVO"][0]["projectId"];
					var projectJSON;
					url = 'http://' + getUserServiceURL()
							+ '/project/nextgen/getproject?projectid='
							+ projectId;

					$.ajax({
						type : 'get',
						headers : {
							'Content-Type' : 'application/json'
						},
						url : url,
						data : 'application/json',
						async : false,
						cache : false,
						success : function(response) {
							projectJSON = response;
						},
						error : function(xhr) {
							projectJSON = "noproject";
						}
					});

					if (projectJSON != "noproject" && projectJSON != "") { // Is
						// project
						// data
						userHasMyBehrSavedContent = true;
						$('div.my_behr_saved_projects_default_content').hide();
						$('div.my_behr_saved_projects_current')
								.html(
										'<div class="dashboard_title"><h3>Most Recent Project</h3></div>');
						var currentProjectHTML = "";

						if (projectJSON["NextGenProjectVO"]) {
							var jsonData = $
									.parseJSON(projectJSON["NextGenProjectVO"]["jsonData"]);
							var projectName = jsonData.NextGenProjectVO.projectName;
							var paletteInfo = new Array();
							var paletteCodes = new Array();

							var projectIsPYP = false;
							if(jsonData.NextGenProjectVO.hasOwnProperty('projectAppType')) {
								if(jsonData.NextGenProjectVO.projectAppType == "pyp") {
									projectIsPYP = true;
								} else {
									//console.info('is not pyp project');
								}
							} else {
								//console.info('cannot read property project app type');
							}
							
							for ( var i = 0; i < 8; i++) {
								paletteInfo[i] = new Array();
								paletteCodes[i] = jsonData.NextGenProjectVO.palette[i];
								if (paletteCodes[i] == null) {
									paletteInfo[i][0] = "";
									paletteInfo[i][1] = "#ffffff";
									paletteCodes[i] = "";
								} else {
									paletteInfo[i] = getColorInformation(
											paletteCodes[i]).split(',');
								    paletteInfo[i][0] = toTitleCase(paletteInfo[i][0]);
								}
							}

							var rooms = jsonData.NextGenProjectVO.rooms;
							var roomId = jsonData.NextGenProjectVO.currentRoomId;
							var palette = jsonData.NextGenProjectVO.palette;

							if (jsonData.NextGenProjectVO.paletteQuad) {
								var quadPalette = true;
							} else {
								var quadPalette = false;
							}

							var drawingCanvasURL = "";
							
							if(projectIsPYP) {
								// Get canvas data for project
								var canvasesWebService =  "http://" + getUserServiceURL() + "/project/nextgen/getprojectbinary?projectid=" + projectId + "&keys=drawingCanvas";
											
								$.ajax({
									type: "get",
									dataType: "json",
									url : canvasesWebService,
									async : false,
									cache : false,
									success : function(json) {
										drawingCanvasURL = json.drawingCanvas;
									},
									error : function() {
										drawingCanvasURL = "/binaries/content/assets/behrdotcom/web/images/myBehr/girlsInField.jpg";
									}
								});
								
								renderString = 'src="' + drawingCanvasURL + '"';
								
							} else {							
							var bindings;
							var surfaces = new Array();
							surfaces.length = 10;
							var colors = new Array();
							colors.length = 10;

							for ( var i = 0; i < surfaces.length; i++) {
								surfaces[i] = "";
								colors[i] = "";
							}

							if ((rooms != null) && (rooms.length > 0)) {
								if (roomId == null || roomId == "") {
									roomId = rooms[0]['id'];
									bindings = rooms[0]['bindings'];
								} else {
									$.each(rooms, function(i, row) {
										id = row['id'];
										if (id == roomId) {
											bindings = row['bindings']
										}
									})

									for ( var i = 0; i < bindings.length; i++) {
										if (typeof bindings[i] === "undefined") {

										} else {
											if (bindings[i] >= 0) {
												surfaces[i] = i + 1;
												colors[i] = palette[bindings[i]];
											}
										}
									}
								}
							}

							renderString = renderImageContext+'render?roomId='
									+ roomId + '&surfaceId1=' + surfaces[0]
									+ '&color1=' + colors[0] + '&surfaceId2='
									+ surfaces[1] + '&color2=' + colors[1]
									+ '&surfaceId3=' + surfaces[2] + '&color3='
									+ colors[2] + '&surfaceId4=' + surfaces[3]
									+ '&color4=' + colors[3] + '&surfaceId5='
									+ surfaces[4] + '&color5=' + colors[4]
									+ '&surfaceId6=' + surfaces[5] + '&color6='
									+ colors[5] + '&surfaceId7=' + surfaces[6]
									+ '&color7=' + colors[6] + '&surfaceId8='
									+ surfaces[7] + '&color8=' + colors[7]
									+ '&surfaceId9=' + surfaces[8] + '&color9='
									+ colors[8] + '&surfaceId10=' + surfaces[9]
									+ '&color10=' + colors[9];
							}
							if (quadPalette) {
								if(projectIsPYP) {
									currentProjectHTML = $('div.nextgenpypproject_quadpalette_template').html();								
								} else {
									currentProjectHTML = $('div.nextgenproject_quadpalette_template').html();
								}
							} else {
								if(projectIsPYP) {
									currentProjectHTML = $('div.nextgenpypproject_notquadpalette_template').html();								
								} else {
									currentProjectHTML = $('div.nextgenproject_notquadpalette_template').html();
								}
							}
                            
                            var wrappedContent = $("<div>" + currentProjectHTML + "</div>");
                            wrappedContent.find('div.project_color_1_palette').css('background-color', '#' + paletteInfo[0][1]);
                            wrappedContent.find('div.project_color_2_palette').css('background-color', '#' + paletteInfo[1][1]);
                            wrappedContent.find('div.project_color_3_palette').css('background-color', '#' + paletteInfo[2][1]);
                            wrappedContent.find('div.project_color_4_palette').css('background-color', '#' + paletteInfo[3][1]);
							wrappedContent.find('div.project_color_5_palette').css('background-color', '#' + paletteInfo[4][1]);
                            wrappedContent.find('div.project_color_6_palette').css('background-color', '#' + paletteInfo[5][1]);
                            wrappedContent.find('div.project_color_7_palette').css('background-color', '#' + paletteInfo[6][1]);
                            wrappedContent.find('div.project_color_8_palette').css('background-color', '#' + paletteInfo[7][1]);
							
                            wrappedContent.find('div.project_color1').css('background-color', '#' + paletteInfo[0][1]);
                            wrappedContent.find('div.project_color2').css('background-color', '#' + paletteInfo[1][1]);
                            wrappedContent.find('div.project_color3').css('background-color', '#' + paletteInfo[2][1]);
                            wrappedContent.find('div.project_color4').css('background-color', '#' + paletteInfo[3][1]);
							wrappedContent.find('div.project_color5').css('background-color', '#' + paletteInfo[4][1]);
                            wrappedContent.find('div.project_color6').css('background-color', '#' + paletteInfo[5][1]);
                            wrappedContent.find('div.project_color7').css('background-color', '#' + paletteInfo[6][1]);
                            wrappedContent.find('div.project_color8').css('background-color', '#' + paletteInfo[7][1]);
                            currentProjectHTML = wrappedContent.html();
                            
							currentProjectHTML = currentProjectHTML.format([
									projectId, myBehrUserID, projectName, paletteCodes[0],
									paletteInfo[0][0], paletteInfo[0][1], paletteCodes[1],
									paletteInfo[1][0], paletteInfo[1][1], paletteCodes[2],
									paletteInfo[2][0], paletteInfo[2][1], paletteCodes[3],
									paletteInfo[3][0], paletteInfo[3][1], renderString, 
									paletteCodes[4], paletteInfo[4][0], paletteInfo[4][1],
									paletteCodes[5], paletteInfo[5][0], paletteInfo[5][1],
									paletteCodes[6], paletteInfo[6][0], paletteInfo[6][1],
									paletteCodes[7], paletteInfo[7][0], paletteInfo[7][1],]);
							$('div.my_behr_saved_projects_current').append(
									currentProjectHTML);
						} else if (projectJSON["com.behr.colorsmart4.project.service.ProjectVO"]) {
							var useImageMessaging = true;
							var projectName = projectJSON["com.behr.colorsmart4.project.service.ProjectVO"]['projectName'];
							var palette = projectJSON["com.behr.colorsmart4.project.service.ProjectVO"]['palette'];
							var paletteVO = palette.paletteColors.set["com.behr.palette.service.PaletteColorVO"];
							var paletteType = palette.paletteType;
							var paletteInfo = new Array();
							var paletteCodes = new Array();

							if (paletteVO.length) {
								paletteVO = sortJSON(paletteVO, 'order');
							}

							for ( var i = 0; i < 4; i++) {
								paletteInfo[i] = new Array();
								if (paletteVO[i]) {
									if (paletteVO[i].colorId) {
										paletteCodes[i] = paletteVO[i].colorId;
										paletteInfo[i][0] = paletteVO[i].colorName;
										paletteInfo[i][1] = paletteVO[i].hexRgb
												.substr(2);
									} else {
										paletteInfo[i][0] = "";
										paletteInfo[i][1] = "#ffffff";
										paletteCodes[i] = "";
									}
								} else {
									paletteInfo[i][0] = "";
									paletteInfo[i][1] = "#ffffff";
									paletteCodes[i] = "";
								}
							}

							var legacyImageMessaging = "Projects created by the legacy Paint Your Place<sup>&trade;</sup> is not available for updating. Please try our new Paint Your Place<sup>&trade;</sup> with your "+colrs+".";
							var legacyImageButtonMessaging = "Start a New Project with These "+Colrs; 
							
							if (projectJSON["com.behr.colorsmart4.project.service.ProjectVO"]['previewImageURL']) {
								var oldRenderString = projectJSON["com.behr.colorsmart4.project.service.ProjectVO"]['previewImageURL'];

								if (oldRenderString.indexOf('http://scene7') === 0) {
									legacyImageMessaging = "Note: The image used in this project is no longer available for preview. Please select a new image by opening the project.";
									legacyImageButtonMessaging = "Open Project"; 
									
									renderString = 'http://' + getUserServiceURL() + '/colorsmart4/previewRepaintServlet?';
									var url = oldRenderString.split('?');
									var urlVariablesString = url[1];
									var urlVariables = urlVariablesString
											.split('&');
									var scene7XPositions = new Array();
									var scene7YPositions = new Array();
									var scene7Colors = new Array();
									var data;
									var dataSplit;
									var currentVariable;

									for ( var k = 0; k < urlVariables.length; k++) {
										currentVariable = urlVariables[k];

										if (currentVariable.indexOf("s_x") === 0) {
											data = currentVariable.split('=');
											scene7XPositions.push(data[1]);
										} else if (currentVariable
												.indexOf("s_y") === 0) {
											data = currentVariable.split('=');
											scene7YPositions.push(data[1]);
										} else if (currentVariable
												.indexOf("s_dbstring") === 0) {
											data = currentVariable.split('=');
											dataSplit = data[2].split(';');
											scene7Colors.push(dataSplit[0]);
										}
									}
									renderString += "x=";
									for (k = 0; k < scene7XPositions.length; k++) {
										renderString += scene7XPositions[k]
												+ ";";
									}
									renderString += "&y=";
									for (k = 0; k < scene7YPositions.length; k++) {
										renderString += scene7YPositions[k]
												+ ";";
									}
									renderString += "&values=";
									for (k = 0; k < scene7Colors.length; k++) {
										renderString += scene7Colors[k] + ";";
									}
									var frontURL = url[0].split('scene7:79');
									var imageFromURL = frontURL[1];
									renderString += "&img=" + imageFromURL;
								} else {
									renderString = oldRenderString
											.replace(
													'\/colorsmart-pyp-server\/',
													'http://'
															+ getUserServiceURL()
															+ '/colorsmart-pyp-server/');// devpreview.behr.com
								}
							} else {
								useImageMessaging = false;
								renderString = '/binaries/content/assets/behrdotcom/web/images/myBehr/girlsInField.jpg';
								legacyImageButtonMessaging = "Open Project";
							}

							if (paletteType == "0") {
								currentProjectHTML = $(
										'div.legacyproject_quadpalette_template')
										.html();
							} else {
								currentProjectHTML = $(
										'div.legacyproject_notquadpalette_template')
										.html();
							}

                            
                            
							currentProjectHTML = currentProjectHTML.format([
									projectId, myBehrUserID, projectName,
									paletteCodes[0], paletteInfo[0][0],
									paletteInfo[0][1], paletteCodes[1],
									paletteInfo[1][0], paletteInfo[1][1],
									paletteCodes[2], paletteInfo[2][0],
									paletteInfo[2][1], paletteCodes[3],
									paletteInfo[3][0], paletteInfo[3][1],
									renderString, legacyImageMessaging, legacyImageButtonMessaging]);
							if(!useImageMessaging) {		
								var wrappedProjectContent = $("<div>" + currentProjectHTML + "</div>");
								wrappedProjectContent.find('div.legacy_imaging_container').remove();
								currentProjectHTML = wrappedProjectContent.html();		
							}
							$('div.my_behr_saved_projects_current').append(
									currentProjectHTML);

						} else {
							$('div.my_behr_saved_projects_current')
									.html(
											'<h3 style="color:red">Error no data returned for project.</h3>'); // Error
							// with
							// data
						}
					} else { // Error with service
						$('div.my_behr_saved_projects_current')
								.html(
										'<h3 style="color:red">Error connecting or sending data to project service.</h3>');
					}
				} else { // No Saved Projects?
					$('div.my_behr_saved_projects_default_content').show();
					$('div.my_behr_saved_projects_current').html("");
				}
			} else { // Error with service
				$('div.my_behr_saved_projects_current')
						.html(
								'<h3 style="color:red">Error connecting or sending data to project service.</h3>');
			}
		}
	} else {
		$('div.my_behr_saved_projects_current').html('User Not Logged In');
	}
	
	handleDeletedColors();
}

function setUpMyBehrDashboardColors() {
	var myBehrUserID = readCookie('mybehr_id');
	if (myBehrUserID != null) {

		// Display first six saved colors
		var url = 'http://' + getUserServiceURL()
				+ '/usercolor/nextgen/getusercolors?userid=' + myBehrUserID
				+ '&isoldcolorontop=true';
		var userColors = "";

		$.ajax({
			type : 'get',
			url : url,
			headers : {
				'Content-Type' : 'text/plain'
			},
			async : false,
			cache : false,
			success : function(response) {
				userColors = response;
			},
			error : function(xhr) {
				alert('Error connecting or sending data to service. Please try again.');
			}
		});

		var userColorId;
		var colorId;
		var userId;
		var colorName;
		var hexRgb;
		var createdDate;
		var userColorHTML;
		var newUserColorHTML;

		if (userColors.userColorList.length > 0) {
			$('div.my_behr_saved_colors_dashboard')
					.html(
							'<div class="dashboard_title"><h3>Most Recent Colors</h3></div>');
			$('div.my_behr_saved_colors_dashboard-colors-container').html('');
			$('div.my_behr_saved_colors_dashboard-footer-no-colors').hide();
			$('div.my_behr_saved_colors_dashboard-footer').show();
			userHasMyBehrSavedContent = true;
		} else {
			$('div.my_behr_saved_colors_dashboard').html('');
			$('div.my_behr_saved_colors_dashboard-colors-container').html('');
			$('div.break_small-saved-colors').hide();
			$('div.my_behr_saved_colors_dashboard-footer').hide();
			// $('div.my_behr_saved_colors_dashboard-footer-no-colors').show();
			$('div.my_behr_saved_colors_default_content').show();
		}

		/* Temporary - HTML to be put back in HTML file after bugs are done */
		userColorHTML = '<a class="button overlay-trigger delete_saved_color" overlay_id="delete_color" user_color_id="{3}"></a>';
		userColorHTML += '<a href="../ColorDetailView/{0}" class="paint_chip paint_chip-vertical paint_chip-78 fl">';
		userColorHTML += '<div class="paint_chip-chip" style="background-color:#{2}"></div>';
		userColorHTML += '<div class="paint_chip-copy">';
		userColorHTML += '<span class="paint_chip-name">{1}</span><br />';
		userColorHTML += '<span class="paint_chip-id">{0}</span>';
		userColorHTML += '</div></a></div>';

		var userColorsEnd = 0;
		var userColorsStart = userColors['userColorList'].length - 1;
		var jCount = 0;

		if (userColors['userColorList'].length > 6) {
			userColorsEnd = userColors['userColorList'].length - 6;
		}

		for ( var i = userColorsStart; i >= userColorsEnd; i--) {

			userColorId = userColors['userColorList'][i]['userColorId'];
			colorId = userColors['userColorList'][i]['colorId'];
			userId = userColors['userColorList'][i]['userId'];
			colorName = userColors['userColorList'][i]['colorName'];
			colorName = toTitleCase(colorName);
			hexRgb = userColors['userColorList'][i]['hexRgb'];
			createdDate = userColors['userColorList'][i]['createdDate'];

			if (hexRgb == null) {
				hexRgb = 'ffffff';
			} else {
				hexRgb = hexRgb.substr(2);
				
				// Workaround
				if(hexRgb.length == 5) {
					hexRgb = "0" + hexRgb;
				} else if(hexRgb.length == 4) {
					hexRgb = "00" + hexRgb;
				}
			}

			if (jCount == 0) {
				newUserColorHTML = '<div class="saved_color_container">';
			} else {
				var remainder = (jCount + 1) % 6;
				if (remainder == 0) {
					newUserColorHTML = '<div class="saved_color_container  saved_color_container-right">';
				} else {
					newUserColorHTML = '<div class="saved_color_container">';
				}
			}

			newUserColorHTML += userColorHTML.format([ colorId, colorName,
					hexRgb, userColorId ]);
			$('div.my_behr_saved_colors_dashboard-colors-container').append(
					newUserColorHTML);
			jCount = jCount + 1;
		}
	}
}

function saveColorsToMyBehr(colors) {
	var colorCodes = colors.split(',');
	var colorCode = "";

	var myBehrUserID = readCookie('mybehr_id');
	var date = new Date();
	date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));
	var expires = "; expires=" + date.toGMTString();
	document.cookie = "mybehr_colorid=" + "" + expires + "; path=/";
		
	if (myBehrUserID != null && myBehrUserID != "") {

		var saveColorSuccess = true;

		for (i = 0; i < colorCodes.length; i++) {
			colorCode = colorCodes[i];

			var url = 'http://';
			url += getUserServiceURL();
			url += '/usercolor/nextgen/addusercolor';
			var colorData = '{"AddUserColorsVO":{"colors":["' + colorCode
					+ '"],"userId":"' + myBehrUserID + '"}}';

			$.ajax({
				type : 'post',
				accept : 'application/json',
				headers : {
					'Accept' : 'application/json',
					'Content-Type' : 'application/json'
				},
				dataType : 'json',
				url : url,
				async : false,
				cache : false,
				data : colorData,
				success : function(response) {
					// saveColorSuccess = true;
				},
				error : function(xhr) {
					saveColorSuccess = false;
				}
			});
		}

		if (saveColorSuccess) {
			createDynamicFloodLightsTag('savin052');
			showOverlayByID('color_save_success');
			setTimeout('handleOverlayCloseClick()', 10000);
		} else {
			showOverlayByID('color_save_fail');
			setTimeout('handleOverlayCloseClick()', 10000);
		}

	} else {
		document.cookie = "mybehr_colorid=" + colors + "; path=/";
		showOverlayByID('signup_login');
	}
}

function saveColorToMyBehr(colorCode) {
	var myBehrUserID = readCookie('mybehr_id');
	var date = new Date();
	date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));
	var expires = "; expires=" + date.toGMTString();
	document.cookie = "mybehr_colorid=" + "" + expires + "; path=/";
	
	if (myBehrUserID != null && myBehrUserID != "") {
		var url = 'http://';
		url += getUserServiceURL();
		url += '/usercolor/nextgen/addusercolor';
		var colorData = '{"AddUserColorsVO":{"colors":["' + colorCode
				+ '"],"userId":"' + myBehrUserID + '"}}';

		$.ajax({
			type : 'post',
			accept : 'application/json',
			headers : {
				'Accept' : 'application/json',
				'Content-Type' : 'application/json'
			},
			dataType : 'json',
			url : url,
			async : false,
			cache : false,
			data : colorData,
			success : function(response) {
				showOverlayByID('color_save_success');

				setTimeout('handleOverlayCloseClick()', 10000);
			},
			error : function(xhr) {
				showOverlayByID('color_save_fail');

			}
		});
	} else {
		document.cookie = "mybehr_colorid=" + colorCode + "; path=/";
		showOverlayByID('signup_login');
	}
}

function deleteColorFromMyBehr(event) {
	var myBehrUserID = readCookie('mybehr_id');

	if (myBehrUserID != null) {
		var url = 'http://';
		url += getUserServiceURL();
		url += '/usercolor/nextgen/deleteusercolors/' + event.data.userColorId;

		$.ajax({
			type : 'get',
			url : url,
			headers : {
				'Content-Type' : 'application/json'
			},
			dataType : 'json',
			async : false,
			cache : false,
			success : function(response) {

				handleOverlayCloseClick();

				if ($('div.my_behr_saved_colors_dashboard').length > 0) {
					setUpMyBehrDashboardColors();
				} else {
					setUpMyBehrSavedColors();
				}
				setupOverlayWithID();
			},
			error : function(xhr) {
				alert('Error connecting or sending data to service. Please try again.');
			}
		});
	}

}

function saveMyBehrProjectAs(e, projectId) {
	var myBehrUserID = readCookie('mybehr_id');
	var thisTarget = $(e.target);
	var newProjectName = thisTarget.find('input#new_project_name').val();
	
	if (myBehrUserID != null) {
		var projectData = "";
		var projectDataArray;
		
		var canvasWebServiceError = false;		
		
		if (projectId != "unsaved") {
			var url = 'http://';
			url += getUserServiceURL();
			url += '/project/nextgen/getproject?projectid=' + projectId;

			$.ajax({
				type : 'get',
				headers : {
					'Content-Type' : 'application/json'
				},
				url : url,
				data : 'application/json',
				async : false,
				cache : false,
				success : function(response) {
					projectData = response;
				},
				error : function(xhr) {
					alert('Error connecting or sending data to service. Please try again.');
				}
			});

			var jsonDataAll = $.parseJSON(projectData.NextGenProjectVO.jsonData);
			var jsonDataOld = jsonDataAll.NextGenProjectVO;
			jsonDataOld.projectName = newProjectName;
			jsonDataOld.projectId = "";
			
			if(jsonDataOld.hasOwnProperty('projectAppType')) {
				if(jsonDataOld.projectAppType == "pyp") {
					console.info('project save as add pyp canvas data');
						
					// Get canvas data for project
					var canvasesWebService =  "http://" + getUserServiceURL() + "/project/nextgen/getprojectbinary?projectid=" + projectId + "&keys=all";
												
					$.ajax({
						type: "get",
						dataType: "json",
						url : canvasesWebService,
						async : false,
						cache : false,
						success : function(response) {
							jsonDataOld.drawingCanvas = response.drawingCanvas;
							jsonDataOld.segmentCanvas = response.segmentCanvas;
							jsonDataOld.colorCanvas = response.colorCanvas;
							jsonDataOld.mainImage = response.mainImage;	
							jsonDataOld.thumbnail = response.thumbnail;
						},
						error : function() {
							canvasWebServiceError = true;
						}
					});
				}
			} else {
				jsonDataOld.projectAppType = "vis";
			}		
		
			delete jsonDataOld['projectId'];
			var jsonDataString = "{\"NextGenProjectVO\":" + JSON.stringify(jsonDataOld) + "}";
		} else {
			var sessionProject = readCookie('projectData');
			var jsonData = JSON.parse(sessionProject);
			jsonData.projectId = "";
			
			if(jsonData.hasOwnProperty('projectAppType')) {
				if(jsonData.projectAppType == "pyp") {
					console.info('project save as add pyp data');
						
					// Get canvas data for project
					jsonData.thumbnail = sessionStorage.thumbnail;
					jsonData.foundColors = sessionStorage.foundColors;
					jsonData.foundLumins = sessionStorage.foundLumins;
					jsonData.maskingLines = sessionStorage.maskingLines;
					jsonData.drawingCanvas = sessionStorage.drawingCanvas;
					jsonData.segmentCanvas = sessionStorage.segmentCanvas;
					jsonData.colorCanvas = sessionStorage.colorCanvas;
					jsonData.mainImage = sessionStorage.mainImage;	
				}
			} else {
				jsonData.projectAppType = "vis";
			}

			
			delete jsonData['projectId'];
			jsonData.projectName = newProjectName;
			var jsonDataString = "{\"NextGenProjectVO\":" + JSON.stringify(jsonData) + "}";
		}

		if(canvasWebServiceError) {
			console.info('could not reach service');
			e.preventDefault();
			return false;
		} else {
			var webServiceError = false;
			// Save new project information
			url = 'http://';
			url += getUserServiceURL();
			url += '/project/nextgen/saveproject';

			$.ajax({
				type : 'post',
				headers : {
					'Accept' : 'application/json',
					'Content-Type' : 'text/plain'
				},
				url : url,
				async : false,
				cache : false,
				data : jsonDataString,
				success : function(response) {
					createDynamicFloodLightsTag('savin412');
				},
				error : function(xhr) {
					webServiceError = true;
				}
			});
		}
		
		if(webServiceError) {
			console.info('could not reach service');
			e.preventDefault();
			return false;
		} 
	}
}

function deleteProjectFromMyBehr(event) {
	var myBehrUserID = readCookie('mybehr_id');
	
	handleOverlayCloseClick();	// Remove delete project overlay
	
	if (myBehrUserID != null) {
		var url = 'http://';
		url += getUserServiceURL();
		url += '/project/nextgen/deleteprojectx?projectid='
				+ event.data.userProjectId;

      // modified to get from delete for production defect story-4506 
		$.ajax({
			type : 'get', 
			headers : {
				'Content-Type' : 'application/json'
			},
			url : url,
			data : 'application/json',
			async : false,
			cache : false,
			success : function(response) {

				if ($('div.my_behr_saved_projects_all').length > 0) {
					//showOverlayByID('processing_projects');
               //$('div.my_behr_saved_projects_all').empty();
					//window.setTimeout(setUpMyBehrSavedProjects, 500); // To allow processing overlay to show while 
               $('div.my_behr_saved_projects_all').html("");
					setUpMyBehrSavedProjects();
				} else {
					setUpMyBehrCurrentProjectDashboard();
				}
				setupOverlayWithID();
			},
			error : function(xhr) {
				alert('Error connecting or sending data to service. Please try again.');
			}
		});
	}

}

// New
function printMyBehrProject(projectId) {
	console.info('called printMyBehrProject, projectId=' + projectId);
	printProjectMain(projectId);
}
function printUnsavedProject() {
	console.info('called printUnsavedProject');
	printProjectMain('session');
}

// Old
/*
function printMyBehrProject(projectId) {
	if(consumerContext === '/consumer_ca/'){
		renderImageContext = "/renderimage/";
	}else{
		renderImageContext = "/renderimagenx/";
	}
	var dispSetting = "toolbar=yes,location=no,directories=yes,scrollbars=yes,width=1005,height=590,left=100,top=25";

	var ua = navigator.userAgent.toLowerCase();
	var checkChrome = /chrome/;
	var checkSafari = /safari/;

	if (checkChrome.test(ua) || checkSafari.test(ua)) {
		var printContent = $('div.nextgenproject_print_template').html();
	} else {
		var printContent = $('div.nextgenproject_print_template-nobg').html();
		dispSetting = "toolbar=yes,location=no,directories=yes,scrollbars=yes,width=1005,height=655,left=100,top=25";
	}

	var url = 'http://' + getUserServiceURL()
			+ '/project/nextgen/getproject?projectid=' + projectId;

	$.ajax({
		type : 'get',
		headers : {
			'Content-Type' : 'application/json'
		},
		url : url,
		data : 'application/json',
		async : false,
		cache : false,
		success : function(response) {
			projectJSON = response;
		},
		error : function(xhr) {
			projectJSON = "noproject";
			// errorMessaging = 'Error, could not connect with Project Service.
			// Unable to print project.';
		}
	});

	if (projectJSON == "noproject" || projectJSON == "") {
		printContent = "<div><p>Error, could not connect with Project Service. Unable to print project.</p></div>";
	} else {
		if (projectJSON["NextGenProjectVO"]) {
			var jsonData = $
					.parseJSON(projectJSON["NextGenProjectVO"]["jsonData"]);
			var projectName = jsonData.NextGenProjectVO.projectName;
			var paletteInfo = new Array();
			var paletteCodes = new Array();

			for ( var i = 0; i < 8; i++) {
				paletteInfo[i] = new Array();
				paletteCodes[i] = jsonData.NextGenProjectVO.palette[i];
				if (paletteCodes[i] == null) {
					paletteInfo[i][0] = "";
					paletteInfo[i][1] = "#ffffff";
					paletteCodes[i] = "";
				} else {
					paletteInfo[i] = getColorInformation(paletteCodes[i])
							.split(',');
				}
			}

			var rooms = jsonData.NextGenProjectVO.rooms;
			var roomId = jsonData.NextGenProjectVO.currentRoomId;
			var palette = jsonData.NextGenProjectVO.palette;

			if (jsonData.NextGenProjectVO.paletteQuad) {
				var quadPalette = true;
			} else {
				var quadPalette = false;
			}

			var bindings;
			var surfaces = new Array();
			surfaces.length = 10;
			var colors = new Array();
			colors.length = 10;

			for ( var i = 0; i < surfaces.length; i++) {
				surfaces[i] = "";
				colors[i] = "";
			}

			if ((rooms != null) && (rooms.length > 0)) {
				if (roomId == null || roomId == "") {
					roomId = rooms[0]['id'];
					bindings = rooms[0]['bindings'];
				} else {
					$.each(rooms, function(i, row) {
						id = row['id'];
						if (id == roomId) {
							bindings = row['bindings']
						}
					})

					for ( var i = 0; i < bindings.length; i++) {
						if (typeof bindings[i] === "undefined") {

						} else {
							if (bindings[i] >= 0) {
								surfaces[i] = i + 1;
								colors[i] = palette[bindings[i]];
							}
						}
					}
				}
			}

			renderString = renderImageContext+'render?roomId=' + roomId
					+ '&surfaceId1=' + surfaces[0] + '&color1=' + colors[0]
					+ '&surfaceId2=' + surfaces[1] + '&color2=' + colors[1]
					+ '&surfaceId3=' + surfaces[2] + '&color3=' + colors[2]
					+ '&surfaceId4=' + surfaces[3] + '&color4=' + colors[3]
					+ '&surfaceId5=' + surfaces[4] + '&color5=' + colors[4]
					+ '&surfaceId6=' + surfaces[5] + '&color6=' + colors[5]
					+ '&surfaceId7=' + surfaces[6] + '&color7=' + colors[6]
					+ '&surfaceId8=' + surfaces[7] + '&color8=' + colors[7]
					+ '&surfaceId9=' + surfaces[8] + '&color9=' + colors[8]
					+ '&surfaceId10=' + surfaces[9] + '&color10=' + colors[9];
			printContent = printContent.format([ renderString, projectName,
					paletteCodes[0], paletteInfo[0][0], paletteInfo[0][1],
					paletteCodes[1], paletteInfo[1][0], paletteInfo[1][1],
					paletteCodes[2], paletteInfo[2][0], paletteInfo[2][1],
					paletteCodes[3], paletteInfo[3][0], paletteInfo[3][1],
					paletteCodes[4], paletteInfo[4][0], paletteInfo[4][1],
					paletteCodes[5], paletteInfo[5][0], paletteInfo[5][1],
					paletteCodes[6], paletteInfo[6][0], paletteInfo[6][1],
					paletteCodes[7], paletteInfo[7][0], paletteInfo[7][1]]);

			if (!quadPalette) {
				var wrappedPrintContent = $("<div>" + printContent + "</div>");
				wrappedPrintContent.find('div.project_color_palette').remove();
				wrappedPrintContent.find('div.project_color-1').css('background-color', '#' + paletteInfo[0][1]);
				wrappedPrintContent.find('div.project_color-2').css('background-color', '#' + paletteInfo[1][1]);
				wrappedPrintContent.find('div.project_color-3').css('background-color', '#' + paletteInfo[2][1]);
				wrappedPrintContent.find('div.project_color-4').css('background-color', '#' + paletteInfo[3][1]);
				wrappedPrintContent.find('div.project_color-5').css('background-color', '#' + paletteInfo[4][1]);
				wrappedPrintContent.find('div.project_color-6').css('background-color', '#' + paletteInfo[5][1]);
				wrappedPrintContent.find('div.project_color-7').css('background-color', '#' + paletteInfo[6][1]);
				wrappedPrintContent.find('div.project_color-8').css('background-color', '#' + paletteInfo[7][1]);
				printContent = wrappedPrintContent.html();
			} else {
				var wrappedPrintContent = $("<div>" + printContent + "</div>");
				wrappedPrintContent.find('div.extra_colors').remove();
				wrappedPrintContent.find('div.project_color_1_palette').css('background-color', '#' + paletteInfo[0][1]);
				wrappedPrintContent.find('div.project_color_2_palette').css('background-color', '#' + paletteInfo[1][1]);
				wrappedPrintContent.find('div.project_color_3_palette').css('background-color', '#' + paletteInfo[2][1]);
				wrappedPrintContent.find('div.project_color_4_palette').css('background-color', '#' + paletteInfo[3][1]);
				wrappedPrintContent.find('div.project_color-1').css('background-color', '#' + paletteInfo[0][1]);
				wrappedPrintContent.find('div.project_color-2').css('background-color', '#' + paletteInfo[1][1]);
				wrappedPrintContent.find('div.project_color-3').css('background-color', '#' + paletteInfo[2][1]);
				wrappedPrintContent.find('div.project_color-4').css('background-color', '#' + paletteInfo[3][1]);
				wrappedPrintContent.find('div.project_color-5').css('background-color', '#' + paletteInfo[4][1]);
				wrappedPrintContent.find('div.project_color-6').css('background-color', '#' + paletteInfo[5][1]);
				wrappedPrintContent.find('div.project_color-7').css('background-color', '#' + paletteInfo[6][1]);
				wrappedPrintContent.find('div.project_color-8').css('background-color', '#' + paletteInfo[7][1]);
				printContent = wrappedPrintContent.html();
			}

		} else if (projectJSON["com.behr.colorsmart4.project.service.ProjectVO"]) {
			var projectName = projectJSON["com.behr.colorsmart4.project.service.ProjectVO"]['projectName'];
			var palette = projectJSON["com.behr.colorsmart4.project.service.ProjectVO"]['palette'];
			var paletteVO = palette.paletteColors.set["com.behr.palette.service.PaletteColorVO"];
			paletteVO = sortJSON(paletteVO, 'order');
			var paletteType = palette.paletteType;

			var paletteInfo = new Array();
			var paletteCodes = new Array();

			for (var i = 0; i < 4; i++) {
				paletteInfo[i] = new Array();

				if (paletteVO[i]) {
					if (paletteVO[i].colorId) {
						paletteCodes[i] = paletteVO[i].colorId;
						paletteInfo[i][0] = paletteVO[i].colorName;
						paletteInfo[i][1] = paletteVO[i].hexRgb.substr(2);
					} else {
						paletteInfo[i][0] = "";
						paletteInfo[i][1] = "#ffffff";
						paletteCodes[i] = "";
					}
				} else {
					paletteInfo[i][0] = "";
					paletteInfo[i][1] = "#ffffff";
					paletteCodes[i] = "";
				}
			}
			
			for (var j = 4; j < 8; j++) { 
				paletteInfo[j] = new Array();
				paletteInfo[j][0] = "";
				paletteInfo[j][1] = "#ffffff";
				paletteCodes[j] = "";
			}

			if (projectJSON["com.behr.colorsmart4.project.service.ProjectVO"]['previewImageURL']) {
				var oldRenderString = projectJSON["com.behr.colorsmart4.project.service.ProjectVO"]['previewImageURL'];

				if (oldRenderString.indexOf('http://scene7') === 0) {
					renderString = 'http://' + getUserServiceURL()
							+ '/colorsmart4/previewRepaintServlet?';
					var url = oldRenderString.split('?');
					var urlVariablesString = url[1];
					var urlVariables = urlVariablesString.split('&');
					var scene7XPositions = new Array();
					var scene7YPositions = new Array();
					var scene7Colors = new Array();
					var data;
					var dataSplit;
					var currentVariable;

					for ( var k = 0; k < urlVariables.length; k++) {
						currentVariable = urlVariables[k];

						if (currentVariable.indexOf("s_x") === 0) {
							data = currentVariable.split('=');
							scene7XPositions.push(data[1]);
						} else if (currentVariable.indexOf("s_y") === 0) {
							data = currentVariable.split('=');
							scene7YPositions.push(data[1]);
						} else if (currentVariable.indexOf("s_dbstring") === 0) {
							data = currentVariable.split('=');
							dataSplit = data[2].split(';');
							scene7Colors.push(dataSplit[0]);
						}
					}
					renderString += "x=";
					for (k = 0; k < scene7XPositions.length; k++) {
						renderString += scene7XPositions[k] + ";";
					}
					renderString += "&y=";
					for (k = 0; k < scene7YPositions.length; k++) {
						renderString += scene7YPositions[k] + ";";
					}
					renderString += "&values=";
					for (k = 0; k < scene7Colors.length; k++) {
						renderString += scene7Colors[k] + ";";
					}
					var frontURL = url[0].split('scene7:79');
					var imageFromURL = frontURL[1];
					renderString += "&img=" + imageFromURL;
				} else {
					renderString = oldRenderString.replace(
							'\/colorsmart-pyp-server\/', 'http://'
									+ getUserServiceURL()
									+ '/colorsmart-pyp-server/');// devpreview.behr.com
				}
			} else {
				renderString = '/binaries/content/assets/behrdotcom/web/images/myBehr/girlsInField.jpg';
			}

			printContent = printContent.format([ renderString, projectName,
					paletteCodes[0], paletteInfo[0][0], paletteInfo[0][1],
					paletteCodes[1], paletteInfo[1][0], paletteInfo[1][1],
					paletteCodes[2], paletteInfo[2][0], paletteInfo[2][1],
					paletteCodes[3], paletteInfo[3][0], paletteInfo[3][1],
					paletteCodes[4], paletteInfo[4][0], paletteInfo[4][1],
					paletteCodes[5], paletteInfo[5][0], paletteInfo[5][1],
					paletteCodes[6], paletteInfo[6][0], paletteInfo[6][1],
					paletteCodes[7], paletteInfo[7][0], paletteInfo[7][1]]);

			var wrappedPrintContent = $("<div>" + printContent + "</div>");
			wrappedPrintContent.find('img.print-project-image').attr("width",
					"");
			wrappedPrintContent.find('img.print-project-image').attr("height",
					"100%");
			if (paletteType != "0") {
				wrappedPrintContent.find('div.project_color_palette').remove();
				wrappedPrintContent.find('div.project_color-1').css('background-color', '#' + paletteInfo[0][1]);
				wrappedPrintContent.find('div.project_color-2').css('background-color', '#' + paletteInfo[1][1]);
				wrappedPrintContent.find('div.project_color-3').css('background-color', '#' + paletteInfo[2][1]);
				wrappedPrintContent.find('div.project_color-4').css('background-color', '#' + paletteInfo[3][1]);
				wrappedPrintContent.find('div.project_color-5').css('background-color', '#' + paletteInfo[4][1]);
				wrappedPrintContent.find('div.project_color-6').css('background-color', '#' + paletteInfo[5][1]);
				wrappedPrintContent.find('div.project_color-7').css('background-color', '#' + paletteInfo[6][1]);
				wrappedPrintContent.find('div.project_color-8').css('background-color', '#' + paletteInfo[7][1]);
			} else {
				wrappedPrintContent.find('div.extra_colors').remove();
				wrappedPrintContent.find('div.project_color_1_palette').css('background-color', '#' + paletteInfo[0][1]);
				wrappedPrintContent.find('div.project_color_2_palette').css('background-color', '#' + paletteInfo[1][1]);
				wrappedPrintContent.find('div.project_color_3_palette').css('background-color', '#' + paletteInfo[2][1]);
				wrappedPrintContent.find('div.project_color_4_palette').css('background-color', '#' + paletteInfo[3][1]);
				wrappedPrintContent.find('div.project_color-1').css('background-color', '#' + paletteInfo[0][1]);
				wrappedPrintContent.find('div.project_color-2').css('background-color', '#' + paletteInfo[1][1]);
				wrappedPrintContent.find('div.project_color-3').css('background-color', '#' + paletteInfo[2][1]);
				wrappedPrintContent.find('div.project_color-4').css('background-color', '#' + paletteInfo[3][1]);
				wrappedPrintContent.find('div.project_color-5').css('background-color', '#' + paletteInfo[4][1]);
				wrappedPrintContent.find('div.project_color-6').css('background-color', '#' + paletteInfo[5][1]);
				wrappedPrintContent.find('div.project_color-7').css('background-color', '#' + paletteInfo[6][1]);
				wrappedPrintContent.find('div.project_color-8').css('background-color', '#' + paletteInfo[7][1]);
			}
			printContent = wrappedPrintContent.html();

		} else {
			printContent = "<div><p>Error, could not connect with Project Service. Unable to print project.</p></div>";
		}
	}

	var docprint = window.open("", "", dispSetting);
	docprint.document.open();
	docprint.document.write('<html><head><title>My Behr</title>');
	docprint.document.write('<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />');
	docprint.document.write('<meta http-equiv="X-UA-Compatible" content="IE=Edge" />');
	docprint.document.write('<style type="text/css">');
	docprint.document.write('body {margin:0px; color: rgb(255, 255, 255); font-family: Arial,Helvetica,sans-serif;font-size: 12px;line-height: 18px; background-color: rgb(255, 255, 255); width:1000px; height:100%;}');
	docprint.document.write('div.page_wrapper {position: relative; z-index: 20; }');
	docprint.document.write('div.my_behr_main {float: left; background-color: rgb(255, 255, 255); color: rgb(75, 75, 77);}');
	docprint.document.write('.fl {float: left;}');
	docprint.document.write('.orange_button.fr {float: right;}');
	docprint.document.write(".orange_button {display: block; float: left; padding: 14px 15px 0px; height: 31px; font-family: 'Open Sans','Helvetica Neue',Arial,sans-serif; font-size: 14px; font-weight: bold; color: rgb(255, 255, 255); text-align: center; background-color: rgb(187, 53, 0); box-shadow: -2px -2px 1px 1px rgba(200, 200, 200, 0.1) inset, 2px 1px 1px 1px rgba(60, 60, 60, 0.3) inset;}");
	docprint.document.write('.button {cursor: pointer;}');
	docprint.document.write('.fr {float: right;}');
	docprint.document.write('a, h1 a, h2 a, h3 a, a h1, a h2, a h3, a h4 {color: rgb(172, 152, 115); text-decoration: none;}');
	docprint.document.write('.clrb {clear: both;}');
	docprint.document.write("div.page_wrapper.interior_columns h5 {margin: 0px 0px 10px; font-size: 18px; color: rgb(172, 152, 115); padding: 0px; font-family: 'Open Sans','Helvetica Neue',Arial,sans-serif; font-weight: normal; letter-spacing: -1px;}");
	docprint.document.write('div.my_behr_main div.saved_project_palette_main {float: left; width: 258px; height: 275px;}');
	docprint.document.write('div.my_behr_main div.project_color_container {width: 248px; float: left; margin: 9px 0px 0px;}');
	docprint.document.write('div.my_behr_main div.project_color_container div.project_color {width: 23px; height: 23px; float: left; border-radius: 5px 5px 5px 5px; margin-right: 8px;}');
	docprint.document.write('div.my_behr_main div.project_color_container div.color_name_container {float: left; padding: 3px 0px 0px 3px; font-size: 12px; color: rgb(172, 152, 115)};');
	docprint.document.write('div.my_behr_main div.project_color_container div.color_name_container {font-size: 12px; color: rgb(172, 152, 115);}');
	docprint.document.write('div.my_behr_main div.project_color_palette {width: 123px; height: 123px; border-radius: 20px 20px 20px 20px; border: 1px solid rgb(200, 200, 200); margin: 0px 150px 7px 0px;}');
	docprint.document.write('div.my_behr_main div.project_color_1_palette {width: 70px; height: 79px; float: left; background-color:#' + paletteInfo[0][1] + '; border-radius: 19px 0px 0px 0px; border-right: 3px solid rgb(232, 232, 232);}');
	docprint.document.write('div.my_behr_main div.project_color_2_palette {width: 46px; height: 34px; float: left; background-color:#' + paletteInfo[1][1] + '; border-radius: 0px 16px 0px 0px; margin: 2px 2px 0px;}');
	docprint.document.write('div.my_behr_main div.project_color_3_palette {width: 46px; height: 38px; float: left; background-color:#' + paletteInfo[2][1] + '; border-top: 3px solid rgb(232, 232, 232); margin: 2px 0px 2px 2px;}');
	docprint.document.write('div.my_behr_main div.project_color_4_palette {width: 123px; height: 41px; float: left; background-color:#' + paletteInfo[3][1] + '; border-radius: 0px 0px 20px 20px; margin: 3px 0px 0px;}');
	docprint.document.write('div.project_color-1 {background-color:#' + paletteInfo[0][1] + ';}');
	docprint.document.write('div.project_color-2 {background-color:#' + paletteInfo[1][1] + ';}');
	docprint.document.write('div.project_color-3 {background-color:#' + paletteInfo[2][1] + ';}');
	docprint.document.write('div.project_color-4 {background-color:#' + paletteInfo[3][1] + ';}');
	docprint.document.write('div.project_color-5 {background-color:#' + paletteInfo[4][1] + ';}');
	docprint.document.write('div.project_color-6 {background-color:#' + paletteInfo[5][1] + ';}');
	docprint.document.write('div.project_color-7 {background-color:#' + paletteInfo[6][1] + ';}');
	docprint.document.write('div.project_color-8 {background-color:#' + paletteInfo[7][1] + ';}');
	docprint.document.write('div.my_behr_main div.project_color_container div.color_name_container span.color_name {font-weight: bold;}');
	docprint.document.write('</style>');
	docprint.document.write('<script>function printThis(){window.print()}</script>');
	docprint.document.write('</head><body style="background:none; margin:0px;"><div class="page_wrapper"><div class="page_wrapper interior_columns"><div class="my_behr_main" style="margin-left:0px; padding:0px;">');
	docprint.document.write(printContent);
	docprint.document.write('</div></div></div></body></html>');
	docprint.document.close();
	docprint.focus();
}

function printUnsavedProject() {

	var dispSetting = "toolbar=yes,location=no,directories=yes,scrollbars=yes,width=1005, height=590, left=100, top=25";
	if(consumerContext === '/consumer_ca/'){
		renderImageContext = "/renderimage/";
	}else{
		renderImageContext = "/renderimagenx/";
	}
	var ua = navigator.userAgent.toLowerCase();
	var checkChrome = /chrome/;
	var checkSafari = /safari/;

	if (checkChrome.test(ua) || checkSafari.test(ua)) {
		var printContent = $('div.nextgenproject_print_template').html();
	} else {
		var printContent = $('div.nextgenproject_print_template-nobg').html();
		dispSetting = "toolbar=yes,location=no,directories=yes,scrollbars=yes,width=1005, height=655, left=100, top=25";
	}

	var sessionProject = readCookie('projectData');

	var jsonData = JSON.parse(sessionProject);
	var projectName = jsonData.projectName;
	var paletteInfo = new Array();
	var paletteCodes = new Array();

	for ( var i = 0; i < 8; i++) {
		paletteInfo[i] = new Array();
		paletteCodes[i] = jsonData.palette[i];
		if (paletteCodes[i] == null) {
			paletteInfo[i][0] = "";
			paletteInfo[i][1] = "#ffffff";
			paletteCodes[i] = "";
		} else {
			paletteInfo[i] = getColorInformation(paletteCodes[i]).split(',');
		}
	}

	var rooms = jsonData.rooms;
	var roomId = jsonData.currentRoomId;
	var palette = jsonData.palette;

	if (jsonData.paletteQuad) {
		var quadPalette = true;
	} else {
		var quadPalette = false;
	}

	var bindings;
	var surfaces = new Array();
	surfaces.length = 10;
	var colors = new Array();
	colors.length = 10;

	for ( var i = 0; i < surfaces.length; i++) {
		surfaces[i] = "";
		colors[i] = "";
	}

	if ((rooms != null) && (rooms.length > 0)) {
		if (roomId == null || roomId == "") {
			roomId = rooms[0]['id'];
			bindings = rooms[0]['bindings'];
		} else {
			$.each(rooms, function(i, row) {
				id = row['id'];
				if (id == roomId) {
					bindings = row['bindings']
				}
			})
			for ( var i = 0; i < bindings.length; i++) {
				if (typeof bindings[i] === "undefined") {
				} else {
					if (bindings[i] >= 0) {
						surfaces[i] = i + 1;
						colors[i] = palette[bindings[i]];
					}
				}
			}
		}
	}

	renderString = renderImageContext+'render?roomId=' + roomId + '&surfaceId1='
			+ surfaces[0] + '&color1=' + colors[0] + '&surfaceId2='
			+ surfaces[1] + '&color2=' + colors[1] + '&surfaceId3='
			+ surfaces[2] + '&color3=' + colors[2] + '&surfaceId4='
			+ surfaces[3] + '&color4=' + colors[3] + '&surfaceId5='
			+ surfaces[4] + '&color5=' + colors[4] + '&surfaceId6='
			+ surfaces[5] + '&color6=' + colors[5] + '&surfaceId7='
			+ surfaces[6] + '&color7=' + colors[6] + '&surfaceId8='
			+ surfaces[7] + '&color8=' + colors[7] + '&surfaceId9='
			+ surfaces[8] + '&color9=' + colors[8] + '&surfaceId10='
			+ surfaces[9] + '&color10=' + colors[9];
	printContent = printContent.format([ renderString, projectName,
			paletteCodes[0], paletteInfo[0][0], paletteInfo[0][1],
			paletteCodes[1], paletteInfo[1][0], paletteInfo[1][1],
			paletteCodes[2], paletteInfo[2][0], paletteInfo[2][1],
			paletteCodes[3], paletteInfo[3][0], paletteInfo[3][1], 
			paletteCodes[4], paletteInfo[4][0], paletteInfo[4][1],
			paletteCodes[5], paletteInfo[5][0], paletteInfo[5][1],
			paletteCodes[6], paletteInfo[6][0], paletteInfo[6][1],
			paletteCodes[7], paletteInfo[7][0], paletteInfo[7][1]]);

	if (!quadPalette) {
		var wrappedPrintContent = $("<div>" + printContent + "</div>");
		wrappedPrintContent.find('div.project_color_palette').remove();
		wrappedPrintContent.find('div.project_color-1').css('background-color', '#' + paletteInfo[0][1]);
		wrappedPrintContent.find('div.project_color-2').css('background-color', '#' + paletteInfo[1][1]);
		wrappedPrintContent.find('div.project_color-3').css('background-color', '#' + paletteInfo[2][1]);
		wrappedPrintContent.find('div.project_color-4').css('background-color', '#' + paletteInfo[3][1]);
		wrappedPrintContent.find('div.project_color-5').css('background-color', '#' + paletteInfo[4][1]);
		wrappedPrintContent.find('div.project_color-6').css('background-color', '#' + paletteInfo[5][1]);
		wrappedPrintContent.find('div.project_color-7').css('background-color', '#' + paletteInfo[6][1]);
		wrappedPrintContent.find('div.project_color-8').css('background-color', '#' + paletteInfo[7][1]);
		printContent = wrappedPrintContent.html();
	} else {
		var wrappedPrintContent = $("<div>" + printContent + "</div>");
		wrappedPrintContent.find('div.extra_colors').remove();
		wrappedPrintContent.find('div.project_color_1_palette').css('background-color', '#' + paletteInfo[0][1]);
		wrappedPrintContent.find('div.project_color_2_palette').css('background-color', '#' + paletteInfo[1][1]);
		wrappedPrintContent.find('div.project_color_3_palette').css('background-color', '#' + paletteInfo[2][1]);
		wrappedPrintContent.find('div.project_color_4_palette').css('background-color', '#' + paletteInfo[3][1]);
		wrappedPrintContent.find('div.project_color-1').css('background-color', '#' + paletteInfo[0][1]);
		wrappedPrintContent.find('div.project_color-2').css('background-color', '#' + paletteInfo[1][1]);
		wrappedPrintContent.find('div.project_color-3').css('background-color', '#' + paletteInfo[2][1]);
		wrappedPrintContent.find('div.project_color-4').css('background-color', '#' + paletteInfo[3][1]);
		wrappedPrintContent.find('div.project_color-5').css('background-color', '#' + paletteInfo[4][1]);
		wrappedPrintContent.find('div.project_color-6').css('background-color', '#' + paletteInfo[5][1]);
		wrappedPrintContent.find('div.project_color-7').css('background-color', '#' + paletteInfo[6][1]);
		wrappedPrintContent.find('div.project_color-8').css('background-color', '#' + paletteInfo[7][1]);
		printContent = wrappedPrintContent.html();
	}

	var docprint = window.open("", "", dispSetting);
	docprint.document.open();
	docprint.document.write('<html><head><title>My Behr</title>');
	docprint.document.write('<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />');
	docprint.document.write('<meta http-equiv="X-UA-Compatible" content="IE=Edge" />');
	docprint.document.write('<style type="text/css">');
	docprint.document.write('body {margin:0px; color: rgb(255, 255, 255); font-family: Arial,Helvetica,sans-serif;font-size: 12px;line-height: 18px; background-color: rgb(255, 255, 255); width:100%; height:100%;}');
	docprint.document.write('div.page_wrapper {position: relative; z-index: 20;}');
	docprint.document.write('div.my_behr_main {float: left; width: 707px; background-color: rgb(255, 255, 255); color: rgb(75, 75, 77);}');
	docprint.document.write('.fl {float: left;}');
	docprint.document.write('.orange_button.fr {float: right;}');
	docprint.document.write(".orange_button {display: block; float: left; padding: 14px 15px 0px; height: 31px; font-family: 'Open Sans','Helvetica Neue',Arial,sans-serif; font-size: 14px; font-weight: bold; color: rgb(255, 255, 255); text-align: center; background-color: rgb(187, 53, 0); box-shadow: -2px -2px 1px 1px rgba(200, 200, 200, 0.1) inset, 2px 1px 1px 1px rgba(60, 60, 60, 0.3) inset;}");
	docprint.document.write('.button {cursor: pointer;}');
	docprint.document.write('.fr {float: right;}');
	docprint.document.write('a, h1 a, h2 a, h3 a, a h1, a h2, a h3, a h4 {color: rgb(172, 152, 115); text-decoration: none;}');
	docprint.document.write('.clrb {clear: both;}');
	docprint.document.write("div.page_wrapper.interior_columns h5 {margin: 0px 0px 10px; font-size: 18px; color: rgb(172, 152, 115); padding: 0px; font-family: 'Open Sans','Helvetica Neue',Arial,sans-serif; font-weight: normal; letter-spacing: -1px;}");
	docprint.document.write('div.my_behr_main div.saved_project_palette_main {float: left; width: 258px; height: 275px;}');
	docprint.document.write('div.my_behr_main div.project_color_container {width: 248px;float: left; margin: 9px 0px 0px;}');
	docprint.document.write('div.my_behr_main div.project_color_container div.project_color {width: 23px; height: 23px;float: left; border-radius: 5px 5px 5px 5px; margin-right: 8px;}');
	docprint.document.write('div.my_behr_main div.project_color_container div.color_name_container {float: left; padding: 3px 0px 0px 3px; font-size: 12px; color: rgb(172, 152, 115)};');
	docprint.document.write('div.my_behr_main div.project_color_container div.color_name_container {font-size: 12px; color: rgb(172, 152, 115);}');
	docprint.document.write('div.my_behr_main div.project_color_palette {width: 123px; height: 123px; border-radius: 20px 20px 20px 20px; border: 1px solid rgb(200, 200, 200); margin: 0px 150px 7px 0px;}');
	docprint.document.write('div.my_behr_main div.project_color_1_palette {width: 70px; height: 79px; float: left; background-color:#' + paletteInfo[0][1] + '; border-radius: 19px 0px 0px 0px; border-right: 3px solid rgb(232, 232, 232);}');
	docprint.document.write('div.my_behr_main div.project_color_2_palette {width: 46px; height: 34px; float: left; background-color:#' + paletteInfo[1][1] + '; border-radius: 0px 16px 0px 0px; margin: 2px 2px 0px;}');
	docprint.document.write('div.my_behr_main div.project_color_3_palette {width: 46px; height: 38px; float: left; background-color:#' + paletteInfo[2][1] + '; border-top: 3px solid rgb(232, 232, 232); margin: 2px 0px 2px 2px;}');
	docprint.document.write('div.my_behr_main div.project_color_4_palette {width: 123px; height: 41px; float: left; background-color:#' + paletteInfo[3][1]	+ '; border-radius: 0px 0px 20px 20px; margin: 3px 0px 0px;}');
	docprint.document.write('div.project_color-1 {background-color:#' + paletteInfo[0][1] + ' !imporant;}');
	docprint.document.write('div.project_color-2 {background-color:#' + paletteInfo[1][1] + ' !imporant;}');
	docprint.document.write('div.project_color-3 {background-color:#' + paletteInfo[2][1] + ' !imporant;}');
	docprint.document.write('div.project_color-4 {background-color:#' + paletteInfo[3][1] + ' !imporant;}');
	docprint.document.write('div.project_color-5 {background-color:#' + paletteInfo[4][1] + ' !imporant;}');
	docprint.document.write('div.project_color-6 {background-color:#' + paletteInfo[5][1] + ' !imporant;}');
	docprint.document.write('div.project_color-7 {background-color:#' + paletteInfo[6][1] + ' !imporant;}');
	docprint.document.write('div.project_color-8 {background-color:#' + paletteInfo[7][1] + ' !imporant;}');
	docprint.document.write('div.my_behr_main div.project_color_container div.color_name_container span.color_name {font-weight: bold;}');
	docprint.document.write('</style>');
	docprint.document.write('<script>function printThis(){window.print()}</script>');
	docprint.document.write('</head><body style="background:none; margin:0px;"><div class="page_wrapper"><div class="page_wrapper interior_columns"><div class="my_behr_main" style="margin-left:0px; padding:0px;">');
	docprint.document.write(printContent);
	docprint.document.write('</div></div></div></body></html>');
	docprint.document.close();
	docprint.focus();
}
*/

function saveAnonymousProject() {
    var sessionProject = readCookie('projectData');
	sessionProject = $.parseJSON(sessionProject);
	sessionProject = JSON.stringify(sessionProject);
    var anonymousProjectId;
	var url = 'http://' + getUserServiceURL() + '/project/nextgen/anonymousproject';

	$.ajax({
		type : 'post',
		headers : {
			'Accept' : 'application/json',
			'Content-Type' : 'text/plain'
		},
		url : url,
		async : false,
		cache : false,
		data:"{\"NextGenProjectVO\":" + sessionProject + "}",
		success : function(response) {
			anonymousProjectId = JSON.stringify(response.NextGenProjectVO.projectId);
		},
		error : function(xhr) {
			anonymousProjectId = 'error';
		}
	});
	return anonymousProjectId;
}


function shareMyBehrProjectUnsaved(media) {
    var anonymousProjectId = saveAnonymousProject();
    shareMyBehrProject(anonymousProjectId, media);
}

function shareMyBehrProject(projectId, media) {
   var shareProjectId = duplicateProject(projectId);
   var shareURI = 'http://www.behr.com'+renderImageContext+'render?roomId=21&surfaceId1=202&color1=PPU2-20&surfaceId2=203&color2=PPU10-1&surfaceId3=200&color3=PPU10-20&surfaceId4=201&color4=PPU2-2&surfaceId5=&color5=&surfaceId6=&color6=&surfaceId7=&color7=&surfaceId8=&color8=&surfaceId9=&color9=&surfaceId10=&color10=';
   if(shareProjectId != 'error') {     
      var sharedObj = getMyBehrProjectUrl(shareProjectId,media);
      if (media == 'email') {
         showOverlayByIDshare('email_page',sharedObj.URL);
         fillSendPageByEmail();
		 googleAnalyticsTagEvents('High Value-Email','ColorSmart Project Shared Via Email','Email');
      } else {   
         if (sharedObj.URL == 'error') {
   
         } else {
            if (media == 'facebook') {			
				shareFBProject(sharedObj,shareProjectId);	
				googleAnalyticsTagEvents('High Value_FB','ColorSmart Project Shared on Facebook','Facebook');
            } else if (media == 'twitter') {
			   googleAnalyticsTagEvents('High Value_TW','ColorSmart Project Shared on Twitter','Twitter');
               createPopup('http://twitter.com/share?text=&url=' + sharedObj.URL,
                     'twitter', 575, 400);
            } else if (media == 'pinterest') {
			   googleAnalyticsTagEvents('High Value_Pin','ColorSmart Project Shared on Pinterest','Pinterest');
               createPopup(
                     'http://pinterest.com/pin/create/button/?title='+document.title+'&media=' + sharedObj.imgURL + '&description=' + sharedObj.colorDesc+'&url='
                           + sharedObj.URL, 'pinterest', 667, 631);
            }
         }   
      }
	} else {
	   // do some error stuff here
	}
}

function shareFBProject(sharedObj,projectId){
	var url = sharedObj.URL;
	var fbFileName = url.substring(url.lastIndexOf('/') + 1, url.length);
	var imguri = sharedObj.imgURL;
	//var filePath = encodeURIComponent('/data/PIShare/');
	//var staticFBImage = getFBImage(fbFileName+'.jpg',imguri,filePath);
	if(sharedObj.projectType === "pyp") {
      var imgString = getPypBinaryImageString(projectId);
      var staticFBImage = getFBImagePyp(fbFileName+'.jpg',imgString);
   } else {
	   var staticFBImage = getFBImage(fbFileName+'.jpg',imguri);
   }
	if(staticFBImage.search('FAILED') > -1){
		staticFBImage = decodeURIComponent(sharedObj.imgURL);
	}else{
		staticFBImage = 'http://'+ getUserServiceURL() +'/mainService/services/getimage?name='+fbFileName+'.jpg';
	}
	$('.content_wrapper .copy')
.after('<div class="hidden_fb_image" style="display:none"><img class="fb_img" src='+ staticFBImage +'></div>');
   createPopup('https://www.facebook.com/sharer/sharer.php?s=100&p[title]='+sharedObj.title+'&p[url]='
   + sharedObj.URL+'&p[summary]='+sharedObj.fbDesc+'&p[images][0]='+staticFBImage, 626, 436);	
}

function getPypBinaryImageString(projectid) {
   var url = 'http://' + getUserServiceURL() + '/project/nextgen/getprojectbinary?projectid=' + projectid + '&keys=drawingCanvas';
   var imageString;
   
   $.ajax({
		type : 'get',
		headers : {
			'Content-Type' : 'application/json'
		},
		url : url,
		data : 'application/json',
	    async : false,
		success : function(response) {
			imageString = response;
		},
		error : function(xhr) {
			imageString = null;
		}
	});
   var rtnImg = imageString.drawingCanvas.split(",");
   return rtnImg[1];
}

function getFBImagePyp(filename,imageString) {
	var url = 'http://' + getUserServiceURL() + '/mainService/services/savebinaryimage';
	var urlImage;
	var inputData = {};
	inputData['fileName'] = filename;
	inputData['imageString'] = imageString;
	
	$.ajax({
		type : 'post',
		url : url,
		data : inputData,
		headers : {
			'Content-Type' : 'application/x-www-form-urlencoded'
		},
		async:    false,
		success : function(response) {
			urlImage = response;
		},
		error : function(xhr) {
			urlImage = "FAILED";
		}
	});
	
	return urlImage;
}

function getFBImage(filename,imageURI,filePath) {
	var url = 'http://' + getUserServiceURL() + '/mainService/services/saveimage';
	var urlImage;
	var inputData = {};
	inputData['fileName'] = filename;
	inputData['imageURI'] = imageURI;
	//inputData['filePath'] = filePath;
	
	$.ajax({
		type : 'post',
		url : url,
		data : inputData,
		headers : {
			'Content-Type' : 'application/x-www-form-urlencoded'
		},
		async:    false,
		success : function(response) {
			urlImage = response;
		},
		error : function(xhr) {
			urlImage = "FAILED";
		}
	});
	
	return urlImage;
}

function duplicateProject(projectId) {
   var rtnProjectId;
   var url = 'http://' + getUserServiceURL() + '/project/nextgen/duplicateproject';

	$.ajax({
		type : 'post',
		headers : {
			'Accept' : 'application/json',
			'Content-Type' : 'text/plain'
		},
		url : url,
		async : false,
	   cache : false,
	   data : projectId,
		success : function(response) {
			rtnProjectId = response;
		},
		error : function(xhr) {
			rtnProjectId = 'error';
		}
	});
	return rtnProjectId;
}

$.urlParam = function(name,url){
    var results = new RegExp('[\\?&amp;]' + name + '=([^&amp;#]*)').exec(url);
    return results[1] || 0;
}

function getMyBehrProjectUrl(projectId,media) {
	var projectJSON = getShareProjectJSON(projectId, 'socialShare');
	var jsonData = $.parseJSON(projectJSON.project);
	var url = 'http://' + getUserServiceURL();
	if(consumerContext === '/consumer_ca/'){
		url = url+'/emailnx/save';
	}else{
		url = url+'/emailnx/save';
	}
        
        var uri = window.location.pathname.toLowerCase();
	if(uri.indexOf('consumer_ca') != -1){
                var shareObject = {
            URL : '',
            imgURL: encodeURIComponent('http://' + getUserServiceURL() + renderImageContext + jsonData.webVisualizerShare.image1.restURI),
                        colorDesc: 'This is the project I created on Behr.com. I used these '+colrs+': ' + projectJSON.colors,
                        title: projectJSON.projname,
                        fbDesc: 'I created this project with ColorSmart by Behr(TM). Find, coordinate, and preview your '+colrs+' on behr.com.'
            };
        } else {
            var shareObject = {
            URL : '',
            imgURL: encodeURIComponent('http://' + getUserServiceURL() + renderImageContext + jsonData.webVisualizerShare.image1.restURI),
                        colorDesc: 'This is the project I created on Behr.com. I used these '+colrs+': ' + projectJSON.colors,
                        title: projectJSON.projname,
                        fbDesc: 'I created this project with ColorSmart by Behr(TM). Find, coordinate, and preview your '+colrs+' on behr.com.'
            };
        }
    
	$.ajax({
		type : 'post',
		headers : {
			'Accept' : 'text/html',
			'Content-Type' : 'application/json'
		},
		url : url,
		async : false,
	    cache : false,
		data : projectJSON.project,
		success : function(response) {
			respUrl = response;
		},
		error : function(xhr) {
			respUrl = "error";

		}
	});
	shareObject.URL = respUrl;
   shareObject.projectType = jsonData.webVisualizerShare.html.parameters.projectType;
	return shareObject;
}

function getShareProjectJSON(projectId, emailAddress) {
	var url = 'http://' + getUserServiceURL() + '/project/nextgen/getproject?projectid=' + projectId;
	var projectJSON = '{}';
	var userProject;
	var jsonObject = {
       project : '',
	   colors: '',
	   projname: ''
    }; 

	if (emailAddress == 'socialShare') {
		emailAddress = "schung@behr.com";
	}

	$.ajax({
		type : 'get',
		headers : {
			'Content-Type' : 'application/json'
		},
		url : url,
		data : 'application/json',
	    async : false,
		success : function(response) {
			userProject = response;
		},
		error : function(xhr) {
			userProject = null;
		}
	});

	if (userProject != null) {
            
            var uri = window.location.pathname.toLowerCase();
	    if(uri.indexOf('consumer_ca') != -1){
		projectJSON = '{"webVisualizerShare":{"to":"' + emailAddress
				+ '","subject":"NextGen Visualizer Project Share","optIn":"N",';
            } else {
                projectJSON = '{"webVisualizerShare":{"to":"' + emailAddress
				+ '","subject":"NextGen Visualizer Project Share","optIn":"N",';
            }

		//var html = '{"parameters":{"duplprojid":"' + projectId + '"}}';
		var html = '{"parameters":{"duplprojid":"' + projectId + '",';

		//var projectId = userProject["NextGenProjectVO"]["projectId"];
		var jsonData = $.parseJSON(userProject["NextGenProjectVO"]["jsonData"]);
		var projectName = jsonData.NextGenProjectVO.projectName;
      var projectType = jsonData.NextGenProjectVO.projectAppType;
		var palette = jsonData.NextGenProjectVO.palette;
		var rooms = jsonData.NextGenProjectVO.rooms;
		var roomId = jsonData.NextGenProjectVO.currentRoomId;
		var paletteQuad = jsonData.NextGenProjectVO.paletteQuad;
		var j;
		
		jsonObject.projname = projectName;
		html += '"projectType":"' + projectType + '","projectname":"' + projectName + '","paletteQuad":"' + paletteQuad + '"}}';
		projectJSON += '"html":' + html
				+ ',"objects":{"StoreVO":{"storeNumber":"WEB"},"ColorVO":{';

		for (i = 0; i < 8; i++) {
			j = i + 1;
			projectJSON += '"colorCode' + j + '":"' + palette[i] + '",';
		}
		// trim last ,
		projectJSON = projectJSON.substring(0, projectJSON.length - 1);

		var bindings;
		var surfaces = new Array();
		surfaces.length = 10;
		var colors = new Array();
		colors.length = 10;
		for ( var i = 0; i < surfaces.length; i++) {
			surfaces[i] = "";
			colors[i] = "";
		}

		if ((rooms != null) && (rooms.length > 0)) {
			$.each(rooms, function(i, row) {
				id = row['id'];
				if (id == roomId) {
					bindings = row['bindings']
				}
			})

			for ( var i = 0; i < bindings.length; i++) {
				if (typeof bindings[i] === "undefined") {

				} else {
					if (bindings[i] >= 0)
						surfaces[i] = i + 1;

					colors[i] = palette[bindings[i]];
				}
			}
		}
		
		for ( var i = 0; i < 10; i++) {
    		if (palette[i]) {
    			colorInfo = getColorInformation(palette[i]).split(',');
    			colorName = colorInfo[0];
                        if (!isDeletedColor(palette[i])){
                            jsonObject.colors += colorName + '(' + palette[i] + '),';
                        }
    		}
	    }
            
            //remove the deleted colors
            for (var i = 0; i < 10; i++) {
                if (typeof colors[i] != 'undefined' && colors[i] != null){
                    if (colors[i].length > 0) {
                        if( isDeletedColor(colors[i]) ) {
                            colors[i] = "";
                            surfaces [i] = "";
                        }
                    }
                } else {
                    colors[i] = "";
                    surfaces [i] = "";
                }
            }

		var renderString = 'render?roomId=' + roomId + '&surfaceId1='
				+ surfaces[0] + '&color1=' + colors[0] + '&surfaceId2='
				+ surfaces[1] + '&color2=' + colors[1] + '&surfaceId3='
				+ surfaces[2] + '&color3=' + colors[2] + '&surfaceId4='
				+ surfaces[3] + '&color4=' + colors[3] + '&surfaceId5='
				+ surfaces[4] + '&color5=' + colors[4] + '&surfaceId6='
				+ surfaces[5] + '&color6=' + colors[5] + '&surfaceId7='
				+ surfaces[6] + '&color7=' + colors[6] + '&surfaceId8='
				+ surfaces[7] + '&color8=' + colors[7] + '&surfaceId9='
				+ surfaces[8] + '&color9=' + colors[8] + '&surfaceId10='
				+ surfaces[9] + '&color10=' + colors[9];

		projectJSON += '}},"image1":{"restURI":"' + renderString + '"}}}';

	} else {
		projectJSON = '()';
	}
	jsonObject.project = projectJSON;

	return jsonObject;
}

/*------Shopping Cart JS--------*/

function buyOneSample(colorCode) {
	showOverlayByID('adding_sample');
	window.setTimeout(addToCart(colorCode), 500);	// To allow processing overlay to show while 
	// handleOverlayCloseClick();
}

function buyOneSampleInsp(colorCode) {
	showOverlayByID('adding_sample');
	window.setTimeout(addToCartInsp(colorCode), 500);	// To allow processing overlay to show while 
	//showOverlayByID('color_details-' + colorCode);
}
function moveBackToCart(colorCode) {
	addToCart(colorCode);
	displayCart();
}

function addToCartInsp(colorCode) {
	var shoppingCartCookie = readCookie('behr_shoppingcart');
	var productInfo;
	var productType;
	var productPrice;
	var url = 'http://' + getUserServiceURL()
			+ '/omsproductservice/services/getOmsByColorId?colorId='
			+ colorCode;// devpreview.behr.com

	$.ajax({
		type : 'get',
		url : url,
		dataType : 'json',
		contentType : 'application/json; charset=utf-8',
		async : false,
		crossDomain : true,
		success : function(response) {
			productInfo = JSON.stringify(response);
		},
		error : function(xhr) {
			productInfo = "[]";
		}
	});

	if (productInfo.length > 3) {
		productInfo = $.parseJSON(productInfo);
		productType = productInfo[0].product;
		productPrice = productInfo[0].price;

		if (shoppingCartCookie != null && shoppingCartCookie != "") {

			var shoppingCart = shoppingCartCookie.split(":");

			if (shoppingCart.length < 20) {
				var alreadyInCart = false;
				var tempCart = "";
				var cartItem;
				for (i = 0; i < shoppingCart.length - 1; i++) {
					cartItem = shoppingCart[i].split(",");
					if (cartItem[0] == colorCode) {
						alreadyInCart = true;
						cartItem[1] = parseInt(cartItem[1]) + 1;
					}
					tempCart += cartItem[0] + "," + cartItem[1] + ","
							+ cartItem[2] + "," + cartItem[3] + ":";
				}
				if (alreadyInCart) {
					document.cookie = "behr_shoppingcart=" + tempCart
							+ "; path=/";
				} else {
					shoppingCartCookie += colorCode + ",1," + productType + ","
							+ productPrice + ":; path=/";
					document.cookie = "behr_shoppingcart=" + shoppingCartCookie;
				}
				showOverlayByID('color_details-' + colorCode);
			} else {
				showOverlayByID('full_shopping_cart');
				return false;
			}
		} else {
			document.cookie = "behr_shoppingcart=" + colorCode + ",1,"
					+ productType + "," + productPrice + ":; path=/";
			showOverlayByID('color_details-' + colorCode);
		}

		greyOutBuySamples(colorCode);
		setupShoppingCartNav();
	} else {
		var colorInfo = getColorInformation(colorCode).split(',');
		var colorName = colorInfo[0];
		var noSampleString = "<div class=\"fl\" style=\"width:100%\"><h4><img src=\"/colorsmart4/ColorChipPNGServlet?width=20&height=20&border=thin&colorCode=" + colorCode + "&bgcolor=FFFFFF\" class=\"fl\" style=\"margin:0 10px 0 0;\" />" + colorName + "   " + colorCode + "</h4></div>";
		$('#overlay-no_samples div.overlay_content_row-static div.no-samples-list').html(noSampleString);
		showOverlayByID('no_samples');
	}

}

function addToCart(colorCode) {
	var shoppingCartCookie = readCookie('behr_shoppingcart');
	var productInfo;
	var productType;
	var productPrice;
	var url = 'http://' + getUserServiceURL()
			+ '/omsproductservice/services/getOmsByColorId?colorId='
			+ colorCode;// devpreview.behr.com

	$.ajax({
		type : 'get',
		url : url,
		dataType : 'json',
		contentType : 'application/json; charset=utf-8',
		async : false,
		crossDomain : true,
		success : function(response) {
			productInfo = JSON.stringify(response);
		},
		error : function(xhr) {
			productInfo = "[]";
		}
	});

	if (productInfo.length > 3) {
		productInfo = $.parseJSON(productInfo);
		productType = productInfo[0].product;
		productPrice = productInfo[0].price;

		if (shoppingCartCookie != null && shoppingCartCookie != "") {

			var shoppingCart = shoppingCartCookie.split(":");

			if (shoppingCart.length < 20) {
				var alreadyInCart = false;
				var tempCart = "";
				var cartItem;
				for (i = 0; i < shoppingCart.length - 1; i++) {
					cartItem = shoppingCart[i].split(",");
					if (cartItem[0] == colorCode) {
						alreadyInCart = true;
						cartItem[1] = parseInt(cartItem[1]) + 1;
					}
					tempCart += cartItem[0] + "," + cartItem[1] + ","
							+ cartItem[2] + "," + cartItem[3] + ":";
				}
				if (alreadyInCart) {
					document.cookie = "behr_shoppingcart=" + tempCart
							+ "; path=/";
				} else {
					shoppingCartCookie += colorCode + ",1," + productType + ","
							+ productPrice + ":; path=/";
					document.cookie = "behr_shoppingcart=" + shoppingCartCookie;
				}
				handleOverlayCloseClick();
			} else {
				showOverlayByID('full_shopping_cart');
				return false;
			}
		} else {
			document.cookie = "behr_shoppingcart=" + colorCode + ",1,"
					+ productType + "," + productPrice + ":; path=/";
			handleOverlayCloseClick();
		}

		greyOutBuySamples(colorCode);
		setupShoppingCartNav();
	} else {
		var colorInfo = getColorInformation(colorCode).split(',');
		var colorName = colorInfo[0];
		var noSampleString = "<div class=\"fl\" style=\"width:100%\"><h4><img src=\"/colorsmart4/ColorChipPNGServlet?width=20&height=20&border=thin&colorCode=" + colorCode + "&bgcolor=FFFFFF\" class=\"fl\" style=\"margin:0 10px 0 0;\" />" + colorName + "   " + colorCode + "</h4></div>";
		$('#overlay-no_samples div.overlay_content_row-static div.no-samples-list').html(noSampleString);
		showOverlayByID('no_samples');
	}

}

function addSamplesToCart(samples) {
	showOverlayByID('adding_samples');
	window.setTimeout(addSamplesToCartMain(samples), 500);	// To allow processing overlay to show while 
}

function addSamplesToCartMain(samples) {
	var colorCodes = samples.split(',');
	var colorCode = "";
	var noSample = false;
	var samplesNotAdded = 0;
	var noSampleString = "";

	for ( var i = 0; i < colorCodes.length; i++) {
		colorCode = colorCodes[i];

		if (colorCode.length > 0) {
			var url = 'http://' + getUserServiceURL()
					+ '/omsproductservice/services/getOmsByColorId?colorId='
					+ colorCode;// devpreview.behr.com

			$.ajax({
				type : 'get',
				url : url,
				dataType : 'json',
				contentType : 'application/json; charset=utf-8',
				async : false,
				crossDomain : true,
				success : function(response) {
					productInfo = JSON.stringify(response);
				},
				error : function(xhr) {
					alert('Error connecting or sending data to service. Please try again.');
				}
			});

			if (productInfo == '[]' || productInfo == ''
					|| productInfo.length < 5) {
				noSample = true;
				var colorInfo = getColorInformation(colorCode).split(',');
				var colorName = colorInfo[0];
				noSampleString += "<div class=\"fl\" style=\"width:100%\"><h4><img src=\"/colorsmart4/ColorChipPNGServlet?width=20&height=20&border=thin&colorCode=" + colorCode + "&bgcolor=FFFFFF\" class=\"fl\" style=\"margin:0 10px 0 0;\" />" + colorName + "   " + colorCode + "</h4></div>";
				samplesNotAdded++;
			} else {
				addToCart(colorCode);
			}
		}
	}
	
	document.cookie = "behr_samplesNotAdded=" + samplesNotAdded + "; path=/";
	handleOverlayCloseClick();

	if (noSample) {
		$('#overlay-no_samples div.overlay_content_row-static div.no-samples-list').html(noSampleString);
		showOverlayByID('no_samples');
	} else {
		showOverlayByID('success_samples');
	}
}

function setupColorBuySample() {

	var colorCode = "";

	// If there is a buy sample button on page
	if ($(".orange_button-buy_sample").length > 0) {

		// For each buy sample button on page, check for item in cart and check
		// to see if available for purchase
		$(".orange_button-buy_sample")
				.each(
						function() {
							colorCode = $(this).attr("colorcode");

							// Check for color in cart
							var shoppingCartCookie = readCookie('behr_shoppingcart');

							if (shoppingCartCookie != null) {
								var shoppingCart = shoppingCartCookie
										.split(":");
								var alreadyInCart = false;
								var cartItem;
								for (i = 0; i < shoppingCart.length - 1; i++) {
									cartItem = shoppingCart[i].split(",");
									if (cartItem[0] == colorCode) {
										alreadyInCart = true;
									}
								}

								// Sample for color code already in cart, grey
								// out buy sample button
								if (alreadyInCart) {
									$(this).attr("onClick", "viewBehrCart()");
									$(this).addClass('grey_button');
									$(this).css('text-decoration', 'none');
									$(this).css('cursor', 'pointer');
									$(this).text('View Cart');
								}
							}

							// Check for oms id to see if available for purchase
							$
									.ajax({
										type : 'get',
										dataType : 'text',
										url : 'http://'
												+ getUserServiceURL()
												+ '/omsproductservice/services/getOmsByProduct?colorId='
												+ colorCode
												+ '&product=u&size=8oz', // devpreview.behr.com
										async : false,
										success : function(response) {
											oms = response;
										},
										error : function(xhr) {
											// bad or blank oms
											oms = "";
										}
									});

							if (oms == '[]' || oms == '' || oms.length < 5) {
								// No sample available for purchase, grey out
								// buy sample button
								$(this).attr("onClick", "");
								$(this).addClass('grey_button');
								$(this).css('text-decoration', 'none');
								$(this).css('cursor', 'pointer');
								$(this).text('No Sample');
							}

						});
	}
}

function checkColorInCart(colorCode) {
	var shoppingCartCookie = readCookie('behr_shoppingcart');

	if (shoppingCartCookie != null) {
		var shoppingCart = shoppingCartCookie.split(":");
		var alreadyInCart = false;
		var cartItem;
		for (i = 0; i < shoppingCart.length - 1; i++) {
			cartItem = shoppingCart[i].split(",");
			if (cartItem[0] == colorCode) {
				alreadyInCart = true;
			}
		}
		if (alreadyInCart) {
			greyOutBuySamples(colorCode);
		}
	}
}

function greyOutBuySamples(colorCode) {
	$('a.orange_button-buy_sample').attr("onClick", "viewBehrCart()");
	$('a.orange_button-buy_sample').addClass('grey_button');
	$('a.orange_button-buy_sample:hover').css('text-decoration', 'none');
	$('a.orange_button-buy_sample').css('cursor', 'pointer');
	$('a.orange_button-buy_sample').text('View Cart');

	$('a.orange_button-' + colorCode).attr("onClick", "viewBehrCart()");
	$('a.orange_button-' + colorCode).addClass('grey_button');
	$('a.orange_button-' + colorCode).css('cursor', 'pointer');
	$('a.orange_button-' + colorCode).text('View Cart');
}

function viewBehrCart() {
	window.location.replace(consumerContext+"shopping-cart");
}

function updateQuantityInCart(e) {
	var shoppingCartCookie = readCookie('behr_shoppingcart');
	var quantity = $(e.currentTarget).parent().find('.color_amount').val();
	var colorCode = $(e.currentTarget).parent().parent().find('.paint_chip-id')
			.text();

	if (isNaN(quantity)) {
		quantity = 0;
	}

	if (shoppingCartCookie.length > 0) {
		var shoppingCart = shoppingCartCookie.split(":");
		var tempCart = "";
		var cartItem;
		for (i = 0; i < shoppingCart.length - 1; i++) {
			cartItem = shoppingCart[i].split(",");
			if (cartItem[0] == colorCode) {
				cartItem[1] = quantity;
			}
			tempCart += cartItem[0] + "," + cartItem[1] + "," + cartItem[2]
					+ "," + cartItem[3] + ":";
		}

		document.cookie = "behr_shoppingcart=" + tempCart + "; path=/";
	} /*
		 * else { document.cookie = "behr_shoppingcart=" + colorCode + "," +
		 * quantity + ":"; //Create cookie if there isn't one }
		 */
	displayCart();
	setupOverlayWithID();
}

function deleteItemFromCart(event) {

	var colorCode = event.data.colorCode;
	var shoppingCartCookie = readCookie('behr_shoppingcart');

	if (shoppingCartCookie != null && shoppingCartCookie != "") {
		var shoppingCart = shoppingCartCookie.split(":");
		var tempCart = "";
		var cartItem;
		for (i = 0; i < shoppingCart.length - 1; i++) {
			cartItem = shoppingCart[i].split(",");
			if (cartItem[0] != colorCode) {
				tempCart += cartItem[0] + "," + cartItem[1] + "," + cartItem[2]
						+ "," + cartItem[3] + ":";
			}

		}

		if (tempCart.length > 0) {
			document.cookie = "behr_shoppingcart=" + tempCart + "; path=/";
		} else {
			var date = new Date();
			date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));
			var expires = "; expires=" + date.toGMTString();

			document.cookie = "behr_shoppingcart=" + "" + expires + "; path=/";
		}
	}
	displayCart();
	handleOverlayCloseClick();
	setupOverlayWithID();
	setupShoppingCartNav();
}

function checkoutCartToHD() {
	var shoppingCartCookie = readCookie('behr_shoppingcart');

	if (shoppingCartCookie != null) {
		var shoppingCart = shoppingCartCookie.split(":");
		var cartItem = "";
		var colorCode = "";
		var quantity = "";
		var productType = "";
		var oms = "";
		var url = "http://www.homedepot.com/webapp/wcs/stores/servlet/OrderItemAdd?storeId=10051&catalogId=10053&langId=-1&URL=OrderItemDisplay";
		var j = 0;
		var colorList = "";
		var totalQty = 0;
		createDynamicFloodLightsTag('behrs115');
		showOverlayByID('processing_cart');

		for (i = 0; i < shoppingCart.length - 1; i++) {

			if (i < 20) {
				cartItem = shoppingCart[i].split(",");
				colorCode = cartItem[0];
				quantity = cartItem[1];
				productType = cartItem[2];

				if (colorCode.length > 0) {
					$
							.ajax({
								type : 'get',
								dataType : 'text',
								url : 'http://'
										+ getUserServiceURL()
										+ '/omsproductservice/services/getOmsByProduct?colorId='
										+ colorCode + '&product=' + productType + '&size=8oz', // devpreview.behr.com
								async : false,
								success : function(response) {
									oms = response;
									//console.log('oms response: ' + oms);
								},
								error : function(xhr) {
									// bad or blank oms
									oms = "";
								}
							});
				} else {
					oms = "";
				}

				if (oms.length > 0) {
					j = i + 1; // Don't increase if bad oms was caught
					url += "&catEntryId_" + j + "=" + oms + "&quantity_" + j
							+ "=" + quantity;
					colorList = colorList+colorCode+';';
					totalQty = totalQty+Number(quantity);
					var colorInfo = getColorInformation(colorCode).split(',');
					var colorName = colorInfo[0];
					_tag.dcsCleanUp();
					_tag.dcsVar(); 
					dcsMultiTrack('DCS.dcsuri', consumerContext+'shopping-cart/buy-now-on-home-depot', 'WT.ti', consumerContext+'shopping-cart/buy-now-on-home-depot','DCSext.color_name', colorName+' ('+colorCode+')', 'DCSext.color_id', colorCode,'DCSext.paint_quantity', quantity,
						'DCSext.paint_brand', productType);
				}
			}
		}
		handleOverlayCloseClick();
		window.open(url);
		cartToRecentlyPurchased();
	}
}

function cartToRecentlyPurchased() {
	var shoppingCartCookie = readCookie('behr_shoppingcart');

	if (shoppingCartCookie != null) {
		document.cookie = "behr_recentlypurchased=" + shoppingCartCookie
				+ "; path=/";
		document.cookie = "behr_shoppingcart=null; path=/";
		del_cookie('behr_shoppingcart');
	
		displayCart();
		setupOverlayWithID();
		setupShoppingCartNav();
	}

}

function setupShoppingCart() {
	if ($('div.shopping_cart_container').length > 0) {
		displayCart();
		setupOverlayWithID();
	}
}

function updateProductTypeInCart(e) {
	var shoppingCartCookie = readCookie('behr_shoppingcart');
	var productType = $(e.currentTarget).parent().find(
			'select.shopping_cart_product_type').val();
	var colorCode = $(e.currentTarget).parent().parent().find('.paint_chip-id')
			.text();
	var productPrice = 0;

	var url = 'http://' + getUserServiceURL()
			+ '/omsproductservice/services/getOmsByColorId?colorId='
			+ colorCode;

	$.ajax({
		type : 'get',
		url : url,
		dataType : 'json',
		contentType : 'application/json; charset=utf-8',
		async : false,
		crossDomain : true,
		success : function(response) {
			productInfo = JSON.stringify(response);
		},
		error : function(xhr) {
			alert('Error connecting or sending data to service. Please try again.');
			productInfo = "[]";
		}
	});

	productInfo = $.parseJSON(productInfo);

	$.each(productInfo, function(i, row) {
		var PT = row['product'];
		if (PT == productType) {
			productPrice = row['price'];
		}
	})

	if (shoppingCartCookie.length > 0) {
		var shoppingCart = shoppingCartCookie.split(":");
		var tempCart = "";
		var cartItem;
		for (i = 0; i < shoppingCart.length - 1; i++) {
			cartItem = shoppingCart[i].split(",");
			if (cartItem[0] == colorCode) {
				cartItem[2] = productType;
				cartItem[3] = productPrice;

			}
			tempCart += cartItem[0] + "," + cartItem[1] + "," + cartItem[2]
					+ "," + cartItem[3] + ":";
		}

		document.cookie = "behr_shoppingcart=" + tempCart + "; path=/";
	} else {
		document.cookie = "behr_shoppingcart=" + colorCode + "," + quantity
				+ "," + productType + "," + productPrice + ":; path="; // Create cookie
		// if there
		// isn't one
	}

	displayCart();
	setupOverlayWithID();
}

function displayCart() {
	var shoppingCartCookie = readCookie('behr_shoppingcart');

	$('div.shopping_cart_main-items').html("");

	if (shoppingCartCookie != null && shoppingCartCookie != "") {
		var shoppingCart = shoppingCartCookie.split(":");
		var cartItem;
		var unitPrice = 0;
		var cartTotal = 0;
		var cartRow = "";
		var newShoppingCartItemHTML = "";
		var colorCode;
		var testColorInfo;
		var colorInfo;
		var dropDownString = "";
		var productType = "";
		var hasUltra = false;
		var selectDisabled = "";

		var shoppingCartItemHTML = $("div.shopping_cart_item_template").html();

		$('div.shopping_cart_main-items').html("");

		for (i = 0; i < shoppingCart.length - 1; i++) {
			cartItem = shoppingCart[i].split(",");
			unitPrice = cartItem[3];
			var roundUnitPrice = parseFloat(unitPrice).toFixed(2);

			rowTotal = cartItem[1] * unitPrice;
			var roundRowTotal = parseFloat(rowTotal).toFixed(2);
			colorCode = cartItem[0];
			testColorInfo = getColorInformation(cartItem[0]);
			colorInfo = getColorInformation(cartItem[0]).split(',');
			productType = cartItem[2];

			if (colorCode.length > 0) {

				cartTotal = cartTotal + (cartItem[1] * unitPrice);

				var url = 'http://'
						+ getUserServiceURL()
						+ '/omsproductservice/services/getOmsByColorId?colorId='
						+ colorCode;

				$.ajax({
					type : 'get',
					url : url,
					dataType : 'json',
					contentType : 'application/json; charset=utf-8',
					async : false,
					crossDomain : true,
					success : function(response) {
						productInfo = JSON.stringify(response);
					},
					error : function(xhr) {
						alert('Error connecting or sending data to service. Please try again.');
						productInfo = "[]";
					}
				});

				productInfo = $.parseJSON(productInfo);
				dropDownString = "";

				if (productInfo.length < 2) {
					selectDisabled = "disabled";
				} else {
					selectDisabled = "";
				}
				$
						.each(
								productInfo,
								function(i, row) {
									var PT = row['product'];

									if (PT == productType) {
										dropDownString += '<option selected ';
										if (PT == 'U') {
											hasUltra = true;
										}
									} else {
										dropDownString += '<option ';
									}

									if (PT == 'U') {
										dropDownString += 'value="U">Premium Plus Ultra</option>';
									} else if (PT == 'PP') {
										dropDownString += 'value="PP">Premium Plus</option>';
									} else if (PT == 'HDC') {
										dropDownString += 'value="HDC">Home Decorators Collection</option>';
									} else {
										dropDownString += '></option>';
									}
								})
				
				var wrappedContent = $("<div>" + shoppingCartItemHTML + "</div>");
                wrappedContent.find('div.paint_chip-chip').css('background-color', '#' + colorInfo[1]);
				wrappedContent.find('input.color_amount').attr("value" , parseInt(cartItem[1]));
				shoppingCartItemHTML = wrappedContent.html();
				newShoppingCartItemHTML += shoppingCartItemHTML.format([
						cartItem[0], cartItem[1], colorInfo[0], colorInfo[1],
						roundUnitPrice, roundRowTotal, dropDownString,
						selectDisabled ]);
			}
		}

		$('div.shopping_cart_main-items').append(newShoppingCartItemHTML);
		$('a.update_to_cart').click(function(e) {
			updateQuantityInCart(e);
		});

		var roundCartTotal = parseFloat(cartTotal).toFixed(2);

		var subtotalHTML = $("div.shopping_cart_subtotal_template").html();
		var newSubtotalHTML = subtotalHTML.format([ roundCartTotal,
				roundCartTotal ]);
		// $('div.shopping_cart_main-items').append('<div
		// class="shopping_cart_row-subtotal fl"><div
		// class="shopping-cart-bottom-copy"><div class="ultra-copy">BEHR
		// PREMIUM PLUS ULTRA&reg; colors are only available in PREMIUM PLUS
		// ULTRA samples.</div><br>&dagger; For optimal color development with
		// deep colors, use with a tinted primer for improved hiding.<br>&sect;
		// May require more than two coats.</div><div
		// class="subtotal_container"><span><b>Estimated Subtotal:</b></span>' +
		// '$' + roundCartTotal + '</div><div
		// class="shopping-cart-tax-copy">*Shipping and Sales Tax calculated on
		// HomeDepot.com</div></div>');
		$('div.shopping_cart_main-items').append(newSubtotalHTML);

		if (hasUltra) {
			$('div.ultra-copy').css('visibility', 'visible');
		}

		$('a.checkout_to_hd_button').attr("onClick", "checkoutCartToHD()");

	} else {
		// Cart is empty

		var shoppingCartEmptyHTML = $("div.shopping_cart_empty_template")
				.html();
		$('div.shopping_cart_main-items').html(shoppingCartEmptyHTML);
		var subtotalEmptyHTML = $("div.shopping_cart_subtotal_empty_template")
				.html();
		$('div.shopping_cart_main-items').append(subtotalEmptyHTML);
		$('a.checkout_to_hd_button').addClass('grey_button');
		$('a.checkout_to_hd_button').css('text-decoration', 'none');
		$('a.checkout_to_hd_button').css('cursor', 'default');
		// $('a.checkout_to_hd_button').attr("href", "");
		$('a.checkout_to_hd_button').attr("onClick", "");
	}

	$('a.update_to_cart').click(function(e) {
		updateQuantityInCart(e);
	});
	$('select.shopping_cart_product_type').change(function(e) {
		updateProductTypeInCart(e)
	});

	displayRecentlyPurchased();
	setupOverlayWithID();
}

function displayRecentlyPurchased() {
	var recentlyPurchasedCookie = readCookie('behr_recentlypurchased');

	if (recentlyPurchasedCookie != null) {

		var shoppingCart = recentlyPurchasedCookie.split(":");
		var cartItem;
		var unitPrice = 0;
		var cartTotal = 0;
		var cartRow = "";
		var newShoppingCartItemHTML = "";
		var colorCode;
		var testColorInfo;
		var colorInfo;
		var dropDownString = "";
		var productType = "";

		var shoppingCartItemHTML = $("div.shopping_cart_item_rc_template")
				.html();

		$('div.recently_purchased_main-items').html("");
		$('div.shopping_cart-no_samples').hide();

		for (i = 0; i < shoppingCart.length - 1; i++) {
			cartItem = shoppingCart[i].split(",");
			unitPrice = cartItem[3];
			cartTotal = cartTotal + (cartItem[1] * unitPrice);
			rowTotal = cartItem[1] * unitPrice;
			colorCode = cartItem[0];
			testColorInfo = getColorInformation(cartItem[0]);
			colorInfo = getColorInformation(cartItem[0]).split(',');
			productType = cartItem[2];

			var url = 'http://' + getUserServiceURL()
					+ '/omsproductservice/services/getOmsByColorId?colorId='
					+ colorCode;

			$.ajax({
				type : 'get',
				url : url,
				dataType : 'json',
				contentType : 'application/json; charset=utf-8',
				async : false,
				crossDomain : true,
				success : function(response) {
					productInfo = JSON.stringify(response);

				},
				error : function(xhr) {
					alert('Error connecting or sending data to service. Please try again.');
					productInfo = "[]";
				}
			});

			productInfo = $.parseJSON(productInfo);
			dropDownString = "";

			$
					.each(
							productInfo,
							function(i, row) {
								var PT = row['product'];

								if (PT == productType) {
									dropDownString += '<option selected ';
								} else {
									dropDownString += '<option ';
								}

								if (PT == 'U') {
									dropDownString += 'value="U">Premium Plus Ultra</option>';
								} else if (PT == 'PP') {
									dropDownString += 'value="PP">Premium Plus</option>';
								} else if (PT == 'HDC') {
									dropDownString += 'value="HDC">Home Decorators Collection</option>';
								} else {
									dropDownString += '></option>';
								}
							})
			var wrappedContent = $("<div>" + shoppingCartItemHTML + "</div>");
            wrappedContent.find('div.paint_chip-chip').css('background-color', '#' + colorInfo[1]);
			shoppingCartItemHTML = wrappedContent.html();
			newShoppingCartItemHTML += shoppingCartItemHTML.format([
					cartItem[0], cartItem[1], colorInfo[0], colorInfo[1],
					unitPrice, rowTotal, dropDownString ]);
		}

		$('div.shopping_cart_row-recently_purchased_header').css(
				'background-color', 'rgb(231, 230, 230)');
		$('div.recently_purchased_main-items').append(newShoppingCartItemHTML);
		$('div.shopping_cart_rc_main_container').show();

	} else {
		$('div.shopping_cart_rc_no_samples_container').show();
		$('div.shopping_cart_row-recently_purchased_header').css(
				'background-color', '#ffffff');
		$('div.shopping_cart_rc_main_container').show();
	}
}

/*-----Color Info Functions-----*/
function getColorInformation(colorCode) {

	var host = getUserServiceURL();
	var url = 'http://' + host + '/mainService/services/';
	url = url + 'colornx/colorinfo/' + colorCode;

	var information = "";
	$.ajax({
		type : 'get',

		url : url,

		dataType : 'text',
		async : false,
		cache : false,
		success : function(response) {
			information = response;
		},
		error : function(xhr) {
			information = 'blank,blank';

		}
	});

	return information;
}

/*------Cookie Functions--------*/
function createCookie(name, value, days) {

	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		var expires = "; expires=" + date.toGMTString();
	} else
		var expires = "";

	document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for ( var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ')
			c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0)
			return c.substring(nameEQ.length, c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name, "", -1);
}
function ratingsLoginSignUp() {
	var date = new Date();
	date.setTime(date.getTime() + (15 * 60 * 1000)); // 10 mins
	var expires = "; expires=" + date.toGMTString();
	document.cookie = "mybehr_ratings_sub_url="
			+ encodeURIComponent(successUrl) + expires + "; path=/";
	// window.location = window.location.origin+consumerContext+"mybehr/log-in";
	window.location = window.location.protocol + "//" + window.location.host
			+ consumerContext+"mybehr/log-in";
}
function checkRatingsSubmissionCookie() {
	var ratingsSubmissionURL = readCookie('mybehr_ratings_sub_url');
	 if (ratingsSubmissionURL != null) {
		// setTimeout("delaySubmission()",2000);
		// delaySubmission();
		var readyStateCheckInterval = setInterval(function() {
			if (document.readyState === "complete") {
				delaySubmissionRatings();
				clearInterval(readyStateCheckInterval);
			}
		}, 10);
	}
	

}
function delaySubmissionRatings() {
	window.location = decodeURIComponent(readCookie('mybehr_ratings_sub_url'));
}

function delaySubmission() {
	window.location = window.location.protocol + "//" + window.location.host
			+ "/architect/my-behr/log-in";
}
		

function del_cookie(name) {
	if (readCookie(name) != null) {
		createCookie(name, "", -1);
	}
}

/*-----Get domain for user services url-----*/
function getUserServiceURL() {
	var currentUrl = window.location.host;
	var splitUrl = currentUrl.split('.');
	var subDomain = splitUrl[0];
	var url = currentUrl;

	if (subDomain == 'devpreview' || subDomain == 'mcornish'
			|| subDomain == 'jplagman' || subDomain == 'chiller') {
		url = "devpreview.behr.com";
	}
	return url;
}

/*-----Get URL Parameters-------*/
function getURLParameters(paramName) {
	var sURL = window.document.URL.toString();
	if (sURL.indexOf("?") > 0) {
		var arrParams = sURL.split("?");
		var arrURLParams = arrParams[1].split("&");
		var arrParamNames = new Array(arrURLParams.length);
		var arrParamValues = new Array(arrURLParams.length);
		var i = 0;
		for (i = 0; i < arrURLParams.length; i++) {
			var sParam = arrURLParams[i].split("=");
			arrParamNames[i] = sParam[0];
			if (sParam[1] != "")
				arrParamValues[i] = unescape(sParam[1]);
			else
				arrParamValues[i] = "No Value";
		}

		for (i = 0; i < arrURLParams.length; i++) {
			if (arrParamNames[i] == paramName) {

				return arrParamValues[i];
			}
		}
		return "No Parameters Found";
	} else {
		return "No Parameters Found";
	}

}

/*-----Sort JSON Array------*/
function sortJSON(data, key) {
	return data.sort(function(a, b) {
		var x = a[key];
		var y = b[key];
		return ((x < y) ? -1 : ((x > y) ? 1 : 0));
	});
}

/*-----Title Captialization-------*/
function toTitleCase(str) {
	if(str.toLowerCase() != 'buzz-in') {
		return str.replace(/\w\S*/g, function(txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		});
	} else {
		return "Buzz-In";
	}
}

/*-----String prototype for templating-----*/
String.prototype.format = function(args) {
	var str = this;
	return str.replace(String.prototype.format.regex, function(item) {
		var intVal = parseInt(item.substring(1, item.length - 1));
		var replace;
		if (intVal >= 0) {
			replace = args[intVal];
		} else if (intVal === -1) {
			replace = "{";
		} else if (intVal === -2) {
			replace = "}";
		} else {
			replace = "";
		}
		return replace;
	});
};
String.prototype.format.regex = new RegExp("{-?[0-9]+}", "g");

function setupShoppingCartNav() {
	var shoppingCartCookie = readCookie('behr_shoppingcart');
	var shoppingCartAmount = 0;

	if (shoppingCartCookie != null && shoppingCartCookie != "") {
		var shoppingCart = shoppingCartCookie.split(":");
		shoppingCartAmount = shoppingCart.length - 1;
	}
	$('a.shopping_cart_top_nav_item').html(
			'<div class="icon_wrapper-cart">Shopping Cart&nbsp;&nbsp;('
					+ shoppingCartAmount + ')</div>');
}

function handleMSDS(event){
	openAction($(this).attr('href').split("/").pop());
	event.preventDefault();
}

function openAction(prodno,prodname) {
	var brandCode = "261";//Behr Products
	if(prodname != null && prodname.toLowerCase().indexOf("kilz") != -1){
		brandCode = "383";//Masterchem Products
	}else {
		var kilzProdList = [ "22001", "22000", "32000" , "2000" , "L2110" , "L2111", "L1013" , "L101348" , "L1012" , "5700" , "5800" , "PX50" , "L2002", "L2004" , "L2201" ];
		if($.inArray(prodno, kilzProdList) != -1){
			brandCode = "383";//Masterchem Products
		}
	}
	var actioURI = 'http://www.actiocms.com/msds_customers_external.cfm?ae=1&aa='+brandCode+'&ac=JDSF7685&ad=pjuoiklt&ab=';
	var actioURIFre = 'http://www.actiocms.com/msds_customers_external.cfm?ae=2&aa='+brandCode+'&ac=JDSF7685&ad=pjuoiklt&ab=';
	var actioURIEs = 'http://www.actiocms.com/msds_customers_external.cfm?ae=3&aa='+brandCode+'&ac=JDSF7685&ad=pjuoiklt&ab=';
	var domain = location.hostname;
	if(domain.indexOf("qafr.behr") != -1 || domain.indexOf("fr.behr") != -1  ){
		
		window
		.open(
				actioURIFre + prodno,
				'popUpWindow',
				'height=700,width=800,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes');
	}else if(domain.indexOf("esfr.behr") != -1 || domain.indexOf("es.behr") != -1  ){
		
		window
		.open(
				actioURIEs + prodno,
				'popUpWindow',
				'height=700,width=800,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes');
	}
	else { 
		window
	
			.open(
					actioURI + prodno,
					'popUpWindow',
					'height=700,width=800,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes');
	}
}
function handleProdOptionsResponse(response, prodno,prodName) {
	if (response.productOptions) {
		//console.log(response.productOptions);
		if (response.productOptions.length < 2) {
			var prodno = response.productOptions[0].split(',');
			var prodno = prodno[0];
			openAction(prodno,prodName);
			return true;
		} else {
			var options = response.productOptions;
			var b = options[0].split(',');
			var a = options[1].split(',');
			if ((a[1]).trim().toLowerCase() == 'liquid') {
				$('.overlay-aerosol a.liquid').attr('prodno', a[0]);
				$('.overlay-aerosol a.aerosol').attr('prodno', b[0]);
			} else {
				$('.overlay-aerosol a.aerosol').attr('prodno', a[0]);
				$('.overlay-aerosol a.liquid').attr('prodno', b[0]);
			}
			 showOverlayByID('aerosol_liquid');
		}
		return false;
	}
	openAction(prodno,prodName);
}

function showTab(tab) {
	$(".msds_search-left a.left_nav-tabbed-" + tab).click();
}

function initMSDS() {

	showTab(1);

	if (!$('body.landing-msds').length) {
		return false;
	}

	$('form.msds_search').submit(
			function(e) {
				e.preventDefault();
				if ($('#ps-msds').val() === '') {
					return false;
				}

				var baseURI = 'http://';
				var requestURI = baseURI + getUserServiceURL() + '/ngproducts/nextgen/getprodoptions?prodno=' + $('#ps-msds').val();

				$.ajax({
					url : requestURI,
					async : true,
					dataType : 'json'
				}).done(function(response) {
					handleProdOptionsResponse(response, $('#ps-msds').val(),"");
				}).fail(function(response) {
					openAction($('#ps-msds').val(),"");
				});
			});

	$('.msds select').change(
			function() {
				var selected = $(this).find(':selected')[0];
				var baseURI = 'http://';
				// var
				// serviceDomain=typeof(getUserServiceURL)=='function'?getUserServiceURL():'devpreview.behr.com';
				var requestURI = baseURI + getUserServiceURL()
						+ '/ngproducts/nextgen/getprodoptions?prodno='
						+ $(selected).attr('productnumber');
				$.ajax({
					url : requestURI,
					async : true,
					dataType : 'json'
				}).done(function(response) {
					handleProdOptionsResponse(response, $(selected).attr('productnumber'),$(selected).attr('productname'));
				}).fail(function(response) {
					openAction($(selected).attr('productnumber'),$(selected).attr('productname'));
				});
			});

	$('body')
			.on(
					'click',
					'.overlay-aerosol a',
					function() {
						console.log($(this).attr('prodno'));
						if ($(this).attr('prodno') == '')
							return false;
						openAction($(this).attr('prodno'),"");
					});
}
function csColorFormCharacterLimit(){
	var elem = $("#csColorCharLimit");
	try{
		$(".csColorQuestion").limiter(300, elem);
	}catch(e){
		console.log('Error in setting CS Color Question Limit');
	}
}

function convert_state(name, to) {
    var states = new Array({
        'name': 'Alabama',
        'abbrev': 'AL'
    }, {
        'name': 'Alaska',
        'abbrev': 'AK'
    }, {
        'name': 'Arizona',
        'abbrev': 'AZ'
    }, {
        'name': 'Arkansas',
        'abbrev': 'AR'
    }, {
        'name': 'California',
        'abbrev': 'CA'
    }, {
        'name': 'Colorado',
        'abbrev': 'CO'
    }, {
        'name': 'Connecticut',
        'abbrev': 'CT'
    }, {
        'name': 'Delaware',
        'abbrev': 'DE'
    }, {
        'name': 'District of Columbia',
        'abbrev': 'DC'
    }, {
        'name': 'Florida',
        'abbrev': 'FL'
    }, {
        'name': 'Georgia',
        'abbrev': 'GA'
    }, {
        'name': 'Hawaii',
        'abbrev': 'HI'
    }, {
        'name': 'Idaho',
        'abbrev': 'ID'
    }, {
        'name': 'Illinois',
        'abbrev': 'IL'
    }, {
        'name': 'Indiana',
        'abbrev': 'IN'
    }, {
        'name': 'Iowa',
        'abbrev': 'IA'
    }, {
        'name': 'Kansas',
        'abbrev': 'KS'
    }, {
        'name': 'Kentucky',
        'abbrev': 'KY'
    }, {
        'name': 'Louisiana',
        'abbrev': 'LA'
    }, {
        'name': 'Maine',
        'abbrev': 'ME'
    }, {
        'name': 'Maryland',
        'abbrev': 'MD'
    }, {
        'name': 'Massachusetts',
        'abbrev': 'MA'
    }, {
        'name': 'Michigan',
        'abbrev': 'MI'
    }, {
        'name': 'Minnesota',
        'abbrev': 'MN'
    }, {
        'name': 'Mississippi',
        'abbrev': 'MS'
    }, {
        'name': 'Missouri',
        'abbrev': 'MO'
    }, {
        'name': 'Montana',
        'abbrev': 'MT'
    }, {
        'name': 'Nebraska',
        'abbrev': 'NE'
    }, {
        'name': 'Nevada',
        'abbrev': 'NV'
    }, {
        'name': 'New Hampshire',
        'abbrev': 'NH'
    }, {
        'name': 'New Jersey',
        'abbrev': 'NJ'
    }, {
        'name': 'New Mexico',
        'abbrev': 'NM'
    }, {
        'name': 'New York',
        'abbrev': 'NY'
    }, {
        'name': 'North Carolina',
        'abbrev': 'NC'
    }, {
        'name': 'North Dakota',
        'abbrev': 'ND'
    }, {
        'name': 'Ohio',
        'abbrev': 'OH'
    }, {
        'name': 'Oklahoma',
        'abbrev': 'OK'
    }, {
        'name': 'Oregon',
        'abbrev': 'OR'
    }, {
        'name': 'Pennsylvania',
        'abbrev': 'PA'
    }, {
        'name': 'Rhode Island',
        'abbrev': 'RI'
    }, {
        'name': 'South Carolina',
        'abbrev': 'SC'
    }, {
        'name': 'South Dakota',
        'abbrev': 'SD'
    }, {
        'name': 'Tennessee',
        'abbrev': 'TN'
    }, {
        'name': 'Texas',
        'abbrev': 'TX'
    }, {
        'name': 'Utah',
        'abbrev': 'UT'
    }, {
        'name': 'Vermont',
        'abbrev': 'VT'
    }, {
        'name': 'Virginia',
        'abbrev': 'VA'
    }, {
        'name': 'Washington',
        'abbrev': 'WA'
    }, {
        'name': 'West Virginia',
        'abbrev': 'WV'
    }, {
        'name': 'Wisconsin',
        'abbrev': 'WI'
    }, {
        'name': 'Wyoming',
        'abbrev': 'WY'
    },{
        'name': 'Alberta',
        'abbrev': 'AB'
    }, {
        'name': 'British Columbia',
        'abbrev': 'BC'
    }, {
        'name': 'Manitoba',
        'abbrev': 'MB'
    }, {
        'name': 'New Brunswick',
        'abbrev': 'NB'
    }, {
        'name': 'Newfoundland and Labrador',
        'abbrev': 'NL'
    }, {
        'name': 'Nova Scotia',
        'abbrev': 'NS'
    }, {
        'name': 'Ontario',
        'abbrev': 'ON'
    }, {
        'name': 'Prince Edward Island',
        'abbrev': 'PE'
    }, {
        'name': 'Quebec',
        'abbrev': 'QC'
    }, {
        'name': 'Saskatchewan',
        'abbrev': 'SK'
    }, {
        'name': 'Northwest Territories',
        'abbrev': 'NT'
    },{
        'name': 'Nunavut',
        'abbrev': 'NU'
    }, {
        'name': 'Yukon',
        'abbrev': 'YT'
    });
  
  
    var name = name;
    var to = to;
    var returnthis = false;
    $.each(states, function (index, value) {
        if (to == 'name') {
            if (value.abbrev.toLowerCase() == name.toLowerCase()) {
                returnthis = value.name;
                return false;
            }
        } else if (to == 'abbrev') {
            if (value.name.toLowerCase() == name.toLowerCase()) {
                returnthis = value.abbrev.toUpperCase();
                return false;
            }
        }
    });
    return returnthis;
}

function escapeXML(string){

    var str = string;
    str = str.replace(/\&/g,"&amp;");
    str = str.replace(/\>/g,"&gt;");
    str = str.replace(/\</g,"&lt;");
    str = str.replace(/\"/g,"&quot;");
    str = str.replace(/\'/g,"&apos;");

    return str;
}
function getLanguageClicked(){
	$(".lang").click(function () {
        var addressValue = $(this).attr("href");
		if(addressValue.toLowerCase().concat("/").indexOf("/consumer/") != -1){
			addressValue = 'US';
		}else if(addressValue.toLowerCase().concat("/").indexOf("/consumer_ca/") != -1){
			addressValue = 'CA';
		}else{
			addressValue = '';
		}
		var date = new Date();
		date.setTime(date.getTime()
				+ ((addressValue === '')?-1:1 * 24 * 60 * 60 * 1000)); // 1 days
		var expires = "; expires=" + date.toGMTString();
		document.cookie = "behr_lang=" + addressValue
				+ "; path=/";
        console.log("local selected : "+addressValue );
    });
}

// Paint Calculator //
var metric = false;

function setChangeLocation(value){
	if(value == 'US'){
		$(".location-option-us").css("display", "block");
		$(".location-option-can").css("display", "none");
		$(".location-option-cha").css("display", "none");
	}else if(value == 'CA'){
		$(".location-option-us").css("display", "none");
		$(".location-option-can").css("display", "block");
	}
}

function getGeoLocationWithGeoIP(){
	$.ajax({
            url: "http://www.geoplugin.net/javascript.gp",
            cache: true,
            dataType: "script",
            error: function() {
                setLocation(geo_country_code_default);
            },
            success: function() {
                if (typeof geoplugin_countryName === "function") { 
                    geo_country = geoplugin_countryName();
                }
                if (typeof geoplugin_countryCode === "function") { 
                    geo_country_code  = geoplugin_countryCode();
                }
                if (typeof geoplugin_regionName === "function") { 
                    geo_state = geoplugin_regionName();
                }
                if (typeof geoplugin_regionCode === "function") { 
                    geo_state_code = geoplugin_regionCode();
                }
                setLocation(geo_country_code);
            },
            timeout: 5000
        });
        
	return geo_country_code;
}

function googleAnalyticsTagEvents(category,action,label){
	if (typeof(ga) == 'function') {
		if (consumerContext == "/pro/") {
			ga('send', 'event', "Pro-"+category, action, label);
		} else {
			ga('send', 'event', category, action, label);
		}
	}	
}

function setLocation(geo_code){
	var lang_local = readCookie('behr_lang');
	var uri = window.location.pathname.toLowerCase();
	var uriPath = window.location.pathname.substr(uri.indexOf("/",1)+1,uri.length);
        var backslash = "/"; 
        if (uriPath == "/consumer" || uriPath == "/pro" || uriPath == "consumer_ca" || uriPath == "architect") {
            uriPath = ""; 
            backslash = "";
        }  
	if(lang_local === 'CA' && uri.concat("/").indexOf('/consumer/') != -1){
		setChangeLocation(lang_local);
		window.location.replace("http://" + getUserServiceURL()+"/consumer_ca" + backslash + uriPath); 
	}else if(geo_code === 'CA' && uri.indexOf('consumer_ca') == -1 && (lang_local == null || lang_local != 'US')){
		setChangeLocation(geo_code);
		window.location.replace("http://" + getUserServiceURL()+"/consumer_ca" + backslash + uriPath); 
	}else if(lang_local === 'US' && uri.concat("/").indexOf('/consumer_ca/') != -1){
                //(geo_code === 'US' || && uri.concat("/").indexOf('/consumer/') == -1
		window.location.replace("http://" + getUserServiceURL()+"/consumer" + backslash + uriPath); 
	}else if(uri.indexOf('consumer_ca') != -1){
		setChangeLocation('CA');
	}else if(uri.concat("/").indexOf('/consumer/') != -1){
		setChangeLocation('US');
	}
}
function setHouzzCookie(days) {
	//console.log("The referrer is " + document.referrer);
	var date = new Date();
	var milliseconds = 86400000;
	date.setTime(date.getTime() + (days*milliseconds));
	if(document.referrer.toLowerCase().indexOf('houzz')>-1){
		if (readCookie('houzz_ref') == null) {
			createCookie("houzz_ref","1",days);
			//document.cookie = "houzz_ref=1;expires=" + date.toGMTString() + "; path=/";			
		}else{
			var houzzVal = parseInt(readCookie('houzz_ref'))+1;
			createCookie("houzz_ref",houzzVal+"",days);
			//document.cookie = "houzz_ref="+houzzVal+";expires=" + date.toGMTString() + "; path=/";
		}
		if(window.location.pathname.toLowerCase().indexOf("/colors/paint") != -1){
			createCookie("houzz_behr_entry_page",window.location.pathname.toLowerCase(),days);
		}
		//document.cookie = "houzz_behr_entry_page="+window.location.pathname.toLowerCase();+";expires=" + date.toGMTString() +";path=/";
	}
	
}

function createVisProjectRenderStringFromBindings(projectObject) {
	var rooms = projectObject.rooms;
	var roomId = projectObject.currentRoomId;
	var palette = projectObject.palette;

	var bindings;
	var surfaces = new Array();
	surfaces.length = 10;
	var colors = new Array();
	colors.length = 10;

	for ( var i = 0; i < surfaces.length; i++) {
		surfaces[i] = "";
		colors[i] = "";
	}

	if ((rooms != null) && (rooms.length > 0)) {
		if (roomId == null || roomId == "") {
			roomId = rooms[0]['id'];
			bindings = rooms[0]['bindings'];
		} else {
			$.each(rooms, function(i, row) {
				id = row['id'];
				if (id == roomId) {
					bindings = row['bindings']
				}
			})

			for ( var i = 0; i < bindings.length; i++) {
				if (typeof bindings[i] === "undefined") {
					} else {
					if (bindings[i] >= 0) {
						surfaces[i] = i + 1;
						colors[i] = palette[bindings[i]];
					}
				}
			}
		}
	}
	
	//remove the deleted colors
	for (var i = 0; i < 10; i++) {
		if (colors[i].length > 0) {
			if( isDeletedColor(colors[i]) ) {
				colors[i] = "";
				surfaces [i] = "";
			}
		}
	}

	var renderString = 'render?roomId=' + roomId + '&surfaceId1=' + surfaces[0] + '&color1=' + colors[0] + '&surfaceId2=' + surfaces[1] + '&color2=' + colors[1]
						+ '&surfaceId3=' + surfaces[2] + '&color3=' + colors[2]	+ '&surfaceId4=' + surfaces[3] + '&color4=' + colors[3]	
						+ '&surfaceId5=' + surfaces[4] + '&color5=' + colors[4] + '&surfaceId6=' + surfaces[5] + '&color6=' + colors[5]	
						+ '&surfaceId7=' + surfaces[6] + '&color7=' + colors[6]	+ '&surfaceId8=' + surfaces[7] + '&color8=' + colors[7]
						+ '&surfaceId9=' + surfaces[8] + '&color9=' + colors[8]	+ '&surfaceId10=' + surfaces[9] + '&color10=' + colors[9];
					
	return renderString;
}

function printProjectMain(projectId) {
	console.info('print project main');
	
	var dispSetting = "toolbar=yes,location=no,directories=yes,scrollbars=yes,width=1005,height=590,left=100,top=25";

	var ua = navigator.userAgent.toLowerCase();
	var checkChrome = /chrome/;
	var checkSafari = /safari/;
	
	var printProjectHTMLObject = $('div.print_project_template_main').clone();
	
	var projectJSON;
	var renderString;
	var projectName;
	var paletteInfo;
	var paletteCodes;
	var isQuadPalette;
	var projectError = false;
	
	var url;
	var printError = "<div><p>Error, could not connect with Project Service. Unable to print project.</p></div>";
	
	if (checkChrome.test(ua) || checkSafari.test(ua)) {
		dispSetting = "toolbar=yes,location=no,directories=yes,scrollbars=yes,width=1005,height=590,left=100,top=25";
		printProjectHTMLObject.remove('div.enable_bg_printing');	// Background printing messaging not needed
	} else {
		dispSetting = "toolbar=yes,location=no,directories=yes,scrollbars=yes,width=1005,height=655,left=100,top=25";
	}

	// Get info from project
	if(projectId == "session") {
		projectJSON = getCookie('projectData');
	} else {
		url = 'http://' + getUserServiceURL() + '/project/nextgen/getproject?projectid=' + projectId;

		$.ajax({
			type : 'get',
			headers : {
				'Content-Type' : 'application/json'
			},
			url : url,
			data : 'application/json',
			async : false,
			cache : false,
			success : function(response) {
				projectJSON = response;
			},
			error : function(xhr) {
				projectJSON = "noproject";
			}
		});
	}

	if (projectJSON == "noproject" || projectJSON == "") {
		projectError = true;
	} else {
		if (projectJSON["NextGenProjectVO"] || projectId == "session") {
			var jsonData;
			
			if(projectId == "session") {
				jsonData = $.parseJSON(projectJSON);
			} else {
				jsonData = $.parseJSON(projectJSON["NextGenProjectVO"]["jsonData"]).NextGenProjectVO;
			}
			
			var projectAppType = jsonData.projectAppType;
						
			projectName = jsonData.projectName;
			
			if (jsonData.paletteQuad) {
				isQuadPalette = true;
			} else {
				isQuadPalette = false;
			}
							
			paletteInfo = new Array();
			paletteCodes = new Array();

			for (var i = 0; i < 8; i++) {
				paletteInfo[i] = new Array();
				paletteCodes[i] = jsonData.palette[i];
				if (paletteCodes[i] == null) {
					paletteInfo[i][0] = "";
					paletteInfo[i][1] = "#ffffff";
					paletteCodes[i] = "";
				} else {
					paletteInfo[i] = getColorInformation(paletteCodes[i]).split(',');
					paletteInfo[i][0] = toTitleCase(paletteInfo[i][0]);					
				}
			}
			
			if(projectAppType == 'pyp') {
				if(sessionStorage.drawingCanvas) {
					renderString = sessionStorage.drawingCanvas;
				} else {
					var getDrawingCanvasURL = 'http://' + getUserServiceURL() + '/project/nextgen/getprojectbinary?projectid=' + projectId + '&keys=drawingCanvas';
					var canvasJSON = "";
					
					$.ajax({
						type : 'get',
						headers : {
							'Content-Type' : 'application/json'
						},
						url : getDrawingCanvasURL,
						data : 'application/json',
						async : false,
						cache : false,
						success : function(response) {
							canvasJSON = response;
						},
						error : function(xhr) {
							canvasJSON = "";
						}
					});
					
					if(canvasJSON.hasOwnProperty('drawingCanvas')) {
						renderString = canvasJSON.drawingCanvas;
					} else {
						renderString = "/binaries/content/assets/behrdotcom/web/images/myBehr/girlsInField.jpg";
					}
				}
			} else {
				renderString = renderImageContext + createVisProjectRenderStringFromBindings(jsonData);
			}
						
		} else if (projectJSON["com.behr.colorsmart4.project.service.ProjectVO"]) {
			projectName = projectJSON["com.behr.colorsmart4.project.service.ProjectVO"]['projectName'];
			var palette = projectJSON["com.behr.colorsmart4.project.service.ProjectVO"]['palette'];
			
			var paletteVO = palette.paletteColors.set["com.behr.palette.service.PaletteColorVO"];
			paletteVO = sortJSON(paletteVO, 'order');
			
			var paletteType = palette.paletteType;
			paletteInfo = new Array();
			paletteCodes = new Array();
			
			for (var i = 0; i < 4; i++) {
				paletteInfo[i] = new Array();
				if (paletteVO[i]) {
					if (paletteVO[i].colorId) {
						paletteCodes[i] = paletteVO[i].colorId;
						paletteInfo[i][0] = paletteVO[i].colorName;
						paletteInfo[i][1] = paletteVO[i].hexRgb.substr(2);
					} else {
						paletteInfo[i][0] = "";
						paletteInfo[i][1] = "#ffffff";
						paletteCodes[i] = "";
					}
				} else {
					paletteInfo[i][0] = "";
					paletteInfo[i][1] = "#ffffff";
					paletteCodes[i] = "";
				}
			}
				
			for (var j = 4; j < 8; j++) { 
				paletteInfo[j] = new Array();
				paletteInfo[j][0] = "";
				paletteInfo[j][1] = "#ffffff";
				paletteCodes[j] = "";
			}

			if (projectJSON["com.behr.colorsmart4.project.service.ProjectVO"]['previewImageURL']) {
				var oldRenderString = projectJSON["com.behr.colorsmart4.project.service.ProjectVO"]['previewImageURL'];

				if (oldRenderString.indexOf('http://scene7') === 0) {
					renderString = 'http://' + getUserServiceURL() + '/colorsmart4/previewRepaintServlet?';
					var url = oldRenderString.split('?');
					var urlVariablesString = url[1];
					var urlVariables = urlVariablesString.split('&');
					var scene7XPositions = new Array();
					var scene7YPositions = new Array();
					var scene7Colors = new Array();
					var data;
					var dataSplit;
					var currentVariable;

					for ( var k = 0; k < urlVariables.length; k++) {
						currentVariable = urlVariables[k];

						if (currentVariable.indexOf("s_x") === 0) {
							data = currentVariable.split('=');
							scene7XPositions.push(data[1]);
						} else if (currentVariable.indexOf("s_y") === 0) {
							data = currentVariable.split('=');
							scene7YPositions.push(data[1]);
						} else if (currentVariable.indexOf("s_dbstring") === 0) {
							data = currentVariable.split('=');
							dataSplit = data[2].split(';');
							scene7Colors.push(dataSplit[0]);
						}
					}
					renderString += "x=";
					for (k = 0; k < scene7XPositions.length; k++) {
						renderString += scene7XPositions[k] + ";";
					}
					renderString += "&y=";
					for (k = 0; k < scene7YPositions.length; k++) {
						renderString += scene7YPositions[k] + ";";
					}
					renderString += "&values=";
					for (k = 0; k < scene7Colors.length; k++) {
						renderString += scene7Colors[k] + ";";
					}
					var frontURL = url[0].split('scene7:79');
					var imageFromURL = frontURL[1];
					renderString += "&img=" + imageFromURL;
				} else {
						renderString = oldRenderString.replace(
								'\/colorsmart-pyp-server\/', 'http://'
										+ getUserServiceURL()
										+ '/colorsmart-pyp-server/');// devpreview.behr.com
				}
			} else {
				renderString = '/binaries/content/assets/behrdotcom/web/images/myBehr/girlsInField.jpg';
			}
					
			if (paletteType != "0") {
				isQuadPalette = false;
			} else {
				isQuadPalette = true;
			}
				
			// Change project image sizing for legacy project
			printProjectHTMLObject.find('img.print_project_image').attr("width", "");
			printProjectHTMLObject.find('img.print_project_image').attr("height", "100%");
				
		} else {
			projectError = true;
		}
	}
	
	if (isQuadPalette) {
		// Add quad palette colors to print page
		printProjectHTMLObject.find('div.project_color_palette_1').css('background-color', '#' + paletteInfo[0][1]);
		printProjectHTMLObject.find('div.project_color_palette_2').css('background-color', '#' + paletteInfo[1][1]);
		printProjectHTMLObject.find('div.project_color_palette_3').css('background-color', '#' + paletteInfo[2][1]);
		printProjectHTMLObject.find('div.project_color_palette_4').css('background-color', '#' + paletteInfo[3][1]);
	} else {
		// Remove quad palette html from template if project does not contain a quad palette
		printProjectHTMLObject.find('div.project_color_palette_container').remove();
	} 	
		
	// Add project image and project name to print page
	printProjectHTMLObject.find('img.print_project_image').attr('src', renderString);
	printProjectHTMLObject.find('h5.project_name').html(projectName);
	
	var newProjectColorObject;
	var colorDetailLink;
	
	for(var i=0; i<paletteCodes.length; i++) {
		if(paletteCodes[i] != "") {
			newProjectColorObject = printProjectHTMLObject.find('div.project_color_container_template').clone();
			colorDetailLink = newProjectColorObject.find('a.color_detail_link');
				
			newProjectColorObject.find('div.project_color').css('background-color', '#' + paletteInfo[i][1]);
			
			var newColorDetailURL = colorDetailLink.attr('href');
			newColorDetailURL += paletteCodes[i];
			colorDetailLink.attr('href', newColorDetailURL);
			colorDetailLink.find('span.color_code').append(paletteCodes[i]);	// color display code
			colorDetailLink.find('span.color_name').append(paletteInfo[i][0]);	//color display name
				
			//append new project color to container
			printProjectHTMLObject.find('div.saved_project_palette_main').append(newProjectColorObject.html());
		}
	}
	
	printProjectHTMLObject.remove('div.project_color_container_template');
	
	// Create html for <head> tag on print page
	var printProjectPageHead = '<head>';
	printProjectPageHead += '<title>My Behr</title>';
	printProjectPageHead += '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />';
	printProjectPageHead += '<meta http-equiv="X-UA-Compatible" content="IE=Edge" />';
	printProjectPageHead += '<style type="text/css">.fl {float: left;} .fr {float: right;}</style>';
	printProjectPageHead += '<script>function printThis(){window.print()}</script>'
	printProjectPageHead += '</head>';
	
	// Display print page in new window
	var docprint = window.open("", "", dispSetting);
	docprint.document.open();
	docprint.document.write('<html>');
	docprint.document.write(printProjectPageHead);
	docprint.document.write('<body style="margin:0px; width:100%; height:100%;">');
	docprint.document.write(handleDeletedColorsForPrintProject(printProjectHTMLObject).html());
	//docprint.document.write(printProjectHTMLObject.html());
	docprint.document.write('</body></html>');
	docprint.document.close();
	docprint.focus();
}

function getCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function setCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

//function updateShoppingCartItemMenu(){
//	shCtMn = $(".ShoppingCart_Menu");
//	totalItems = 0;
//	var orderSummaryCookie = getCookie("behr_consumer_direct");
//	if(orderSummaryCookie != null && orderSummaryCookie.indexOf(":") > 0) {
//		var orderSummaryList = orderSummaryCookie.split(":");
//		if(orderSummaryList != null && orderSummaryList.length > 0) {
//			while(orderSummaryList.length > 7) {
//				sliceArr = orderSummaryList.splice(0, 9);
//				qty = sliceArr[3];
//				totalItems += eval(qty);
//			}
//		}
//		
//		shCtMnTxt = shCtMn.text().split('(')[0];
//		if(totalItems > 0) {
//			shCtMn.text(shCtMnTxt + "(" + totalItems + ")");
//		}
//	}
//}


var Colrs = "Colors";
var cols = "colors";
function main() {
	var currDomain = getUserServiceURL();
	if(currDomain.indexOf('es.behr.com') == -1 && currDomain.indexOf('fr.behr.com') == -1){
		getGeoLocationWithGeoIP();		
	}else if(currDomain.indexOf('fr.behr.com') != -1){
		setChangeLocation('CA');
	}else if(currDomain.indexOf('es.behr.com') != -1){
		setChangeLocation('US');
	}
	setupShoppingCartNav();
//	updateShoppingCartItemMenu();
	setupMyBehr();
	setupMainNavHovers();
	setupSliders();
	setupColorDetailsContentNav();
	setupFormDefaults();
	setupLeftNavIndicator();
	setupLeftNavTabs();

	setupShoppingCart();
	fillCustomerServiceForms();
	// setupColorBuySample();
	setupTooltips();
	setupOverlayWithID();
	setupSharePopups();
	setupPaletteSliders()
	setupEmailOverlayForm();
   setupHowToEmailOverlayForm();
	setupLightRegForm();
	initMSDS();
	//initMarqueeStoreLocator();
	//Customer Service Forms
	sendCustomerServiceForm();
	if(window.location.pathname.toLowerCase().concat("/").indexOf("/consumer_ca/") != -1){
		$("a[href]").attr('href', function() { return this.href.replace("/consumer/", "/consumer_ca/"); });
		consumerContext = "/consumer_ca/";
		Colrs = "Colours";
		colrs = "colours";
		$('div.product_comparison_container sup').css('vertical-align','super');
		$('div.main_nav_wrapper a.nav_item').css('min-width','100px');
		$('div.main_nav-dropdown-colours div.main_nav-dropdown-column div.main_nav-dropdown-column-content h3 a').css('text-align','center');
		$('div.main_nav-dropdown-colours div.main_nav-dropdown-column div.main_nav-dropdown-column-content h3 a').css('margin-top','30px');
		$('div.main_nav-dropdown-colours div.main_nav-dropdown-content div.main_nav-dropdown-column').css('width','250px');
	}else{
		consumerContext = "/consumer/";
		Colrs = "Colors";
		colrs = "colors";
		/*if(window.location.pathname.toLowerCase().concat("/").indexOf("/pro/") != -1){
			//this is to fix the pro site issues (/consumer/pro/ - /pro/)
			$('a[href*="/consumer/pro/"]').attr('href', function(i,href) {
				return href.replace('/consumer/pro/', '/pro/');
			});
		}*/
	}
	
	if(window.location.pathname.toLowerCase().indexOf("/consumer/inspiration/houzz-landing-page") != -1){
		$('div.houzz_landing').css("display", "block");
		$("div.overlay-newsletter div.overlay-content a.orange_button:contains('Unsubscribe')").css("display", "none");
	}else{
		$('div.houzz_landing').css("display", "none");
		$("div.overlay-newsletter div.overlay-content a.orange_button:contains('Unsubscribe')").css("display", "block");
	}
	
	if(window.location.pathname.toLowerCase().indexOf("/consumer/jd-powerpromo") != -1){
        $('.interior-project-ideas .page_wrapper .content_wrapper .alternating_image_and_copy-content').css('width','100%');
	}

	$('form[name="log_in"]').submit(function(e) {
		standardFormSubmit(e, 'login');
	});
	$('form[name="sign_up"]').submit(function(e) {
		standardFormSubmit(e, 'signup');
	});
	$('form[name="log_in_overlay"]').submit(function(e) {
		standardFormSubmit(e, 'login_overlay');
	});
	$('form[name="sign_up_overlay"]').submit(function(e) {
		standardFormSubmit(e, 'signup_overlay');
	});
	$('form[name="email_contact"]').submit(function(e) {
		standardFormSubmit(e, 'contact');
	});
	$('form[name="change_password"]').submit(function(e) {
		standardFormSubmit(e, 'changepw');
	});
	$('form[name="create_password"]').submit(function(e) {
		createPassword(e);
	});
	$('form[name="color_search"]').submit(function(e) {
		colorSearch(e);
	});
	$('a.update_to_cart').click(function(e) {
		updateQuantityInCart(e);
	});
	$('select.shopping_cart_product_type').change(function(e) {
		updateProductTypeInCart(e)
	});
	$('body').on('click', '.tabbed_header .orange_button', whiteButtonClick);
	$('a.colorDetailTabLink').on('click', whiteButtonClick);
	
	csThankYouMsg();

	initSliderAuto();

	$('.overlay-content .message a').attr('href', consumerContext+'buy-samples');
	$('.sign_up_lite').on('click', signUpLite);
	$('.behr-mp-option').hide();
	if(metric){
		$( ".standard-calculator" ).remove();		
	}else{
		$( ".metrics-calculator" ).remove();		
	}
	$('a.msds-side-menu').on('click', handleMSDS);
	$('.location-option').on('click',function(){$(".location-layer").css("display", "block");});
	$('.location-layer .overlay-top .overlay-close').on('click',function(){$(".location-layer").css("display", "none");});
	csColorFormCharacterLimit();
	//$("a[href='/pro/home']").attr('href', 'http://www.behrpro.com');
	$("a[href='/pro/home']").attr('href', "http://" + getUserServiceURL()+"/pro");	
	if(window.location.pathname.toLowerCase().concat("/").indexOf("/consumer/") != -1){
		if(readCookie('mybehr_cProUser') != null && readCookie('mybehr_cProUser').toLowerCase().indexOf("pro") != -1) {
			$('li.myBehrSwitchToProNavItem').html('<a href="/pro/my-behr/dashboard">My BEHRPRO<sup>&reg;</sup> Dashboard</a>');
		}
	}
	getLanguageClicked();
	var uri = window.location.pathname;
	try{
	    uriPath = uri.substr(uri.indexOf("/",1)+1,uri.length);
	} catch(e){
	}
        var backslash = "/";
        if (uriPath == "/consumer" || uriPath == "/pro" || uriPath == "consumer_ca" || uriPath == "architect") {
            uriPath = ""; 
            backslash = "";
        }        
	$(".lang_us_pro").attr('href', "http://" + getUserServiceURL()+"/pro" + backslash + uriPath);
	$(".lang_us").attr('href', "http://" + getUserServiceURL()+"/consumer" + backslash + uriPath);
	$(".lang_ca").attr('href', "http://" + getUserServiceURL()+"/consumer_ca" + backslash + uriPath);
	//Buy Samples Changes
	$('div.content_wrapper-header h1:contains("Buy your paint online")').css({
		fontSize: "50px",
		color: "#FFFFFF",
		width: "510px",
		lineHeight: "41px",
		marginLeft: "310px",
		marginTop: "170px",
		letterSpacing: "-2px"
	});
	$('.main_nav_wrapper a[dropdown="buy online"]').attr('dropdown', '');
	$('.colorsmart-mobile a[href="http://www.behr.com/csmobileiphone"]').click(function(){
      googleAnalyticsTagEvents('High Value-Mobile','Download App from App Store','iOS'); 
   });
   $('.colorsmart-mobile a[href="http://www.behr.com/csmobiledroid"]').click(function(){
      googleAnalyticsTagEvents('High Value-Mobile','Download App from App Store','Android'); 
   });
   if(window.location.pathname.toLowerCase().indexOf("/consumer/mybehr/switch-to-pro-account") != -1 || window.location.pathname.toLowerCase().indexOf("/consumer/mybehr/change-password") != -1){
		$("li.myBehrSwitchToProNavItem a[href='//mybehr/switch-to-pro-account']").attr("href", "http://" + getUserServiceURL()+"/consumer/mybehr/switch-to-pro-account");
	} 
   var houzz_entry = readCookie('houzz_behr_entry_page');
   if(houzz_entry && window.location.pathname.toLowerCase() != houzz_entry){
		showOverlayByID('dpsHouzz');
		del_cookie('houzz_behr_entry_page');
		$('.dpsHouzz_No').click(function(e) {
			handleOverlayCloseClick();
		});
   }
   setHouzzCookie(10000);
   
   if ($('.houzzprofessional').css('display') == 'none') {

	   $('.houzzprofessional').removeAttr('required');
   }
	$('#faqs h6').each(function() {
		var tis = $(this), state = false, answer = tis.next('div').hide().css('height','auto').slideUp();
		tis.click(function() {
			state = !state;
			answer.slideToggle(state);
			tis.toggleClass('active',state);
		});
	});
	setupMarqueeStoreLocator();
   if(window.location.pathname.toLowerCase().indexOf("/consumer/inspiration/houzz-landing-page") != -1){
	$('.interior-project-ideas .no_slider .bg').css('height','2001px');
   }
   if(window.location.href.toLowerCase().indexOf("es.behr.com/pro/products") != -1){
		$('.BVBrowserFF').css('display','none')
	}
   
   var __referrer = document.referrer;
   if (typeof __referrer === 'undefined' || __referrer == null || __referrer === ''){
       __referrer = "///";
   }
   var _previousContext = __referrer.split("/")[3];
   var _currentContext = window.location.href.split("/")[3];
   
   if (_previousContext !== _currentContext && _previousContext !== ''){
       //log out users
       myBehrLogOutWithoutSetToHome();
   }  
   
    $('div.pre_header a.nav_item.nav_item-90').on('click', function(e) {
       var _currentContext = window.location.href.split("/")[3];
       var _destination = e.currentTarget.href;
       var _destinationContext = "";
       if (typeof _destination !== 'undefined' && _destination != null){
           _destinationContext = _destination.split("/")[3];
       }

       var myBehrUserID = readCookie('mybehr_id');
       if (_destinationContext !== ""
           && (_currentContext !== _destinationContext)
           && (typeof myBehrUserID !== 'undefined' && myBehrUserID != null)) {   
                //w3c:
                e.preventDefault();
                e.stopPropagation();
                //IE:
                e.returnValue = false;
                e.cancelBubble = true;
                showOverlayByID('sitechangelogout');
                setTimeout(function() {
                        window.location.href = "/" + _destinationContext; 
                }, 4000);
           }
    });
    
    
    $('div.locale-link.locale-can').on('click', function (e) {
        var _currentContext = window.location.href.split("/")[3];
        var _destination = document.activeElement.href;
        var _destinationContext = "";
        if (typeof _destination !== 'undefined' && _destination != null){
            _destinationContext = _destination.split("/")[3];
        }
        var myBehrUserID = readCookie('mybehr_id');
        if (_currentContext !== 'consumer' 
            || (typeof myBehrUserID === 'undefined' || myBehrUserID == null)){
            return;
        }
        var updateContent = "<h3>Site will log you out</h3>" +
        "<hr style='border: 1px solid #CCCCCC;'>" +
        "<h4></h4>" +                   
        "You are leaving the BEHR<sup>&reg;</sup> U.S. website. You will be logged out.<br /><br><br>" +
        "<hr style='border: 1px solid #CCCCCC;'>" +
        "<div class='auto_close_message'><a class='button orange_button overlay-close'>Close</a></div>";
        $('#overlay-sitechangelogout .overlay-content').html(updateContent);
        
        //w3c:
        e.preventDefault();
        e.stopPropagation();
        //IE:
        e.returnValue = false;
        e.cancelBubble = true;
        showOverlayByID('sitechangelogout');
        setTimeout(function() {
                window.location.href = "/" + _destinationContext; 
        }, 4000);
    });
    
    $('div.locale-link.locale-us').on('click', function (e) {
        var _currentContext = window.location.href.split("/")[3];
        var _destination = document.activeElement.href;
        var _destinationContext = "";
        if (typeof _destination !== 'undefined' && _destination != null){
            _destinationContext = _destination.split("/")[3];
        }
        var myBehrUserID = readCookie('mybehr_id');
        if (_currentContext !== 'consumer_ca'
            || (typeof myBehrUserID === 'undefined' || myBehrUserID == null)){
            return;
        }
        var updateContent = "<h3>Site will log you out</h3>" +
        "<hr style='border: 1px solid #CCCCCC;'>" +
        "<h4></h4>" +                   
        "You are leaving the BEHR<sup>&reg;</sup> Canada website. You will be logged out.<br /><br><br>" +
        "<hr style='border: 1px solid #CCCCCC;'>" +
        "<div class='auto_close_message'><a class='button orange_button overlay-close'>Close</a></div>";
        $('#overlay-sitechangelogout .overlay-content').html(updateContent);
        
        //w3c:
        e.preventDefault();
        e.stopPropagation();
        //IE:
        e.returnValue = false;
        e.cancelBubble = true;
        showOverlayByID('sitechangelogout');
        setTimeout(function() {
                window.location.href = "/" + _destinationContext; 
        }, 4000);
    });
    
    //taking care of reload/refresh, bookmark, address bar change
    var _visitedBehrContext = readCookie('visitedBehrContext');
    if ((typeof _visitedBehrContext === 'undefined' 
            || _visitedBehrContext === null)
        || _visitedBehrContext !== _currentContext){
        
        var myBehrUserID = readCookie('mybehr_id');
        if (typeof myBehrUserID !== 'undefined' && myBehrUserID != null){
            myBehrLogOutWithoutSetToHome();
        }
     }
    
    //set cookie visitedBehrSite to _currentContext
    var _cookieDate = new Date();
    _cookieDate.setTime(_cookieDate.getTime() + (60* 60 * 1000)); // 1 hour
    var _cookieExpires = "; expires=" + _cookieDate.toGMTString();
    document.cookie = "visitedBehrContext=" + _currentContext + ";expires="+_cookieExpires+"; path=/";
}

function myBehrLogOutWithoutSetToHome() {
	var date = new Date();
	date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));
	var expires = "; expires=" + date.toGMTString();
	
	var rem = readCookie("mybehr_rem");

	document.cookie = "mybehr_id=" + "" + expires + "; path=/";
	document.cookie = "mybehr_firstname=" + "" + expires + "; path=/";
	document.cookie = "mybehr_lastname=" + "" + expires + "; path=/";
	if(rem == "no") {
		document.cookie = "mybehr_user=" + "" + expires + "; path=/";
	}
	document.cookie = "mybehr_location=" + "" + expires + "; path=/";
	document.cookie = "mybehr_zip=" + "" + expires + "; path=/";
	document.cookie = "mybehr_fbonly=" + "" + expires + "; path=/";
	document.cookie = "mybehr_interests=" + "" + expires + "; path=/";
	document.cookie = "mybehr_optin=" + "" + expires + "; path=/";
	document.cookie = "mybehr_cCompanyName=" + "" + expires + "; path=/";
	document.cookie = "mybehr_cProfession=" + "" + expires + "; path=/";
	document.cookie = "mybehr_cAddress1=" + "" + expires + "; path=/";
	document.cookie = "mybehr_cCity=" + "" + expires + "; path=/";
	document.cookie = "mybehr_cState=" + "" + expires + "; path=/";
	document.cookie = "mybehr_cZipCode=" + "" + expires + "; path=/";
	document.cookie = "mybehr_cCountry=" + "" + expires + "; path=/";
	document.cookie = "mybehr_cProUser=" + "" + expires + "; path=/";
	document.cookie = "mybehr_cPhoneNumber=" + "" + expires + "; path=/";
	document.cookie = "mybehr_cBehrNews=" + "" + expires + "; path=/";
	document.cookie = "mybehr_cInPaint=" + "" + expires + "; path=/";
	document.cookie = "mybehr_cAddress2=" + expires + "; path=/";
	document.cookie = "mybehr_cLicenseNumber=" + expires + "; path=/";
	document.cookie = "mybehr_cWodStatus=" + expires + "; path=/";
	document.cookie = "mybehr_proRewardsId=" + expires + "; path=/";
	document.cookie = "mybehr_preferredLang=" + expires + "; path=/";	
	document.cookie = "mybehr_proRewards=" + expires + "; path=/";	
	document.cookie = "mybehr_paintUsage=" + expires + "; path=/";
	document.cookie = "mybehr_behrRep=" + expires + "; path=/";

        $('a.my_behr div.my_behr_nav_welcome').html('Log In / Sign Up');
}

 $(document).ready(main);