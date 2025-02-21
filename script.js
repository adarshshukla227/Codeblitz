// script.js

// AI Chatbot Simulation


//links
//http://eloquentjavascript.net/09_regexp.html
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions


var messages = [], //array that hold the record of each string in chat
  lastUserMessage = "", //keeps track of the most recent input string from the user
  botMessage = "", //var keeps track of what the chatbot is going to say
  botName = 'Chatbot', //name of the chatbot
  talking = true; //when false the speach function doesn't work
//
//
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//edit this function to change what the chatbot says
function chatbotResponse() {
  talking = true;
  botMessage = "I'm confused"; //the default message

  if (lastUserMessage === 'hi' || lastUserMessage =='hello')  {
    const hi = ['hi','howdy','hello']
    botMessage = hi[Math.floor(Math.random()*(hi.length))];;
  }

  if (lastUserMessage === 'name') {
    botMessage = 'My name is ' + botName;
  }
  if (lastUserMessage === 'i love you') {
    botMessage = 'love you 2' ;
  }
  if (lastUserMessage === 'adarsh shukla') {
    botMessage = 'he is my father' ;
  }
  if (lastUserMessage === 'your gender') {
    botMessage = 'male' ;
  }
  if (lastUserMessage === 'who is your founder') {
    botMessage = 'adarsh shukla' ;
  }
  if (lastUserMessage === 'who is your father') {
    botMessage = 'adarsh shukla' ;
  }
  if (lastUserMessage === 'bca') {
    botMessage = 'BCA can stand for Bachelor of Computer Applications. It is a 3-year long undergraduate degree program primarily focused on computer applications' ;
  }
  if (lastUserMessage === 'where is abs located') {
    botMessage = 'Allenhouse Business School is one of the best Management college in Kanpur promising the best quality education and it is located in Kulgaon Road, Chakeri Ward, Rooma, Kanpur, Uttar Pradesh' ;
  }
  if (lastUserMessage === 'what is javascript') {
    botMessage = 'JavaScript (JS) is a high-level, dynamic programming language used to create interactive and dynamic content on websites. It works alongside HTML (structure) and CSS (styling) to build modern web applications.' ;
  }
  if (lastUserMessage === 'what is computer') {
    botMessage = 'A computer is an electronic device that processes data and performs tasks based on instructions using hardware and software. It can store, retrieve, and manipulate information efficiently. ' ;
  }
  if (lastUserMessage === 'what is c') {
    botMessage = 'C is a high-performance, general-purpose programming language developed in 1972, widely used for system programming, embedded systems, and software development due to its efficiency, portability, and low-level memory access';
  }
  if (lastUserMessage === 'what is html') {
    botMessage = 'HTML (HyperText Markup Language) is the standard language used to create web pages. It provides the structure of a webpage by using elements (tags)';
  }
  if (lastUserMessage === 'what is css') {
    botMessage = 'CSS (Cascading Style Sheets) is a language used to style and format web pages. It controls the appearance of HTML elements, including layout, colors, fonts, spacing, and animations.' + botName;
  }
}
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//
//
//
//this runs each time enter is pressed.
//It controls the overall input and output
function newEntry() {
  //if the message from the user isn't empty then run 
  if (document.getElementById("chatbox").value != "") {
    //pulls the value from the chatbox ands sets it to lastUserMessage
    lastUserMessage = document.getElementById("chatbox").value;
    //sets the chat box to be clear
    document.getElementById("chatbox").value = "";
    //adds the value of the chatbox to the array messages
    messages.push(lastUserMessage);
    //Speech(lastUserMessage);  //says what the user typed outloud
    //sets the variable botMessage in response to lastUserMessage
    chatbotResponse();
    //add the chatbot's name and message to the array messages
    messages.push("<b>" + botName + ":</b> " + botMessage);
    // says the message using the text to speech function written below
    Speech(botMessage);
    //outputs the last few array elements of messages to html
    for (var i = 1; i < 8; i++) {
      if (messages[messages.length - i])
        document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
    }
  }
}

//text to Speech
//https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API
function Speech(say) {
  if ('speechSynthesis' in window && talking) {
    var utterance = new SpeechSynthesisUtterance(say);
    //msg.voice = voices[10]; // Note: some voices don't support altering params
    //msg.voiceURI = 'native';
    //utterance.volume = 1; // 0 to 1
    //utterance.rate = 0.1; // 0.1 to 10
    //utterance.pitch = 1; //0 to 2
    //utterance.text = 'Hello World';
    //utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  }
}

//runs the keypress() function when a key is pressed
document.onkeypress = keyPress;
//if the key pressed is 'enter' runs the function newEntry()
function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {
    //runs this function when enter is pressed
    newEntry();
  }
  if (key == 38) {
    console.log('hi')
      //document.getElementById("chatbox").value = lastUserMessage;
  }
}

