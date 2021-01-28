const rangeFilter = () => {
  if (document.querySelector('.js-range-slider')) {
    let $range = $(".js-range-slider");
    let $inputFrom = $(".js-input-from"),
      $inputTo = $(".js-input-to"),
      instance,
      min = 10000,
      max = 250000,
      from = 0,
      to = 0;

    $range.ionRangeSlider({
      type: "double",
      min: min,
      max: max,
      from: 10000,
      to: 250000,
      onStart: updateInputs,
      onChange: updateInputs,
      step: 500,
      hide_from_to: true,
      prettify_enabled: true,
      prettify_separator: ".",
      values_separator: " - ",
      force_edges: true
    });

    instance = $range.data("ionRangeSlider");

    function updateInputs (data) {
      from = data.from;
      to = data.to;

      $inputFrom.prop("value", from);
      $inputTo.prop("value", to);
    }

    $inputFrom.on("input", function () {
      var val = $(this).prop("value");

      if (val < min) {
        val = min;
      } else if (val > to) {
        val = to;
      }

      instance.update({
        from: val
      });
    });

    $inputTo.on("input", function () {
      var val = $(this).prop("value");

      if (val < from) {
        val = from;
      } else if (val > max) {
        val = max;
      }

      instance.update({
        to: val
      });
    });
  }

}

export {rangeFilter}
