function checkAjax(){
    $.ajax({
        type:"get",
        url:"https://jsonplaceholder.typicode.com/posts",
        data:"",
        success: function(response){
            console.log(response)
            let ele=""
            for(i=0;i<response.length;i++){
                ele = ele + `<tr>
                
                <td>${response[i].userId}</td>
                <td>${response[i].id}</td>
                <td><button type="button" onclick="display(id)"${response[i].id}>${response[i].title}</button></td>
                </tr>`
            }
        document.getElementById("tabledata").innerHTML = ele
        },
        error: function(error){
            console.log(error)
        }
    });
}
function display(id){
    $.ajax({
        type:"get",
        url:`https://jsonplaceholder.typicode.com/posts/${id}`,
        data:"",
        success:function(response){
            console.log(response)
        },
        error:function(error){
            console.log(error)
        }
    });
}
// function checkAjax(){

//     $('#head_title').hide();
// }



    