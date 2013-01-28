# Author: Nick Giancola (@patbenatar)

class @PercentageInput

  $decimalField: null

  constructor: (@$el) ->

    # Build hidden input
    @$decimalField = @$el.clone()
    @$decimalField.attr("type", "hidden")

    # Remove attrs from visible el so server will ignore it
    @$el.removeAttr("name").removeAttr("id")

    # Insert our hidden input into DOM
    @$el.after @$decimalField

    @$el.val @_calculatePercent @$decimalField.val()

    # Listen for changes on main input
    @$el.bind "keyup change", @_onInputChange

  _onInputChange: =>
    @_setDecimalField()

  _setDecimalField: ->
    @$decimalField.val @decimal()
    @$decimalField.trigger "change"

  isBlank: ->
    @$el.val() == ""

  percent: ->
    @$el.val()

  decimal: ->
    if @isBlank()
      ""
    else
      @percent() * 0.01

  _calculatePercent: (decimal) ->
    if @isBlank()
      ""
    else
      decimal * 100

  @destroy: ($decimalField) ->
    $percentageField = $decimalField.prev(":text")
    if $percentageField.length
      $percentageField.remove()
      $newDecimalField = $decimalField.clone(true)
      $newDecimalField.attr("type", "text")
      $decimalField.replaceWith($newDecimalField)