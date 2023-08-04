google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(getSpreadsheetData);

function getSpreadsheetData() {
    var spreadsheetId = '1qYOWCRXEghUBA5hYiB6_iG8E-GxPG_YHIUnQtCANUoQ';
    var range = 'Sheet1!A1:D11';

    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/' + spreadsheetId + '/gviz/tq?gid=0&range=' + range);
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
    if (response.isError()) {
        console.error('Error: ' + response.getMessage());
        return;
    }

    var data = response.getDataTable();
    drawCharts(data);
}

function drawCharts(data) {
    var options = {
        title: 'Grafik Penjualan Makanan ',
        width: 400,
        height: 300
    };

    var chart1 = new google.visualization.AreaChart(document.getElementById('chart1'));
    chart1.draw(data, options);

    var chart2 = new google.visualization.PieChart(document.getElementById('chart2'));
    chart2.draw(data, options);

    var chart2 = new google.visualization.ColumnChart(document.getElementById('chart3'));
    chart2.draw(data, options);

    var chart2 = new google.visualization.BarChart(document.getElementById('chart4'));
    chart2.draw(data, options);

    // Tambahkan jenis grafik lain dan elemen div untuk grafik lainnya
}
