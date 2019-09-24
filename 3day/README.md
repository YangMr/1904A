# 路由

## 1. 创建一个html页面

## 2. 写入数据 ----  留言功能

## 3. 读取数据 ----  展示功能

## 4. 读取数据 ----  轮播图展示功能

## 总结

    创建html页面以及完成静态布局
    
    发送ajax请求，向后台请求数据
    
    创建模拟数据
    
    搭建服务器，设置端口号，设置跨域， 设置字符编码
    
    判断路由地址
    
    根据路由地址进行对应的操作 --- 读取banner.json文件的数据
    
    启动服务器
    
    前台就可以接收到数据
    
    接收到数据之后，由于json数据是字符串类型，所以需要用JSON.parse()方法将字符串转化为js对象
    
    对数据进行遍历渲染

https://img20.360buyimg.com/babel/s1920x740_jfs/t1/52978/3/11430/62079/5d8345a0Eb03acfec/387156d6c06f63cb.jpg!cc_1920x740

https://img12.360buyimg.com/babel/s1920x740_jfs/t1/77805/39/9943/138458/5d79ebdaE1b64510b/d65e6a21ac3d4c13.jpg!cc_1920x740

https://img13.360buyimg.com/babel/s1920x740_jfs/t1/53780/2/11369/109786/5d834aa4E7ccacd46/8c562ae78ff6d475.jpg!cc_1920x740

--------------------------------------

移动端页面3个 - 首页 留言 列表 我的

    底部导航的文字：         
        首页   留言    列表   我的
        
    首页：
        顶部
        banner
          banner的要求是数据为动态的  ---- 数据是从后台获取过来并渲染出来的
          
    点击留言可以进入留言页面：
        输入标题
        输入内容
        点击按钮，将输入的标题以及输入的内容发送到后台，并存储到文件里面
        如果写入成功，则三秒钟之后自动跳转到 列表页
        
    进入列表页之后：
        读取写入的数据，并进行渲染展示    
                  
                  
    接口地址：
        http://localhsot:3000/api/banner   首页接口
        http://localhost:3000/api/write    写入接口 
                                            参数： 
                                                   title : 标题
                                                   content : 内容
        http://localhost:3000/api/list     列表接口                                        
                      

     banner.json   http://localhost:3000/api/banner 
     product.json  http://localhost:3000/api/list 
     
     
     {
        "product" : [
            {
                img : "",
                xprice : 998,
                yprice : 98,
                name : ""
            },
             {
                            img : "",
                            xprice : 998,
                            yprice : 98,
                            name : ""
                        },
                         {
                                        img : "",
                                        xprice : 998,
                                        yprice : 98,
                                        name : ""
                                    },
                                     {
                                                    img : "",
                                                    xprice : 998,
                                                    yprice : 98,
                                                    name : ""
                                                }
        ] 
     }  
     
     
     
## 作业

    1. 创建首页，完成静态布局
    2. 将首页静态的数据替换成动态的 （轮播图的数据，商品的数据） 
    3. 完成登陆页面 （点击我的 -》 登陆页面 -》 点击立即注册 -》 注册页面）
    4. 完成注册页面 （注册成功 -》 进入登陆页 ）
    5. 登陆成功之后跳转到页面
    
    要求：
        1. 首页的数据放到一个json文件里面  接口名称为 /api/index
        2. 登陆的接口名称为   /api/login   参数： username userpass
        3. 注册的接口名称为   /api/register  参数： user pass
        
        
        第一步： 数据发送给后台
        第二步： 后台接收数据
        第三步： 将数据存到文件里面
        第四步： 返回数据 
        
        
作业参考地址： http://mob.rimulahome.com     