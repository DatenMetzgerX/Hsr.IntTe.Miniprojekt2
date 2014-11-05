define(['thorax'], function (Thorax) {
  Thorax.View.on({
    invalid: function (errors) {
      alert(errors[0]);
    }
  });


  return Thorax.View.extend({

  });
});
