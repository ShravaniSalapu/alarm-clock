const ct=document.querySelector("p");
const sm=document.querySelectorAll("select");
const set=document.querySelector("button");
const container=document.querySelector(".container");
const h1=document.querySelector("h1");
// console.log(sm);]
let at,
rt=new Audio("./pidididi.mp3");
for(let i=12;i>0;i--)
{
     i=i<10?"0"+i : i;
     let option=`<option value="${i}">${i}</option>`;
     sm[0].firstElementChild.insertAdjacentHTML("afterend",option);
}
for(let i=59;i>=0;i--)
    {
         i=i<10?"0"+i : i;
         let option=`<option value="${i}">${i}</option>`;
         sm[1].firstElementChild.insertAdjacentHTML("afterend",option);
    }
    for(let i=2;i>0;i--)
        {
             let a=i==1?"AM" : "PM";
             let option=`<option value="${a}">${a}</option>`;
             sm[2].firstElementChild.insertAdjacentHTML("afterend",option);
        }
 setInterval(()=>{
    let date=new Date(),
    h=date.getHours(),
    m=date.getMinutes(),
    s=date.getSeconds();
    a="AM";
    if(h>=12){
        h=h-12;
        a="PM";
    }
    h=h==0?h=12:h;
    h=h<10?"0"+h : h;
    m=m<10?"0"+m : m;
    s=s<10?"0"+s : s;
   ct.textContent=`${h}:${m}:${s} ${a}`;
   if(at==`${h}:${m}:${a}`)
   {
    rt.play();
    rt.loop=true;
    if(rt.play())
    {
    h1.textContent="Wake Up!!..😉";
    console.log("ring/");
    }
    set.addEventListener("click",()=>{
     // h1.textContent="Wake Up!!..😉";
     rt.pause();
     rt.currentTime=0;
     // h1.textContent="Wake Up!!..😉";
     // console.log(rt.paused);
     // if(rt.paused){
          rt.muted=true;
          rt.currentTime=0;
          set.textContent="Set Alarm⏰";
          ct.textContent="00:00:00";
           h1.innerHTML="Alarm😴";
           console.log("pused");
          // if(rt.muted==true)
          // {
          // // container.classList.add("dis");
          // h1.textContent="Alarm😴";
          // }
     // }
     // h1.textContent="Alarm😴";
     // rt.loop=false;
     // set.textContent="Set Alarm⏰";
     // ct.textContent="00:00:00";
    });
//     h1.textContent="Alarm😴";
    // console.log("alaram ring..");
   }
 },1000); 
//  h1.textContent="Alarm😴";
 function setala(){
     h1.textContent="";
       let t=`${sm[0].value}:${sm[1].value}:${sm[2].value}`;
      if(t.includes("hour")|| t.includes("Minute")||t.includes("AM/PM"))
      {
        alert("select valid time🥴");
      }
      at=t;
     h1.textContent="Alarm😴";
      container.classList.add("disable");
      set.innerText="Snooze😴";

     //  h1.textContent="Alarm😴";
    // console.log(t);
 }      
 set.addEventListener("click",setala);
//  h1.textContent="Alarm😴";