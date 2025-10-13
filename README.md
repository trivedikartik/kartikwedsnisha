# Wedding Invitation Card 💍

A beautiful, animated wedding invitation card built with React and Vite.

## Features

✨ **Beautiful Animations**
- Smooth card entrance animation with 3D rotation effect
- Floating hearts in the background
- Twinkling sparkles throughout the page
- Staggered content reveal animations
- Pulsing ring icon
- Hover effects on interactive elements

💐 **Wedding Theme UI**
- Elegant gradient backgrounds (purple and pink theme)
- Decorative golden corner borders
- Beautiful typography with serif and script fonts
- Romantic color palette
- Responsive design for all devices

📍 **Complete Wedding Details**
- Couple names (Emily Rose & James Anderson)
- Wedding date and time
- Venue information with full address
- Reception details
- RSVP button
- Dress code information

## Getting Started

### Prerequisites
- Node.js (v20 or higher recommended)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd wedding-invitation
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit the local URL shown in the terminal (usually http://localhost:5173)

### Build for Production

To create a production build:
```bash
npm run build
```

The built files will be in the `dist` folder.

## Customization

You can easily customize the invitation by editing the following:

### Wedding Details
Edit `/src/components/WeddingInvitation.jsx`:
- Couple names (lines 43-45)
- Date and time (lines 59-69)
- Venue information (lines 71-81)
- RSVP date (line 98)

### Colors and Styling
Edit `/src/components/WeddingInvitation.css`:
- Background gradient (line 3)
- Card colors (line 110)
- Button colors (line 395)
- Corner decoration color (line 122)

## Technologies Used

- React 18
- Vite
- CSS3 (with animations and gradients)
- Modern JavaScript (ES6+)

## Features Breakdown

### Animations
- **Card Entrance**: 3D rotation and scale effect on load
- **Floating Hearts**: 15 animated hearts floating from bottom to top
- **Sparkles**: 20 twinkling sparkle effects across the screen
- **Content Reveal**: Staggered fade-in animations for each section
- **Interactive Elements**: Hover effects on detail items and RSVP button

### Sections
1. Header with wedding rings icon
2. Couple names in elegant script font
3. Invitation message
4. Event details (date, time, venue)
5. Reception information
6. RSVP section with call-to-action button
7. Dress code
8. Footer message

## Responsive Design

The invitation is fully responsive and looks great on:
- Desktop computers
- Tablets
- Mobile phones

## License

Free to use and customize for your wedding!

---

Made with ❤️ for your special day!
