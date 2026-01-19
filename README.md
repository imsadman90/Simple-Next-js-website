# TechHub - E-commerce Application

A modern, full-stack e-commerce application built with Next.js 15, Express.js, and Tailwind CSS. The application features a landing page with 7 sections, product listing, detailed product views, and a protected admin area for adding new products.

## Features Implemented

### ✅ Core Features

- **Landing Page** - 7 comprehensive sections:
  1. Hero section with call-to-action
  2. Featured categories showcase
  3. Why choose us benefits
  4. Our promise section
  5. Customer testimonials
  6. Special offers promotion
  7. Final call-to-action section

- **Navbar & Footer** - Global navigation with links to items and login pages

- **Items/Products List Page** - Publicly accessible page displaying all products with:
  - Product cards with images
  - Name, description, and price
  - Stock status indicators
  - Quick view links to details

- **Product Details Page** - Full product information including:
  - High-quality product images
  - Complete descriptions
  - Pricing and stock information
  - Quantity selector
  - Add to cart functionality

- **Authentication System** - Mock login with:
  - Cookie-based session management
  - Demo credentials (email: `demo@example.com`, password: `password123`)
  - Secure authentication checks

- **Protected Add Item Page** - Authenticated users can:
  - Add new products to the catalog
  - Fill in product details (name, description, price, category, stock)
  - Upload product images
  - Get success notifications on creation

- **Toast Notifications** - User feedback with Sonner library for:
  - Successful login/logout
  - Product creation success
  - Error handling
  - Action confirmations

## Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Sonner** - Toast notification library
- **JavaScript** - Programming language

### Backend

- **Express.js** - Node.js web framework
- **CORS** - Cross-origin resource sharing
- **Cookie Parser** - Cookie management

## Project Structure

```
.
├── src/
│   ├── app/
│   │   ├── page.js                 # Landing page
│   │   ├── layout.js               # Root layout with navbar & footer
│   │   ├── login/
│   │   │   └── page.js            # Login page
│   │   ├── items/
│   │   │   ├── page.js            # Items list page
│   │   │   └── [id]/
│   │   │       └── page.js        # Product details page
│   │   ├── add-item/
│   │   │   └── page.js            # Protected add item page
│   │   └── api/
│   │       └── auth/
│   │           ├── login/route.js  # Login API endpoint
│   │           ├── check/route.js  # Auth check endpoint
│   │           └── logout/route.js # Logout endpoint
│   ├── components/
│   │   ├── Navbar.jsx             # Navigation bar component
│   │   └── Footer.jsx             # Footer component
│   └── lib/
│       └── auth.js                # Authentication utilities
├── server.js                       # Express.js server
├── .env.local                      # Environment variables
├── package.json                    # Project dependencies
├── next.config.mjs                # Next.js configuration
├── tailwind.config.ts             # Tailwind CSS configuration
└── README.md                       # This file
```

## Setup & Installation

### Prerequisites

- Node.js 18+ and npm
- Windows, macOS, or Linux

### Installation Steps

1. **Navigate to project directory**

   ```bash
   cd "d:\SCIC\Job Task"
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**
   - `.env.local` file is already configured with:
     ```
     NEXT_PUBLIC_API_URL=http://localhost:5000
     NEXT_PUBLIC_FRONTEND_URL=http://localhost:3000
     API_PORT=5000
     ```

4. **Start Development Servers**
   ```bash
   npm run dev
   ```
   This starts both Next.js (port 3000) and Express.js (port 5000) concurrently.

### Alternative: Run Servers Separately

**Terminal 1 - Next.js Frontend:**

```bash
npm run dev:next
```

**Terminal 2 - Express Backend:**

```bash
npm run dev:server
```

## Route Summary

### Public Routes

- `/` - Landing page (7 sections)
- `/items` - Products listing page
- `/items/[id]` - Product details page
- `/login` - User login page

### Protected Routes

- `/add-item` - Add new product (requires login)

### API Routes (Backend)

- `POST /api/auth/login` - User login
- `GET /api/auth/check` - Check authentication status
- `POST /api/auth/logout` - User logout
- `GET /api/items` - Fetch all items
- `GET /api/items/:id` - Fetch single item
- `POST /api/items` - Create new item (protected)
- `PUT /api/items/:id` - Update item (protected)
- `DELETE /api/items/:id` - Delete item (protected)

## Authentication

### Demo Credentials

```
Email: demo@example.com
Password: password123
```

### How Authentication Works

1. User enters credentials on `/login` page
2. Frontend sends POST request to `/api/auth/login`
3. Server validates credentials and sets `authToken` cookie
4. Cookie is automatically sent on subsequent requests
5. Protected routes check for valid token before allowing access
6. Toast notifications confirm successful login/logout

## API Integration

### Items API

The Express backend provides RESTful APIs for product management:

```javascript
// Get all items
GET http://localhost:5000/api/items

// Get single item
GET http://localhost:5000/api/items/:id

