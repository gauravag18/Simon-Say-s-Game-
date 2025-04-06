let gameseq=[];
let userseq=[];

let btns=["yellow","red","purple","green"];

let level=0;
let started=false;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function ()
{
    if(started==false)
    {
        started=true;//GAME STARTS ONLY ONCE
        console.log("Game Started");

        levelUp();
    }
});

function gameflash(btn)
{
    btn.classList.add("flash");
    setTimeout(function()
    {
        btn.classList.remove("flash");
    },500);
}
function levelUp()
{
    level++;
    userseq=[];
    h2.innerText=`Level ${level}`;

    //Random Button Choose 
    let randidx=Math.floor(Math.random()*3);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`);

    console.log(gameseq);
    gameseq.push(randcolor); 
    gameflash(randbtn);
}
function check(idx)
{
    if(userseq[idx]===gameseq[idx])
    {
        if(userseq.length==gameseq.length)
        {
            setTimeout(levelUp,1000);
        }
    }
    else
    {
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br>Press Any Key To Start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function()
        {
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress()
{
    let btn=this;
    gameflash(btn);

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    check(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns)
{
    btn.addEventListener("click",btnPress);
}

function reset()
{
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}