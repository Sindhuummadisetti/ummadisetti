import React, { useEffect } from "react";
import "./App.css";
import "aos/dist/aos.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  useEffect(() => {
    import("aos").then((AOS) => AOS.init({ duration: 1000, once: true }));
  }, []);

  const tasks = [
       {
                "title": "Introduction To HTML",
                "description": "The Index page has a button labeled Go to Dashboard. When clicked, it redirects to the Dashboard page, which also has a button to go back to the Index page.",
                "date": "01-16-2025",
                "github": "https://github.com/Sindhuummadisetti/ummadisetti/blob/main/project/project1/index.html",
                "iframe": "https://sindhuummadisetti.github.io/ummadisetti/project/project1/index.html"
            },
            {
                "title": "CSS Hover Effect",
                "description": "This HTML and CSS code creates an interactive webpage displaying a series of colored letter blocks (S, I, N, D, H, U, J, A) arranged in a row. The blocks change size and color when hovered.",
                "date": "01-28-2025",
                "github": "https://github.com/Sindhuummadisetti/ummadisetti/blob/main/project/project2/index.html",
                "iframe": "https://sindhuummadisetti.github.io/ummadisetti/project/project2/index.html"
            },
            {
                "title": "Welcome To JS",
                "description": "This code creates a webpage with an input field and a button. When the user types their name and clicks the button, a JavaScript function shows an alert with a personalized greeting saying Welcome [user's name] The greeting changes based on what the user enters.",
                "date": "01-30-2025",
                "github": "https://github.com/Sindhuummadisetti/ummadisetti/blob/main/project/project3/index.html",
                "iframe": "https://sindhuummadisetti.github.io/ummadisetti/project/project3/index.html"
            },
            {
                "title": "Calculator with JS",
                "description": "This code creates a simple calculator with an input field for two numbers (X and Y) and a result field There are four buttons for different operations: addition, subtraction, multiplication, and division. When the user enters values for X and Y and clicks one of the buttons, the corresponding mathematical operation is performed, and the result is displayed in the Result field. The operations are handled by JavaScript functions, which take the values from the input fields, perform the calculation, and show the result.",
                "date": "01-30-2025",
                "github": "https://github.com/Sindhuummadisetti/ummadisetti/blob/main/project/project4/index.html",
                "iframe": "https://sindhuummadisetti.github.io/ummadisetti/project/project4/index.html"
            },
            {
                "title": "String Operation",
                "description": "This code creates a simple text converter that takes user input, converts it to uppercase, and displays the result in a disabled output field When the user types in the input field, the convertText function is triggered, which checks if there is any text entered If text is present, it converts the input to uppercase and shows it in the output field otherwise, the output field is cleared.",
                "date": "02-04-2025",
                "github": "https://github.com/Sindhuummadisetti/ummadisetti/blob/main/project/project5/index.html",
                "iframe": "https://sindhuummadisetti.github.io/ummadisetti/project/project5/index.html"
            },
            {
                "title": "Conditions: Grade Calculator",
                "description": "This code creates a simple grade calculator that allows users to input their score, and it dynamically displays the corresponding grade. The user enters their score in an input field, and the grade is calculated and displayed in a paragraph below The styling ensures the page is centered, with input fields and text appearing clearly, and the result updates as the user types The JavaScript function calculateGrade() (referenced in the external script.js file) handles the logic for calculating the grade based on the input score.",
                "date": "02-06-2025",
                "github": "https://github.com/Sindhuummadisetti/ummadisetti/blob/main/project/project6/index.html",
                "iframe": "https://sindhuummadisetti.github.io/ummadisetti/project/project6/index.html"
            },
            {
                "title": "Call-Stack with Array",
                "description": "This code creates a simple Task Manager web page where users can enter and manage tasks It features an input field to type the task name, an Add Task button to add tasks, and an Undo Task button to remove the most recently added task The tasks are displayed in a paragraph below the buttons, and initially, it shows No tasks yet The functionality for adding and undoing tasks is handled by JavaScript in an external script file.",
                "date": "02-06-2025",
                "github": "https://github.com/Sindhuummadisetti/ummadisetti/blob/main/project/project7/index.html",
                "iframe": "https://sindhuummadisetti.github.io/ummadisetti/project/project7/index.html"
            },
            {
                "title": "Star with Loops",
                "description": "This code creates a simple web page that generates a star pattern based on the number entered by the user It contains an input field where the user can enter a number, and as the user types, a star pattern is dynamically displayed below The pattern consists of a series of lines, with each line containing an increasing number of stars The pattern updates immediately as the user changes the number in the input field The logic for generating the pattern is handled by a JavaScript event listener that reacts to input changes.",
                "date": "02-11-2025",
                "github": "https://github.com/Sindhuummadisetti/ummadisetti/blob/main/project/project8/index.html",
                "iframe": "https://sindhuummadisetti.github.io/ummadisetti/project/project8/index.html"
            },
            {
                "title": "Triangle with Stars",
                "description": "This code creates a web page where the user can input a number, and based on the input, it dynamically displays a triangle of asterisks (*) The number entered determines how many rows of asterisks are shown, with each row containing an increasing number of stars Additionally, the text color of the displayed triangle changes each time the user types a new number, cycling through red, blue, green, and yellow The color change is handled by a JavaScript function that updates the text and cycles through the colors using an index.",
                "date": "02-13-2025",
                "github": "https://github.com/Sindhuummadisetti/ummadisetti/blob/main/project/project9/index.html",
                "iframe": "https://sindhuummadisetti.github.io/ummadisetti/project/project9/index.html"
            },
            {
                "title": "Star Pattern with Color",
                "description": "This code creates a simple web page where the user can input a number, and it dynamically generates a pattern of asterisks (*) in the form of a triangle The number entered determines how many rows of stars are shown, with each row containing an increasing number of stars Additionally, the text color of the pattern changes each time the user types a new number, cycling through red, blue, green, and yellow The color changes are managed by a JavaScript function that updates the displayed text and cycles through the colors using an index.",
                "date": "02-13-2025",
                "github": "https://github.com/Sindhuummadisetti/ummadisetti/blob/main/project/project10/index.html",
                "iframe": "https://sindhuummadisetti.github.io/ummadisetti/project/project10/index.html"
            },
            {
                "title": "Sum Calculator",
                "description": "This code creates a simple webpage that calculates the sum of all integers between two numbers (A and B) provided by the user There are two input fields for the user to enter values for A and B When the Calculate Sum button is clicked, the JavaScript function calculate() is triggered It uses a do-while loop to calculate the sum of all integers from A to B, then displays the result in a div element The sum is updated dynamically each time the user clicks the button.",
                "date": "02-13-2025",
                "github": "https://github.com/Sindhuummadisetti/ummadisetti/blob/main/project/project11/index.html",
                "iframe": "https://sindhuummadisetti.github.io/ummadisetti/project/project11/index.html"
            },
            {
                "title": "Class Work - Objects",
                "description": "This code creates a webpage where you can input and display student information The user can enter a student's name, ID, and department into text fields and then click the Insert Info button to store the data When the Show Info button is clicked, the latest entered student details are displayed Additionally, the All Students Data button shows all the student records stored in the array Each student's details, including name, student ID, and department, are dynamically displayed in the container or objectDataContainer based on the actions taken The student data is stored in an array to handle multiple student entries.",
                "date": "02-18-2025",
                "github": "https://github.com/Sindhuummadisetti/ummadisetti/blob/main/project/project12/index.html",
                "iframe": "https://sindhuummadisetti.github.io/ummadisetti/project/project12/index.html"
            },
            {
                "title": "Class Work - Objects 2",
                "description": "This code creates a simple student information management system where the user can input a student's name, course, year of admission, and roll number and click the Insert Info button to store the information. The details are stored in an array, and the user can view all stored student information by clicking the Show All button. The user can also search for students by their name or course using the search input and the Search button. If a match is found, the student information is displayed. The system allows the user to clear the inputs and the displayed data with the Clear Inputs and Clear Display buttons. The data is dynamically updated and displayed on the webpage.",
                "date": "02-20-2025",
                "github": "https://github.com/Sindhuummadisetti/ummadisetti/blob/main/project/project13/index.html",
                "iframe": "https://sindhuummadisetti.github.io/ummadisetti/project/project13/index.html"
            },
            {
                "title": "Temporary Content",
                "description": "This code creates a simple random number generator where the user can input a minimum and maximum value in the provided text fields When the Generate Random Number button is clicked the Generate() function is triggered This function checks whether the input values are valid numbers and whether the minimum value is less than or equal to the maximum value If the input is valid a random number between the specified range is generated and displayed on the screen If the input is invalid an error message is shown Additionally the script includes a clear_everything() function that clears the content of the page although it is not used in this code directly There's also a setTimeout function which is intended to call generate() after 3 seconds but it should be corrected to avoid errors.",
                "date": "02-25-2025",
                "github": "https://github.com/Sindhuummadisetti/ummadisetti/blob/main/project/project14/index.html",
                "iframe": "https://sindhuummadisetti.github.io/ummadisetti/project/project14/index.html"
            },
            {
                "title": "Random Number Array",
                "description": "This code creates a webpage where a user can input two integers, a and b, and generate a random number between them by clicking the 'Generate Random Number' button The generateRandomNumber() function is triggered when the button is clicked It retrieves the values from the input fields for a and b and generates a random number between them Then it selects a random color from an array of colors and displays the generated random number in that color on the webpage The result is shown in a paragraph element with the ID result.",
                "date": "02-25-2025",
                "github": "https://github.com/Sindhuummadisetti/ummadisetti/blob/main/project/project15/index.html",
                "iframe": "https://sindhuummadisetti.github.io/ummadisetti/project/project15/index.html"
            },
            {
                "title": "Vanished Text",
                "description": "This code creates a webpage where a user can input a minimum and maximum range to generate a random number between the two values The function Generate() is triggered when the user clicks the Generate Random Number button It checks if the input values are valid ensuring that both are numbers and the minimum value is not greater than the maximum If valid it generates a random number between the specified range and displays it on the page If the inputs are invalid it displays an error message Additionally the clear_everything() function is called after 5 seconds clearing the content and replacing it with the message Vanished.",
                "date": "02-25-2025",
                "github": "https://github.com/Sindhuummadisetti/ummadisetti/blob/main/project/project16/index.html",
                "iframe": "https://sindhuummadisetti.github.io/ummadisetti/project/project16/index.html"
            },
            {
                "title": "Class Work - Class & Bootstrap - Calculator",
                "description": "This code creates an age calculator webpage where the user can input their birthdate in the format dd/mm/yyyy and click a button to calculate their age The JavaScript function calculateAge() retrieves the date from the input field and compares it with the current date to calculate the age If the input is valid the user's age is displayed If the input is empty or invalid an error message is shown.",
                "date": "03-11-2025",
                "github": "https://github.com/Sindhuummadisetti/ummadisetti/blob/main/project/project17/index.html",
                "iframe": "https://sindhuummadisetti.github.io/ummadisetti/project/project17/index.html"
            },
            {
                "title": "Class Work - Class & Bootstrap",
                "description": "This code creates a webpage with a navigation bar using Bootstrap and a form that includes fields for username, email, and full name along with two buttons The form is styled using Bootstrap's grid system and the navigation bar is collapsible for responsive design The page includes a search bar in the navigation and buttons to either cancel or continue to checkout The Bootstrap framework is used for layout and styling making it mobile-friendly and visually appealing.",
                "date": "03-11-2025",
                "github": "https://github.com/Sindhuummadisetti/ummadisetti/blob/main/project/project18/index.html",
                "iframe": "https://sindhuummadisetti.github.io/ummadisetti/project/project18/index.html"
            },
  ];

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <h1>S</h1>
          <p>
            Sindhuja Ummadisetti
            <br />
            Web Developer
          </p>
        </div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#work">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/ummadisetti-sindhuja-1201/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Home, About, Experience, Education, Skills, Work, and Contact Sections */}
        <section id="work" className="section" data-aos="fade-up">
          <h2>Projects</h2>
          <div className="task-buttons">
            {tasks.map(task => (
              <a
                key={task.id}
                href={task.path} // Corrected the paths to start with "/"
                target="_blank"
                rel="noopener noreferrer"
                className="task-button"
              >
                {task.title}
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
