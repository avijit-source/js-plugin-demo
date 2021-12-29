function ShowAd(options){
    let _this = this;
    let defaultOptions = {
        container: "video-div",
        videoId: "video-1",
        adShowTimer:10,
        goto:"https://.google.com"
    }
    options = {...defaultOptions,...options};
    let adImage = document.createElement("img");
    adImage.src = "https://i.ibb.co/JjNsyft/one-removebg-preview.png";
    adImage.setAttribute("id","ad-image")
    
    let videoNode = document.getElementById(options.videoId)
    var playTime = null;
    let videoInterval = setInterval(() => {
       if(!videoNode.paused){
           playTime = Math.floor(videoNode.currentTime);
           if(playTime === options.adShowTimer){
            document.getElementById(options.container).appendChild(adImage);
            document.getElementById("ad-image").addEventListener("click",openwindow)
            function openwindow(){
                window.open(options.goto, "_blank")
            }
           }else if(playTime > options.adShowTimer){
               document.getElementById("ad-image").remove();
               clearInterval(videoInterval);
           }
       }
    },1000)
}