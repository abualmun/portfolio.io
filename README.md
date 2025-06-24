# abualmun's Dynamic Portfolio

Welcome to my dynamic portfolio project! This is a simple, clean, and self-contained single-page portfolio website designed to be easily updated. It uses a clever folder-based system to manage projects, a Node.js script to generate project data, and pure HTML/CSS/JS to display everything beautifully.

 
*(This is a placeholder image, you can replace it with a screenshot of your own portfolio)*

## ✨ Features

-   **Dynamic Project Management**: Add, remove, or reorder projects just by managing folders and files. No code changes needed for content updates!
-   **Automated Content Generation**: A Node.js script scans your project folders and creates a structured JSON file.
-   **Markdown Support**: Write your project descriptions in Markdown for easy formatting.
-   **Single-Page Application (SPA)**: Smooth, instant navigation between sections without page reloads.
-   **Responsive Design**: Looks great on desktops, tablets, and mobile devices.
-   **Zero Dependencies for Frontend**: The final `portfolio.html` runs in any modern browser without needing a server.
-   **Easy to Customize**: Simple HTML structure for changing personal info and contact details.

## ⚙️ How It Works

The portfolio's magic lies in its simple two-step content pipeline:

1.  **Content Layer (`/projects` directory)**: All your project information, text, and images are organized in a specific folder structure. Each project gets its own numbered folder (e.g., `1-My-First-Project`), and its content is defined by numbered files (e.g., `0.txt`, `1.png`).

2.  **Data Generation (`generate-projects-script.js`)**: You run this Node.js script whenever you change your project content. It scans the `/projects` directory and compiles all the information into a single `projects.json` file.

3.  **Presentation Layer (`portfolio.html`)**: This is the main website file. You paste the generated JSON data into it. The JavaScript in this file then reads the data and dynamically builds the project cards and detail pages.

---

## 🚀 Instructions for Use

Follow these steps to set up and manage your portfolio.

### Prerequisites

-   You need to have [Node.js](https://nodejs.org/) installed on your machine to run the project generation script.

### Step 1: Manage Your Projects

All your projects live inside the `projects/` directory.

#### To Add a New Project:

1.  Create a new folder inside `projects/`.
2.  Name the folder with a number prefix to set its order, followed by the project title (e.g., `17-My-New-Project`).
    -   The number determines the order in which projects appear on the site.
    -   The text after the number becomes the project's title.

#### To Add Content to a Project:

Inside your new project folder (e.g., `17-My-New-Project/`):

1.  Create files with number prefixes to define the order of content on the project detail page.
2.  **For Text**: Create `.txt` files (e.g., `0.txt`, `2.txt`). You can write your content using **Markdown**.
3.  **For Images**: Add your image files (e.g., `.png`, `.jpg`, `.gif`) and name them with a number prefix (e.g., `1.png`, `3.jpg`).

**Example Structure:**

```
└── projects/
    └── 17-My-New-Project/
        ├── 0.txt       // First content block (text)
        ├── 1.png       // Second content block (image)
        ├── 2.txt       // Third content block (text)
        └── 3.gif       // Fourth content block (image)
```

### Step 2: Generate the Project Data

After adding or changing your projects, you need to update the data file.

1.  Open your terminal or command prompt in the root directory (`abualmun-portfolio/`).
2.  Run the script:
    ```bash
    node generate-projects-script.js
    ```
3.  This will scan your `projects/` directory and update the `projects.json` file with the latest changes.

### Step 3: Update the Portfolio HTML

This is the crucial step to make your changes appear on the website.

1.  Open the newly updated **`projects.json`** file and copy its **entire content**.
2.  Open the **`portfolio.html`** file.
3.  Find the `<script>` tag at the top that starts with `projects_json = [...]`.
4.  **Delete** the old array content (everything between the `[` and `]`, including the brackets).
5.  **Paste** the new content you copied from `projects.json`.

**Before:**
```html
<script>
    projects_json = [ /* ... old project data ... */ ]
</script>
```

**After:**
```html
<script>
    projects_json = [ /* ... PASTE YOUR NEW JSON CONTENT HERE ... */ ]
</script>
```

### Step 4: Customize and View

1.  **Personalize**: Open `portfolio.html` and edit the "About Me" section, your name, and contact links (Email, LinkedIn, GitHub) to match your own details.
2.  **View**: Open the `portfolio.html` file in your web browser to see your updated portfolio!

## 💡 Future Improvements

This system works well, but it can be improved to remove the manual copy-paste step. You could modify the `Portfolio` class in `portfolio.html` to fetch the `projects.json` file directly.

Replace this line in `portfolio.html`:
```javascript
this.projects = projects_json
```
With a `fetch` call:
```javascript
try {
    const response = await fetch('projects.json');
    this.projects = await response.json();
} catch (error) {
    console.error('Error loading projects:', error);
    // Display an error message to the user
}
```
**Note**: This change would require you to run a local web server to view `portfolio.html` due to browser security policies (CORS) around `fetch`.

## License

This project is open-source and available under the [MIT License](LICENSE).
```

***

### 2. Instructions to Use (Standalone)

Here are the step-by-step instructions to manage and update your portfolio.

#### **Prerequisites**

-   You must have [Node.js](https://nodejs.org/) installed.

---

#### **Step 1: Add or Modify a Project**

1.  Navigate to the `projects/` directory.
2.  To add a project, create a new folder named `[number]-[Project-Title]` (e.g., `17-Awesome-App`). The number determines the display order.
3.  Inside the project folder, add your content as numbered files:
    -   **Text**: Create `.txt` files with Markdown content (e.g., `0.txt`, `2.txt`).
    -   **Images**: Add image files (e.g., `1.png`, `3.jpg`).
    -   The number on each file sets the order of appearance on the project page.

---

#### **Step 2: Run the Generator Script**

-   After making changes to your project folders, open your terminal in the main `abualmun-portfolio` directory.
-   Run the following command to update your project data:

    ```bash
    node generate-projects-script.js
    ```
-   This command updates the `projects.json` file.

---

#### **Step 3: Paste the Generated Code into the Main HTML**

1.  Open the file `projects.json` and **copy all of its text**.
2.  Open the file `portfolio.html`.
3.  Find the JavaScript variable declaration at the top: `projects_json = [...]`.
4.  **Replace the entire array** (the content inside and including the `[` and `]`) with the text you just copied.

---

#### **Step 4: View Your Changes**

-   Save the `portfolio.html` file.
-   Open `portfolio.html` in a web browser to see your updated portfolio
