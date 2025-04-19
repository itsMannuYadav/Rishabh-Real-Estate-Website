# Rishabh Real Estate Website - Customization Guide

This document provides guidance on how to customize different aspects of the Rishabh Real Estate website.

## Table of Contents
1. [General Customization](#general-customization)
2. [Changing Images](#changing-images)
3. [Updating Property Listings](#updating-property-listings)
4. [Modifying Testimonials](#modifying-testimonials)
5. [Contact Information](#contact-information)
6. [Colors and Styling](#colors-and-styling)
7. [Google Maps](#google-maps)
8. [WhatsApp Integration](#whatsapp-integration)

## General Customization

Most of the website content can be edited directly in the `index.html` file. Look for the text you want to change and update it accordingly.

## Changing Images

All images are stored in the `assets` folder. Replace the following files with your own images:

- `hero-bg.jpg` - Hero section background (1920x1080px recommended)
- `about-img.jpg` - About section image (600x500px recommended)
- `client1.jpg`, `client2.jpg`, `client3.jpg` - Testimonial client photos (100x100px recommended)

**Important:** Keep the same filenames or update the references in CSS and HTML files.

## Updating Property Listings

To update property listings:

1. Find the "Featured Properties Section" in `index.html`
2. Each property is wrapped in a `<div class="property-card">` element
3. Update the following for each property:
   - YouTube video link in the iframe `src` attribute
   - Property title in the `<h4>` element
   - Location in the `<p class="location">` element
   - Amenities (beds, baths, size) in the `<div class="amenities">` element
   - Price in the `<div class="price">` element

Example property card structure:
```html
<div class="property-card">
    <div class="property-video">
        <div class="ratio ratio-16x9">
            <iframe src="YOUR_YOUTUBE_LINK" title="Property Tour" allowfullscreen></iframe>
        </div>
    </div>
    <div class="property-details">
        <h4>PROPERTY_TITLE</h4>
        <p class="location"><i class="fas fa-map-marker-alt"></i> LOCATION</p>
        <div class="amenities">
            <span><i class="fas fa-bed"></i> BEDS</span>
            <span><i class="fas fa-bath"></i> BATHS</span>
            <span><i class="fas fa-ruler-combined"></i> SIZE</span>
        </div>
        <div class="price">PRICE</div>
        <a href="#" class="btn btn-outline-primary w-100 mt-3">View Details</a>
    </div>
</div>
```

## Modifying Testimonials

To update testimonials:

1. Find the "Testimonials Section" in `index.html`
2. Each testimonial is wrapped in a `<div class="testimonial-card">` element
3. Update the following for each testimonial:
   - Testimonial text in the `<p class="testimonial-text">` element
   - Client name in the `<h5>` element
   - Client role/title in the `<p>` element inside `<div class="client-details">`
   - Client photo by replacing the corresponding image file in the assets folder

## Contact Information

To update contact information:

1. Find the "Contact Section" in `index.html`
2. Update address, phone, email, and working hours in their respective elements
3. Update the Google Maps embed with your own location (see Google Maps section)
4. Update social media links with your own profiles

## Colors and Styling

The website uses CSS variables for consistent colors. To change the color scheme:

1. Open `css/style.css`
2. Find the `:root` selector at the top of the file
3. Modify the color variables as needed:
   ```css
   :root {
       --primary-color: #ffc107; /* Main accent color (yellow) */
       --secondary-color: #343a40; /* Secondary color (dark gray) */
       --light-color: #f8f9fa; /* Light color for backgrounds */
       --dark-color: #212529; /* Dark color for text */
       --text-color: #495057; /* Regular text color */
       /* Other variables */
   }
   ```

## Google Maps

To update the Google Maps location:

1. Find the "Google Map Section" in `index.html`
2. Replace the iframe `src` attribute with your own Google Maps embed code
3. To get your embed code:
   - Go to Google Maps
   - Search for your location
   - Click "Share" and then "Embed a map"
   - Copy the provided iframe code
   - Replace only the `src` attribute in the existing iframe

## WhatsApp Integration

To update the WhatsApp contact button:

1. Find the WhatsApp float button near the end of `index.html`:
   ```html
   <a href="https://wa.me/919876543210" class="whatsapp-float" target="_blank">
       <i class="fab fa-whatsapp"></i>
   </a>
   ```
2. Replace `919876543210` with your WhatsApp number (include country code without +)

---

This customization guide covers the basic aspects of the website. For more complex customizations, you may need to edit the HTML, CSS, and JavaScript files directly. 