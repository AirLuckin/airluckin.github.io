var ws;
  function refleshSetting(id)
  {
    var obj = new Object();
    if(id == 1)
    {
      obj['IO1_refresh'] = 1;
      obj['IO1_mode'] = Number(document.getElementById('IO1_mode').value);
      obj['IO1_pull'] = Number(document.getElementById('IO1_pull').value);
      obj['IO1_level'] = Number(document.getElementById('IO1_level').value);
      obj['IO1_period'] = Number(document.getElementById('IO1_period').value);
      obj['IO1_duty'] = Number(document.getElementById('IO1_duty').value);
    }
    else if(id == 2)
    {
      obj['IO2_refresh'] = 1;
      obj['IO2_mode'] = Number(document.getElementById('IO2_mode').value);
      obj['IO2_pull'] = Number(document.getElementById('IO2_pull').value);
      obj['IO2_level'] = Number(document.getElementById('IO2_level').value);
      obj['IO2_period'] = Number(document.getElementById('IO2_period').value);
      obj['IO2_duty'] = Number(document.getElementById('IO2_duty').value);
    }
    
    dp = JSON.stringify(obj);
    ws.send(dp);
    console.log(dp);
  }

  function changeStateById(id)
  {
    var id1;
    if(id == "IO1_mode")
    {
      id1 = document.getElementById(id);
      if(id1.value == 0)
      {
        var id2 = document.getElementById("output1");
        id2.style.display = "none";
        id2 = document.getElementById("pwm1");
        id2.style.display = "none";
        id2 = document.getElementById("input1");
        id2.style.display = "block";
      }
      else if(id1.value == 1)
      {
        var id2 = document.getElementById("input1");
        id2.style.display = "none";
        id2 = document.getElementById("pwm1");
        id2.style.display = "none";
        id2 = document.getElementById("output1");
        id2.style.display = "block";
      }
      else if(id1.value == 2)
      {
        var id2 = document.getElementById("input1");
        id2.style.display = "none";
        id2 = document.getElementById("output1");
        id2.style.display = "none";
        id2 = document.getElementById("pwm1");
        id2.style.display = "block";
      }
    }
    else if(id == "IO2_mode")
    {
      id1 = document.getElementById(id);
      if(id1.value == 0)
      {
        var id2 = document.getElementById("output2");
        id2.style.display = "none";
        id2 = document.getElementById("pwm2");
        id2.style.display = "none";
        id2 = document.getElementById("input2");
        id2.style.display = "block";
      }
      else if(id1.value == 1)
      {
        var id2 = document.getElementById("input2");
        id2.style.display = "none";
        id2 = document.getElementById("pwm2");
        id2.style.display = "none";
        id2 = document.getElementById("output2");
        id2.style.display = "block";
      }
      else if(id1.value == 2)
      {
        var id2 = document.getElementById("input2");
        id2.style.display = "none";
        id2 = document.getElementById("output2");
        id2.style.display = "none";
        id2 = document.getElementById("pwm2");
        id2.style.display = "block";
      }
    }
  }

  function test(index)
  {
    $('#IO2_pull').val(index);
  }


  function deal_with_recdata(data)  
  {
    var obj = JSON.parse(data);
    console.log(obj.a);
    // if(obj.IO1_mode)
  }

  function WebSocketTest()
  {
    alert("WebSocket启动!"); 
    console.log("local_host: %s",window.location.host); 
    if ("WebSocket" in window)
    {
      console.log("您的浏览器支持 WebSocket!"); 
      // 打开一个 web socket
      ws = new WebSocket("ws://"+window.location.host+":80/ws");
      ws.onopen = function()
      {
        // Web Socket 已连接上，使用 send() 方法发送数据
        // ws.send("发送数据");
        console.log("数据发送中...");
      };
      
      ws.onmessage = function (evt) 
      { 
        var received_msg = evt.data;
        console.log("数据已接收...");
        console.log(received_msg);
        deal_with_recdata(received_msg);
      };
      
      ws.onclose = function()
      { 
        // 关闭 websocket
        alert("连接已关闭..."); 
      };
    }
    
    else
    {
      // 浏览器不支持 WebSocket
      alert("您的浏览器不支持 WebSocket!");
    }
  }

  /************************************************************/

  var randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
  };

  var datapoints1 = [];
  var datapoints2 = [];
  var datapoints3 = [];
  var datapoints4 = [];
  var config = {
    type: 'line',
    data: {
      labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'
          ,'20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39'
          ,'40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'
          ,'60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79'
          ,'80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100'],
      datasets: [{
        label: 'IO1',
        data: datapoints1,
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(179,181,198,0.2)",
        borderColor: "rgba(255,68,170,1)",  //yanse
        pointBorderColor: "rgba(255,68,170,1)",
        pointBackgroundColor: "#fff",
        pointRadius: 3, //端点大小
        pointHoverRadius: 80,
        pointHoverBackgroundColor: "rgba(179,181,198,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHitRadius: 15,
        // pointStyle: "triangle",
      }, {
        label: 'IO2',
        data: datapoints2,
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(179,181,198,0.2)",
        borderColor: "rgba(255,215,0,1)",
        pointBorderColor: "rgba(179,181,198,1)",
        pointBackgroundColor: "#fff",
        pointRadius: 3, //端点大小
        pointHoverRadius: 8,
        pointHoverBackgroundColor: "rgba(179,181,198,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHitRadius: 15,
        // pointStyle: "triangle",
      }, {
        label: 'IO3',
        data: datapoints3,
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(179,181,198,0.2)",
        borderColor: "rgba(131,111,255,1)",
        pointBorderColor: "rgba(179,181,198,1)",
        pointBackgroundColor: "#fff",
        pointRadius: 3, //端点大小
        pointHoverRadius: 8,
        pointHoverBackgroundColor: "rgba(179,181,198,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHitRadius: 15,
        // pointStyle: "triangle",
      }, {
        label: 'IO4',
        data: datapoints4,
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(179,181,198,0.2)",
        borderColor: "rgba(179,181,198,1)",
        pointBorderColor: "rgba(179,181,198,1)",
        pointBackgroundColor: "#fff",
        pointRadius: 3, //端点大小
        pointHoverRadius: 8,
        pointHoverBackgroundColor: "rgba(179,181,198,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHitRadius: 15,
        // pointStyle: "triangle",
      }]
    },
    options : {
                  
                  //Boolean - If we show the scale above the chart data            
                  scaleOverlay : false,
      
                  //Boolean - If we want to override with a hard coded scale
                  scaleOverride : false,
      
                  //** Required if scaleOverride is true **
                  //Number - The number of steps in a hard coded scale
                  scaleSteps : null,
                  //Number - The value jump in the hard coded scale
                  scaleStepWidth : null,
                  //Number - The scale starting value
                  scaleStartValue : null,
  
                  //String - Colour of the scale line    
                  scaleLineColor : "rgba(0,0,0,.1)",
      
                  //Number - Pixel width of the scale line    
                  scaleLineWidth : 1,
  
                  //Boolean - Whether to show labels on the scale    
                  scaleShowLabels : true,
      
                  //Interpolated JS string - can access value
                  scaleLabel : "<%=value%>",
      
                  //String - Scale label font declaration for the scale label
                  scaleFontFamily : "'Arial'",
      
                  //Number - Scale label font size in pixels    
                  scaleFontSize : 12,
      
                  //String - Scale label font weight style    
                  scaleFontStyle : "normal",
      
                  //String - Scale label font colour    
                  scaleFontColor : "#666",    
      
                  ///Boolean - Whether grid lines are shown across the chart
                  scaleShowGridLines : true,
                  
                  //String - Colour of the grid lines
                  scaleGridLineColor : "rgba(0,0,0,.05)",
      
                  //Number - Width of the grid lines
                  scaleGridLineWidth : 1,    
      
                  //Boolean - Whether the line is curved between points
                  bezierCurve : true,
      
                  //Boolean - Whether to show a dot for each point
                  pointDot : true,
      
                  //Number - Radius of each point dot in pixels
                  pointDotRadius : 3,
      
                  //Number - Pixel width of point dot stroke
                  pointDotStrokeWidth : 1,
      
                  //Boolean - Whether to show a stroke for datasets
                  datasetStroke : true,
      
                  //Number - Pixel width of dataset stroke
                  datasetStrokeWidth : 2,
      
                  //Boolean - Whether to fill the dataset with a colour
                  datasetFill : true,
      
                  //Boolean - Whether to animate the chart
                  animation : true,
  
                  //Number - Number of animation steps
                  animationSteps : 60,
      
                  //String - Animation easing effect
                  animationEasing : "easeOutQuart",
  
                  //Function - Fires when the animation is complete
                  onAnimationComplete : null
              }  
  };
    window.onload = function() {
			var ctx = document.getElementById('myChart').getContext('2d');
			window.myLine = new Chart(ctx, config);
		};

		document.getElementById('randomizeData').addEventListener('click', function() {
			for (var i = 0, len = 100; i < len; ++i) {
				datapoints1[i] = randomScalingFactor() ;
				datapoints2[i] = randomScalingFactor() ;
				datapoints3[i] = randomScalingFactor() ;
        datapoints4[i] = randomScalingFactor() ;
			}
			window.myLine.update();
		});