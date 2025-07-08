# Frontend Dashboard Assignment

This is a front-end assignment project built using **React.js**, demonstrating skills in UI design, data fetching, custom pagination, search, sorting, routing, and local storage state persistence.

## 🔗 Live Demo

View the deployed project here:  
👉 [https://your-netlify-link.netlify.app](https://your-netlify-link.netlify.app)  
_(Replace with your actual Netlify link)_

## 📂 Repository

GitHub repo:  
👉 [https://github.com/rojanagunoori/frontend-dashboard](https://github.com/rojanagunoori/frontend-dashboard)

---

## 🚀 Features

### ✅ **Profile Screen**
- Displays the first user fetched from [JSONPlaceholder Users API](https://jsonplaceholder.typicode.com/users)
- Not editable
- Includes a "Back to Dashboard" button
- Uses React Router for navigation

### ✅ **Comments Dashboard**
- Displays 500 comments from [JSONPlaceholder Comments API](https://jsonplaceholder.typicode.com/comments)
- Custom pagination (no external pagination library)
- Page size options: **10**, **50**, and **100**
- Custom sorting: **Post ID**, **Name**, **Email** (asc, desc, none toggle)
- Partial search support for **name**, **email**, and **body**
- All states (search, sort, page, page size) persist on refresh using `localStorage`

---

## 🛠️ Tech Stack

- **React.js**
- **React Router**
- **Custom CSS** (No UI library used)
- **Fetch API** (no Axios)
- **LocalStorage** for persistence

---

## 📸 Screenshots

> (Optional) Add screenshots here using GitHub's markdown image embed if you want

---

## 💡 How to Run Locally

```bash
git clone https://github.com/rojanagunoori/frontend-dashboard.git
cd frontend-dashboard
npm install
npm start
Visit: http://localhost:3000