// Create item (requires auth cookie)
POST http://localhost:5000/api/items
Body: { name, description, price, category, stock, image }

// Update item (requires auth cookie)
PUT http://localhost:5000/api/items/:id
Body: { name, description, price, category, stock, image }

// Delete item (requires auth cookie)
DELETE http://localhost:5000/api/items/:id
```

## Database

Currently using **in-memory mock database** with sample products:

- Laptop Pro
- Wireless Headphones
- Mechanical Keyboard
- USB-C Hub
- 4K Webcam
- Portable SSD 1TB

Products are stored in memory and will reset on server restart. For production, integrate a real database like MongoDB or PostgreSQL.

## Features Breakdown

### Landing Page (7 Sections)

1. **Hero Section** - Welcome message with call-to-action
2. **Featured Categories** - Product category showcase
3. **Why Choose Us** - Key benefits and features
4. **Our Promise** - Brand values and guarantees
5. **Testimonials** - Customer reviews and ratings
6. **Special Offers** - Promotional content
7. **Final CTA** - Final conversion opportunity

### Product Management

- Browse all products with image previews
- View detailed product information
- Add to cart functionality
- Stock status tracking

### User Experience

- Responsive design (mobile, tablet, desktop)
- Toast notifications for user feedback
- Smooth page transitions
- Error handling and user guidance
- Loading states

## Building for Production

```bash
npm run build
npm start
```

## Available Scripts

- `npm run dev` - Start both servers (frontend + backend)
- `npm run dev:next` - Start only Next.js development server
- `npm run dev:server` - Start only Express backend server
- `npm run build` - Build Next.js for production
- `npm start` - Run production build
- `npm run lint` - Run ESLint

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- [ ] Real database integration (MongoDB/PostgreSQL)
- [ ] User registration system
- [ ] Shopping cart persistence
- [ ] Payment gateway integration
- [ ] Order management
- [ ] Product search and filtering
- [ ] Admin dashboard
- [ ] User reviews and ratings
- [ ] Email notifications
- [ ] Social login (Google, GitHub)

## Troubleshooting

### Port Already in Use

If port 3000 or 5000 is already in use:

- Change `API_PORT` in `.env.local`
- Update `NEXT_PUBLIC_API_URL` accordingly

### CORS Errors

- Ensure `NEXT_PUBLIC_FRONTEND_URL` is correct in `.env.local`
- Express server no longer required (API routes integrated into Next.js)

### Cookie Not Persisting

- Ensure cookies are enabled in browser
- Check if running on `localhost` (required for httpOnly cookies in development)

### Items Not Loading

- Verify Next.js server is running on port 3000
- Check browser console for API errors
- Ensure `NEXT_PUBLIC_API_URL` is correct

## Deployment to Vercel

This application is optimized for deployment on Vercel with all backend functionality integrated as Next.js API routes.

### Prerequisites

- GitHub account with repository
- Vercel account (free tier available)

### Deployment Steps

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Ready for Vercel deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure Environment Variables** (Optional)
   - In Vercel Project Settings → Environment Variables
   - Add: `NEXT_PUBLIC_API_URL=` (leave empty for relative URLs)
   - Add: `NEXT_PUBLIC_FRONTEND_URL=` (leave empty for relative URLs)
   - Vercel will use the deployed domain automatically

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (typically 1-2 minutes)
   - Your app will be live at `https://your-project.vercel.app`

### What's Included in This Deployment

- ✅ All Next.js pages and components
- ✅ API routes for items (GET, POST, PUT, DELETE)
- ✅ Authentication system with cookies
- ✅ Tailwind CSS styling
- ✅ Toast notifications with Sonner
- ✅ Responsive design for all devices

### What's NOT Included

- ❌ Express.js server (migrated to Next.js API routes)
- ❌ Separate backend process
- ❌ External database (currently uses in-memory storage)

### Important Notes

- **Database Persistence**: The application uses an in-memory database that resets on each deployment or server restart. For production, integrate a real database like MongoDB, PostgreSQL, or Firebase.

- **Environment Variables**: If you added custom environment variables, configure them in Vercel Project Settings → Environment Variables before deploying.

- **Custom Domain**: After deployment, you can add a custom domain in Vercel Project Settings → Domains.

- **Monitoring & Logs**: View deployment logs and errors in Vercel Dashboard → Project Settings → Logs.

### Local Development Before Deployment

Test locally to ensure everything works:

```bash
npm install
npm run dev
```

Then visit `http://localhost:3000` and test:

- Login with `demo@example.com` / `password123`
- Browse items at `/items`
- Add new item at `/add-item` (after login)
- Verify all API routes work correctly

## License

This project is open source and available under the MIT License.

## Contact & Support

For issues, questions, or contributions, please refer to the project documentation or contact the development team.

---

**Version:** 0.1.0  
**Last Updated:** January 2026  
**Status:** Ready for Vercel Deployment
