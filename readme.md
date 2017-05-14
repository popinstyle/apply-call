****Call和Apply方法总结****

apply和call总结过很多次，总结后时间一长又忘了，在此记录一下方便后面的回忆和查看。

1.call方法 : [对象|函数].call(thisObj,[param1,param2,..])
    
    thisObj为call执行的环境,也就是执行的上下文,[param1,param2,..]为执行的参数列表
    call可以将一个函数对象上下文从初始的上下文变为由thisObj指定对象的上下文,如果未指明,在浏览器环境下为默认为window
    
    
2.apply方法 : [对象|函数].apply(obj,arguments)
    
    obj为执行的上下文,arguments位参数列表
    agruments不需要指代,能够直接继承过来
    
    
    