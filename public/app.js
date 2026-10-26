let deleteChat = document.querySelectorAll(".delete-form");


deleteChat.forEach((form)=>{
    form.addEventListener("submit",(event)=>{
        const confirmed = confirm("Are you sure you want to delete this chat? This action cannot be undone!");
        if(!confirmed){
    event.preventDefault();
    
}
    });
});

