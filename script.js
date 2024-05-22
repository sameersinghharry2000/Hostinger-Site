let menubarbtn = document.querySelector(".menubar");
let sidebar = document.querySelector(".sidebar");
let sidebarCross = document.querySelector(".sidebarCross");

menubarbtn.addEventListener("click", function () {
  sidebar.style.display = "block";
});
sidebarCross.addEventListener("click", function () {
  sidebar.style.display = "none";
});

let featurebtn = document.querySelector(".feature");
let moredata = document.querySelector(".moredata");

featurebtn.addEventListener("click", function () {
  moredata.style.display = "block";
  if ((moredata.style.display = "block")) {
    featurebtn.addEventListener("click", function () {
      moredata.style.display = "none";
    });
  }
});




const d = new Date();

document.querySelector(".boxs").innerHTML = `<div class="days">
            <div class="boxx">-${d.getDay()}</div>
            <p>Days</p>
        </div>
        <div class="days">
            <div class="boxx">-${d.getHours()}</div>
            <p>Hours</p>
        </div>
        <div class="days">
            <div class="boxx">-${d.getMinutes()}</div>
            <p>Minutes</p>
        </div>
        <div class="days">
            <div class="boxx">-${d.getSeconds()}</div>
            <p>Second</p>
        </div>
        </div>`;

        document.addEventListener('scroll', ()=>{
          let = header = document.querySelector('.header');
          
          if (window.scrollY > 0){
            header.classList.add('scrolled');
          }
          else {
            header.classList.remove('scrolled')
          }

        })