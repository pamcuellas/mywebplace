/*jshint esversion: 6 */
let wordsCircle = (words, radius, classIndex) => {
    words = words.split("");
    classIndex = document.getElementsByClassName("wordscircle")[classIndex];
    let counter = 0;
    var deg = 360 / words.length,
    origin = 0;

    words.forEach((ea) => {
        ea = `<p style='height:${radius}vw;
                        top:0;
                        left:50%;
                        transform:translate(-50%, -50%);
                        position:absolute;
                        transform:rotate(${origin}deg);
                        animation-name:spin;	
                        animation-timing-function:linear;
                        animation-iteration-count:infinite;
                        animation-duration:15s;
                        animation-delay:${counter}s;
                        transform-origin:0 100%';
                        >${ea}</p>`;
        classIndex.innerHTML += ea;
        counter += -0.415;
        origin += deg;
    });
};
export default wordsCircle;
