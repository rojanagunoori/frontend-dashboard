# 🧑‍💻 Frontend Dashboard

This project is part of a Front-End Internship assignment. It demonstrates building a React-based user dashboard with paginated and searchable data from dummy APIs.

**🔗 Live Demo:** [https://frontend-dashboard1.netlify.app/](https://frontend-dashboard1.netlify.app/)  
**📦 Repository:** [GitHub](https://github.com/rojanagunoori/frontend-dashboard)

---

## 📌 Features

### 👤 Profile Screen
- Loads the first user from the [Dummy Users API](https://jsonplaceholder.typicode.com/users)
- Displays user info (not editable)
- Route: `/profile`
- Back navigation to the dashboard

### 💬 Comments Dashboard
- Fetches 500 records from [Dummy Comments API](https://jsonplaceholder.typicode.com/comments)
- Displays records in a custom data grid
- Route: `/dashboard`

#### ✅ Functionality:
- **Custom Pagination** (No external library)
  - Page size options: 10 / 50 / 100
  - Active page tracking
- **Search**
  - Partial search on `name`, `email`, and `phone`
- **Sorting**
  - Sort by `Post ID`, `Name`, and `Email`
  - Toggle: `None → Ascending → Descending`
  - Only one column can be sorted at a time
- **State Persistence**
  - Page number, search, sort, and page size saved in `localStorage`
  - Retains state even after page reload

### 🚧 404 Page
- Gracefully handles unknown routes with a custom **Page Not Found**
- Netlify `_redirects` configured for SPA routing

---

## ⚙️ Tech Stack

- **React**
- **JavaScript**
- **CSS (custom + responsive)**
- **React Router DOM**
- **Netlify** for deployment

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/rojanagunoori/frontend-dashboard.git
cd frontend-dashboard

# Install dependencies
npm install

# Start the app
npm start
Visit http://localhost:3000 in your browser.

🗂️ Folder Structure

frontend-dashboard/
├── public/
│   └── _redirects
├── src/
│   ├── api/
│   │   └── api.js
│   ├── components/
│   │   ├── Dashboard.js / Dashboard.css
│   │   ├── Profile.js / Profile.css
│   │   ├── Navbar.js / Navbar.css
│   │   ├── Pagination.js
│   │   └── NotFound.js / NotFound.css
│   ├── utils/
│   │   └── storage.js
│   ├── App.js
│   └── index.js / index.css
📸 Screenshots
Add screenshots of the dashboard and profile page here if desired (optional but good for GitHub).

📄 License
This project is for internship evaluation purposes.
© 2025 Rojanagunoori


---

### ✅ Final Steps

1. Add this to your repo:
```bash
cd frontend-dashboard
echo "[PASTE ABOVE README HERE]" > README.md
git add README.md
git commit -m "Add README with project details"
git push
You're done! Your GitHub now has a clean, descriptive README and your Netlify site will no longer show 404 errors on refresh.