//clears the placeholder text ion the chatbox
//this function is set to run when the users brings focus to the chatbox, by clicking on it
function placeHolder() {
  document.getElementById("chatbox").placeholder = "";
}
function adjustOpacity() {
  // Get the length of the text in the chatbox
  const chatInput = document.getElementById("chatbox");
  const image = document.getElementById("image");
  const textLength = chatInput.value.length;
  
  // Map the length of the input to an opacity value (0 to 1)
  const opacityValue = Math.min(textLength / 5, 1); // Limit the opacity to 1

  // Apply the opacity to the image
  image.style.opacity = opacityValue;
}


// 1. Dynamic Course Filtering


document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search courses...';
    document.querySelector('.popular-courses').prepend(searchInput);
  
    const courses = document.querySelectorAll('.course');
  
    searchInput.addEventListener('input', function () {
      const searchTerm = searchInput.value.toLowerCase();
  
      courses.forEach((course) => {
        const courseName = course.querySelector('h3').textContent.toLowerCase();
        if (courseName.includes(searchTerm)) {
          course.style.display = 'block';
        } else {
          course.style.display = 'none';
        }
      });
    });
  });
  
  // 2. Testimonial Slider
  let currentTestimonial = 0;
  const testimonials = document.querySelectorAll('.testimonial');
  
  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.style.display = i === index ? 'block' : 'none';
    });
  }
  
  function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  }
  
  function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
  }
  
  // Add navigation buttons
  const testimonialSection = document.querySelector('.testimonials');
  const prevButton = document.createElement('button');
  prevButton.textContent = '←';
  prevButton.addEventListener('click', prevTestimonial);
  
  const nextButton = document.createElement('button');
  nextButton.textContent = '→';
  nextButton.addEventListener('click', nextTestimonial);
  
  testimonialSection.append(prevButton, nextButton);
  
  // Show the first testimonial initially
  showTestimonial(currentTestimonial);
  
  // 3. Enrollment Form Validation
  const enrollmentForm = document.createElement('form');
  enrollmentForm.innerHTML = `
    <h3>Enroll Now</h3>
    <input type="text" placeholder="Full Name" required>
    <input type="email" placeholder="Email Address" required>
    <button type="submit">Submit</button>
  `;
  document.querySelector('.cta').appendChild(enrollmentForm);
  
  enrollmentForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = enrollmentForm.querySelector('input[type="text"]').value;
    const email = enrollmentForm.querySelector('input[type="email"]').value;
  
    if (name && email.includes('@')) {
      alert(`Thank you, ${name}! We will contact you shortly.`);
      enrollmentForm.reset();
    } else {
      alert('Please enter valid details.');
    }
  });
  
  // 4. Dark Mode Toggle
  const darkModeToggle = document.createElement('button');
  darkModeToggle.textContent = '🌙 Dark Mode';
  document.querySelector('header').appendChild(darkModeToggle);
  
  darkModeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
  });
  
  // Add dark mode styles
  const style = document.createElement('style');
  style.textContent = `
    .dark-mode {
      background-color: #1a1a1a;
      color: #ffffff;
    }
    .dark-mode header {
      background-color: #333;
    }
    .dark-mode .course, .dark-mode .testimonial, .dark-mode .blog-post, .dark-mode .faq-item {
      background-color: #444;
      color: #ffffff;
    }
  `;
  document.head.appendChild(style);
  
  // 5. Scroll-to-Top Button
  const scrollToTopButton = document.createElement('button');
  scrollToTopButton.textContent = '↑';
  scrollToTopButton.style.position = 'fixed';
  scrollToTopButton.style.bottom = '20px';
  scrollToTopButton.style.right = '20px';
  scrollToTopButton.style.padding = '10px';
  scrollToTopButton.style.borderRadius = '50%';
  scrollToTopButton.style.backgroundColor = '#e67e22';
  scrollToTopButton.style.color = '#fff';
  scrollToTopButton.style.border = 'none';
  scrollToTopButton.style.cursor = 'pointer';
  scrollToTopButton.style.display = 'none';
  document.body.appendChild(scrollToTopButton);
  
  window.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  });
  
  scrollToTopButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });