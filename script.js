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

      $("[for='Maat 50']").show();
      $("#Maat50").show();

      $("[for='Maat 57']").show();
      $("#Maat57").show();

    }

    if(checked == "Stadsfiets heren"){

      alert('true');
      $("[for='Maat 43']").hide();
      $("#Maat43").hide();

      $("[for='Geen maat']").hide();
      $("#Geen-maat").hide();

      $("[for='Maat 50']").show();
      $("#Maat50").show();

      $("[for='Maat 57']").show();
      $("#Maat57").show();

      $("[for='Maat 61']").show();
      $("#Maat61").show();

    }

    if(checked == "Electrische fiets dames"){

      alert('true');
      $("[for='Maat 61']").hide();
      $("#Maat61").hide();

      $("[for='Geen maat']").hide();
      $("#Geen-maat").hide();

      $("[for='Maat 43']").show();
      $("#Maat43").show();

      $("[for='Maat 50']").show();
      $("#Maat50").show();

      $("[for='Maat 57']").show();
      $("#Maat57").show();

    }

    if(checked == "Electrische fiets heren"){

      alert('true');
      $("[for='Maat 43']").hide();
      $("#Maat43").hide();

      $("[for='Geen maat']").hide();
      $("#Geen-maat").hide();

      $("[for='Maat 50']").show();
      $("#Maat50").show();

      $("[for='Maat 57']").show();
      $("#Maat57").show();

      $("[for='Maat 61']").show();
      $("#Maat61").show();

    }

    if(checked == "Vouwfiets"){

      alert('true');
      $("[for='Maat 43']").hide();
      $("#Maat43").hide();

      $("[for='Maat 50']").hide();
      $("#Maat50").hide();

      $("[for='Maat 57']").hide();
      $("#Maat57").hide();

      $("[for='Maat 61']").hide();
      $("#Maat61").hide();

      $("[for='Geen maat']").show();
      $("#Geen-maat").show();

    }

  })

})