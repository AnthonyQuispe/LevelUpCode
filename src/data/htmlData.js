export const htmlLevel1Quest1Questions = [
  {
    title: "What's an &lt;h1&gt; Element?",
    definition:
      "The &lt;h1&gt; element defines the main heading of a webpage. ",
    keypoint: [
      "Purpose: Represents the most important heading.",
      "Syntax: &lt;h1&gt;content&lt;/h1&gt;",
      "SEO: Helps search engines understand your page's topic.",
      "Usage: Typically one &lt;h1&gt; per page for clear structure.",
    ],
    example: "&lt;h1&gt;This is a main heading&lt;/h1&gt;",
    question: `Find the &lt;h1&gt; element in the code below:
            Change the text from “Hello World” to “Pac Man”:`,
    initialCode: `
    <html>
     <body>
      <h1>Hello World</h1>
     </body>
    </html>`,
    correctCode: `
    <html>
      <body>
        <h1>Pac Man</h1> 
      </body>
    </html>`,
  },
  {
    title: "What's an &lt;h2&gt; Element?",
    definition: `
    The &lt;h2&gt; element defines a secondary heading on a webpage.\n
    In HTML, there are six levels of headings, &lt;h1&gt; through &lt;h6&gt;:\n
    - &lt;h1&gt;: Represents the main heading, used once per page for the title or main topic.\n
    - &lt;h2&gt;: Represents secondary headings, used for major sections within the document.\n
    - &lt;h3&gt;: Represents tertiary headings, used for subsections under &lt;h2&gt; headings.\n
    - &lt;h4&gt;: Represents quaternary headings, used for further subsections.\n
    - &lt;h5&gt; and &lt;h6&gt;: Represent even smaller subsections and are rarely used.\n\n
    Each heading tag helps create a structured hierarchy, making the content easier to navigate for users and search engines.`,
    keypoint: [
      "Purpose: Represents a secondary heading.",
      "Syntax: &lt;h2&gt;content&lt;/h2&gt;",
      "SEO: Helps structure your content hierarchy.",
      "Usage: Typically used for section headings.",
    ],
    example: "&lt;h2&gt;This is a subheading&lt;/h2&gt;",
    question: `Find the &lt;h2&gt; element in the code below:
            Change the text from “Subheading” to “Pac-Man Gameplay”:`,
    initialCode: `
    <html>
      <body>
        <h2>Subheading</h2> 
      </body>
    </html>`,
    correctCode: `
    <html>
      <body>
        <h2>Pac-Man Gameplay</h2> 
      </body>
    </html>`,
  },
  {
    title: "Adding a &lt;p&gt; Element with Description",
    definition: "The &lt;p&gt; element defines a paragraph of text.",
    keypoint: [
      "Purpose: Represents a paragraph.",
      "Syntax: &lt;p&gt;content&lt;/p&gt;",
      "SEO: Improves readability by breaking up text.",
      "Usage: Multiple &lt;p&gt; elements for different paragraphs.",
    ],
    example: "&lt;p&gt;This is a paragraph&lt;/p&gt;",
    question: `Find the &lt;p&gt; element in the code below:
            Change the text from “Default Text” to “Pac-Man is a classic arcade game developed by Namco.”:`,
    initialCode: `
    <html>
      <body>
        <p>Default Text</p> 
      </body>
    </html>`,
    correctCode: `
    <html>
      <body>
        <p>Pac-Man is a classic arcade game developed by Namco.</p> 
      </body>
    </html>`,
  },
  {
    title: "Creating an &lt;ul&gt; Element",
    definition: "The &lt;ul&gt; element defines an unordered list of items.",
    keypoint: [
      "Purpose: Represents a list of items.",
      "Syntax: &lt;ul&gt;&lt;li&gt;item&lt;/li&gt;&lt;/ul&gt;",
      "SEO: Helps structure content in a readable format.",
      "Usage: Multiple &lt;li&gt; elements within &lt;ul&gt; for list items.",
    ],
    example: `
    &lt;ul&gt; list 
    &lt;/ul&gt;`,
    question: `Find the &lt;ul&gt; element in the code below:
            Add the following game characters as list items: Pac-Man, Blinky`,
    initialCode: `
    <html>
      <body>
        <ul>
          <li>Character 1</li>
          <li>Character 2</li>
        </ul>
      </body>
    </html>`,
    correctCode: `
    <html>
      <body>
        <ul>
          <li>Pac-Man</li>
          <li>Blinky</li>
        </ul>
      </body>
    </html>`,
  },
  {
    title: "Adding an &lt;a&gt; Element",
    definition: "The &lt;a&gt; element defines a hyperlink.",
    keypoint: [
      "Purpose: Represents a link to another page.",
      "Syntax: &lt;a href='url'&gt;link text&lt;/a&gt;",
      "SEO: Helps with navigation and linking content.",
      "Usage: &lt;a&gt; elements can link to internal or external pages.",
    ],
    example: "&lt;a href='content'&gt;Example Link&lt;/a&gt;",
    question: `Find the &lt;a&gt; element in the code below:
            Change the text from “Click Here” to “Play Pac-Man” and the link to “https://www.test.com/pac-man”:`,
    initialCode: `
    <html>
      <body>
        <a href="https://www.test.com">Click Here</a>
      </body>
    </html>`,
    correctCode: `
    <html>
      <body>
        <a href="https://www.test.com/pac-man">Play Pac-Man</a>
      </body>
    </html>`,
  },
  {
    title: "What's a &lt;div&gt; Element?",
    definition: `
      The &lt;div&gt; (short for "division") element is a generic container used to group together HTML elements for styling and scripting purposes. Unlike heading or paragraph tags, it does not inherently convey any semantic meaning. However, it is one of the most commonly used elements for structuring and styling web pages.

      Key points about &lt;div&gt;:
      - Purpose: Acts as a container for other HTML elements.
      - Syntax: &lt;div&gt;content&lt;/div&gt;
      - Usage: Frequently used to apply CSS styles and JavaScript scripts to a group of elements.
      - Flexibility: Can contain text, images, links, other &lt;div&gt; elements, and more.
      - Layout: Often used with CSS for layout purposes, such as creating sections, columns, and grid layouts.

      Example: 
      &lt;div&gt;
        &lt;h2&gt;Pac-Man Game&lt;/h2&gt;
        &lt;p&gt;Pac-Man is a classic arcade game developed by Namco.&lt;/p&gt;
      &lt;/div&gt;
    `,
    keypoint: [
      "Purpose: Acts as a container for other HTML elements.",
      "Syntax: &lt;div&gt;content&lt;/div&gt;",
      "Usage: Frequently used to apply CSS styles and JavaScript scripts to a group of elements.",
      "Flexibility: Can contain text, images, links, other &lt;div&gt; elements, and more.",
    ],
    example: `
    &lt;div&gt;
      &lt;h2&gt;Pac-Man Game&lt;/h2&gt;
      &lt;p&gt;Pac-Man is a classic arcade game developed by Namco.&lt;/p&gt;
    &lt;/div&gt;`,
    question: `Find the &lt;div&gt; element in the code below:
            Add a &lt;p&gt; element inside the &lt;div&gt; element with the text “Enjoy playing Pac-Man!”`,
    initialCode: `
    <html>
      <body>
        <div>
          <h2>Pac-Man Game</h2>
        </div>
      </body>
    </html>`,
    correctCode: `
    <html>
      <body>
        <div>
          <h2>Pac-Man Game</h2>
          <p>Enjoy playing Pac-Man!</p>
        </div>
      </body>
    </html>`,
  },
];

// Define quests for each level
export const htmlLevel1Quests = [
  { QuestName: "Quest 1", questions: htmlLevel1Quest1Questions },
  //   { QuestName: "Quest 2", questions: htmlLevel1Quest2Questions },
  //   { QuestName: "Quest 3", questions: htmlLevel1Quest3Questions },
  //   { QuestName: "Quest 4", questions: htmlLevel1Quest4Questions },
  //   { QuestName: "Quest 5", questions: htmlLevel1Quest5Questions },
];

// Define levels for each course
export const htmlLevels = [
  { levelName: "Novice", quests: htmlLevel1Quests },
  { levelName: "Intermediate", quests: htmlLevel1Quests },
  { levelName: "Veteran", quests: htmlLevel1Quests },
];
