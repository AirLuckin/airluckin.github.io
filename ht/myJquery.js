<script type='text/javascript'>
  var ws;

  function sendHelloWorld()
  {
    alert("hello world"); 
  }

  function changeStateById(id)
  {
    var i = document.getElementById(id);
    var obj = new Object();
    obj[id] = i.value;
    console.log("changeStateById: %s",id);
    dp = JSON.stringify(obj);
    ws.send(dp);
    console.log(dp);
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

  function send_data()  
  {
    var obj = {"a":"aaa","b":"bbb"};
    dp = JSON.stringify(obj);
    ws.send(dp);//
  }

  function WebSocketTest()
  {
    alert("WebSocket启动!"); 
    if ("WebSocket" in window)
    {
      console.log("您的浏览器支持 WebSocket!"); 
      // 打开一个 web socket
    //   ws = new WebSocket("ws://%s:80/ws");
      ws = new WebSocket("ws://192.168.199.211:80/ws");
      ws.onopen = function()
      {
        // Web Socket 已连接上，使用 send() 方法发送数据
        // ws.send("发送数据");
        send_data();
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
</script>