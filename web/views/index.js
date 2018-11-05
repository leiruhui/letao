$(function(){
    // 获取数据
    function getHerilist(){
        $.ajax({
            url:'http://127.0.0.1:5001/getallhero',
            type:'get',
            success:function(result){
                console.log(result)
            }
        })
    }
    getHerilist()
})