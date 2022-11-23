/*
Template: Datum - Responsive Bootstrap 4 Admin Dashboard Template
Author: iqonic.design
Design and Developed by: iqonic.design
NOTE: This file contains the styling for responsive Template.
*/

/*----------------------------------------------
Index Of Script
------------------------------------------------

:: Tooltip
:: Fixed Nav
:: Magnific Popup
:: Ripple Effect
:: Sidebar Widget
:: FullScreen
:: Page Loader
:: Counter
:: Progress Bar
:: Page Menu
:: Close  navbar Toggle
:: Mailbox
:: chatuser
:: chatuser main
:: Chat start
:: todo Page
:: user toggle
:: Data tables
:: Form Validation
:: Active Class for Pricing Table
:: Flatpicker
:: Scrollbar
:: checkout
:: Datatables
:: image-upload
:: video
:: dark mode
:: Button
:: Pricing tab
:: SVG Animation
:: Date Picker
:: Choies.js
------------------------------------------------
Index Of Script
----------------------------------------------*/

(function(jQuery) {



    "use strict";

    jQuery(document).ready(function() {

        /*---------------------------------------------------------------------
        Tooltip
        -----------------------------------------------------------------------*/
        jQuery('[data-toggle="popover"]').popover();
        jQuery('[data-toggle="tooltip"]').tooltip();

        /*---------------------------------------------------------------------
        Fixed Nav
        -----------------------------------------------------------------------*/

        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 0) {
                $('.iq-top-navbar').addClass('fixed');
            } else {
                $('.iq-top-navbar').removeClass('fixed');
            }
        });

        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 0) {
                $('.white-bg-menu').addClass('sticky-menu');
            } else {
                $('.white-bg-menu').removeClass('sticky-menu');
            }
        });


       /*---------------------------------------------------------------------
        Sidebar Widget
        -----------------------------------------------------------------------*/

        jQuery(document).on("click", '.side-menu > li > a', function() {
            jQuery('.side-menu > li > a').parent().removeClass('active');
            jQuery(this).parent().addClass('active');
        });

        // Active menu
        var parents = jQuery('li.active').parents('.submenu.collapse');

        parents.addClass('show');


        parents.parents('li').addClass('active');
        jQuery('li.active > a[aria-expanded="false"]').attr('aria-expanded', 'true');

        /*---------------------------------------------------------------------
        FullScreen
        -----------------------------------------------------------------------*/
        jQuery(document).on('click', '.full-screen', function() {
            let elem = jQuery(this);
            elem.find('i').addClass('d-none');
            elem.find('i').addClass('d-none');
            if (!document.fullscreenElement &&
                !document.mozFullScreenElement && // Mozilla
                !document.webkitFullscreenElement && // Webkit-Browser
                !document.msFullscreenElement) { // MS IE ab version 11
                    elem.find('.min').removeClass('d-none');
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullscreen) {
                    document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                } else if (document.documentElement.msRequestFullscreen) {
                    document.documentElement.msRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                }
            } else {
                elem.find('.max').removeClass('d-none');
                if (document.cancelFullScreen) {
                    document.cancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            }
        });


        /*---------------------------------------------------------------------
        Page Loader
        -----------------------------------------------------------------------*/
        jQuery("#load").fadeOut();
        jQuery("#loading").delay().fadeOut("");


        /*---------------------------------------------------------------------
        Counter
        -----------------------------------------------------------------------*/
        if (window.counterUp !== undefined) {
            const counterUp = window.counterUp["default"]
            const $counters = $(".counter");
            $counters.each(function (ignore, counter) {
                var waypoint = new Waypoint( {
                    element: $(this),
                    handler: function() {
                        counterUp(counter, {
                            duration: 1000,
                            delay: 10
                        });
                        this.destroy();
                    },
                    offset: 'bottom-in-view',
                } );
            });
        }


        /*---------------------------------------------------------------------
        Progress Bar
        -----------------------------------------------------------------------*/
        jQuery('.iq-progress-bar > span').each(function() {
            let progressBar = jQuery(this);
            let width = jQuery(this).data('percent');
            progressBar.css({
                'transition': 'width 2s'
            });
            setTimeout(function() {
                    progressBar.css('width', width + '%');
            }, 100);
        });

        jQuery('.progress-bar-vertical > span').each(function () {
            let progressBar = jQuery(this);
            let height = jQuery(this).data('percent');
            progressBar.css({
                'transition': 'height 2s'
            });
            setTimeout(function () {
                    progressBar.css('height', height + '%');
            }, 100);
        });


        /*---------------------------------------------------------------------
        Page Menu
        -----------------------------------------------------------------------*/
        jQuery(document).on('click', '.wrapper-menu', function() {
            jQuery(this).toggleClass('open');
        });

        jQuery(document).on('click', ".wrapper-menu", function() {
            jQuery("body").toggleClass("sidebar-main");
        });


      /*---------------------------------------------------------------------
       Close  navbar Toggle
       -----------------------------------------------------------------------*/

        jQuery('.close-toggle').on('click', function () {
            jQuery('.h-collapse.navbar-collapse').collapse('hide');
        });

        /*---------------------------------------------------------------------
        user toggle
        -----------------------------------------------------------------------*/
        jQuery(document).on('click', '.user-toggle', function() {
            jQuery(this).parent().addClass('show-data');
        });

        jQuery(document).on('click', ".close-data", function() {
            jQuery('.user-toggle').parent().removeClass('show-data');
        });
        jQuery(document).on("click", function(event){
        var $trigger = jQuery(".user-toggle");
        if($trigger !== event.target && !$trigger.has(event.target).length){
            jQuery(".user-toggle").parent().removeClass('show-data');
        }
        });

        /*---------------------------------------------------------------------
        Data tables
        -----------------------------------------------------------------------*/
        if($.fn.DataTable){
            const table = $('.data-table').DataTable();
        }


        /*---------------------------------------------------------------------
        Form Validation
        -----------------------------------------------------------------------*/

        // Example starter JavaScript for disabling form submissions if there are invalid fields
        window.addEventListener('load', function() {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener('submit', function(event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }, false);

      /*---------------------------------------------------------------------
       Active Class for Pricing Table
       -----------------------------------------------------------------------*/
      jQuery("#my-table tr th").click(function () {
        jQuery('#my-table tr th').children().removeClass('active');
        jQuery(this).children().addClass('active');
        jQuery("#my-table td").each(function () {
          if (jQuery(this).hasClass('active')) {
            jQuery(this).removeClass('active')
          }
        });
        var col = jQuery(this).index();
        jQuery("#my-table tr td:nth-child(" + parseInt(col + 1) + ")").addClass('active');
      });


        /*---------------------------------------------------------------------
        Scrollbar
        -----------------------------------------------------------------------*/

        jQuery('.data-scrollbar').each(function () {
            var attr = $(this).attr('data-scroll');
            if (typeof attr !== typeof undefined && attr !== false){
            let Scrollbar = window.Scrollbar;
            var a = jQuery(this).data('scroll');
            Scrollbar.init(document.querySelector('div[data-scroll= "' + a + '"]'));
            }
        });


      /*---------------------------------------------------------------------
      image-upload
      -----------------------------------------------------------------------*/

      $('.form_gallery-upload').on('change', function() {
          var length = $(this).get(0).files.length;
          var galleryLabel  = $(this).attr('data-name');

          if( length > 1 ){
            $(galleryLabel).text(length + " files selected");
          } else {
            $(galleryLabel).text($(this)[0].files[0].name);
          }
        });

    /*---------------------------------------------------------------------
        video
      -----------------------------------------------------------------------*/
      $(document).ready(function(){
      $('.form_video-upload input').change(function () {
        $('.form_video-upload p').text(this.files.length + " file(s) selected");
      });
    });
    /*---------------------------------------------------------------------
        dark mode
      -----------------------------------------------------------------------*/
      const urlParams = new URLSearchParams(window.location.search);
      const mode = urlParams.get('dark');
      if (mode !== null) {
          $('body').removeClass('sidebar-dark', 'sidebar-light')
          switch (mode) {
              case "true":
                  $('body').addClass('dark')
              break;
              case "false":
                  $('body').removeClass('sidebar-dark', 'sidebar-light')
              break;
              default:
                  $('body').removeClass('sidebar-dark').removeClass('sidebar-light')
                  break;
          }
      }


        /*---------------------------------------------------------------------
        Button
        -----------------------------------------------------------------------*/

        jQuery('.qty-btn').on('click',function(){
          var id = jQuery(this).attr('id');

          var val = parseInt(jQuery('#quantity').val());

          if(id == 'btn-minus')
          {
            if(val != 0)
            {
              jQuery('#quantity').val(val-1);
            }
            else
            {
              jQuery('#quantity').val(0);
            }

          }
          else
          {
            jQuery('#quantity').val(val+1);
          }
        });

    });


    $(document).on('click', '[data-toggel-extra="side-nav"]', function () {
        const pannel = $(this).attr('data-expand-extra')
        $(pannel).addClass('active')
    })

    $(document).on('click', '[data-toggel-extra="side-nav-close"]', function () {
        const pannel = $(this).attr('data-expand-extra')
        $(pannel).removeClass('active')
    })

    $(document).on('click', '[data-toggel-extra="right-sidenav"]', function () {
        const target = $(this).data('target')
        $(target).addClass('active')
    })

    $(document).on('click', '[data-extra-dismiss="right-sidenav"]', function () {
        $(this).closest('.right-sidenav').removeClass('active')
    })

    $(document).on('click', '[data-toggle="end-call"]', function(){
        $(this).closest('.tab-pane').removeClass('active').removeClass('show')
        $($(this).attr('data-target')).tab('show')
        $('.chat-action').find('[data-toggle="tab"]').removeClass('active')
    })

    $(document).on('click', '[data-toggle-extra="tab"]', function () {
        const target = $(this).attr('data-target-extra')
        $('[data-toggle-extra="tab-content"]').removeClass('active')
        $(target).addClass('active')
        $(this).parent().find('.active').removeClass('active')
        $(this).addClass('active')
    })

    $('emoji-picker').on('emoji-click', function(e){
        $(e.target.dataset.targetInput).val($(e.target.dataset.targetInput).val()+e.detail.unicode)
    })

    $('.dropdown-menu').on('click', function(event){
        event.stopPropagation();
    });

    var board =  $('.draggable-item');

    var selector = [];
    if(board.length > 0 )
    {
        for(var i = 0 ; i < board.length ; i++) {
            selector.push(document.querySelector('#draggable-item-'+i));
            selector.push(document.querySelector('#list-draggable-item-'+i));
        }
    }
    dragula( selector ).on('drop', function(el) {
        $(el).addClass(' animate__animated animate__rubberBand')
        setTimeout(function () { 
            $(el).removeClass(' animate__animated animate__rubberBand')
        }, 1000)
    });

    // calender 1 js
    var calendar1;
    if (jQuery('#calendar1').length) {
        var calendarEl = document.getElementById('calendar1');

            calendar1 = new FullCalendar.Calendar(calendarEl, {
                selectable: true,
                plugins: ["timeGrid", "dayGrid", "list", "interaction"],
                timeZone: "UTC",
                defaultView: "dayGridMonth",
                contentHeight: "auto",
                eventLimit: true,
                dayMaxEvents: 4,
                header: {
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                },
                dateClick: function (info) {
                    $('#schedule-start-date').val(info.dateStr)
                    $('#schedule-end-date').val(info.dateStr)
                    $('#date-event').modal('show')
                },
                events: [
                    {
                        title: 'Click for Google',
                        url: 'http://google.com/',
                        start: moment(new Date(), 'YYYY-MM-DD').add(-20, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
                        color: '#4731b6'
                    },
                    {
                        title: 'All Day Event',
                        start: moment(new Date(), 'YYYY-MM-DD').add(-18, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
                        color: '#465af7'
                    },
                    {
                        title: 'Long Event',
                        start: moment(new Date(), 'YYYY-MM-DD').add(-16, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
                        end: moment(new Date(), 'YYYY-MM-DD').add(-13, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
                        color: '#7858d7'
                    },
                    {
                        groupId: '999',
                        title: 'Repeating Event',
                        start: moment(new Date(), 'YYYY-MM-DD').add(-14, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
                        color: '#465af7'
                    },
                    {
                        groupId: '999',
                        title: 'Repeating Event',
                        start: moment(new Date(), 'YYYY-MM-DD').add(-12, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
                        color: '#5baa73'
                    },
                    {
                        groupId: '999',
                        title: 'Repeating Event',
                        start: moment(new Date(), 'YYYY-MM-DD').add(-10, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
                        color: '#01041b'
                    },
                    {
                        title: 'Birthday Party',
                        start: moment(new Date(), 'YYYY-MM-DD').add(-8, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
                        color: '#4731b6'
                    },
                    {
                        title: 'Meeting',
                        start: moment(new Date(), 'YYYY-MM-DD').add(-6, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
                        color: '#15ca92'
                    },
                    {
                        title: 'Birthday Party',
                        start: moment(new Date(), 'YYYY-MM-DD').add(-5, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
                        color: '#f4a965'
                    },
                    {
                        title: 'Birthday Party',
                        start: moment(new Date(), 'YYYY-MM-DD').add(-2, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
                        color: '#ea643f'
                    },

                    {
                        title: 'Meeting',
                        start: moment(new Date(), 'YYYY-MM-DD').add(0, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
                        color: '#15ca92'
                    },
                    {
                        title: 'Click for Google',
                        url: 'http://google.com/',
                        start: moment(new Date(), 'YYYY-MM-DD').add(0, 'days').format('YYYY-MM-DD') + 'T06:30:00.000Z',
                        color: '#4731b6'
                    },
                    {
                        groupId: '999',
                        title: 'Repeating Event',
                        start: moment(new Date(), 'YYYY-MM-DD').add(0, 'days').format('YYYY-MM-DD') + 'T07:30:00.000Z',
                        color: '#5baa73'
                    },
                    {
                        title: 'Birthday Party',
                        start: moment(new Date(), 'YYYY-MM-DD').add(0, 'days').format('YYYY-MM-DD') + 'T08:30:00.000Z',
                        color: '#f4a965'
                    },
                    {
                        title: 'Doctor Meeting',
                        start: moment(new Date(), 'YYYY-MM-DD').add(0, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
                        color: '#f4a965'
                    },
                    {
                        title: 'All Day Event',
                        start: moment(new Date(), 'YYYY-MM-DD').add(1, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
                        color: '#465af7'
                    },
                    {
                        groupId: '999',
                        title: 'Repeating Event',
                        start: moment(new Date(), 'YYYY-MM-DD').add(8, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
                        color: '#465af7'
                    },
                    {
                        groupId: '999',
                        title: 'Repeating Event',
                        start: moment(new Date(), 'YYYY-MM-DD').add(10, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
                        color: '#5baa73'
                    }
                ]
            });
            calendar1.render();

        $(document).on("submit", "#submit-schedule", function (e) {
            e.preventDefault()
            const title = $(this).find('#schedule-title').val()
            const startDate = moment(new Date($(this).find('#schedule-start-date').val()), 'YYYY-MM-DD').format('YYYY-MM-DD') + 'T05:30:00.000Z'
            const endDate = moment(new Date($(this).find('#schedule-end-date').val()), 'YYYY-MM-DD').format('YYYY-MM-DD') + 'T05:30:00.000Z'
            const color = $(this).find('#schedule-color').val()
            const event = {
                title: title,
                start: startDate || '2020-12-22T02:30:00',
                end: endDate || '2020-12-12T14:30:00',
                color: color || '#7858d7'
            }
            $(this).closest('#date-event').modal('hide')
            calendar1.addEvent(event)
        })
    }

    const progressBar = document.getElementsByClassName('circle-progress')
    Array.from(progressBar, (elem) => {
        const minValue = elem.getAttribute('data-min-value')
        const maxValue = elem.getAttribute('data-max-value')
        const value = elem.getAttribute('data-value')
        const  type = elem.getAttribute('data-type')
        if (elem.getAttribute('id') !== '' && elem.getAttribute('id') !== null) {
            new CircleProgress('#'+elem.getAttribute('id'), {
            min: minValue,
        max: maxValue,
        value: value,
        textFormat: type,
        });
        }
    })
    /*---------------------------------------------------------------------
            Vanila Datepicker
    -----------------------------------------------------------------------*/
    const datepickers = document.querySelectorAll('.vanila-datepicker')
    Array.from(datepickers, (elem) => {
    new Datepicker(elem)
    })
    const daterangePickers = document.querySelectorAll('.vanila-daterangepicker')
    Array.from(daterangePickers, (elem) => {
    new DateRangePicker(elem)
    })

    /*---------------------------------------------------------------------
            Choies.js
    -----------------------------------------------------------------------*/
    const choies = document.querySelectorAll('.choicesjs')
    Array.from(choies,(elem) => {
        new Choices(elem, {
            removeItemButton: true,
        })
    })
})(jQuery);

/*
 *  Vanilla Javascript timepicker that allows setting of minTime and maxTime
 *
 *        View below code for a list of available methods
 *
 *  Developer: Lance Jernigan
 *  Version: 1.0.4
 *
 */

/*
 *  Setup our arguments to pass to our timepicker
 *
 *  @args - format (boolean) - Whether to format the input value or leave in 24 hour
 *          minTime (string) - Minimum time the timepicker should reach (any valid time string Javascript's Date() will accept)
 *          maxTime (string) - Maximum time the timepicker should reach (any valid time string Javascript's Date() will accept)
 *          meridiem (boolean) - Whether the timepicker should display the meridiem (defaults to true if format is true and false if format is false)
 *          arrowColor (string) - Any valid color (Hex, RGB, RGBA, etc.) to use for the arrows
 *
 */

var args = {
	// format: true,
	// minTime: '2:00 am',
	// maxTime: '1:00 pm',
	// meridiem: false
};

/*
 *  Create a new timepicker for our input and pass it our args
 */

var tpicker = new timepicker(document.querySelector("input.timepicker"), args);

/*
 *  Starts our Timepicker Functionality
 */

function timepicker(element, args) {
	this.initialized = false;
	this.element = null;
	this.elements = {};
	this.timepicker = null;
	this.time = new Date();
	this.settings = {
		format: true,
		meridiem: true,
		minTime: new Date(new Date().toDateString() + " 00:00"),
		maxTime: new Date(new Date().toDateString() + " 24:00"),
		onChange: false
	};
	this.active = false;

	this.updateSettings = function (args) {
		args = args || {};

		for (a = 0; a < Object.keys(args).length; a++) {
			var key = Object.keys(args)[a];
			var val = args[Object.keys(args)[a]];

			this.settings[key] = args[Object.keys(args)[a]];
		}

		if (!this.settings.format && typeof args.meridiem == "undefined") {
			this.settings.meridiem = false;
		}

		this.settings.meridiem = this.settings.format ? true : this.settings.meridiem;
		this.settings.minTime = !(
			this.settings.minTime.getDate !== undefined ||
			this.settings.minTime.getDate !== null
		)
			? new Date(new Date().toDateString() + " " + this.settings.minTime)
			: new Date(new Date().toDateString() + " 00:00");
		this.settings.maxTime = !(
			this.settings.maxTime.getDate !== undefined ||
			this.settings.maxTime.getDate !== null
		)
			? new Date(new Date().toDateString() + " " + this.settings.maxTime)
			: this.settings.maxTime;

		if (this.settings.maxTime.toString() == this.settings.minTime.toString()) {
			var maxTime = new Date(this.settings.minTime);

			maxTime.setHours(maxTime.getHours() + 24);

			this.settings.maxTime = maxTime;
		}

		if (this.element.value) {
			var newTime = new Date(new Date().toDateString() + " " + this.element.value);

			this.time = !isNaN(newTime.getTime()) ? newTime : this.time;
		}

		this.time.setMilliseconds(0);

		if (Object.keys(this.elements).length) {
			this.updateTime("minute", true, 0);

			this.render();
		}

		if (!this.validateTime()) {
			this.time = this.settings.minTime
				? this.settings.minTime
				: this.settings.maxTime;
		}
	};

	this.buildTimepicker = function () {
		var wrapper = document.createElement("div");
		var elements = ["hour", "minute", "meridiem"];

		wrapper.className = "timepicker__wrapper";
		wrapper.setAttribute("id", "tp_" + (Math.floor(Math.random() * 100) + 1));

		if (!Object.keys(this.elements).length) {
			for (e = 0; e < elements.length; e++) {
				this.elements[elements[e]] = document.createElement("div");
				this.elements[elements[e]].className = "timepicker__" + elements[e];

				var up = document.createElement("div");
				up.appendChild(document.createElement("div"));
				var display = document.createElement("p");
				var down = document.createElement("div");
				down.appendChild(document.createElement("div"));

				up.className = "timepicker__button timepicker__button__up";
				display.className = "display";
				down.className = "timepicker__button timepicker__button__down";

				if (this.settings.arrowColor) {
					up.childNodes[0].style["border-bottom-color"] = this.settings.arrowColor;
					down.childNodes[0].style["border-top-color"] = this.settings.arrowColor;
				}

				this.elements[elements[e]].appendChild(up);
				this.elements[elements[e]].appendChild(display);
				this.elements[elements[e]].appendChild(down);
			}
		}

		this.timepicker = wrapper;

		this.element.parentNode.insertBefore(wrapper, this.element.nextSibling);

		this.addListeners();

		this.render();
	};

	this.render = function () {
		var wrapper = this.cleanWrapper(this.timepicker);

		if (this.settings.meridiem) {
			wrapper.className =
				wrapper.className.indexOf(" timepicker__wrapper-full") >= 0
					? wrapper.className
					: wrapper.className + " timepicker__wrapper-full";
		}

		for (e = 0; e < Object.keys(this.elements).length; e++) {
			var key = Object.keys(this.elements)[e];
			var element = this.elements[key];
			var func = "get" + key.charAt(0).toUpperCase() + key.slice(1);

			element.querySelector(".display").innerText = this[func]();

			if (Object.keys(this.elements)[e] == "meridiem" && !this.settings.meridiem) {
				continue;
			}

			wrapper.appendChild(element);
		}

		this.timepicker = wrapper;

		this.updateInput();
	};

	this.cleanWrapper = function (wrapper) {
		while (wrapper.hasChildNodes()) {
			wrapper.removeChild(wrapper.lastChild);
		}

		return wrapper;
	};

	this.handleClick = function (e) {
		var element = e.currentTarget;

		var parent = element.parentNode.className.replace("timepicker__", "");
		var add = element.className.indexOf("up") !== -1 ? true : false;

		this.updateTime(parent, add);
	};

	this.validateInput = function (e) {
		var value = e.currentTarget.value;
		var date = value.length
			? new Date(new Date().toDateString() + " " + value)
			: false;

		if (date && !isNaN(date.getTime())) {
			this.time = date;
		}

		if (!this.validateTime()) {
			var after = date.getTime() > this.settings.maxTime.getTime();
			date = after
				? new Date(this.settings.maxTime)
				: new Date(this.settings.minTime);
			after
				? date.setMinutes(date.getMinutes() - 1)
				: date.setMinutes(date.getMinutes() + 1);

			this.time = date;
		}

		this.render();
	};

	this.updateTime = function (method, add, amount) {
		var amount = amount || 1;

		switch (method) {
			case "meridiem":
				this.time.getHours() > 12
					? this.time.setHours(this.time.getHours() - 12)
					: this.time.setHours(this.time.getHours() + 12);

				break;

			default:
				if (add) {
					this.add(method, amount);
				} else {
					this.subtract(method, amount);
				}
		}

		if (!this.validateTime()) {
			var date = add
				? new Date(this.settings.minTime)
				: new Date(this.settings.maxTime);
			add
				? date.setMinutes(date.getMinutes() + 1)
				: date.setMinutes(date.getMinutes() - 1);

			this.time = date;
		}

		this.render();
	};

	this.add = function (method, amount) {
		var amount = amount || 1;

		switch (method) {
			case "minute":
				this.time.setMinutes(this.time.getMinutes() + amount);

				break;

			case "hour":
				this.time.setHours(this.time.getHours() + amount);

				break;
		}
	};

	this.subtract = function (method, amount) {
		var amount = amount || 1;

		switch (method) {
			case "minute":
				this.time.setMinutes(this.time.getMinutes() - amount);

				break;

			case "hour":
				this.time.setHours(this.time.getHours() - amount);

				break;
		}
	};

	this.validateTime = function () {
		if (this.settings.minTime) {
			this.settings.maxTime = this.settings.maxTime;

			this.time.setDate(new Date().getDate());

			return (
				this.time.getTime() < this.settings.maxTime.getTime() &&
				this.time.getTime() > this.settings.minTime.getTime()
			);
		}

		return true;
	};

	this.updateInput = function (parent) {
		if (this.initialized) {
			this.element.value = this.buildString();
		}
	};

	this.buildString = function () {
		return (
			this.getHour() +
			":" +
			this.getMinute() +
			" " +
			this.getMeridiem()
		).trim();
	};

	this.toggleActive = function (e) {
		if (e.target == this.element) {
			if (!this.initialized) {
				this.initialized = true;

				this.updateInput();
			}

			this.updateBounds(this.timepicker, e.target);

			this.active = true;
		} else if (
			e.target.className.indexOf("timepicker__") == -1 &&
			e.target.parentElement.className.indexOf("timepicker__") == -1
		) {
			this.active = false;
		}

		this.timepicker.className = this.active
			? this.timepicker.className.indexOf(" timepicker__wrapper-active") >= 0
				? this.timepicker.className
				: this.timepicker.className + " timepicker__wrapper-active"
			: this.timepicker.className.replace(" timepicker__wrapper-active", "");
	};

	this.updateBounds = function () {
		var bounds = this.element.getBoundingClientRect();

		this.timepicker.style.top =
			this.element.offsetTop + this.element.innerHeight + "px";
		this.timepicker.style.width = bounds.width + "px";
	};

	this.addListeners = function () {
		var elements = Object.keys(this.elements);

		for (e = 0; e < elements.length; e++) {
			var element = this.elements[elements[e]];
			var buttons = [].slice.call(element.childNodes).filter(function (node) {
				return node.className.indexOf("button") !== -1;
			});

			for (c = 0; c < buttons.length; c++) {
				var button = buttons[c];

				button.addEventListener("click", this.handleClick.bind(this));
			}
		}

		this.element.addEventListener("change", this.validateInput.bind(this));
		document.body.addEventListener("click", this.toggleActive.bind(this));
		window.addEventListener("resize", this.updateBounds.bind(this));
	};

	this.getTime = function () {
		return this.time;
	};

	this.getHour = function () {
		if (!this.settings.format) {
			return this.time.getHours() < 10
				? "0" + this.time.getHours()
				: this.time.getHours();
		} else {
			return this.time.getHours() > 12
				? this.time.getHours() % 12
				: this.time.getHours() == 0
				? 12
				: this.time.getHours();
		}
	};

	this.getMinute = function () {
		var minutes = this.time.getMinutes();

		return minutes < 10 ? "0" + minutes : minutes;
	};

	this.getMeridiem = function () {
		if (!this.settings.meridiem) {
			return "";
		} else {
			return this.time.getHours() >= 12 ? "pm" : "am";
		}
	};

	this.init = function () {
		if (element.length) {
			console.warn(
				"Timepicker selector must be for a specific element, not a list of elements."
			);

			return;
		}

		this.element = element;

		this.updateSettings(args);
		this.buildTimepicker();
	};

	this.init();
}

/*
 *  Timepicker Methods
 *
 *  updateSettings()
 *
 *     Update the settings originally passed to your timepicker
 *
 *     @parameters - args (a list of available arguments is provided above the code)
 *
 *
 *  updateTime()
 *
 *     Update the time based on parameters passed
 *
 *     @parameters - method (string) - What method to affect ('hour', 'minute', 'meridiem')
 *                   add (boolean) - True to add amount, false to subtract amount
 *                   amount /optional/ (number) - Number to add or subtract from method (defaults to 1)
 *
 *
 *  add()
 *
 *     Add amount to selected method
 *
 *     @parameters - method (string) - What method to affect ('hour', 'minute')
 *                   amount /optional/ (number) - Number to add to method (defaults to 1)
 *
 *
 *  subtract()
 *
 *     subtract amount from selected method
 *
 *     @parameters - method (string) - What method to affect ('hour', 'minute')
 *                   amount /optional/ (number) - Number to subtract from method (defaults to 1)
 *
 *
 *  buildString()
 *
 *     Returns the string that will be sent to the input
 *
 *
 *  getTime()
 *
 *     Returns the date object for the current selected time
 *
 *
 *  getHour()
 *
 *     Returns the current hour for the timepicker
 *
 *
 *  getMinute()
 *
 *     Returns the current Minute for the timepicker
 *
 *
 *  getMeridiem()
 *
 *     Returns the current Meridiem for the timepicker
 *
 *
 *  get
 */
tpicker.updateSettings({ minTime: "2:00 am" });

