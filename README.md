# HiStudy

HiStudy is a modern educational platform and e-learning marketplace built with React and Vite. The project is designed to provide learners with a responsive experience for discovering products, exploring courses, reading educational content, managing a shopping cart, registering or logging in, and accessing protected user pages.

## Project Overview

HiStudy is a front-end web application focused on the educational technology domain. It combines the experience of a course marketplace with a learning platform UI, allowing users to browse educational products, view course details, add products to a cart, and sign in to access protected pages.

The primary goal of the project is to demonstrate professional React development practices, including component-based UI design, context-based global state management, client-side routing, form validation, protected routes, and integration with a cloud database/authentication service.

## Business Value

The application can be positioned as a digital learning portal for students and educators. It supports:

- Online course discovery
- Educational product browsing
- Student account registration and login
- Protected user profile and product flows
- Cart-driven educational e-commerce behavior
- A modern and responsive interface for digital learning

## Key Features

### Home and Discovery

- Modern educational landing page
- Course and book product highlights
- Popular courses and category-based browsing
- Blog, event, and educational content sections
- Responsive navigation and reusable UI components

### Course and Product Experience

- Course listing and course details pages
- Single product and course detail views
- Category-based display of books and courses
- Product and learning content structure

### Authentication

- Student registration
- Student login
- Logout flow
- Current user state management
- Protected route redirection to the login page

### Shopping Cart

- Add products to the cart
- Increase or manage quantity
- Delete cart products
- Persist cart data in localStorage
- Fetch product details from Supabase

### Profile and User Experience

- Protected profile page
- Authenticated user state
- Loading states and response feedback
- Toast notifications and alerts
- Dark mode toggle
- Responsive UI behaviour

## Tech Stack

| Category | Technology |
| --- | --- |
| Frontend | React 19 |
| Build Tool | Vite |
| Routing | React Router |
| Backend/Auth | Supabase |
| State Management | Context API |
| Data Persistence | Local Storage |
| Styling | CSS, Tailwind CSS |
| Form Handling | React Hook Form |
| Validation | Zod |
| UI Components | Material UI, Radix UI, Headless UI |
| Notifications | SweetAlert2, React Hot Toast |
| Animations | Motion, Lottie, Swiper |
| Linting | Oxlint |

## Architecture

The application is built using a component-based React architecture. The UI is separated into reusable components and page-level modules. Global features such as authentication, display data, and cart management are handled through context providers.

### Context Providers

#### DisplayContext

Responsible for loading and sharing educational content such as products, books, courses, and display preferences such as the dark mode state.

#### CartContext

Responsible for cart logic, product identifier management, deletion of cart items, quantity updates, and synchronization with localStorage.

#### SupabaseContext

Responsible for login, registration, logout, current user tracking, and authentication-related user flow management.

## Routing

The application uses client-side routing with React Router. Protected pages require an authenticated user.

| Route | Description |
| --- | --- |
| `/` | Homepage |
| `/Shop` | Educational product catalog |
| `/ShopCourses` | Course marketplace view |
| `/Details/:id` | Course details page |
| `/SingleProduct/:id` | Product details page |
| `/CartPage` | Shopping cart |
| `/profile` | User profile page |
| `/Login` | Login page |
| `/Register` | Registration page |

Protected routes redirect unauthenticated users to the login page.

## Data Model and Integration

The application uses Supabase as the cloud service provider for authentication and product data.

Main data is retrieved from the `Products` table and separated into categories such as:

- Books
- Courses

User account information is stored in the `EduStudents` table, and authentication is managed through Supabase authentication APIs.

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── Footer/
│   ├── Navacc/
│   ├── UserDropdown/
│   ├── ProtectedRoute/
│   └── drops/
├── context/
│   ├── CartContext.jsx
│   ├── DisplayContext.jsx
│   └── supabaseContext.jsx
├── layout/
│   └── Layout/
├── pages/
│   ├── home/
│   ├── Shop/
│   ├── ShopCourses/
│   ├── SingleProduct/
│   ├── CartPage/
│   ├── CourseDetails/
│   ├── Login/
│   ├── Register/
│   └── Profile/
├── validation/
│   ├── Login.js
│   └── Register.js
├── App.jsx
├── clientSupabase.js
└── main.jsx
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/AliEldeeb-01/HiStudy.git
```

2. Navigate to the project directory:

```bash
cd HiStudy
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

## Environment Variables

The app uses Supabase credentials for authentication and product data access.

Create a local environment file by adding the following values:

```bash
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Do not commit private credentials or environment variables to source control.

## Project Scripts

```bash
npm run dev
```
Starts the Vite development server.

```bash
npm run build
```
Builds the production bundle.

```bash
npm run preview
```
Preview the production build locally.

```bash
npm run lint
```
Runs the project lint command using Oxlint.

```bash
npm run start
```
Runs the mock REST API server using JSON Server.

## Quality and Performance

The application uses route-level lazy loading and layout-level component loading to improve page performance and initial rendering efficiency. It also uses localStorage for cart and user session persistence to create a smoother experience.

## Responsive Design

The UI is designed to work across multiple screen sizes, including mobile, tablet, laptop, and desktop displays. Components have been organized to support a dynamic educational marketplace experience on smaller screens.

## Current Project Strengths

- Modern course marketplace UI
- Product and book browsing experience
- Supabase-powered authentication
- Protected route flow
- Cart management using context state
- Strong reuse of UI components
- Responsive design and animation support

## Future Improvements

The project can be extended with:

- Course enrollment and learning progress tracking
- Payment and checkout integration
- Admin dashboard for product and student management
- Student dashboard and course reports
- Reviews and ratings
- Search and filtering
- Wishlist management
- Order history and dashboard analytics
- Better accessibility and performance improvements

## Author

Ali Eldeeb

Frontend Developer focused on building modern, responsive, and user-friendly web applications.


