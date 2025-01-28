
/* 
	Website : Jobick
	Author  : Dexignlab
	File    : Custom JS
	URL     : https://jobick.dexignlab.com/xhtml/
*/


var Jobick = function(){
    "use strict"
   /* Search Bar ============ */
   var screenWidth = $( window ).width();
   var screenHeight = $( window ).height();
   
   
   var handleSelectPicker = function(){
       if(jQuery('.default-select,.dataTables_wrapper select').length > 0 ){
           jQuery('.default-select,.dataTables_wrapper select').selectpicker();
       }
   }

   var handlePreloader = function(){
       setTimeout(function() {
           jQuery('#preloader').remove();
           $('#main-wrapper').addClass('show');
       },800);	
       
   }

   var handleMetisMenu = function() {
       if(jQuery('#menu').length > 0 ){
           $("#menu").metisMenu();
       }
       jQuery('.metismenu > .mm-active ').each(function(){
           if(!jQuery(this).children('ul').length > 0)
           {
               jQuery(this).addClass('active-no-child');
           }
       });
   }
  
   var handleAllChecked = function() {
       $("#checkAll, #checkAll4, #checkAll1, #checkAll2, #checkAll5").on('change',function() {
           $("td input, .email-list .custom-checkbox input").prop('checked', $(this).prop("checked"));
       });
       $(".checkAllInput").on('click',function() {
           jQuery(this).closest('.ItemsCheckboxSec').find('input[type="checkbox"]').prop('checked', true);		
       });
       $(".unCheckAllInput").on('click',function() {
           jQuery(this).closest('.ItemsCheckboxSec').find('input[type="checkbox"]').prop('checked', false);		
       });
   }
       

    var handleNavigation = function () {
        $(".nav-control").on('click', function () {
            $('#main-wrapper').toggleClass("menu-toggle");
            $(".hamburger").toggleClass("is-active");
            handleMinHeight();
        });
    }
 
   var handleCurrentActive = function() {
       for (var nk = window.location,
           o = $("ul#menu a").filter(function() {
               
               return this.href == nk;
               
           })
           .addClass("mm-active")
           .parent()
           .addClass("mm-active");;) 
       {
           
           if (!o.is("li")) break;
           
           o = o.parent()
               .addClass("mm-show")
               .parent()
               .addClass("mm-active");
       }
   }

   var handleMiniSidebar = function() {
       $("ul#menu>li").on('click', function() {
           const sidebarStyle = $('body').attr('data-sidebar-style');
           if (sidebarStyle === 'mini') {
               console.log($(this).find('ul'))
               $(this).find('ul').stop()
           }
       })
   }
  
   var handleMinHeight = function() {
    var win_h = window.innerHeight;
    if (win_h > 0 ? win_h : screen.height) {
        setTimeout(() => {
            $(".content-body").css("min-height", (window.innerHeight - 63) + "px");	
            if($('body').attr('data-layout') === "vertical"){
                if(
                    ($('body').attr('data-sidebar-style') === "mini") && ($('.dlabnav .metismenu').height() > (window.innerHeight - 60))
                    ||
                    ($('body').attr('data-sidebar-style') === "modern") && ($('.dlabnav .metismenu').height() > (window.innerHeight - 60))
                    ||
                    ($('body').attr('data-sidebar-style') === "full") && $('#main-wrapper').hasClass('menu-toggle') && ($('.dlabnav .metismenu').height() > (window.innerHeight - 60))
                ){	
                    $(".content-body").css("min-height", ($('.dlabnav .metismenu').height() + 110) + "px");
                }
            }
        },1000);
    };
    
    setTimeout(() => {
        if(
            $('body').attr('data-header-position') === "fixed" 
            && 
            $('body').attr('data-layout') === "horizontal"
            &&
            $('body').attr('data-sidebar-position') === "fixed"
        ){
            $('.content-body').css("padding-top" ,  ($('.dlabnav').height() + $('.header').height()) + 'px');
        }else if(
            $('body').attr('data-header-position') === "fixed" 
            && 
            $('body').attr('data-layout') === "horizontal"
            &&
            $('body').attr('data-sidebar-position') === "static"
        ){
            $('.content-body').css("padding-top" , $('.header').height() + "px" );
        }else if(
            $('body').attr('data-header-position') === "static" 
            && 
            $('body').attr('data-layout') === "horizontal"
            &&
            $('body').attr('data-sidebar-position') === "fixed"
        ){
            $('.content-body').css("padding-top" , "0px" );
        }else {
            $('.content-body').css("padding-top" , "" );
        }
    },400);
   }
   
   var handleDataAction = function() {
       $('a[data-action="collapse"]').on("click", function(i) {
           i.preventDefault(),
               $(this).closest(".card").find('[data-action="collapse"] i').toggleClass("mdi-arrow-down mdi-arrow-up"),
               $(this).closest(".card").children(".card-body").collapse("toggle");
       });

       $('a[data-action="expand"]').on("click", function(i) {
           i.preventDefault(),
               $(this).closest(".card").find('[data-action="expand"] i').toggleClass("icon-size-actual icon-size-fullscreen"),
               $(this).closest(".card").toggleClass("card-fullscreen");
       });



       $('[data-action="close"]').on("click", function() {
           $(this).closest(".card").removeClass().slideUp("fast");
       });

       $('[data-action="reload"]').on("click", function() {
           var e = $(this);
           e.parents(".card").addClass("card-load"),
               e.parents(".card").append('<div class="card-loader"><i class=" ti-reload rotate-refresh"></div>'),
               setTimeout(function() {
                   e.parents(".card").children(".card-loader").remove(),
                       e.parents(".card").removeClass("card-load")
               }, 2000)
       });
   }

   var handleHeaderHight = function() {
       const headerHight = $('.header').innerHeight();
       $(window).scroll(function() {
           if ($('body').attr('data-layout') === "horizontal" && $('body').attr('data-header-position') === "static" && $('body').attr('data-sidebar-position') === "fixed")
               $(this.window).scrollTop() >= headerHight ? $('.dlabnav').addClass('fixed') : $('.dlabnav').removeClass('fixed')
       });
   }
   
   var handleMenuTabs = function() {
       if(screenWidth <= 991 ){
           jQuery('.menu-tabs .nav-link').on('click',function(){
               if(jQuery(this).hasClass('open'))
               {
                   jQuery(this).removeClass('open');
                   jQuery('.fixed-content-box').removeClass('active');
                   jQuery('.hamburger').show();
               }else{
                   jQuery('.menu-tabs .nav-link').removeClass('open');
                   jQuery(this).addClass('open');
                   jQuery('.fixed-content-box').addClass('active');
                   jQuery('.hamburger').hide();
               }
           });
           jQuery('.close-fixed-content').on('click',function(){
               jQuery('.fixed-content-box').removeClass('active');
               jQuery('.hamburger').removeClass('is-active');
               jQuery('#main-wrapper').removeClass('menu-toggle');
               jQuery('.hamburger').show();
           });
       }
   }
   
   var handleChatbox = function() {
       jQuery('.bell-link').on('click',function(){
           jQuery('.chatbox').addClass('active');
       });
       jQuery('.chatbox-close').on('click',function(){
           jQuery('.chatbox').removeClass('active');
       });
   }
   
   var handlePerfectScrollbar = function() {
       if(jQuery('.dlabnav-scroll').length > 0)
       {
           const qs = new PerfectScrollbar('.dlabnav-scroll');
           
           qs.isRtl = false;
       }
   }

   var handleBtnNumber = function() {
       $('.btn-number').on('click', function(e) {
           e.preventDefault();

           fieldName = $(this).attr('data-field');
           type = $(this).attr('data-type');
           var input = $("input[name='" + fieldName + "']");
           var currentVal = parseInt(input.val());
           if (!isNaN(currentVal)) {
               if (type == 'minus')
                   input.val(currentVal - 1);
               else if (type == 'plus')
                   input.val(currentVal + 1);
           } else {
               input.val(0);
           }
       });
   }
   
   var handleDzChatUser = function() {
       jQuery('.dlab-chat-user-box .dlab-chat-user').on('click',function(){
           jQuery('.dlab-chat-user-box').addClass('d-none');
           jQuery('.dlab-chat-history-box').removeClass('d-none');
       }); 
       
       jQuery('.dlab-chat-history-back').on('click',function(){
           jQuery('.dlab-chat-user-box').removeClass('d-none');
           jQuery('.dlab-chat-history-box').addClass('d-none');
       }); 
       
       jQuery('.dlab-fullscreen').on('click',function(){
           jQuery('.dlab-fullscreen').toggleClass('active');
       });
   }
   
   
   var handleDzFullScreen = function() {
       jQuery('.dlab-fullscreen').on('click',function(e){
           if(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement) { 
               /* Enter fullscreen */
               if(document.exitFullscreen) {
                   document.exitFullscreen();
               } else if(document.msExitFullscreen) {
                   document.msExitFullscreen(); /* IE/Edge */
               } else if(document.mozCancelFullScreen) {
                   document.mozCancelFullScreen(); /* Firefox */
               } else if(document.webkitExitFullscreen) {
                   document.webkitExitFullscreen(); /* Chrome, Safari & Opera */
               }
           } 
           else { /* exit fullscreen */
               if(document.documentElement.requestFullscreen) {
                   document.documentElement.requestFullscreen();
               } else if(document.documentElement.webkitRequestFullscreen) {
                   document.documentElement.webkitRequestFullscreen();
               } else if(document.documentElement.mozRequestFullScreen) {
                   document.documentElement.mozRequestFullScreen();
               } else if(document.documentElement.msRequestFullscreen) {
                   document.documentElement.msRequestFullscreen();
               }
           }		
       });
   }
   
   var handleshowPass = function(){
       jQuery('.show-pass').on('click',function(){
           jQuery(this).toggleClass('active');
           if(jQuery('#dlab-password').attr('type') == 'password'){
               jQuery('#dlab-password').attr('type','text');
           }else if(jQuery('#dlab-password').attr('type') == 'text'){
               jQuery('#dlab-password').attr('type','password');
           }
       });
   }
   
   var heartBlast = function (){
       $(".heart").on("click", function() {
           $(this).toggleClass("heart-blast");
       });
   }
   
   var handleDzLoadMore = function() {
       $(".dlab-load-more").on('click', function(e)
       {
           e.preventDefault();	//STOP default action
           $(this).append(' <i class="fas fa-sync"></i>');
           
           var dlabLoadMoreUrl = $(this).attr('rel');
           var dlabLoadMoreId = $(this).attr('id');
           
           $.ajax({
               method: "POST",
               url: dlabLoadMoreUrl,
               dataType: 'html',
               success: function(data) {
                   $( "#"+dlabLoadMoreId+"Content").append(data);
                   $('.dlab-load-more i').remove();
               }
           })
       });
   }
   
   var handleLightgallery = function(){
    if(jQuery('#lightgallery').length > 0)
		{
			$('#lightgallery').lightGallery({
				loop:true,
				thumbnail:true,
				exThumbImage: 'data-exthumbimage'
			});
		}
		
    if(jQuery('#lightgallery2').length > 0){
        $('#lightgallery2').lightGallery({
            loop:true,
            thumbnail:true,
            exThumbImage: 'data-exthumbimage'
        });
    }
   }
   var handleDraggableCard = function() {
       if($('.draggable-zone').length > 0){
           var dzCardDraggable = function () {
               return {
                   init: function () {
                       var containers = document.querySelectorAll('.draggable-zone');

                       if (containers.length === 0) {
                           return false;
                       }

                       var swappable = new Sortable.default(containers, {
                           draggable: '.draggable',
                           handle: '.draggable.draggable-handle',
                           mirror: {
                               appendTo: 'body',
                               constrainDimensions: true
                           }
                       });
                  
                       swappable.on('drag:stop', () => {
                           setTimeout(function(){
                               setBoxCount();
                           }, 200);
                       })
                   }
               };
           }();

           jQuery(document).ready(function () {
               dzCardDraggable.init();
           });
           
           function setBoxCount(){
               var cardCount = 0;
               jQuery('.dropzoneContainer').each(function(){
                   cardCount = jQuery(this).find('.draggable-handle').length;
                   jQuery(this).find('.totalCount').html(cardCount);
               });
           }	
       }
   }
   var handleCustomFileInput = function() {
       $(".custom-file-input").on("change", function() {
           var fileName = $(this).val().split("\\").pop();
           $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
       });
   }
   
     var vHeight = function(){
       var ch = $(window).height() - 206;
       $(".chatbox .msg_card_body").css('height',ch);
   }
   
   var domoPanel = function(){
       if(jQuery(".dlab-demo-content").length>0) {
           $('.dlab-demo-trigger').on('click', function() {
                   $('.dlab-demo-panel').addClass('show');
             });
             $('.dlab-demo-close, .bg-close').on('click', function() {
                   $('.dlab-demo-panel').removeClass('show');
             });
             
             $('.dlab-demo-bx').on('click', function() {
                 $('.dlab-demo-bx').removeClass('demo-active');
                 $(this).addClass('demo-active');
             });
       }
   } 
   
   var handleDatetimepicker = function(){
    if(jQuery("#datetimepicker1").length>0) {
        $('#datetimepicker1').datetimepicker({
            inline: true,
        });
    }
    if(jQuery('.bt-datepicker').length > 0){
        $(".bt-datepicker").datepicker({ 
            autoclose: true, 
            todayHighlight: true
        }).datepicker('update', new Date());
    }
   }
   
   var handleCkEditor = function(){
        if(jQuery("#ckeditor").length>0) {
            ClassicEditor
            .create( document.querySelector( '#ckeditor' ), {
                simpleUpload: {
                    uploadUrl: 'ckeditor-upload.php', 
                }
            } )
            .then( editor => {
                window.editor = editor;
            } )
            .catch( err => {
                console.error( err.stack );
            } );
        }
   }
   
   var handleMenuPosition = function(){
       
       if(screenWidth > 1024){
           $(".metismenu  li").unbind().each(function (e) {
               if ($('ul', this).length > 0) {
                   var elm = $('ul:first', this).css('display','block');
                   var off = elm.offset();
                   var l = off.left;
                   var w = elm.width();
                   var elm = $('ul:first', this).removeAttr('style');
                   var docH = $("body").height();
                   var docW = $("body").width();
                   
                   if(jQuery('html').hasClass('rtl')){
                       var isEntirelyVisible = (l + w <= docW);	
                   }else{
                       var isEntirelyVisible = (l > 0)?true:false;	
                   }
                       
                   if (!isEntirelyVisible) {
                       $(this).find('ul:first').addClass('left');
                   } else {
                       $(this).find('ul:first').removeClass('left');
                   }
               }
           });
       }
   }	
   var handleThemeMode = function() {
   

    if(jQuery(".dlab-theme-mode").length>0) {
        jQuery('.dlab-theme-mode').on('click',function(){
            jQuery(this).toggleClass('active');
            if(jQuery(this).hasClass('active')){
                jQuery('body').attr('data-theme-version','dark');
                setCookie('version', 'dark');
                jQuery('#theme_version').val('dark');
                
            }else{
                jQuery('body').attr('data-theme-version','light');
                setCookie('version', 'light');
                jQuery('#theme_version').val('light');	
                        
            }
            $('.default-select').selectpicker('refresh');
        });
        var version = getCookie('version');
        
            jQuery('body').attr('data-theme-version', version);
            jQuery('.dlab-theme-mode').removeClass('active');
            setTimeout(function(){
                if(jQuery('body').attr('data-theme-version') === "dark")
                {
                    jQuery('.dlab-theme-mode').addClass('active');
                }
            },1500)
        }
   
    }
	var tagify = function(){
		if(jQuery('input[name=tagify]').length > 0){
    
			// The DOM element you wish to replace with Tagify
			var input = document.querySelector('input[name=tagify]');

			// initialize Tagify on the above input node reference
			new Tagify(input);
		}
	}

    var setCurrentYear = function () {
		const currentDate = new Date();
		let currentYear = currentDate.getFullYear();
		let elements = document.getElementsByClassName('current-year');

		for (const element of elements) {
			element.innerHTML = currentYear;
		}
	}
 
   /* Function ============ */
   return {
       init:function(){
           handleMetisMenu();
           handleAllChecked();
           handleNavigation();
           handleCurrentActive();
           handleMiniSidebar();
           handleMinHeight();
           handleDataAction();
           handleHeaderHight();
           handleMenuTabs();
           handleChatbox();
           handleBtnNumber();
           handleDzChatUser();
           handleDzFullScreen();
           handleshowPass();
           heartBlast();
           handleDzLoadMore();
           handleLightgallery();
           handleDraggableCard();
           handleCustomFileInput();
           vHeight();
           domoPanel();
           handleDatetimepicker();
           handleCkEditor();
           handleThemeMode();
           tagify();
           setCurrentYear();
       },

       load:function(){
           handlePreloader();
           handleSelectPicker();
       },
       
       resize:function(){
           vHeight();
           handleMinHeight();
       },
       
       handleMenuPosition:function(){
           handleMenuPosition();
       },
   }
   
}();

