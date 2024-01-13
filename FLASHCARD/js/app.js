const loginbutton = document.querySelector('.login')
const Signupbutton = document.querySelector('.Signup')
const Faqbutton = document.querySelector('.Faq')

Signupbutton.addEventListener('click',function(){
    console.log("You clicked the signup button")
} 
)
loginbutton.addEventListener('click',function(){
   console.log("you clicked the login button");
})
Faqbutton.addEventListener('click',function(){
    console.log("you clicked the Faq button")
})