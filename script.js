$(document).ready(function() {
  
  // reageer op change event op radio button
  $("[name='fietstype']").on("change", function(){
    var checked = $("[name='fietstype']:checked").val();
    console.log(checked);

    if(checked == "Stadsfiets dames"){
      alert('true');
      $("[for='Maat 43']").hide();
      $("#Maat43").hide();
      
      $("[for='Maat 61']").hide();
      $("#Maat61").hide();

      $("[for='Geen maat']").hide();
      $("#Geen-maat").hide();
    }

    if(checked == "Stadsfiets heren"){
      alert('true');
      $("[for='Maat 43']").hide();
      $("#Maat43").hide();

      $("[for='Geen maat']").hide();
      $("#Geen-maat").hide();
    }
  })
})