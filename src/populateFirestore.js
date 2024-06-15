import { db } from "./firebase/FirebaseConfig";
import { collection, doc, setDoc } from "firebase/firestore";

const htmlLevel1Quest1Questions = [
  {
    title: "What's an &lt;h1&gt; Element?",
    definition: "The &lt;h1&gt; element defines the main heading of a webpage.",
    keypoint: [
      "Purpose: Represents the most important heading.",
      "Syntax: &lt;h1&gt;content&lt;/h1&gt;",
      "SEO: Helps search engines understand your page's topic.",
      "Usage: Typically one &lt;h1&gt; per page for clear structure.",
    ],
    example: "&lt;h1&gt;This is a main heading&lt;/h1&gt;",
    question: `Find the &lt;h1&gt; element in the code below:
          Change the text from “Hello World” to “Pet Bakery”:`,
    initialCode: `
  <html>
    <body>
      <h1>Hello World</h1> 
    </body>
  </html>`,
    correctCode: `
  <html>
    <body>
      <h1>Pet Bakery</h1> 
    </body>
  </html>`,
  },
  {
    title: "What is the purpose of the &lt;p&gt; element?",
    definition: "The &lt;p&gt; element defines a paragraph of text.",
    keypoint: [
      "Purpose: Represents a paragraph.",
      "Syntax: &lt;p&gt;content&lt;/p&gt;",
      "SEO: Helps break up text for readability.",
      "Usage: Multiple &lt;p&gt; elements for different paragraphs.",
    ],
    example: "&lt;p&gt;This is a paragraph.&lt;/p&gt;",
    question: `Find the &lt;p&gt; element in the code below:
          Change the text from “Lorem Ipsum” to “Welcome to my Website”:`,
    initialCode: `
  <html>
    <body>
      <p>Lorem Ipsum</p> 
    </body>
  </html>`,
    correctCode: `
  <html>
    <body>
      <p>Welcome to my Website</p> 
    </body>
  </html>`,
  },
  {
    title: "What is the purpose of the id attribute in HTML?",
    definition: "The id attribute specifies a unique id for an HTML element.",
    keypoint: [
      "Purpose: Provides a unique identifier for elements.",
      "Syntax: <element id='unique-id'>content</element>",
      "Usage: Used in CSS and JavaScript to target elements.",
      "Uniqueness: The value of id must be unique within the HTML document.",
    ],
    example: "<div id='main'>This is the main div</div>",
    question: `Identify the id attribute in the code below and change the id from “header” to “main-header”:`,
    initialCode: `
  <html>
    <body>
      <div id="header">Header Content</div> 
    </body>
  </html>`,
    correctCode: `
  <html>
    <body>
      <div id="main-header">Header Content</div> 
    </body>
  </html>`,
  },
  {
    title: "Explain the purpose of the class attribute in HTML.",
    definition:
      "The class attribute specifies one or more class names for an element.",
    keypoint: [
      "Purpose: Applies a class or multiple classes to an element.",
      "Syntax: <element class='classname'>content</element>",
      "Usage: Used in CSS and JavaScript to style and manipulate elements.",
      "Multiple Classes: Multiple classes can be separated by spaces.",
    ],
    example: "<div class='container'>This is a container</div>",
    question: `Identify the class attribute in the code below and change the class from “box” to “container box”:`,
    initialCode: `
  <html>
    <body>
      <div class="box">Box Content</div> 
    </body>
  </html>`,
    correctCode: `
  <html>
    <body>
      <div class="container box">Box Content</div> 
    </body>
  </html>`,
  },
  {
    title: "What is the purpose of the &lt;a&gt; element in HTML?",
    definition: "The &lt;a&gt; element defines a hyperlink.",
    keypoint: [
      "Purpose: Creates a link to another page or section.",
      "Syntax: <a href='url'>link text</a>",
      "Usage: Can link to external pages, internal sections, or emails.",
      "Attributes: Commonly uses href and target attributes.",
    ],
    example: "<a href='https://example.com'>Visit Example</a>",
    question: `Identify the &lt;a&gt; element in the code below and change the URL to “https://petbakery.com”:`,
    initialCode: `
  <html>
    <body>
      <a href="https://example.com">Visit Example</a> 
    </body>
  </html>`,
    correctCode: `
  <html>
    <body>
      <a href="https://petbakery.com">Visit Example</a> 
    </body>
  </html>`,
  },
];

