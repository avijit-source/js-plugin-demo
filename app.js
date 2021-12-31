function ShowAd(options){
    let _this = this;
    let defaultOptions = {
        container: "video-div",
        videoId: "video-1",
        adShowTimer:10,
        goto:"https://google.com"
    }
    options = {...defaultOptions,...options};
    let adImage = document.createElement("img");
    adImage.src = "https://i.ibb.co/JjNsyft/one-removebg-preview.png";
    adImage.setAttribute("id","ad-image");
    let styles = `
    width: 100px; height: 100px;
    z-index: 9999;
    position: absolute;
    top:58%;
    left:200px;
    `
    adImage.style = styles;
    document.getElementById("video-div").style.position = "relative";
    
    let videoNode = document.getElementById(options.videoId)
    var playTime = null;
    let videoInterval = setInterval(() => {
       if(!videoNode.paused){
           playTime = Math.floor(videoNode.currentTime);
           if(playTime === options.adShowTimer){
            document.getElementById(options.container).appendChild(adImage);
            document.getElementById("ad-image").addEventListener("click",openwindow)
            function openwindow(){
                window.open(options.goto, "_blank");
                videoNode.pause();
            }
           
           }else if( !videoNode.paused && playTime > options.adShowTimer ){
              
               document.getElementById("ad-image")?.remove();
            //    clearInterval(videoInterval);
           }else if(playTime < options.adShow){
               console.log("less");
           }
       }
    },1000)
    videoInterval
}