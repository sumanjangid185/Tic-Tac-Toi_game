var score = 0;
var cross = true;
var audio = new Audio('music.mp3');
var audiogo = new Audio('gameover.mp3');

// Wait for DOM content to be loaded
document.addEventListener('DOMContentLoaded', function() {
    // Delay the playback for 1 second (1000 milliseconds)
    setTimeout(() => {
        // Play the audio, with error handling
        audio.play().catch(error => console.error('Error playing music:', error));
    }, 1000);
});
         document.onkeydown = function(e) {
            console.log("key code is:", e.keyCode);
           // for uparrow key
            if (e.keyCode == 38) {
                var dino = document.querySelector('.dino');
             // jb bhi yee class dinoo m add ho jati h dinooo jumpp kregaa 
                dino.classList.add('animateDino');
                //yee 700ms tak hi hoga iske baad 700ms k bad start hoga class remove hoo jayegi phir waps add 
                setTimeout(function() {
                    dino.classList.remove('animateDino');
                }, 700);
            }
            if (e.keyCode == 39) {
                var dino = document.querySelector('.dino');
                var  dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
                dino.style.left=(dinoX+112)+"px";
        }
        if (e.keyCode == 37) {
            var dino = document.querySelector('.dino');
            var  dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
            dino.style.left=(dinoX-112)+"px";
    }
    } 

    //collision dekhegaa
        setInterval(()=>{
           var  dino=document.querySelector('.dino')
           var gameOver=document.querySelector('.gameOver')
           var  obstacle=document.querySelector('.obstacle')
           //dino kaa x-axis se distance left se distnce
           dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
           // dinoo kii y-axise se distance yaa top se value
           dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
   //obscatle ki x-axis se dist.
            ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
            oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));


           var  offsetX=Math.abs(dx-ox);
           var   offsetY=Math.abs(dy-oy);
             console.log(offsetX,offsetY);
        if(offsetX<73 && offsetY<52){
            gameOver.style.visibility='visible';
            obstacle.classList.remove('obstacleAni')
            audiogo.play();
            setTimeout(()=>{
         audiogo.pause();
         audio.pause();
            },1000)
               }
               else if(offsetX<145 && cross){
                score+=1;
                updateScore(score);
                cross =false;
                setTimeout(()=>{
                    cross=true;
                },1000);
                setTimeout(()=>{
                    //obsctacle ki speed bdane k liye 
                    var aniduration=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
                    var newdur=aniduration-0.1;
                    //seconds k liyee
                    obstacle.style.animationDuration = newdur + 's';
                    console.log("new animation duration",newdur);
                },500)
               
               }
        
        
        },10);

        function updateScore(score){
            scorecount.innerHTML="Your Score:"+score;
        }
        
