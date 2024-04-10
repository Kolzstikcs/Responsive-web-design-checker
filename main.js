    
        document.addEventListener("DOMContentLoaded", function() {
          const range = document.getElementById("range");
          
          const laptopFrame = document.getElementById("laptopFrame");
          
          const frameHeader = document.querySelectorAll(".frame-header");
          
          frameHeader.forEach((f)=>{
            f.innerHTML = `<i class="fa-solid fa-laptop" style="color: #ffffff;"></i> Laptop View ${laptopFrame.offsetWidth}px x ${laptopFrame.offsetHeight}px `;
          
          })
         
          
          
          range.addEventListener("input", function() {
            laptopFrame.style.width = this.value + "%";
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
    
    // Check if the URL is not empty and is a valid URL format
    if (url !== "" && url.match(/^https?:\/\/.+\..+$/) || url.startsWith("http://localhost")) {
        const loaderContainer = document.getElementById("loaderContainer");
        loaderContainer.style.display = "flex";
        
        const frames = document.querySelectorAll("iframe");
        
        const laptopFrame = document.getElementById("laptopFrame");
        
        laptopFrame.src = url;
        document.getElementById("phoneFrame").src = url;
        document.getElementById("tabletFrame").src = url;
        
        frames.forEach((f) => {
            f.onload = function() {
                loaderContainer.style.display = "none";
            }
        });
    } else {
        alert("URL can't be left empty OR Enter a valid URL.");
    }
}   
        
        
        
        /*
        function loadWebsite() {
          var url = document.getElementById("websiteUrl").value.trim();
          
          
          
          if (url !== "" && url.match(/^https?:\/\/.+\..+$/)) {
            const loaderContainer = document.getElementById("loaderContainer");
            loaderContainer.style.display = "flex";
            
            const frames = document.querySelectorAll("iframe");
           
            const laptopFrame = document.getElementById("laptopFrame");
            
            laptopFrame.src = url;
            document.getElementById("phoneFrame").src = url;
            document.getElementById("tabletFrame").src = url;
            
            

            frames.forEach((f)=>{
              f.onload = function() {
           loaderContainer.style.display = "none";
              }
            })
                    
            
          } else {
            alert("URL can't be left empty OR Enter a valid URL.");
          }
        }*/
        
        function updateFrameHeader() {
          const laptopFrameWidth = document.getElementById("laptopFrame").offsetWidth;
          
          const laptopFrameHeight = document.getElementById("laptopFrame").offsetHeight;
          
          const frameHeader = document.querySelectorAll(".frame-header");
          
          
          
          if (laptopFrameWidth <= 375) {
            frameHeader.forEach((f) => {
              f.innerHTML = `<i class="fa-solid fa-mobile" style="color: #ffffff;"></i> Phone View ${laptopFrame.offsetWidth}px x ${laptopFrame.offsetHeight}px `;
            
            })
           
          } else if (laptopFrameWidth <= 768) {
            frameHeader.forEach((f) => {
              f.innerHTML = `<i class="fa-solid fa-tablet" style="color: #ffffff;"></i> Tablet View ${laptopFrame.offsetWidth}px x ${laptopFrame.offsetHeight}px `;
            
            })
          } else {
            frameHeader.forEach((f)=>{
            f.innerHTML = `<i class="fa-solid fa-laptop" style="color: #ffffff;"></i> Laptop View ${laptopFrame.offsetWidth}px x ${laptopFrame.offsetHeight}px `;
          
          })
          }
        }
