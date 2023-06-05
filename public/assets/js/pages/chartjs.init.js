!function(r){"use strict";var o=function(){};o.prototype.respChart=function(o,e,a,t){Chart.defaults.global.defaultFontColor="#9295a4",Chart.defaults.scale.gridLines.color="rgba(166, 176, 207, 0.1)";var n=o.get(0).getContext("2d"),i=r(o).parent();function l(){switch(o.attr("width",r(i).width()),e){case"Line":new Chart(n,{type:"line",data:a,options:t});break;case"Doughnut":new Chart(n,{type:"doughnut",data:a,options:t});break;case"Pie":new Chart(n,{type:"pie",data:a,options:t});break;case"Bar":new Chart(n,{type:"bar",data:a,options:t});break;case"Radar":new Chart(n,{type:"radar",data:a,options:t});break;case"PolarArea":new Chart(n,{data:a,type:"polarArea",options:t})}}r(window).resize(l),l()},o.prototype.init=function(){this.respChart(r("#lineChart"),"Line",{labels:["January","February","March","April","May","June","July","August","September","October"],datasets:[{label:"Sales Analytics",fill:!0,lineTension:.5,backgroundColor:"rgba(91, 140, 232, 0.2)",borderColor:"#5b73e8",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#5b73e8",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#5b73e8",pointHoverBorderColor:"#fff",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[65,59,80,81,56,55,40,55,30,80]},{label:"Monthly Earnings",fill:!0,lineTension:.5,backgroundColor:"rgba(235, 239, 242, 0.2)",borderColor:"#ebeff2",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#ebeff2",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#ebeff2",pointHoverBorderColor:"#eef0f2",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[80,23,56,65,23,35,85,25,92,36]}]},{scales:{yAxes:[{ticks:{max:100,min:20,stepSize:10}}]}}),this.respChart(r("#doughnut"),"Doughnut",{labels:["Desktops","Tablets"],datasets:[{data:[300,210],backgroundColor:["#5b73e8","#ebeff2"],hoverBackgroundColor:["#5b73e8","#ebeff2"],hoverBorderColor:"#fff"}]}),this.respChart(r("#pie"),"Pie",{labels:["Desktops","Tablets"],datasets:[{data:[300,180],backgroundColor:["#34c38f","#ebeff2"],hoverBackgroundColor:["#34c38f","#ebeff2"],hoverBorderColor:"#fff"}]}),this.respChart(r("#bar"),"Bar",{labels:["January","February","March","April","May","June","July"],datasets:[{label:"Sales Analytics",backgroundColor:"rgba(52, 195, 143, 0.8)",borderColor:"rgba(52, 195, 143, 0.8)",borderWidth:1,hoverBackgroundColor:"rgba(52, 195, 143, 0.9)",hoverBorderColor:"rgba(52, 195, 143, 0.9)",data:[65,59,81,45,56,80,50,20]}]},{scales:{xAxes:[{barPercentage:.4}]}}),this.respChart(r("#radar"),"Radar",{labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"Desktops",backgroundColor:"rgba(241, 180, 76 , 0.2)",borderColor:"#f1b44c",pointBackgroundColor:"#f1b44c",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"#f1b44c",data:[65,59,90,81,56,55,40]},{label:"Tablets",backgroundColor:"rgba(91, 140, 232, 0.2)",borderColor:"#5b73e8",pointBackgroundColor:"#5b73e8",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"#5b73e8",data:[28,48,40,19,96,27,100]}]}),this.respChart(r("#polarArea"),"PolarArea",{datasets:[{data:[11,16,7,18],backgroundColor:["#50a5f1","#34c38f","#f1b44c","#5b73e8"],label:"My dataset",hoverBorderColor:"#fff"}],labels:["Series 1","Series 2","Series 3","Series 4"]})},r.ChartJs=new o,r.ChartJs.Constructor=o}(window.jQuery),function(r){"use strict";window.jQuery.ChartJs.init()}();