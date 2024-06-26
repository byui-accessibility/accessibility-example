//Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function(e) {
			e.preventDefault();

			const target = document.querySelector(this.getAttribute('href'));
			
			//Remove tabindex when focus leaves heading level so there's no focus bar if you click on it later.
			target.addEventListener('focusout', () => {
				target.removeAttribute('tabindex');
			});

			target.scrollIntoView({
			  behavior: 'smooth'
			});
			
			
			// Remove any existing highlight classes
			document.querySelectorAll('.highlight').forEach(el => el.classList.remove('highlight'));

			// Add highlight class to target element
			target.classList.add('highlight');
			target.setAttribute('tabindex', '-1'); // Make the element focusable if it's not already
			target.focus();
			// Remove highlight class after a delay (e.g., 2 seconds)
			setTimeout(() => {
			  target.classList.remove('highlight');
			}, 2000);
		});
	});
	
//Alert buttons
let alert1 = document.querySelectorAll('.alert1')
alert1.forEach(item => {
	item.addEventListener('click', () => {
		alert("Button 1 has been clicked!");
	});		
});

let alert2 = document.querySelectorAll('.alert2')
alert2.forEach(item => {
	item.addEventListener('click', () => {
		alert("Button 2 has been clicked!");
	});		
});

let alert3 = document.querySelectorAll('.alert3')
alert3.forEach(item => {
	item.addEventListener('click', () => {
		alert("Button 3 has been clicked!");
	});		
});

//Inactive button
const form = document.getElementById('myForm');
      const submitBtn = document.getElementById('submitBtn');
      
      form.addEventListener('input', function() {
          const inputs = form.querySelectorAll('input');
          let isValid = true;
          inputs.forEach(input => {
              if (!input.checkValidity()) {
                  isValid = false;
              }
          });
          submitBtn.disabled = !isValid;
      });
//Dropdown menu
var dropdownBtn = document.getElementById('dropdown-btn');
var dropdownMenu = document.getElementById('dropdown-menu');

dropdownBtn.addEventListener('click', function () {
	var expanded = this.getAttribute('aria-expanded') === 'true';
	this.setAttribute('aria-expanded', !expanded);
	dropdownMenu.setAttribute('aria-hidden', expanded);
	dropdownMenu.style.display = expanded ? 'none' : 'block';
	if (!expanded) {
	  dropdownMenu.querySelector('a').focus();
	}
});
dropdownBtn.addEventListener('mouseover', function () {
	var expanded = this.getAttribute('aria-expanded') === 'true';
	this.setAttribute('aria-expanded', !expanded);
	dropdownMenu.setAttribute('aria-hidden', expanded);
	dropdownMenu.style.display = expanded ? 'none' : 'block';
	if (!expanded) {
	  dropdownMenu.querySelector('a').focus();
	}
});
dropdownBtn.addEventListener('mouseout', function () {
	if (!dropdownBtn.contains(event.relatedTarget) && !dropdownMenu.contains(event.relatedTarget)) {
			dropdownMenu.style.display = 'none';
			dropdownBtn.setAttribute('aria-expanded', 'false');
	}
});

dropdownMenu.addEventListener('focusout', function () {
	if (!dropdownBtn.contains(event.relatedTarget) && !dropdownMenu.contains(event.relatedTarget)) {
		dropdownMenu.style.display = 'none';
		dropdownBtn.setAttribute('aria-expanded', 'false');
	}
});
	
//unexpected changes
function changeColor(color) {
	let box = document.getElementById('colorBox');
	box.style.backgroundColor = color;
	box.ariaLabel = `${color} box`;
}
function displayMessage() {
	document.getElementById('expected-message').innerText = "You clicked the button!";
}

//automatically updating content can be paused
let tickerText = [
            "Breaking News: Market hits all-time high!",
            "Weather Update: Sunny skies throughout the week.",
            "Sports: Local team wins championship!",
            "Tech: New smartphone release next month."
];

let currentIndex = 0;
let ticker = document.getElementById('ticker');
let intervalInput = document.getElementById('interval');
let intervalTime = parseInt(intervalInput.value);
let tickerInterval;

function startTicker() {
	tickerInterval = setInterval(updateTicker, intervalTime);
}

function updateTicker() {
	ticker.innerHTML = "<span>" + tickerText[currentIndex] + "</span>";
    currentIndex = (currentIndex + 1) % tickerText.length;
}

function resumeTicker() {
	clearInterval(srTickerInterval);
	startTicker();
}

function stopTicker() {
	clearInterval(tickerInterval);
}

function updateInterval() {
	intervalTime = parseInt(intervalInput.value);
    clearInterval(tickerInterval);
    startTicker();
}

