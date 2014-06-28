ko.bindingHandlers.gauge = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var chart = new google.visualization.Gauge(element);
        ko.utils.domData.set(element, 'chart', chart);
    },

    update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var value = ko.unwrap(valueAccessor());
        var caption = allBindings.get('caption') || 'Caption';

        var options = allBindings.get('gaugeOptions') || {};
        options.width = options.width || 200;
        options.height = options.height || 200;

        var data = google.visualization.arrayToDataTable([
            ['Label', 'Value'],
            [caption, value]
        ]);
        var chart = ko.utils.domData.get(element, 'chart');
        chart.draw(data, options);
    }
};
