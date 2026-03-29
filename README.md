# 🚀 Project Name: [Hangman-Game]

This project is a practical application inspired by the **Elzero Web School** lessons. It focuses on building a dynamic interface by fetching data and using modern styling techniques.

## 🌟 Key Features
- **Dynamic Content:** Data is fetched and managed through an external JSON file.
- **Modern Styling:** Utilizes **CSS Nesting** for cleaner and more maintainable stylesheets.
- **Responsive Design:** Fully compatible with different screen sizes.

## 🛠️ Technologies Used
- **HTML5:** Semantic structure.
- **CSS3 (Modern CSS):** Featuring **CSS Nesting** for hierarchical styling.
- **JavaScript (ES6+):** For fetching data and DOM manipulation.
- **External JSON:** Used as a mock database for project content.

## 📂 Project Structure & Logic

### 1. External JSON Data
Instead of hardcoding the content, I used an external `data.json` file. This approach simulates real-world APIs, making the app easier to update and manage.
- **Method:** `fetch()` API was used to retrieve the data.
- **Benefit:** Separation of concerns (Data vs. UI).

### 2. CSS Nesting
To keep the code clean and organized, I implemented **CSS Nesting**. This allowed me to:
- Group related styles together.
- Reduce selector repetition.
- Mirror the HTML structure directly in the CSS file.

**Example:**
```css
.category {
  flex: 1;
  /* Parent styles */
  span {
    /* Nested child styles */
    font-weight: bold;
  }
}
```
## 🚀 How to Run the Project
1. Clone the repository:
   ```bash
   git clone [https://github.com/Haidar-Aldwoere-00/Hangman-Game.git]
