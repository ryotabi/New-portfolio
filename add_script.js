
// firstview
//headerの画像の動き
const img1 = document.getElementById('fv-img1')
const img2 = document.getElementById('fv-img2')
const img3 = document.getElementById('fv-img3')


const imgSlide = () => {
  if (img1.classList.contains('active')) {
    img1.classList.remove('active')
    img2.classList.add('active')
  } else if (img2.classList.contains('active')) {
    img2.classList.remove('active')
    img3.classList.add('active')
  } else if (img3.classList.contains('active')) {
    img3.classList.remove('active')
    img1.classList.add('active')
  }
}
setInterval(imgSlide, 5000)

// about

$(function(){
    $(".history-btn").on("click", function() {
    $(".history-wrap").slideToggle();
    return false;
    });
});


// all-modal

$(function(){
    $('.modal-open').on('click',function(){
        $('.modal').fadeIn();
        return false;
    });
    $('.modal-close').on('click',function(){
        $('.modal').fadeOut();
        return false;
    });
});

$(function(){
    $('.modal-open_dailyui-day1').on('click',function(){
        $('.modal-dailyui-day1').fadeIn();
        return false;
    });
    $('.modal-close_dailyui-day1').on('click',function(){
        $('.modal-dailyui-day1').fadeOut();
        return false;
    });
});

$(function(){
    $('.modal-open_dailyui-day2').on('click',function(){
        $('.modal-dailyui-day2').fadeIn();
        return false;
    });
    $('.modal-close_dailyui-day2').on('click',function(){
        $('.modal-dailyui-day2').fadeOut();
        return false;
    });
});

// scroll

    $('.hd-about').click(function() {
        $('body,html').animate({
          scrollTop:$('#about').offset().top
        }, 500, 'swing');
        return false;
      });

      $('.hd-skills').click(function() {
        $('body,html').animate({
          scrollTop:$('#skills').offset().top
        }, 500, 'swing');
        return false;
      });

      $('.hd-works').click(function() {
        $('body,html').animate({
          scrollTop:$('#works').offset().top
        }, 500, 'swing');
        return false;
      });

      $('.hd-comment').click(function() {
        $('body,html').animate({
          scrollTop:$('#comment').offset().top
        }, 500, 'swing');
        return false;
      });

// contact

$(function(){
    $('.email').on('click',function(){
        alert("sryotapersian@gmail.com")
    });
});




