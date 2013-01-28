// Generated by CoffeeScript 1.4.0
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  this.PercentageInput = (function() {

    PercentageInput.prototype.$decimalField = null;

    function PercentageInput($el) {
      this.$el = $el;
      this._onInputChange = __bind(this._onInputChange, this);

      this.$decimalField = this.$el.clone();
      this.$decimalField.attr("type", "hidden");
      this.$el.removeAttr("name").removeAttr("id");
      this.$el.after(this.$decimalField);
      this.$el.val(this._calculatePercent(this.$decimalField.val()));
      this.$el.bind("keyup change", this._onInputChange);
    }

    PercentageInput.prototype._onInputChange = function() {
      return this._setDecimalField();
    };

    PercentageInput.prototype._setDecimalField = function() {
      this.$decimalField.val(this.decimal());
      return this.$decimalField.trigger("change");
    };

    PercentageInput.prototype.isBlank = function() {
      return this.$el.val() === "";
    };

    PercentageInput.prototype.percent = function() {
      return this.$el.val();
    };

    PercentageInput.prototype.decimal = function() {
      if (this.isBlank()) {
        return "";
      } else {
        return this.percent() * 0.01;
      }
    };

    PercentageInput.prototype._calculatePercent = function(decimal) {
      if (this.isBlank()) {
        return "";
      } else {
        return decimal * 100;
      }
    };

    PercentageInput.destroy = function($decimalField) {
      var $newDecimalField, $percentageField;
      $percentageField = $decimalField.prev(":text");
      if ($percentageField.length) {
        $percentageField.remove();
        $newDecimalField = $decimalField.clone(true);
        $newDecimalField.attr("type", "text");
        return $decimalField.replaceWith($newDecimalField);
      }
    };

    return PercentageInput;

  })();

}).call(this);