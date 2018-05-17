$(function(){
    var a=0,b=0,c=0,d=0,o=0;
    
    $("#a").focus(function(){
        o = $("#o").val();
        b = $("#b").val();
        c = $("#c").val();
        d = $("#d").val();
        if(a=="" && o!=="" && b!=="" && c!=="" && d!==""){
            a = o-b-c-d;
            $("#a").val(a);
        }
    });
    $("#b").focus(function(){
        o = $("#o").val();
        a = $("#a").val();
        c = $("#c").val();
        d = $("#d").val();
        if(b=="" && o!=="" && a!=="" && c!=="" && d!==""){
            b = o-a-c-d;
            $("#b").val(b);
        }
    });
    $("#c").focus(function(){
        o = $("#o").val();
        a = $("#a").val();
        b = $("#b").val();
        d = $("#d").val();
        if(c=="" && o!=="" && a!=="" && b!=="" && d!==""){
            c = o-b-a-d;
            $("#c").val(c);
        }
    });
    $("#d").focus(function(){
        o = $("#o").val();
        a = $("#a").val();
        b = $("#b").val();
        c = $("#c").val();
        if(d=="" && o!=="" && a!=="" && b!=="" && c!==""){
            d = o-a-c-b;
            $("#d").val(d);
        }
    });
    
});


