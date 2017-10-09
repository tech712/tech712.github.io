$(document).ready(function () {  
    $.getJSON("./json/experiences.json",function(data){
        var pageid=GetQueryString('page'); 
        var article="<h1>"+data.experiences[pageid].name+"</h1>"+
                    "<h2>"+data.experiences[pageid].en_name+"</h2>"+
                    "<h3>"+data.experiences[pageid].period+" "+data.experiences[pageid].job+"</h3>";
        $("#title").append(article);
        $("#content").load('./experience/'+pageid+'/content.html');
    });
});

function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

function gotoHome(){
    $(location).attr('href', "./");
}