const htmlLevel1Quest2Questions = [
  {
    title: "What's the purpose of the <img> element?",
    definition:
      "The <img> element is used to embed images into HTML documents.",
    keypoint: [
      "Purpose: Displays an image on a webpage.",
      "Syntax: <img src='url' alt='description'>",
      "SEO: Important for search engine optimization.",
      "Attributes: src (source) and alt (alternative text) are commonly used attributes.",
    ],
    example: "<img src='image.jpg' alt='Description of the image'>",
    question: `Identify the <img> element in the code below and change the src attribute to “logo.png”:`,
    initialCode: `
    <html>
      <body>
        <img src="image.jpg" alt="Description of the image"> 
      </body>
    </html>`,
    correctCode: `
    <html>
      <body>
        <img src="logo.png" alt="Description of the image"> 
      </body>
    </html>`,
  },
  {
    title: "Explain the purpose of the <a> element.",
    definition: "The <a> element defines a hyperlink.",
    keypoint: [
      "Purpose: Creates a clickable link to another page or section.",
      "Syntax: <a href='url'>link text</a>",
      "Usage: Can link to external pages, internal sections, or emails.",
      "Attributes: href (hypertext reference) is the most important attribute.",
    ],
    example: "<a href='https://example.com'>Visit Example</a>",
    question: `Identify the <a> element in the code below and change the URL to “https://petstore.com”:`,
    initialCode: `
    <html>
      <body>
        <a href="https://example.com">Visit Example</a> 
      </body>
    </html>`,
    correctCode: `
    <html>
      <body>
        <a href="https://petstore.com">Visit Example</a> 
      </body>
    </html>`,
  },
  {
    title: "What does the <ul> element represent in HTML?",
    definition: "The <ul> element defines an unordered (bulleted) list.",
    keypoint: [
      "Purpose: Groups related items in a list without any particular order.",
      "Syntax: <ul><li>item1</li><li>item2</li></ul>",
      "Usage: Commonly used for navigation menus, item lists, and FAQs.",
      "Attributes: None required, but class and id can be added for styling or scripting.",
    ],
    example: `
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>`,
    question: `Identify the <ul> element in the code below and add a new list item with the text “Item 3”:`,
    initialCode: `
    <html>
      <body>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </body>
    </html>`,
    correctCode: `
    <html>
      <body>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </body>
    </html>`,
  },
  {
    title: "What's the purpose of the <table> element in HTML?",
    definition: "The <table> element organizes data into rows and columns.",
    keypoint: [
      "Purpose: Organizes data into rows and columns.",
      "Syntax: <table><tr><td>data</td></tr></table>",
      "Usage: Commonly used for presenting tabular data, such as schedules or statistics.",
      "Attributes: Provides options for customization, including border, width, and cellspacing.",
    ],
    example: `
    <table border="1">
      <tr>
        <td>Row 1, Column 1</td>
        <td>Row 1, Column 2</td>
      </tr>
      <tr>
        <td>Row 2, Column 1</td>
        <td>Row 2, Column 2</td>
      </tr>
    </table>`,
    question: `Identify the <table> element in the code below and add a new row with two columns, each containing “Data 1” and “Data 2”:`,
    initialCode: `
    <html>
      <body>
        <table border="1">
          <tr>
            <td>Row 1, Column 1</td>
            <td>Row 1, Column 2</td>
          </tr>
          <tr>
            <td>Row 2, Column 1</td>
            <td>Row 2, Column 2</td>
          </tr>
        </table>
      </body>
    </html>`,
    correctCode: `
    <html>
      <body>
        <table border="1">
          <tr>
            <td>Row 1, Column 1</td>
            <td>Row 1, Column 2</td>
          </tr>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
          </tr>
          <tr>
            <td>Row 2, Column 1</td>
            <td>Row 2, Column 2</td>
          </tr>
        </table>
      </body>
    </html>`,
  },
  {
    title: "What is the purpose of the <form> element in HTML?",
    definition: "The <form> element collects user input for processing.",
    keypoint: [
      "Purpose: Collects user input, such as text, selections, or uploads.",
      "Syntax: <form action='url' method='get/post'>form elements</form>",
      "Usage: Commonly used for login, registration, and data submission.",
      "Attributes: action specifies where to send form data, method specifies how to send it.",
    ],
    example: `
<form action="/submit_form" method="post">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username"><br><br>
  <label for="password">Password:</label>
  <input type="password" id="password" name="password"><br><br>
  <input type="submit" value="Submit">
</form>`,
    question: `Identify the <form> element in the code below and change the action attribute to “/process_form”:`,
    initialCode: `
<html>
  <body>
    <form action="/submit_form" method="post">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username"><br><br>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password"><br><br>
      <input type="submit" value="Submit">
    </form>
  </body>
</html>`,
    correctCode: `
<html>
  <body>
    <form action="/process_form" method="post">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username"><br><br>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password"><br><br>
      <input type="submit" value="Submit">
    </form>
  </body>
</html>`,
  },
];