startTicker();

//Change built in commands

  let commands = [
    { key: 'c', action: 'Copy command triggered!' },
    { key: 's', action: 'Save command triggered!' }
  ];

  // Function to handle key events
  function handleKeyPress(event, commandIndex) {
    const command = commands[commandIndex];
    if (event.ctrlKey && event.key === command.key) {
      alert(command.action);
      event.preventDefault(); // Prevent default browser behavior
    }
  }

  // Add event listeners to specific elements
  const commandArea1 = document.getElementById('commandArea1');
  const commandArea2 = document.getElementById('commandArea2');

  commandArea1.addEventListener('keydown', (event) => handleKeyPress(event, 0));
  commandArea2.addEventListener('keydown', (event) => handleKeyPress(event, 1));

  // Function to update commands dynamically
  function updateCommand(areaIndex) {
    const newCommand = document.getElementById(`commandInput${areaIndex}`).value.trim().toLowerCase();
    if (!newCommand) {
      alert('Please enter a valid command (single character)');
      return;
    }
    commands[areaIndex - 1].key = newCommand;
    document.getElementById(`command${areaIndex}`).textContent = `Ctrl + ${newCommand.toUpperCase()}`;
  }

//Close dynamic content
function addContent() {
    // Create a new content item
    const newItem = document.createElement('div');
    newItem.className = 'content-item';
    newItem.innerHTML = `
        <div class="dynamic-div">
		<p>This is dynamically added content.</p>
        <button class="close-btn" onclick="closeContent(this)" aria-label="delete content">X</button>
		</div>
    `;

    // Append the new item to the content container
    document.getElementById('content-container').appendChild(newItem);
}

function closeContent(element) {
    // Find the parent element (content-item) and remove it
    const itemToRemove = element.parentNode;
    itemToRemove.remove();
}

//Focusing prevents additional content from disappearing

  const container = document.getElementById('additional-focus');
  const additionalContentButton = container.querySelector('.additional-content');

 
  const showButton = () => {
    additionalContentButton.style.display = 'block';
  };


  const hideButton = () => {
    setTimeout(() => {
      // Check if the focus is still within the container or the additional content button
      if (!container.contains(document.activeElement)) {
        additionalContentButton.style.display = 'none';
      }
    }, 10); // Delay to allow for keyboard navigation
  };

  // Add event listeners to show/hide the button based on focus
  container.addEventListener('focusin', showButton);
  container.addEventListener('focusout', hideButton);
	
	function focusAlert() {
		alert('Button clicked!');
	}

//Time automatically updating content can be paused
let timeTickerText = [
            "Breaking News: Market hits all-time high!",
            "Weather Update: Sunny skies throughout the week.",
            "Sports: Local team wins championship!",
            "Tech: New smartphone release next month."
];
let timeCurrentIndex = 0;
let timeTicker = document.getElementById('time-ticker');
let timeIntervalInput = document.getElementById('time-interval');
let timeIntervalTime = parseInt(timeIntervalInput.value);
let timeTickerInterval;

function timeStartTicker() {
	timeTickerInterval = setInterval(timeUpdateTicker, timeIntervalTime);
}

function timeUpdateTicker() {
	timeTicker.innerHTML = "<span>" + timeTickerText[timeCurrentIndex] + "</span>";
    timeCurrentIndex = (timeCurrentIndex + 1) % timeTickerText.length;
}

function timeResumeTicker() {
	clearInterval(timeTickerInterval);
	timeStartTicker();
}

function timeStopTicker() {
	clearInterval(timeTickerInterval);
}

function timeUpdateInterval() {
	timeIntervalTime = parseInt(timeIntervalInput.value);
    clearInterval(timeTickerInterval);
    timeStartTicker();
}

timeStartTicker();


//Flashing content
let flashingBox = document.getElementById('flashingBox');
let animationPaused = false;

function pauseFlashing() {
    if (!animationPaused) {
        flashingBox.style.animationPlayState = 'paused';
        animationPaused = true;
    }
}

function resumeFlashing() {
    if (animationPaused) {
        flashingBox.style.animationPlayState = 'running';
        animationPaused = false;
    }
}

//Sound ping
document.getElementById('notifyButton').addEventListener('click', function() {
            var audio = document.getElementById('notificationSound');
            var notificationText = document.getElementById('notificationText');
            
            // Play the sound
            audio.play();

            // Provide a text description for the sound
            notificationText.textContent = 'You have a new message.';
        });

//sr alert button
document.getElementById('alertButton').addEventListener('click', function() {
            var notificationText = document.getElementById('alert-text');

            // Provide a text description for the sound
            notificationText.textContent = 'You have clicked the button.';
        });
