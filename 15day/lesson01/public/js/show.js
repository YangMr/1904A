//等待页面所有dom元素加载完毕之后在执行
$(function () {
    //获取数据
    function read(){
        $.ajax({
            url : "/api/read",
            success : function (response) {
                console.log(response.data);
                var data = response.data;
                $("tbody").html(" ");
                for(var i=0;i<data.length;i++){
                    var tr = document.createElement("tr");

                    tr.innerHTML = `<td>${data[i].id}</td>
                                <td>
                                    <span>${data[i].name}</span>
                                    <input cid="${data[i]._id}" class="ipt" type="text">    
                                </td>
                                <td>${data[i].date}</td>
                                <td>${data[i].sex}</td>
                                <td>${data[i].class}</td>
                                <td>
                                    <button type="button" v="${data[i]._id}" class="btn del btn-primary">删除</button>
                                    <button type="button" class="btn change btn-primary">修改</button>
                                </td>`

                    $("tbody").append(tr);
                }

            },
            error : function (error) {
                console.log(error);
            }
        });
    }

    //调用read方法
    read();

    $("tbody").on("click",".del",function () {
        var _id = $(this).attr("v")

        $.ajax({
            url : "/api/del",
            data : {
                _id : _id
            },
            success : function (response) {
                console.log(response);
                read()
            },
            error : function (error) {
                console.log(error)
            }
        })
    })


    //修改数据
    $("tbody").on("click",".change",function () {
        // $(".ipt").show().siblings().hide();
        $("tbody tr").eq($(this).parent().parent().index()).find(".ipt").show().siblings().hide();
    });

    $("tbody").on("blur",".ipt",function () {
        //获取文本框输入的内容
        var ch = $(this).val();

        $(this).hide().siblings().show();

        $.ajax({
            url : "/api/update",
            data : {
                f : {
                    _id : $(this).attr("cid")
                },
                con : {
                    name : ch
                }
            },
            success : function (response) {
                console.log(response);
                if(response.code == 0){
                    read();
                }
            },
            error : function (error) {
                console.log(error)
            }
        })

    })

    //搜索功能
    $(".search").click(function () {
       var searchName = $("#exampleInputName").val();

       $.ajax({
           url : "/api/search",
           data : {
               name : searchName
           },
           success : function (response) {
               console.log(response);
               if(response.code ==0){
                   var data = response.data;
                   $("tbody").html(" ");
                   for(var i=0;i<data.length;i++){
                       var tr = document.createElement("tr");

                       tr.innerHTML = `<td>${data[i].id}</td>
                                <td>
                                    <span>${data[i].name}</span>
                                    <input cid="${data[i]._id}" class="ipt" type="text">    
                                </td>
                                <td>${data[i].date}</td>
                                <td>${data[i].sex}</td>
                                <td>${data[i].class}</td>
                                <td>
                                    <button type="button" v="${data[i]._id}" class="btn del btn-primary">删除</button>
                                    <button type="button" class="btn change btn-primary">修改</button>
                                </td>`

                       $("tbody").append(tr);
                   }
               }
           },
           error : function (error) {
               console.log(error);
           }
       })
    })

    $("#exampleInputName").on("input",function () {

        $.ajax({
            url : "/api/keyword",
            data : {
                name : $(this).val()
            },
            success : function (response) {
                console.log(response)
                if(response.code ==0){
                    var data = response.data;
                    $("tbody").html(" ");
                    for(var i=0;i<data.length;i++){
                        var tr = document.createElement("tr");

                        tr.innerHTML = `<td>${data[i].id}</td>
                                <td>
                                    <span>${data[i].name}</span>
                                    <input cid="${data[i]._id}" class="ipt" type="text">    
                                </td>
                                <td>${data[i].date}</td>
                                <td>${data[i].sex}</td>
                                <td>${data[i].class}</td>
                                <td>
                                    <button type="button" v="${data[i]._id}" class="btn del btn-primary">删除</button>
                                    <button type="button" class="btn change btn-primary">修改</button>
                                </td>`

                        $("tbody").append(tr);
                    }
                }
            },
            error : function (error) {
                console.log(error);
            }
        })


       if($(this).val()==""){
           read();
       }


    })
})