const htmlLevel1Quest3Questions = [
  {
    title: "Explain the purpose of the <img> element in HTML.",
    definition: "The <img> element embeds images into an HTML document.",
    keypoint: [
      "Purpose: Displays images on a webpage.",
      "Syntax: <img src='url' alt='description'>",
      "Usage: Used to enhance content with visuals.",
      "Attributes: src specifies the image URL, alt provides alternative text for screen readers and if the image fails to load.",
    ],
    example: `
  <img src="image.jpg" alt="Description of the image">`,
    question: `Identify the <img> element in the code below and change the alt attribute to “Logo”:`,
    initialCode: `
  <html>
    <body>
      <img src="image.jpg" alt="Description of the image">
    </body>
  </html>`,
    correctCode: `
  <html>
    <body>
      <img src="image.jpg" alt="Logo">
    </body>
  </html>`,
  },

  {
    title: "What is the purpose of the <a> element in HTML?",
    definition: "The <a> element defines hyperlinks.",
    keypoint: [
      "Purpose: Creates clickable links to other web pages, files, or locations within the same page.",
      "Syntax: <a href='url'>link text</a>",
      "Usage: Used to navigate between web pages or sections of the same page.",
      "Attributes: href specifies the URL or location, target specifies where to open the linked document.",
    ],
    example: `
  <a href="https://example.com">Visit Example</a>`,
    question: `Identify the <a> element in the code below and change the href attribute to “https://petbakery.com”:`,
    initialCode: `
  <html>
    <body>
      <a href="https://example.com">Visit Example</a>
    </body>
  </html>`,
    correctCode: `
  <html>
    <body>
      <a href="https://petbakery.com">Visit Example</a>
    </body>
  </html>`,
  },

  {
    title: "What is the purpose of the <ul> element in HTML?",
    definition: "The <ul> element represents an unordered list.",
    keypoint: [
      "Purpose: Organizes items in a list without any particular order.",
      "Syntax: <ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>",
      "Usage: Used for navigation menus, lists of items, and more.",
      "Attributes: None, but <ul> contains one or more <li> (list item) elements.",
    ],
    example: `
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>`,
    question: `Identify the <ul> element in the code below and add a new <li> element with the text “Item 3”:`,
    initialCode: `
  <html>
    <body>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    </body>
  </html>`,
    correctCode: `
  <html>
    <body>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </body>
  </html>`,
  },
  // Question 4
  {
    title: "Explain the purpose of the <table> element in HTML.",
    definition: "The <table> element defines a table.",
    keypoint: [
      "Purpose: Organizes data into rows and columns.",
      "Syntax: <table>\n  <tr>\n    <td>Cell 1</td>\n    <td>Cell 2</td>\n  </tr>\n</table>",
      "Usage: Commonly used for displaying tabular data.",
      "Attributes: None, but contains <tr> (table row), <th> (table header), and/or <td> (table data) elements.",
    ],
    example: `
  <table>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
  </table>`,
    question: `Identify the <table> element in the code below and add a new row with two cells containing “Data 3” and “Data 4”:`,
    initialCode: `
  <html>
    <body>
      <table>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
        </tr>
        <tr>
          <td>Data 1</td>
          <td>Data 2</td>
        </tr>
      </table>
    </body>
  </html>`,
    correctCode: `
  <html>
    <body>
      <table>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
        </tr>
        <tr>
          <td>Data 1</td>
          <td>Data 2</td>
        </tr>
        <tr>
          <td>Data 3</td>
          <td>Data 4</td>
        </tr>
      </table>
    </body>
  </html>`,
  },

  {
    title: "What is the purpose of the <div> element in HTML?",
    definition: "The <div> element defines a division or section.",
    keypoint: [
      "Purpose: Groups content for styling or JavaScript manipulation.",
      "Syntax: <div>content</div>",
      "Usage: Used to group HTML elements for applying styles or scripting.",
      "Attributes: Commonly used with id and class attributes for targeting and styling.",
    ],
    example: `
  <div id="container">
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </div>`,
    question: `Identify the <div> element in the code below and add a new paragraph with the text “Paragraph 3”:`,
    initialCode: `
  <html>
    <body>
      <div id="container">
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
      </div>
    </body>
  </html>`,
    correctCode: `
  <html>
    <body>
      <div id="container">
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
        <p>Paragraph 3</p>
      </div>
    </body>
  </html>`,
  },
];

