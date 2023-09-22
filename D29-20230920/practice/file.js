let list=['a','b','c']

let htmldata="";
    for( let i=0; i<list.length; i++){
        htmldata = htmldata + `<tr>
        <td>${list[i]}</td>
        <td>${list[i]}</td>
        <td>&#9998</td>
        <td>&#128465</td>
        </tr>`
    }
    document.getElementById("table_list").innerHTML = htmldata