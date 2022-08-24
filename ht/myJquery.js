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
        id2.style.display = "dispaly";
      }
      else if(id1.value == 1)
      {
        var id2 = document.getElementById("input1");
        id2.style.display = "none";
        id2 = document.getElementById("pwm1");
        id2.style.display = "none";
        id2 = document.getElementById("output1");
        id2.style.display = "dispaly";
      }
      else if(id1.value == 2)
      {
        var id2 = document.getElementById("input1");
        id2.style.display = "none";
        id2 = document.getElementById("output1");
        id2.style.display = "none";
        id2 = document.getElementById("pwm1");
        id2.style.display = "dispaly";
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
        id2.style.display = "dispaly";
      }
      else if(id1.value == 1)
      {
        var id2 = document.getElementById("input2");
        id2.style.display = "none";
        id2 = document.getElementById("pwm2");
        id2.style.display = "none";
        id2 = document.getElementById("output2");
        id2.style.display = "dispaly";
      }
      else if(id1.value == 2)
      {
        var id2 = document.getElementById("input2");
        id2.style.display = "none";
        id2 = document.getElementById("output2");
        id2.style.display = "none";
        id2 = document.getElementById("pwm2");
        id2.style.display = "dispaly";
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