const htmlLevel1Quest4Questions = [
  // Question 1
  {
    title: "Explain the purpose of the <form> element in HTML.",
    definition:
      "The <form> element is used to create an HTML form for user input.",
    keypoint: [
      "Purpose: Collects user input data for submission to a server.",
      "Syntax: <form action='url' method='get/post'>form elements...</form>",
      "Usage: Used for various input scenarios like login, registration, contact forms, etc.",
      "Attributes: action specifies the URL to submit the form data, method specifies the HTTP method to use for sending form data.",
    ],
    example: `
  <form action="/submit-form" method="post">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username">
    <input type="submit" value="Submit">
  </form>`,
    question: `Identify the <form> element in the code below and change the action attribute to “/process-form”:`,
    initialCode: `
  <html>
    <body>
      <form action="/submit-form" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username">
        <input type="submit" value="Submit">
      </form>
    </body>
  </html>`,
    correctCode: `
  <html>
    <body>
      <form action="/process-form" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username">
        <input type="submit" value="Submit">
      </form>
    </body>
  </html>`,
  },
  // Question 2
  {
    title: "What is the purpose of the <input> element in HTML?",
    definition:
      "The <input> element is used to create interactive controls for web-based forms.",
    keypoint: [
      "Purpose: Allows users to enter data.",
      "Syntax: <input type='text/password/checkbox/radio/etc.'>",
      "Usage: Used for various types of input fields like text, password, radio buttons, checkboxes, etc.",
      "Attributes: type specifies the type of input field.",
    ],
    example: `
  <label for="username">Username:</label>
  <input type="text" id="username" name="username">`,
    question: `Identify the <input> element in the code below and change the type attribute to “email”:`,
    initialCode: `
  <html>
    <body>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username">
    </body>
  </html>`,
    correctCode: `
  <html>
    <body>
      <label for="username">Username:</label>
      <input type="email" id="username" name="username">
    </body>
  </html>`,
  },
  // Question 3
  {
    title: "What is the purpose of the <textarea> element in HTML?",
    definition:
      "The <textarea> element defines a multi-line text input control.",
    keypoint: [
      "Purpose: Allows users to input multiple lines of text.",
      "Syntax: <textarea rows='rows' cols='cols'>text</textarea>",
      "Usage: Used when users need to provide lengthy responses.",
      "Attributes: rows and cols specify the dimensions of the textarea.",
    ],
    example: `
  <textarea rows="4" cols="50">
  Enter your message here...
  </textarea>`,
    question: `Identify the <textarea> element in the code below and change the number of rows to 6:`,
    initialCode: `
  <html>
    <body>
      <textarea rows="4" cols="50">
      Enter your message here...
      </textarea>
    </body>
  </html>`,
    correctCode: `
  <html>
    <body>
      <textarea rows="6" cols="50">
      Enter your message here...
      </textarea>
    </body>
  </html>`,
  },
  // Question 4
  {
    title: "Explain the purpose of the <select> element in HTML.",
    definition: "The <select> element creates a drop-down list.",
    keypoint: [
      "Purpose: Allows users to select one or more options from a list.",
      "Syntax: <select>\n  <option value='value'>text</option>\n</select>",
      "Usage: Used for providing users with a predefined list of options.",
      "Attributes: None for <select>, but <option> elements inside specify the selectable options.",
    ],
    example: `
      <select>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>`,
    question: `Identify the <select> element in the code below and add a new <option> with the text “BMW” and value “bmw”:`,
    initialCode: `
      <html>
        <body>
          <select>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </body>
      </html>`,
    correctCode: `
      <html>
        <body>
          <select>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
            <option value="bmw">BMW</option>
          </select>
        </body>
      </html>`,
  },

  // Question 5
  {
    title: "What does the <label> element do in HTML?",
    definition:
      "The <label> element represents a caption for a user interface element.",
    keypoint: [
      "Purpose: Associates a label with an input element.",
      "Syntax: <label for='input-id'>Label text</label>",
      "Usage: Improves accessibility by providing a text description for form elements.",
      "Attributes: for specifies which form element the label is associated with.",
    ],
    example: `
      <label for="username">Username:</label>
      <input type="text" id="username" name="username">`,
    question: `Identify the <label> element in the code below and associate it with the input element by adding the for attribute with the value “email”:`,
    initialCode: `
      <html>
        <body>
          <label>Enter Email:</label>
          <input type="email">
        </body>
      </html>`,
    correctCode: `
      <html>
        <body>
          <label for="email">Enter Email:</label>
          <input type="email" id="email">
        </body>
      </html>`,
  },
];

