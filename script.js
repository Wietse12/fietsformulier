$(document).ready(function() {
  
  // reageer op change event op radio button
  $("[name='fietstype']").on("change", function(){
    var checked = $("[name='fietstype']:checked").val();
    console.log(checked);

    if(checked == "Stadsfiets dames"){
      alert('true');
      $("[for='Maat 61']").hide();
      $("#Maat61").hide();

    }else{
      alert('not true');
    }

  })



});