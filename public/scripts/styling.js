var aboutMe = 

    "<p id='about-me'>Hi!  My name is Lewis and I am an aspiring web developer living in Norwich, England.\
    I have developed both artistic and technological skills over the years completing an\
    illustration degree and subsequently creating digital artwork as a freelance illustrator.\
    I love creating and naturally I became interested in computer programming and how applications were built.\
    I feel that web development combines both my interest in visual art and technology and this\
    has led me to pursue this career path.  In the past year and a half I have been teaching myself the\
    tools I need to make websites such as:</p>\
    <ul id='skills'>\
        <li>HTML</li>\
        <li>CSS</li>\
        <li>Javascript</li>\
        <li>JQuery</li>\
        <li>React.js</li>\
        <li>Git</li>\
        \
    </ul>\
    <p>I am now looking to continue my professional development with a Junior level role.</p>\
    <p> Previous work experience: </p>\
    <p><strong>Junior Web Developer</strong> - CD2 Solutions</p>\
    <p>During my time at CD2 solutions I worked with the team to maintain and develop their sites and online \
    platforms.  In my junior role I was tasked with large refactoring jobs, QA’ testing (working through any issues)\
    and styling with CSS.  This also involved making the sites responsive to different screen sizes and compatible\
    across various browsers and devices.</p>";

var qualifications = 

    " <p>\
            <strong>Norwich University of the Arts</strong>\
            - BA (Hons) Illustration 2.1\
        </p>\
         <p>\
            <strong>University for the Creative Arts</strong>\
            - Foundation Diploma in Art and Design with Merit\
        </p>\
        <div id='school-qualifications'>\
             <div id='A-Levels' class='list-styling-none'>\
                <Strong>A-Levels</strong>\
                <ul id='ul-A-Levels'>\
                    <li>Art - C</li>\
                    <li>ICT - C</li>\
                    <li>Photography (AS) - C</li>\
                </ul>\
            </div>\
                <div id='GCSEs'>\
                <Strong>GCSEs</strong>\
                <p id='p-GCSEs'> 9 GCSE's C or above</p>\
            </div>\
        </div>"; 

var contactInfo = "lunsworth@live.com";

var contactFormHtml =

    '<form id="contact-form" action="/send-email" method="POST">\
    <input class="form-input" type="text" id="name" name="name" placeholder="Your name...">\
    <input class="form-input" type="email" id="email" name="email" placeholder="Your e-mail...">\
    <input type="text" class="form-input"id="subject" name="subject" placeholder="Subject...">\
    <textarea id="input" class="form-input"name="content" placeholder="Write something..." style="height:200px"></textarea>\
    <input type="submit" class="btn-submit grow" value="send">\
    </form>'

var content = document.getElementById("content");
var text = document.getElementById("text");
var aboutButton = document.getElementById("about-button");
var qualificationsButton = document.getElementById("qualifications-button");
var contactButton = document.getElementById("contact-button");
var formInputs = document.getElementsByClassName("form-input");
var form = document.getElementById("contact-form");

var aboutDropdown = false;
var qualificationsDropdown = false;
var contactDropdown = false;


aboutButton.addEventListener("click", function () {
   if (qualificationsDropdown === true) {
       //close dropdown
        content.classList.remove("content-dropdown");
        text.classList.remove("visible");
        //open dropdown
        content.classList.add("content-dropdown");
        text.classList.add("visible");
        //change text
        text.innerHTML = aboutMe;
        qualificationsDropdown = false;
        aboutDropdown = true;
        } else if (contactDropdown === true) {
            //close dropdown
            content.classList.remove("content-dropdown");
            text.classList.remove("visible");
            //open dropdown
            content.classList.add("content-dropdown");
            text.classList.add("visible");
            //change text
            text.innerHTML = aboutMe;
            contactDropdown = false;
            aboutDropdown = true;
            } else if (aboutDropdown === true) {
                content.classList.remove("content-dropdown");
                text.classList.remove("visible");
                aboutDropdown = false;
            } else {
                content.classList.add("content-dropdown");
                text.classList.add("visible");
                aboutDropdown = true;
                text.innerHTML = aboutMe;
            };
buttonHighlighting ();
   
});

qualificationsButton.addEventListener("click", function () {
     if (aboutDropdown === true) {
       //close dropdown
        content.classList.remove("content-dropdown");
        text.classList.remove("visible");
        //open dropdown
        content.classList.add("content-dropdown");
        text.classList.add("visible");
        //change text
        text.innerHTML = qualifications;
        aboutDropdown = false;
        qualificationsDropdown = true;
        } else if (contactDropdown === true) {
            //close dropdown
            content.classList.remove("content-dropdown");
            text.classList.remove("visible");
            //open dropdown
            content.classList.add("content-dropdown");
            text.classList.add("visible");
            //change text
            text.innerHTML = qualifications;
            contactDropdown = false;
            qualificationsDropdown = true;
            } else if (qualificationsDropdown === true) {
                content.classList.remove("content-dropdown");
                text.classList.remove("visible");
                qualificationsDropdown = false;
            } else {
                content.classList.add("content-dropdown");
                text.classList.add("visible");
                qualificationsDropdown = true;
                text.innerHTML = qualifications;
            };
buttonHighlighting ();
});


contactButton.addEventListener("click", function () {
        if (aboutDropdown === true) {
       //change text
        text.innerHTML = contactFormHtml;
        aboutDropdown = false;
        contactDropdown = true;
        } else if (qualificationsDropdown === true) {
            //change text
            text.innerHTML = contactFormHtml;
            qualificationsDropdown = false;
            contactDropdown = true;
            } else if (contactDropdown === true) {
                setTimeout(function() {
                content.classList.remove("content-dropdown");
                }, 400);
                text.classList.remove("visible");
                contactDropdown = false;
            } else {
                content.classList.add("content-dropdown");
                setTimeout(function(){
                text.classList.add("visible");    
                }, 900);
                text.innerHTML = contactFormHtml;
                contactDropdown = true;
            };
buttonHighlighting ();
});
            


// function closeDropdown () {
//      //close dropdown
//      content.classList.remove("content-dropdown");
//      text.classList.remove("visible");
// };

function buttonHighlighting () {
    if (aboutDropdown === true){
        aboutButton.classList.add("selected");
    } else if (aboutDropdown === false){
        aboutButton.classList.remove("selected");
    }
    
    if (qualificationsDropdown === true){
        qualificationsButton.classList.add("selected");
    } else if (qualificationsDropdown === false){
        qualificationsButton.classList.remove("selected");
    }  
    
    if (contactDropdown === true){
        contactButton.classList.add("selected");
    } else if (contactDropdown === false){
        contactButton.classList.remove("selected");
    }
};


// function addClassToElements(array,addClass) {
//     for(var i=0; i<array.length; i++ ) {
//         array[i].classList.add(addClass);
//     };
// };

// function removeClassFromElements(array,addClass) {
//     for(var i=0; i<array.length; i++ ) {
//         array[i].classList.remove(addClass);
//     };
// };