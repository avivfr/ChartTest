ko.bindingHandlers.slider = {
    init: function (element, valueAccessor, allBindings) {
        var options = allBindings.get('sliderOptions') || {};
        $(element).slider(options);

        var updateDuringSlide = allBindings.get('updateDuringSlide') || false;
        if( updateDuringSlide) {
            $(element).on('slide', function (event, ui) {
                valueAccessor()(ui.value);
            })
        } else {
            $(element).on('slidechange', function (event, ui) {
                valueAccessor()(ui.value);
            })
        }
    },
    update: function (element, valueAccessor) {
        $(element).slider('value', ko.unwrap(valueAccessor()));
    }
};
