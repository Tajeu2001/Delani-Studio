$(document).ready(function(){
  $(".design-img").click(function(){
    $(".design-paragraph").show();
    $(".design-img").hide();
  });

  $(".design-paragraph").click(function(){
    $(".design-img").show();
    $(".design-paragraph").hide();
  });

  $(".dev-image").click(function(){
    $(".dev-paragraph").show();
    $(".dev-image").hide();
  });

  $(".dev-paragraph").click(function(){
    $(".dev-image").show();
    $(".dev-paragraph").hide();
  });

  $(".product-img").click(function(){
    $(".product-paragraph").show();
    $(".product-img").hide();
  });

  $(".product-paragraph").click(function(){
    $(".product-img").show();
    $(".product-paragraph").hide();
  });
});


$(document).ready(function(){
  $("#image1").mouseover(function(){
    $(".overlay1").show();
  }).mouseout(function(){
    $(".overlay1").hide();
  });

  $("#image2").mouseover(function(){
    $(".overlay2").show();
  }).mouseout(function(){
    $(".overlay2").hide();
  });

  $("#image3").mouseover(function(){
    $(".overlay3").show();
  }).mouseout(function(){
    $(".overlay3").hide();
  });

  $("#image4").mouseover(function(){
    $(".overlay4").show();
  }).mouseout(function(){
    $(".overlay4").hide();
  });

  $("#image5").mouseover(function(){
    $(".overlay5").show();
  }).mouseout(function(){
    $(".overlay5").hide();
  });

  $("#image6").mouseover(function(){
    $(".overlay6").show();
  }).mouseout(function(){
    $(".overlay6").hide();
  });

  $("#image7").mouseover(function(){
    $(".overlay7").show();
  }).mouseout(function(){
    $(".overlay7").hide();
  });

  $("#image8").mouseover(function(){
    $(".overlay8").show();
  }).mouseout(function(){
    $(".overlay8").hide();
  });

});


/*$(".form").submit(function(event){
  let name=$("#name").val();
  let email=$("#email").val();
  let textArea=$("#message").val();

  $("#name").text(name);
  $("#email").text(email);
  $("#message").text(textArea);
   
  var alert="Thanks";
  $(alert).show();
})