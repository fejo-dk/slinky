!function(e){var t;e.fn.slinky=function(a){var n=e.extend({label:"Back",title:!1,speed:300,resize:!0},a),s=e(this),i=s.children().first();s.addClass("slinky-menu");var r=function(e,t){var a=Math.round(parseInt(i.get(0).style.left))||0;i.css("left",a-100*e+"%"),"function"==typeof t&&setTimeout(t,n.speed)},l=function(e){s.height(e.outerHeight())},d=function(e){};if(d(n.speed),e("a + ul",s).prev().addClass("next"),e("li > ul",s).prepend('<li class="header">'),n.title===!0&&e("li > ul",s).each(function(){var t=e(this).parent().find("a").first().text(),a=e("<h2>").text(t);e("> .header",this).append(a)}),n.title||n.label!==!0){var c=e("<a>").text(n.label).prop("href","#").addClass("back");e(".header",s).append(c)}else e("li > ul",s).each(function(){var t=e(this).parent().find("a").first().text(),a=e("<a>").text(t).prop("href","#").addClass("back");e("> .header",this).append(a)});e("a",s).on("click",function(a){if(t+n.speed>Date.now())return!1;t=Date.now();var i=e(this);(/#/.test(this.href)||i.hasClass("next"))&&a.preventDefault(),i.hasClass("next")?(s.find(".active").removeClass("active"),i.next().show().addClass("active"),r(1),n.resize&&l(i.next())):i.hasClass("back")&&(r(-1,function(){s.find(".active").removeClass("active"),i.parent().parent().hide().parentsUntil(s,"ul").first().addClass("active")}),n.resize&&l(i.parent().parent().parentsUntil(s,"ul")))}),this.jump=function(t,a){t=e(t);var i=s.find(".active");i=i.length>0?i.parentsUntil(s,"ul").length:0,s.find("ul").removeClass("active").hide();var c=t.parentsUntil(s,"ul");c.show(),t.show().addClass("active"),a===!1&&d(0),r(c.length-i),n.resize&&l(t),a===!1&&d(n.speed)},this.home=function(t){t===!1&&d(0);var a=s.find(".active"),i=a.parentsUntil(s,"li").length;i>0&&(r(-i,function(){a.removeClass("active")}),n.resize&&l(e(a.parentsUntil(s,"li").get(i-1)).parent())),t===!1&&d(n.speed)},this.destroy=function(){e(".header",s).remove(),e("a",s).removeClass("next").off("click"),s.removeClass("slinky-menu").css("transition-duration",""),i.css("transition-duration","")};var h=s.find(".active");return h.length>0&&(h.removeClass("active"),this.jump(h,!1)),this}}(jQuery);