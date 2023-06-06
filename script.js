const container =document.querySelector('.container')
const btns =document.querySelectorAll('.btn')
const list =["img-1","img-2","img-4","img-5"]

let index=0

btns.forEach((button)=>{
        button.addEventListener('click',()=>{
            if(button.classList.contains('btn-left')){
                index--;
                if(index<0){
                    index=list.length-1;
                }
                container.style.background =  `url(image/${list[index]}.jpg)center/cover`
            }
            else{
                index++;
                if(index==list.length){
                    index=0;
                }
                container.style.background = `url(image/${list[index]}.jpg)center/cover`
            }
        })
})