const htmlLevel1Quest5Questions = [
  {
    title: "What is the purpose of the <img> element in HTML?",
    definition: "The <img> element embeds an image into an HTML document.",
    keypoint: [
      "Purpose: Displays an image on a webpage.",
      "Syntax: <img src='image-url' alt='alternative-text'>",
      "Usage: Used to enhance visual content on a webpage.",
      "Attributes: src specifies the image URL, alt provides alternative text for accessibility.",
    ],
    example: "<img src='image.jpg' alt='Example Image'>",
    question: `Identify the <img> element in the code below and change the src attribute to 'logo.png' and the alt attribute to 'Company Logo':`,
    initialCode: `
  <html>
    <body>
      <img src='image.jpg' alt='Placeholder Image'>
    </body>
  </html>`,
    correctCode: `
  <html>
    <body>
      <img src='logo.png' alt='Company Logo'>
    </body>
  </html>`,
  },
  {
    title: "Explain the purpose of the <table> element in HTML.",
    definition: "The <table> element represents tabular data.",
    keypoint: [
      "Purpose: Organizes data into rows and columns.",
      "Syntax: <table>\n  <tr>\n    <td>data</td>\n  </tr>\n</table>",
      "Usage: Used for presenting data in a structured format.",
      "Attributes: None, but <tr>, <td>, and <th> elements are used for rows, data cells, and headers.",
    ],
    example: `
  <table>
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
    <tr>
      <td>John</td>
      <td>25</td>
    </tr>
  </table>`,
    question: `Identify the <table> element in the code below and add a new row (<tr>) with two data cells (<td>) containing “Jane” and “30” respectively:`,
    initialCode: `
  <html>
    <body>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
        <tr>
          <td>John</td>
          <td>25</td>
        </tr>
      </table>
    </body>
  </html>`,
    correctCode: `
  <html>
    <body>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
        <tr>
          <td>John</td>
          <td>25</td>
        </tr>
        <tr>
          <td>Jane</td>
          <td>30</td>
        </tr>
      </table>
    </body>
  </html>`,
  },
  {
    title: "What does the <form> element do in HTML?",
    definition: "The <form> element defines an HTML form for user input.",
    keypoint: [
      "Purpose: Creates a form to collect user input.",
      "Syntax: <form action='url' method='get/post'>form elements</form>",
      "Usage: Used for submitting data to a server or handling client-side processing.",
      "Attributes: action specifies where to send the form data, method specifies the HTTP method (GET or POST).",
    ],
    example: `
  <form action="/submit-form" method="post">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username">
    <input type="submit" value="Submit">
  </form>`,
    question: `Identify the <form> element in the code below and change the action attribute to '/contact' and the method attribute to 'post':`,
    initialCode: `
  <html>
    <body>
      <form action="/submit-form" method="get">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username">
        <input type="submit" value="Submit">
      </form>
    </body>
  </html>`,
    correctCode: `
  <html>
    <body>
      <form action="/contact" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username">
        <input type="submit" value="Submit">
      </form>
    </body>
  </html>`,
  },
  {
    title: "What is the purpose of the <iframe> element in HTML?",
    definition:
      "The <iframe> element embeds another HTML page into the current page.",
    keypoint: [
      "Purpose: Embeds external content within a webpage.",
      "Syntax: <iframe src='page-url'></iframe>",
      "Usage: Used for displaying content from other sources such as maps or videos.",
      "Attributes: src specifies the URL of the content to be embedded.",
    ],
    example: "<iframe src='https://www.youtube.com/embed/VIDEO_ID'></iframe>",
    question: `Identify the <iframe> element in the code below and change the src attribute to 'map.html':`,
    initialCode: `
  <html>
    <body>
      <iframe src='https://www.youtube.com/embed/VIDEO_ID'></iframe>
    </body>
  </html>`,
    correctCode: `
  <html>
    <body>
      <iframe src='map.html'></iframe>
    </body>
  </html>`,
  },
  {
    title: "Explain the purpose of the <audio> element in HTML.",
    definition: "The <audio> element embeds sound content in an HTML document.",
    keypoint: [
      "Purpose: Embeds audio files into a webpage.",
      "Syntax: <audio src='audio-url'></audio>",
      "Usage: Used for playing audio files directly within a webpage.",
      "Attributes: src specifies the URL of the audio file.",
    ],
    example: "<audio src='audio.mp3' controls></audio>",
    question: `Identify the <audio> element in the code below and add the controls attribute to enable playback controls:`,
    initialCode: `
  <html>
    <body>
      <audio src='audio.mp3'></audio>
    </body>
  </html>`,
    correctCode: `
  <html>
    <body>
      <audio src='audio.mp3' controls></audio>
    </body>
  </html>`,
  },
];
// Define quests for each level
const htmlLevel1Quests = [
  { QuestName: "Quest 1", questions: htmlLevel1Quest1Questions },
  { QuestName: "Quest 2", questions: htmlLevel1Quest2Questions },
  { QuestName: "Quest 3", questions: htmlLevel1Quest3Questions },
  { QuestName: "Quest 4", questions: htmlLevel1Quest4Questions },
  { QuestName: "Quest 5", questions: htmlLevel1Quest5Questions },
];

