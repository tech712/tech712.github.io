$(document).ready(function () {  
    $.getJSON("./json/experiences.json",function(data){
        var pageid=GetQueryString('page');
        var v;
        for(var i in data.experiences){
            if(data.experiences[i].id==pageid){
                v=data.experiences[i];
            }
        }
        var article="<h1>"+v.name+"</h1>"+
                    "<h2>"+v.en_name+"</h2>"+
                    "<h3>"+v.period+" "+v.job+"</h3>";
        $("#title").append(article);
        $("#content").load('./experience/'+v.id+'/content.html');
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