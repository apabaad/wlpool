$(window).scroll(function () {
  if ($(this).scrollTop()) {
    $('#toTop').fadeIn();
  } else {
    $('#toTop').fadeOut();
  }
});

$(document).ready(function () {
  $('#toTop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1000);
  });
});

// $(document).ready(function () {
//   var feature_title = $('.first-few-li ul li').text().split(':')[0];
//   alert(feature_title);
//   feature_title.append('<strong>');
//   feature_title.prepend('</stron+g>');
// });

$(document).ready(function () {
  $('.prod_form').on('click', function (e) {
    e.preventDefault();
    $('#form_validator').validate({
      rules: {
        email: 'required',
      },
    });
    if ($('.email-field').val().length != 0) {
      if ($('.email-field').valid()) {
        console.log('Testing');
        console.log($('.email-field').valid());
        $('#form_validator').submit();
      } else {
        console.log('else');
        console.log($('.email-field').valid());
      }
    } else {
      console.log('empty');
      console.log($('.email-field').valid());
    }
  });
});
