let indexValue = 0;
      function slideShow(){
        setTimeout(slideShow, 2500);
        let x;
        const img = document.querySelectorAll(".slide-image");
        if (img.length > 0) {
        for(x = 0; x < img.length; x++){
          img[x].style.display = "none";
        }
        indexValue++;
        if(indexValue > img.length){indexValue = 1}
        img[indexValue -1].style.display = "block";
      }}
      slideShow();

export { slideShow };
