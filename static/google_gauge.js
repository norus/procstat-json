google.load('visualization', '1', {
    packages: ['gauge']             
});                                 
google.setOnLoadCallback(drawChart);
                                                      
function drawChart() {                                
    var data = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['CPU', 0],       
        ['Memory', 0],    
        ['Network rx', 0],
        ['Network tx', 0],
        ]);        
                   
    var options = { 
        width: 700, 
        height: 220,
        redFrom: 95,   
        redTo: 100,    
        yellowFrom: 90,
        yellowTo: 95,
        minorTicks: 5                                                                
    };                                                                               
    var chart = new google.visualization.Gauge(document.getElementById('gauge_div'));
    chart.draw(data, options);
                                 
    setInterval(function() {      
        data.setValue(0, 1, cpu); 
        chart.draw(data, options);
    }, 1000);               
                                 
    setInterval(function() {      
        data.setValue(1, 1, mem); 
        chart.draw(data, options);
    }, 1000);               
                                   
    setInterval(function() {       
        data.setValue(2, 1, netrx);
        chart.draw(data, options);
    }, 1000);               
                                   
    setInterval(function() {       
        data.setValue(3, 1, nettx);
        chart.draw(data, options);
    }, 1000);
               
}        
