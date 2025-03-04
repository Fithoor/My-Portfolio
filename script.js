function submit(){
    document.querySelector('.pop-up').style.display= "inline";
}
function display_none(){
    document.querySelector('.pop-up').style.display= "none";
}
function displayMenu(){
    // document.querySelector('.Class_for_Mobile').style.display= "flex";
    let menu = document.querySelector('.Class_for_Mobile');

    menu.classList.toggle('show');
    // if(menu.style.display === "none"){
    //     menu.style.display="flex";
    // }else{
    //     menu.style.display="none";
    // }
}
function submitToEmail() {
    let name = document.querySelector('.name-input').value;
    let message = document.querySelector('textarea').value;

    if (!message.trim()) {
        alert("Please enter a message!"); 
        return;
    }
    
    let subject = `Message from ${name || "Anonymous"}`;
    let emailBody = `Hello,\n\nMy name is ${name || "Anonymous"} and I want to say:\n\n${message}`;

    let mailtoLink = `mailto:bilamuhammadl54@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink; // This will open the default mail client
}
