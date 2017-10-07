$(document).ready(function () {  
    $.getJSON("json/articles.json",function(data){
        var pageid=GetQueryString('page'); 
        var article="<img class='title-img' src='articles/"+pageid+"/cover.png'><h1>"+data.articles[pageid].title+"</h1><h5>"+data.articles[pageid].date_time+"</h5>";
        $("#article_title").append(article);
        $("#article_content").load('articles/'+pageid+'/content.html');
        $("title").html(data.articles[pageid].title+' - 思路的文章'); 
        sharing(data.articles[pageid].title+' - 思路的文章',data.articles[pageid].date_time,'http://liusilu.com/article.html?page='+pageid,data.articles[pageid].img)
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

function sharing(text,desc,url,pic){
    window._bd_share_config = {
        common : {
            bdText : text,	
            bdDesc : desc,	
            bdUrl : url, 	
            bdPic : pic
        },
        share : [{
            "tag":"share_1",
            "bdSize" : 48,
            "bdCustomStyle":"./style.css"
        }]
    }
    with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion='+~(-new Date()/36e5)];
}