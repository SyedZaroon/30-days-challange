const toast = document.querySelector(".toastbox");

let sucessmessage ='<i class="fa-regular fa-circle-check"></i> <p>Susessfully Submmited</p>';
let errormessage = '<i class="fa-regular fa-circle-xmark"></i> Please fix error';
let invalidmessage = '<i class="fa-solid fa-triangle-exclamation"></i> Invalid Message';

function showQuote(msg) {
    
    const notifiaction = document.createElement("div");
    notifiaction.classList.add("toastmessage")
 
    notifiaction.innerHTML = msg;
    toast.appendChild(notifiaction);

    if (msg.includes("error")) {
      notifiaction.classList.add("error");
    }
    if (msg.includes("Invalid")) {
      notifiaction.classList.add("invalid");
    }

    setTimeout(() => {
      notifiaction.remove();
    }, 3000);
   
}