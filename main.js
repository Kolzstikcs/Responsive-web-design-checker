    
        document.addEventListener("DOMContentLoaded", function() {
          const range = document.getElementById("range");
          const laptopFrame = document.getElementById("laptopFrame");
          const W = document.querySelector(".W");
          const H = document.querySelector(".H");
        
          function updateWidthAndHeight() {
            W.innerText = laptopFrame.offsetWidth;
            H.innerText = laptopFrame.offsetHeight;
          }
        
         // updateWidthAndHeight();
        
          range.addEventListener("input", function() {
            laptopFrame.style.width = this.value + "%";
          //  updateWidthAndHeight();
            updateFrameHeader();
          });
        });
        
        function view1() {
          document.querySelector('.frame-phone').style.display = "none";
          document.querySelector('.frame-tablet').style.display = "none";
          document.querySelector('.range').style.display = "block";
          updateFrameHeader();
        }
        
        function view2() {
          document.querySelector('.frame-phone').style.display = "block";
          document.querySelector('.frame-tablet').style.display = "block";
          document.querySelector('.range').style.display = "none";
          document.getElementById("laptopFrame").style.width = "100%";
          document.getElementById("range").value = 100;
          updateFrameHeader();
        }
        
        function viewChange(element) {
          if (element.value === '1') {
            view1();
          } else {
            view2();
          }
        }
        
        function loadWebsite() {
          var url = document.getElementById("websiteUrl").value.trim();
          if (url !== "" && url.match(/^https?:\/\/.+\..+$/)) {
            const laptopFrame = document.getElementById("laptopFrame");
            laptopFrame.src = url;
            document.getElementById("phoneFrame").src = url;
            document.getElementById("tabletFrame").src = url;
          } else {
            alert("Please enter a valid URL.");
          }
        }
        
        function updateFrameHeader() {
          const laptopFrameWidth = document.getElementById("laptopFrame").offsetWidth;
          
          const laptopFrameHeight = document.getElementById("laptopFrame").offsetHeight;
          
          const frameHeader = document.querySelector(".frame-header");
          if (laptopFrameWidth <= 375) {
            frameHeader.innerHTML = `<i class="fa-solid fa-mobile-screen-button" style="color: #ffffff;"></i> Phone/mobile view ${laptopFrameWidth}px x ${laptopFrameHeight}px `;
          } else if (laptopFrameWidth <= 768) {
            frameHeader.innerHTML = `<i class="fa-solid fa-tablet-screen-button" style="color: #ffffff;"></i> Tablet view ${laptopFrameWidth}px x ${laptopFrameHeight}px `;
          } else {
            frameHeader.innerHTML = `<i class="fa-solid fa-laptop" style="color: #ffffff;"></i> Laptop View ${laptopFrameWidth}px x ${laptopFrameHeight}px `;
          }
        }
