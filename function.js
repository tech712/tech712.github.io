$(document).ready(function () {  
    //projects
    // $.getJSON("json/projects.json",function(data){
    //     var projects="";
    //     $.each(data.projects,function(k,adata){
    //         projects+="<li onclick='gotoPage(\""+adata.link+"\")'><img src='./projects/"+adata.link+"/cover.jpg'/><h4>"+adata.title+"</h4><h5>"+adata.date_time+"</h5></li>";
    //     }); 
    //     $("#projects").append(projects); 
    // });

    //skills
    $.getJSON("json/skills.json",function(data){
        //main skills
        var mainSkills="";
        $.each(data.mainSkills,function(k,msdata){
            mainSkills+="<li><img src='"+msdata.img+"'/><h4>"+msdata.title+"</h4><h5>"+msdata.sub_title+"</h5><p>"+msdata.content+"</p></li>";
        }); 
        $("#mainSkills").append(mainSkills); 
        
        //other skills
        var otherSkills="";
        $.each(data.otherSkills,function(k,osdata){
            otherSkills+="<li><img src='"+osdata.img+"'/><h4>"+osdata.title+"</h4><h5>"+osdata.sub_title+"</h5><p>"+osdata.content+"</p></li>";
        }); 
        $("#otherSkills").append(otherSkills);
    });

    //articles
    $.getJSON("json/articles.json",function(data){
        var articles="";
        $.each(data.articles,function(k,adata){
            articles+="<li onclick='gotoPage(\""+adata.link+"\")'><h4>"+adata.title+"</h4><h5>"+adata.date_time+"</h5></li>";
        }); 
        $("#articles").append(articles); 
    });

    
    

});  

function gotoPage(link){
    $(location).attr('href', "article.html?page="+link);
}