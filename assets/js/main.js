
const hamburger = document.getElementById("mobileMenu");
const navbar = document.getElementById("mobileList");
const closeBtn = document.getElementById("close");

// Mobile Icon code
hamburger.addEventListener('click', ()=>{

    navbar.classList.add('show');
    hamburger.style.display = "none";
    closeBtn.style.display = "block";


});

// Mobile Close btn code
closeBtn.addEventListener('click', ()=>{

    navbar.classList.remove('show');
    hamburger.style.display = "block";
    closeBtn.style.display = "none";
});

// Add Active class on header nav bar code
let links = document.querySelectorAll('#mobileList li a');

Array.from(links).forEach(function(link){

    link.addEventListener('click', function(e){

        var i = document.querySelector(".active");

        if(i !==null){
            i.classList.remove("active");
        }
        e.target.className = "active";
        })
});

// Banner content code
// let featureTabs = document.querySelectorAll('.feature-box');
// let featBody = document.querySelector('.feat-body');
// console.log(featureTabs);
// Array.from(featureTabs).forEach(function(featureTab){
//     featureTab.addEventListener('click', function(){

//         console.log("saadsaf");
//         featBody.style.display = 'block';
//         // Array.from(featBody).forEach(function(Bd){
//         //     Bd.style.display = 'block';
//         //     console.log(Bd);
//         // })
//     });
// });


// Why choose us Tabs Content Code
const tabs =document.querySelectorAll('.tabs li');
const panels = document.querySelectorAll('.wrapper-content .panel');
//  console.log(tabs);

Array.from(tabs).forEach(function(tab){
//  console.log("tab=>", tab);
    tab.addEventListener('click', function(e){
        // console.log(e.target);

        Array.from(tabs).forEach(function(tab){
            tab.querySelector("a").classList.remove("active");
        })

        e.target.classList.add("active");
        // console.log(e.target.tagName);
        if(e.target.tagName == "A"){
            const targetPanel = document.querySelector(e.target.dataset.target);
            // console.log(targetPanel);
        //    console.log(panels);
            panels.forEach(function(panel){
                // console.log(panel);
                if(panel == targetPanel){
                    // panel.classList.add("showPanel");
                    panel.style.display ="block";
                }else{
                    // panel.classList.remove('showPanel');
                    panel.style.display ="none";
                }
            })
        }
    })
})
// Tab Code ends here


//Timer Code
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    window.alert("The due date is over");
  }
}, 1000);



// Slider code
// Array for slider content
let sliderData = [{slideImg:'/assets/images/courses-01.jpg',slideHeading:'media streaming',content:'Lorem ipsum, dolor sit Nam natus quibusdam nostrum iusto culpa? siodun skjskna',authorImg:'/assets/images/author-01.png',price:'Free'},
                  {slideImg:'/assets/images/courses-02.jpg',slideHeading:'social streaming',content:'Lorem ipsum, dolor sit Nam natus quibusdam nostrum iusto culpa? siodun skjskna',authorImg:'/assets/images/author-02.png',price:'Pay'},
                  {slideImg:'/assets/images/courses-03.jpg',slideHeading:'mass com-streaming',content:'Lorem ipsum, dolor sit Nam natus quibusdam nostrum iusto culpa? siodun skjskna',authorImg:'/assets/images/author-03.png',price:'Free'},
                  {slideImg:'/assets/images/courses-01.jpg',slideHeading:'media streaming',content:'Lorem ipsum, dolor sit Nam natus quibusdam nostrum iusto culpa? siodun skjskna',authorImg:'/assets/images/author-04.png',price:'Pay'},
                  {slideImg:'/assets/images/courses-02.jpg',slideHeading:'Social streaming',content:'Lorem ipsum, dolor sit Nam natus quibusdam nostrum iusto culpa? siodun skjskna',authorImg:'/assets/images/author-05.png',price:'Free'},
                  {slideImg:'/assets/images/courses-03.jpg',slideHeading:'Web streaming',content:'Lorem ipsum, dolor sit Nam natus quibusdam nostrum iusto culpa? siodun skjskna',authorImg:'/assets/images/author-03.png',price:'Pay'},
                  {slideImg:'/assets/images/courses-01.jpg',slideHeading:'Internet streaming',content:'Lorem ipsum, dolor sit Nam natus quibusdam nostrum iusto culpa? siodun skjskna',authorImg:'/assets/images/author-04.png',price:'Free'}];

const slider=document.querySelector('.slider-wrapper');
for(let i=0;i<sliderData.length;i++){
  let div=''
  div=`<div class="slide-box">
        <div class="slide-img">
            <img src="${sliderData[i].slideImg}" alt="Course image">
        </div>
        
        <div class="slide-content">
            <h3>${sliderData[i].slideHeading}</h3>
            <p>${sliderData[i].content}</p>
        
            <div class="author-bx">
                <div class="author-img">
                    <img src="${sliderData[i].authorImg}" alt="Author Image">
                </div>
                <div class="pay-btn-org">
                    <a href="" class="pay">${sliderData[i].price}</a>
                    <i class="fas fa-angle-double-right" id="pay"></i>
                </div>
            </div>
        </div>
    </div>`;
    // console.log("sdfd");
    slider.innerHTML+=div

}