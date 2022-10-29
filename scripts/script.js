const enterbtn = document.getElementById("enterbtn");
const intro = document.querySelector(".intro");
const gen = document.querySelector(".gen");
const refer = document.querySelector(".refer");
const info = document.querySelector(".info");
const gennxtbtn = gen.querySelector(".nextbtn");
const genbckbtn = gen.querySelector(".backbtn");
const refernxtbtn = refer.querySelector(".nextbtn");
const referbckbtn = refer.querySelector(".backbtn");
const infobckbtn = info.querySelector(".backbtn");
const tabs = document.querySelector(".tabs");
const gentab = document.querySelector(".general");
const refertab = document.querySelector(".refermatory");
const infotab = document.querySelector(".information");
const geninput = gen.querySelectorAll("textarea");
const referinput = refer.querySelectorAll("textarea");
const infoinput = info.querySelectorAll("input");


enterbtn.addEventListener("click", () => {
    intro.classList.remove('cardactive');
    gen.classList.add('cardactive');
    tabs.classList.add('tabsactive');
    gentab.classList.add('tabactive');

})
gennxtbtn.addEventListener("click", () => {
    geninput.forEach(input => {
        if (input.value != "") {
            input.classList.remove('error');
            gen.classList.remove('cardactive');
            gen.classList.add('carddeactive');
            refer.classList.add('cardactive');
            gentab.classList.remove('tabactive');
            refertab.classList.add('tabactive');
        }
        else {
            input.classList.add('error');
        }
    })


})
genbckbtn.addEventListener("click", () => {
    gen.classList.remove('cardactive');
    intro.classList.add('cardactive');
    tabs.classList.remove('tabsactive');
    gentab.classList.remove('tabactive');

})





refernxtbtn.addEventListener("click", () => {
    let f = 0;
    referinput.forEach(input => {


        if (input.value != "") {
            f = f + 1;

        }


    })
    console.log(f);
    if (f >= 2) {
        refer.classList.remove('cardactive');
        refer.classList.add('carddeactive');
        info.classList.add('cardactive');
        // refertab.classList.remove('tabactive');
        // infotab.classList.add('tabactive');
        referinput.forEach(input => {
            if(input.value!=""){
                input.classList.remove('error');
            }
            
        })

    }
    else {
        referinput.forEach(input => {
            if(input.value==""){
                input.classList.add('error')
            }
            
        })
    }
})
referbckbtn.addEventListener("click", () => {
    refer.classList.remove('cardactive');
    gen.classList.add('cardactive');
    gen.classList.remove('carddeactive');
    gentab.classList.add('tabactive');
    refertab.classList.remove('tabactive');

})
infobckbtn.addEventListener("click", () => {
    info.classList.remove('cardactive');
    refer.classList.add('cardactive');
    refer.classList.remove('carddeactive');
    refertab.classList.add('tabactive');
    infotab.classList.remove('tabactive');

})

function validateform() {
    let f = 0;
    infoinput.forEach(input => {
        if (input.value != "") {
            f = f + 1;

        }
        
    })
    console.log(f);
    if(f==2){
        infoinput.forEach(input => {
            if(input.value==""){
                input.classList.remove('error')
            }
            
        })
        
        
        return true;
    }
    else{
        infoinput.forEach(input => {
            if(input.value==""){
                input.classList.add('error')
            }
            
        })
        return false;
    }
    

}