// Define levels for each course
const htmlLevels = [
  { levelName: "Beginner HTML", quests: htmlLevel1Quests },
  { levelName: "Intermediate HTML", quests: htmlLevel1Quests },
  { levelName: "Advanced HTML", quests: htmlLevel1Quests },
];

// Map courses to their respective levels
const courseLevelsMap = {
  html: htmlLevels,
};

export async function populateFirestore() {
  for (const [course, levels] of Object.entries(courseLevelsMap)) {
    const courseRef = doc(db, "courses", course); // Adjusted path to ensure odd segments
    await setDoc(courseRef, { courseName: course });

    for (let i = 0; i < levels.length; i++) {
      const level = levels[i];
      const levelRef = doc(courseRef, "levels", `${i + 1}`); // Adjusted path to ensure odd segments
      await setDoc(levelRef, { levelName: level.levelName });

      const questsRef = collection(levelRef, "quests"); // Collection reference with even segments
      for (let j = 0; j < level.quests.length; j++) {
        const quest = level.quests[j];
        const questRef = doc(questsRef, `${j + 1}`); // Adjusted path to ensure odd segments
        await setDoc(questRef, { QuestName: quest.QuestName });

        const questionsRef = collection(questRef, "questions"); // Collection reference with even segments
        for (let k = 0; k < quest.questions.length; k++) {
          const question = quest.questions[k];
          const questionRef = doc(questionsRef, `${k + 1}`); // Adjusted path to ensure odd segments
          await setDoc(questionRef, question);
        }
      }
    }
  }
  console.log("Firestore has been populated!");
}
