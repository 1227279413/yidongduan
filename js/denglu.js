    let deng=document.querySelector("#denglu")
    let zhu=document.querySelector("#zhuce")
    let ddian=document.querySelectorAll("#denglu .dian")
    let zdian=document.querySelectorAll("#zhuce .dian")
    let wang=document.querySelector("#denglu ul li h1")
    let dinput=document.querySelectorAll("#denglu input")
    let zinput=document.querySelectorAll("#zhuce input")
    let em=document.querySelectorAll("#denglu .deng ul em")
    let dcuo=document.querySelectorAll("#denglu .cuowu")
    let dbox=document.querySelector("#denglu .deng-end")
    let wan=document.querySelectorAll("#wancheng")



    let zem=document.querySelectorAll("#zhuce .deng ul em")
    let zcuo=document.querySelectorAll("#zhuce .cuowu")


    console.log(wan);

//注册，登陆切换
    ddian[0].ontouchstart=function () {
        zhu.style.display="block"
        deng.style.display="none"
        em[3].style.display="block"
        em[4].style.display="none"
        em[5].style.display="none"
        dcuo[1].style.display="none"
    }
    zdian[1].ontouchstart=function () {
        deng.style.display="block"
        zhu.style.display="none"
        em[0].style.display="block"
        em[1].style.display="none"
        em[2].style.display="none"
        dcuo[0].style.display="none"
    }
    wang.ontouchstart=function () {
        zhu.style.display="block"
        deng.style.display="none"
    }


    //失去焦点  判断value
    dinput[0].onblur=function () {
        let reg=/1-9{11}/g
        if(reg.exec(this.value)==null){
            em[0].style.display="none"
            em[1].style.display="block"
            dcuo[0].style.display="block"
        }
        if(this.value=="12345678910"){
            em[0].style.display="none"
            em[1].style.display="none"
            em[2].style.display="block"
            dcuo[0].style.display="none"
        }
    }
    dinput[1].onblur=function () {
        if (dinput[0].value=="12345678910"&&this.value == "123456") {
            em[3].style.display = "none"
            em[4].style.display = "none"
            em[5].style.display = "block"
            dcuo[1].style.display = "none"
            dbox.style.background="#F7D54D"
        } else {
            em[3].style.display = "none"
            em[4].style.display = "block"
            em[5].style.display = "none"
            dcuo[1].style.display = "block"
        }
    }

    //获取焦点     清除样式
        dinput[0].onfocus=function () {
                em[0].style.display="block"
                em[1].style.display="none"
                em[2].style.display="none"
                dcuo[0].style.display="none"
        }
        dinput[1].onfocus=function () {
                em[3].style.display="block"
                em[4].style.display="none"
                em[5].style.display="none"
                dcuo[1].style.display="none"
        }
    //按差号，恢复状态
        em[1].ontouchstart=function () {
            em[0].style.display="block"
            em[1].style.display="none"
            dcuo[0].style.display="none"
        }
        em[4].ontouchstart=function () {
            em[3].style.display="block"
            em[4].style.display="none"
            dcuo[1].style.display="none"
        }




    //失去焦点  判断value
    zinput[0].onblur=function () {
        if(this.value=="12345678910"){
            zem[0].style.display="none"
            zem[1].style.display="none"
            zem[2].style.display="block"
            zcuo[0].style.display="none"
        }else{
            zem[0].style.display="none"
            zem[1].style.display="block"
            zem[2].style.display="none"
            zcuo[0].style.display="block"
        }
    }
    zinput[2].onblur=function () {
        zem[3].style.display = "none";
        zem[4].style.display = "block";
    }

    zinput[1].onblur=function () {
    wan[0].style.display = "none";
    wan[1].style.display = "block";


    }
    //获取焦点     清除样式
    zinput[0].onfocus=function () {
        zem[0].style.display="block"
        zem[1].style.display="none"
        zem[2].style.display="none"
        zcuo[0].style.display="none"
    }
    //按差号，恢复状态
    zem[1].ontouchstart=function () {
        zem[0].style.display="block"
        zem[1].style.display="none"
        zem[2].style.display="none"
        zcuo[0].style.display="none"
    }

