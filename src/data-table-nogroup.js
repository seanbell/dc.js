dc.dataTableNoGroup = function(parent, chartGroup) {
    var _chart = dc.baseChart({});

    var _size = 25;
    var _columns = [];
    var _sortBy = function(d) {
        return d;
    };
    var _order = d3.ascending;
    var _sort;

    _chart.doRender = function() {
        _chart.selectAll("tr").remove();

        renderRows();

        return _chart;
    };

    function renderRows() {
		var entries = _chart.dimension().top(_size);

        var rows = _chart.root()
            .selectAll("tr")
            .data(entries);

        var rowEnter = rows.enter()
            .append("tr");

        for (var i = 0; i < _columns.length; ++i) {
            rowEnter.append("td")
				.html(_columns[i]);
        }

        rows.exit().remove();

        return rows;
    }

    _chart.doRedraw = function() {
        return _chart.doRender();
    };

    _chart.size = function(s) {
        if (!arguments.length) return _size;
        _size = s;
        return _chart;
    };

    _chart.columns = function(_) {
        if (!arguments.length) return _columns;
        _columns = _;
        return _chart;
    };

    _chart.sortBy = function(_) {
        if (!arguments.length) return _sortBy;
        _sortBy = _;
        return _chart;
    };

    _chart.order = function(_) {
        if (!arguments.length) return _order;
        _order = _;
        return _chart;
    };

    return _chart.anchor(parent, chartGroup);
};
