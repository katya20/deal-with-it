var button = $(".deal-with-it-button")

$(function() {
  button.click(dealWithIt)
})

function dealWithIt() {
    $("#glasses").animate({top: "250"}, 1500, function () {
      console.log("with");
      button.val("Reset");
    })
    console.log("deal");
}