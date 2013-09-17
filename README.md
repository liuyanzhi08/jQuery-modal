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
       $("#{yourId}").jScroll({
		'scroll_enable' : true,   //是否开启滚轮，默认开启
		'scroll_pace' : 35,      //滚轮每单位滚动的距离， 默认值是35
    	'scroll_id' : '{yourId}',//触发滚轮的id， 默认是主id，即上述html中第一个标签的id
    	'layout' : 'vertical' 	//布局方式：vertical(垂直) , horizon（水平）默认为垂直
        });		

*演示地址： [http://quchen.cau.edu.cn/jsDev/jquery-slider/](http://quchen.cau.edu.cn/jsDev/jquery-slider/ "jQuery-slider") .
