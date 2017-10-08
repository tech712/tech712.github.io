$(document).ready(function () {
    //skills:
    $.getJSON("json/skills.json",function(data){
        var skills="";
        $.each(data.skills,function(k,v){
            skills+="<li>"+
                        "<img src='./img/skills/"+v.id+".png'/>"+
                        "<h4>"+v.name+"</h4>"+
                        "<p>"+v.content+"</p>"+
                    "</li>";
        });
        $("#skills ul").append(skills);
    });

    //experiences:
    $.getJSON("json/experiences.json",function(data){
        var experiences="";
        $.each(data.experiences,function(k,v){
            experiences+="<li style='background:url(\"./img/experiences/"+v.id+".png\") no-repeat;background-size:100% 100%;'>"+
                            "<h3>"+v.name+"</h3>"+
                            "<h4>"+v.en_name+"</h4>"+
                            "<h5>"+v.period+" "+v.job+"</h5>"+
                         "</li>";
        });
        $("#experiences ul").append(experiences);
    });

    //design:
    var design="";
    for(var i=0;i<6;i++){
        design+="<li><img src='./img/design/"+(i+1)+".png' /></li>";
    }
    $("#design ul").append(design);

    //photography:
    var photography="";
    for(var i=0;i<15;i++){
        photography+="<li><img src='./img/photography/"+(i+1)+".jpg' /></li>";
    }
    $("#photography ul").append(photography);
});