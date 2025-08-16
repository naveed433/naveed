# Portfolio Website Setup Guide

This guide will help you set up and run Naveed Khan's portfolio website with full-stack functionality including backend authentication.

## 🚀 Quick Start (Frontend Only)

If you only want to view the portfolio website without backend features:

1. **Download/Clone** all the frontend files:
   - `index.html` - Main portfolio page
   - `styles.css` - All styling and animations
   - `script.js` - Frontend functionality
   - `auth.html` - Login/signup page (will work without backend)

2. **Open** `index.html` in your web browser
3. **Enjoy** the fully functional portfolio website!

## 🔧 Full Stack Setup (Frontend + Backend)

### Prerequisites

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)
- **Modern web browser**

### Step 1: Install Node.js

Download and install Node.js from [nodejs.org](https://nodejs.org/)

Verify installation:
```bash
node --version
npm --version
```

### Step 2: Setup Backend

1. **Navigate** to the backend directory:
   ```bash
   cd backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the server**:
   ```bash
   npm start
   ```

   Or for development with auto-restart:
   ```bash
   npm run dev
   ```

4. **Verify** the server is running:
   - You should see: "Server running on port 3000"
   - Open http://localhost:3000 in your browser

### Step 3: Test Authentication

1. **Open** `auth.html` in your browser
2. **Create an account** using the signup form
3. **Login** with your credentials
4. **Access** the portfolio with authentication

## 📁 Project Structure

```
portfolio-website/
├── index.html              # Main portfolio page
├── auth.html               # Login/signup page
├── styles.css              # Main stylesheet
├── script.js               # Frontend JavaScript
├── README.md               # Project documentation
├── SETUP.md                # This setup guide
└── backend/                # Backend server
    ├── server.js           # Express server
    └── package.json        # Node.js dependencies
```

## 🌐 Access URLs

- **Portfolio**: http://localhost:3000 (when backend is running)
- **Portfolio (Frontend Only)**: Open `index.html` directly
- **Authentication**: http://localhost:3000/auth.html

## 🔐 Backend API Endpoints

### Authentication
- **POST** `/api/signup` - User registration
- **POST** `/api/login` - User login
- **GET** `/api/profile` - Get user profile (protected)

### Request Format
```json
{
  "username": "your_username",
  "email": "your_email@example.com",
  "password": "your_password"
}
```

### Response Format
```json
{
  "success": true,
  "message": "Success message",
  "token": "jwt_token_here",
  "user": {
    "id": 1,
    "username": "your_username",
    "email": "your_email@example.com"
  }
}
```

## 🎨 Customization

### Personal Information
Edit `index.html` to update:
- Name: "Naveed Khan"
- Contact details
- About section
- Skills and experience
- Testimonials

### Styling
Modify `styles.css` to change:
- Color scheme
- Animations
- Layout
- Typography

### Backend
Customize `backend/server.js` for:
- Database integration
- Additional API endpoints
- User roles and permissions
- Email notifications

## 🚨 Troubleshooting

### Common Issues

#### 1. Port Already in Use
```bash
# Kill process using port 3000
npx kill-port 3000

# Or use a different port
PORT=3001 npm start
```

#### 2. CORS Issues
The backend includes CORS middleware, but if you encounter issues:
```javascript
// In backend/server.js
app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  credentials: true
}));
```

#### 3. Authentication Not Working
- Check if backend server is running
- Verify API endpoints are accessible
- Check browser console for errors
- Ensure JWT_SECRET is set (optional)

#### 4. Particles Not Showing
- Check if Canvas API is supported in your browser
- Verify JavaScript is enabled
- Check browser console for errors

### Performance Issues

#### 1. Slow Animations
- Reduce particle count in `script.js`
- Adjust animation intervals
- Use hardware acceleration

#### 2. High CPU Usage
- Reduce particle count
- Optimize canvas rendering
- Use `requestAnimationFrame` properly

## 🔒 Security Considerations

### Production Deployment

1. **Environment Variables**:
   ```bash
   export JWT_SECRET="your-super-secure-secret-key"
   export NODE_ENV="production"
   ```

2. **HTTPS**: Always use HTTPS in production

3. **Database**: Replace in-memory storage with a real database

4. **Rate Limiting**: Add rate limiting for authentication endpoints

5. **Input Validation**: Enhance input validation and sanitization

### JWT Security

- Use strong, unique JWT secrets
- Set appropriate token expiration times
- Implement token refresh mechanism
- Store tokens securely (httpOnly cookies for production)

## 📱 Mobile Testing

### Responsive Design
The website is fully responsive and tested on:
- **Mobile**: 320px - 480px
- **Tablet**: 481px - 768px
- **Desktop**: 769px+

### Touch Interactions
- Swipe gestures for testimonials
- Touch-friendly buttons and forms
- Optimized for mobile browsers

## 🌍 Browser Compatibility

### Supported Browsers
- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+
- **Mobile**: iOS Safari, Chrome Mobile

### Features
- Modern CSS features (Grid, Flexbox, Backdrop-filter)
- ES6+ JavaScript
- Canvas API for particles
- CSS animations and transitions

## 📊 Performance Metrics

### Optimization Features
- **Lazy Loading**: Animations trigger on scroll
- **Efficient Rendering**: Canvas-based particle system
- **CSS Animations**: Hardware-accelerated transitions
- **Minimal Dependencies**: Lightweight implementation

### Expected Performance
- **First Load**: < 2 seconds
- **Animations**: 60 FPS
- **Particles**: Smooth rendering with 100 particles
- **Mobile**: Optimized for mobile devices

## 🚀 Deployment Options

### Static Hosting (Frontend Only)
- **Netlify**: Drag and drop deployment
- **Vercel**: Git-based deployment
- **GitHub Pages**: Free hosting for GitHub repos
- **Firebase Hosting**: Google's hosting solution

### Full Stack Deployment
- **Heroku**: Easy Node.js deployment
- **DigitalOcean**: VPS hosting
- **AWS**: Scalable cloud hosting
- **Vercel**: Full-stack deployment

### Environment Variables
```bash
# Production
NODE_ENV=production
JWT_SECRET=your-production-secret
PORT=3000

# Development
NODE_ENV=development
JWT_SECRET=dev-secret
PORT=3000
```

## 📞 Support

If you encounter any issues:

1. **Check** the troubleshooting section above
2. **Review** browser console for errors
3. **Verify** all dependencies are installed
4. **Contact**: bilalnaveed676@gmail.com

## 🎯 Next Steps

After successful setup:

1. **Customize** the portfolio content
2. **Add** your own projects and skills
3. **Integrate** with a real database
4. **Deploy** to production
5. **Add** analytics and monitoring
6. **Implement** additional features

---

**Happy Coding! 🚀**

*This portfolio website showcases modern web development techniques and provides a solid foundation for professional portfolios.*
