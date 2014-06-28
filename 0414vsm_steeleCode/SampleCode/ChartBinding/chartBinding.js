ko.bindingHandlers.chart = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var chart = new google.visualization.BarChart(element);
        ko.utils.domData.set(element, 'chart', chart);
    },

    update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var value = ko.unwrap(valueAccessor());

        var options = allBindings.get('chartOptions') || {};

        var chart = ko.utils.domData.get(element, 'chart');
        chart.draw(value, options);
    }
};
