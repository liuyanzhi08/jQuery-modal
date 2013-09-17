>Copyright (c) 2013 Nancle from CAU CS101
>
>Licensed under the MIT License.
>
>version: 1.0
>
>经过IE6&IE6+，chrome，firefox测试兼容


	1. [ HTML ] 
       无需改变
         
    2.[ CSS ]  
       无需改变
        
    3.[ JS ]
        <script type="text/javascript" src="lib/jquery-1.9.1.js"></script>
        <script type="text/javascript" src="jquery.modal.js"></script>
        
    4.调用
		$.modal({
			'dialogWidth' : 500, //弹出对话框的宽度，默认为300
			'dialogContent' : @html, //对话框的内容：传入你要放在对话框中的html
			'hideDelay' : 2000,//对话框自动隐匿时间。默认值是'none'，即不会自动隐匿。你可以填入数值（ms单位）
			'showCloseButton' : 0 //对话框是否带“关闭”按钮:1为带有，0为没有。默认带有。
		});


*演示地址： [http://quchen.cau.edu.cn/jsDev/jquery-modal/](http://quchen.cau.edu.cn/jsDev/jquery-modal/ "jQuery-modal") .
