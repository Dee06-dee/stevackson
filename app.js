let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");
let homeDom = document.querySelector(".home");
let listitemDom = document.querySelector(".home .home-slide");
let thumbnailDom = document.querySelector(".home .thumbnail");

nextDom.onclick = function(){
    showSlider("next");
}
prevDom.onclick = function(){
    showSlider("prev") 
}
let timeRunning = 5000;
let timeAutoNext = 10000;
let runTimeOut;
let runAutoRun = setTimeout(()=>{
    nextDom.click();
},timeAutoNext);

function showSlider(type){
    let itemSlider = document.querySelectorAll(".home .home-slide .item")
    let itemThumbnail = document.querySelectorAll(".home .thumbnail .item")

    if(type === "next"){
        listitemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        homeDom.classList.add("next");
    }else{
        let positionLastitem = itemSlider.length -1;
        
        listitemDom.prepend(itemSlider[positionLastitem]);
        thumbnailDom.prepend(itemThumbnail[positionLastitem]);
        homeDom.classList.add("prev");
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() =>{
        homeDom.classList.remove("next");
    }, timeRunning)
    
    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(()=>{
        nextDom.click();
    },timeAutoNext);
}

// Listen for the form submission
document.getElementById('contact').addEventListener('submit', async (e) => {
    // Stop the form from refreshing the page
    e.preventDefault();

    // Collect the form data
    const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
    };

    // Send the form data to the server
    const response = await fetch('/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    // Let the user know if it was successful or not
    if (response.ok) {
        alert('Your message has been sent!');
    } else {
        alert('There was an error sending your message.');
    }
})
