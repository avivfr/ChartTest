define(function() {
    var self = {
        hour : ko.observable(0),
        minute : ko.observable(0),
        second : ko.observable(0),
    };

    $(function () {
        var vm = new ChartViewModel();
        ko.applyBindings(vm);
        vm.loop();
    });

    self.clockData = ko.computed(function () {
        var data = google.visualization.arrayToDataTable([
            ['Values', 'Hour', 'Minute', 'Second'],
            ['Time', self.hour(), self.minute(), self.second()]
        ]);
        var view = new google.visualization.DataView(data);
        var annotationOptions = function (sourceCol) {
            return {
                calc: 'stringify',
                type: 'string',
                sourceColumn: sourceCol,
                role: 'annotation'
            };
        };

        view.setColumns([0, 1, new annotationOptions(1), 2, new annotationOptions(2), 3, new annotationOptions(3)]);
        return view;
    });

    self.update = function() {
        var d = self.getDate();
        self.hour(d.getHours());
        self.minute(d.getMinutes());
        self.second(d.getSeconds());
    };

    self.loop = function() {
        window.setTimeout(function() {
            self.update();
            self.loop();
        }, 1000);
    };

    self.update();


/*    var chartData = [{
        "country": "USA",
        "visits": 4252
    }, {
        "country": "China",
        "visits": 1882
    }, {
        "country": "Japan",
        "visits": 1809
    }, {
        "country": "Germany",
        "visits": 1322
    }, {
        "country": "UK",
        "visits": 1122
    }, {
        "country": "France",
        "visits": 1114
    }, {
        "country": "India",
        "visits": 984
    }, {
        "country": "Spain",
        "visits": 711
    }, {
        "country": "Netherlands",
        "visits": 665
    }, {
        "country": "Russia",
        "visits": 580
    }, {
        "country": "South Korea",
        "visits": 443
    }, {
        "country": "Canada",
        "visits": 441
    }, {
        "country": "Brazil",
        "visits": 395
    }, {
        "country": "Italy",
        "visits": 386
    }, {
        "country": "Australia",
        "visits": 384
    }, {
        "country": "Taiwan",
        "visits": 338
    }, {
        "country": "Poland",
        "visits": 328
    }];

    self.activate = function() {
        AmCharts.ready(function() {
            // chart code will go here
            var chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartData;
            chart.categoryField = "country";

            var graph = new AmCharts.AmGraph();
            graph.valueField = "visits";
            graph.type = "column";
            chart.addGraph(graph);

            chart.write('chartdiv');
        });
    }; */
    return self;
})

self.prototype.getDate = function () {
    return new Date();
};