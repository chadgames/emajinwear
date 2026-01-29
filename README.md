# Emajin Wear

A modern, responsive e-commerce website for Emajin Wear streetwear brand, built with pure HTML, CSS, and JavaScript.

## Technology Stack

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with Flexbox/Grid, animations, and responsive design
- **Vanilla JavaScript** - No frameworks, pure JS for interactivity
- **GitHub Pages** - Free static site hosting

## Site Structure

```
emajinwear/
├── index.html          # Homepage with hero, featured products, and brand story
├── products.html       # Full product catalog with filtering
├── product.html        # Individual product detail page
├── cart.html           # Shopping cart page
├── about.html          # About the brand
├── contact.html        # Contact form and information
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   └── main.js         # JavaScript functionality
├── images/             # Product images and assets
├── CNAME               # Custom domain configuration
└── README.md           # This file
```

## Deployment to GitHub Pages

### Initial Setup

1. Create a new repository on GitHub named `emajinwear` (or your preferred name)
2. Push your code to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/emajinwear.git
   git push -u origin main
   ```
3. Go to repository **Settings** → **Pages**
4. Under "Source", select **Deploy from a branch**
5. Select the **main** branch and **/ (root)** folder
6. Click **Save**

Your site will be live at `https://YOUR_USERNAME.github.io/emajinwear/` within a few minutes.

### Updating the Site

Simply push changes to the main branch:
```bash
git add .
git commit -m "Your update message"
git push
```

GitHub Pages will automatically rebuild and deploy the site.

## Customization

### WhatsApp Number

Update the WhatsApp number in `js/main.js`:
```javascript
const WHATSAPP_NUMBER = '1234567890'; // Your number without + or spaces
```

Also update any direct WhatsApp links in HTML files:
```html
<a href="https://wa.me/1234567890">Contact on WhatsApp</a>
```

### Product Prices

Edit product prices directly in the HTML files or in the JavaScript product data:
```javascript
const products = [
  {
    id: 1,
    name: 'Product Name',
    price: 49.99,
    // ...
  }
];
```

### Brand Colors

Modify CSS custom properties in `css/styles.css`:
```css
:root {
  --primary-color: #000000;
  --secondary-color: #ffffff;
  --accent-color: #your-color;
}
```

### Contact Information

Update contact details in `contact.html` and footer sections across all HTML files.

## DNS Setup for Squarespace Domain

To connect your Squarespace domain (emajinwear.com) to GitHub Pages:

### Step 1: Configure GitHub Pages Custom Domain

1. Ensure the `CNAME` file exists in your repository root containing:
   ```
   emajinwear.com
   ```
2. Go to repository **Settings** → **Pages**
3. Under "Custom domain", enter `emajinwear.com`
4. Check "Enforce HTTPS" (after DNS propagation)

### Step 2: Configure Squarespace DNS

1. Log in to your Squarespace account
2. Go to **Settings** → **Domains** → **emajinwear.com**
3. Click **DNS Settings** or **Advanced DNS Settings**
4. Remove any existing A records or CNAME records for the root domain
5. Add the following **A records** (point @ or root to GitHub's IPs):

   | Type | Host | Value |
   |------|------|-------|
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |

6. Add a **CNAME record** for www:

   | Type | Host | Value |
   |------|------|-------|
   | CNAME | www | YOUR_USERNAME.github.io |

### Step 3: Verify Configuration

- DNS changes can take up to 48 hours to propagate (usually 1-2 hours)
- Verify with: `dig emajinwear.com +short`
- Check GitHub Pages settings for a green checkmark next to your domain
- Once verified, enable "Enforce HTTPS" in GitHub Pages settings

### Troubleshooting

- If the site shows a 404, ensure the CNAME file is committed and pushed
- If HTTPS isn't available, wait for DNS propagation and GitHub's certificate provisioning
- Clear browser cache if you see old content

## License

All rights reserved. © 2024 Emajin Wear

This codebase is proprietary. Unauthorized copying, modification, or distribution is prohibited without express written permission from Emajin Wear.

---

For questions or support, contact the development team or reach out via the website contact form.