/* Document.ready Start */	
jQuery(document).ready(function() {
   $('[data-bs-toggle="popover"]').popover();
   'use strict';
   Jobick.init();
   
   $('.btn-follow').click(function(){
    if($(this).hasClass('active')){
        $(this).removeClass('active').html('<i class="la la-user me-1 fs-14"></i> Follow');
    }else{
        $(this).addClass('active').html('<i class="la la-check me-1 fs-14"></i> Following');
    }
});

$('.post-like').click(function(){
    $(this).toggleClass('active');
});

   $('a[data-bs-toggle="tab"]').click(function(){
       // todo remove snippet on bootstrap v5
       $('a[data-bs-toggle="tab"]').click(function() {
           $($(this).attr('href')).show().addClass('show active').siblings().hide();
       })
   });
   
});
/* Document.ready END */

/* Window Load START */
jQuery(window).on('load',function () {
   'use strict'; 
   Jobick.load();
   setTimeout(function(){
           Jobick.handleMenuPosition();
   }, 1000);
   
});
/*  Window Load END */
/* Window Resize START */
jQuery(window).on('resize',function () {
   'use strict'; 
   Jobick.resize();
   setTimeout(function(){
           Jobick.handleMenuPosition();
   }, 1000);
});
/*  Window Resize END */