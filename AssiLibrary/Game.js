let invalidBorder="1px solid red";
let validBorder="1px solid green";

let userNameNode;
let errorNode1;

let mobileNode;
let errorNode2;


$(document).ready(function(){
    userNameNode=$("#userName");
    errorNode1=$("#error1")
    userNameNode.blur(()=>check1());


    mobileNode=$("#contact");
    errorNode2=$("#error2");
    mobileNode.blur(()=>check2());
});

function check1(){
    let firstName=userNameNode.val();
    errorNode1.text("");
    if (firstName===""){
        errorNode1.text("Required*");
        userNameNode.css({"border":invalidBorder});
        return false
    }
    else{
        userNameNode.css({"border":validBorder});
        return true
    }
}

function check2(){
    let msg4=mobileNode.val() ;
    errorNode2.text("");

    let regexp=new RegExp("^[0-9]{10}$")
    let result=regexp.test(msg4);

    if (msg4===""){
        errorNode2.text("Required*");
        mobileNode.css({"border":invalidBorder});
        return false
    }
    else if(result===false){
        errorNode2.text("Required");
        mobileNode.css({"border":invalidBorder});
        return false
        
    }
    else{
        mobileNode.css({"border":validBorder});
        return true
    }
}


function checkingFun(){
    let name=check1();
    let num=check2();
    return (name && num);
}


