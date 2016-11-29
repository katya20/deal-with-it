var button = $(".deal-with-it-button")

$(function() {
  button.click(dealWithIt)
})

function dealWithIt() {
    $("#glasses").animate({top: "280", left: "70"}, 1500, function () {
      console.log("with");
      button.val("Reset");
    })
    console.log("deal");
}