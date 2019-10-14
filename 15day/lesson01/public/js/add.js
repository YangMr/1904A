//等待页面所有dom元素加载完毕之后在执行
$(function () {
    //获取提交按钮，并执行点击事件
    $(".sub").click(function () {
        //获取输入的学号
        var userId = $("#exampleInputId").val();
        //获取输入的姓名
        var userName = $("#exampleInputName").val();
        //获取输入的出生年月
        var userDate = $("#exampleInputDate").val();
        //获取输入的性别
        var userSex = $("input[type=radio]:checked").val();
        //获取输入的班级
        var userClass = $("#exampleInputClass").val();


        //通过ajax发送给后台，后台存储到数据库
        $.ajax({
            url : "/api/add",
            data : {
                id : userId,
                name : userName,
                date : userDate,
                sex : userSex,
                class : userClass
            },
            success : function (response) {
                console.log(response)
                if(response.code == 0){
                    location.href = "/show"
                }
            },
            error : function (error) {
              console.log(error);
            }
        })

    })
})