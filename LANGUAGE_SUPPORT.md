# Bilingual Language Support

The website now supports both **Georgian (ქართული)** and **English** languages with a seamless switcher.

## Features

### 🌍 Language Switcher
- Located in the top-right corner of the header
- Toggle between **ქარ** (Georgian) and **ENG** (English)
- Active language is highlighted with gradient background
- Smooth transitions between languages

### 💾 Language Persistence
- User's language preference is saved in localStorage
- Language selection persists across page reloads
- Default language: Georgian (ქართული)

### 📝 Translated Content

All text throughout the website is translated, including:

#### Header
- Location, phone number
- Navigation menu (Home, Products, Custom Orders, About, Contact)
- Category filters
- Cart button

#### Hero Section
- Main headline
- Description
- Call-to-action buttons
- Feature cards (Fast Production, Custom Designs, Premium Quality)

#### Products Section
- Section title and description
- Product names (all 6 products)
- "Quick View" and "Add to Cart" buttons

#### Custom Orders Section
- Title and description
- Order button

#### Footer
- Tagline
- Contact information
- All footer text

## How It Works

### Translation System
The website uses React Context for state management:

```typescript
// Usage in components:
const { language, setLanguage, t } = useLanguage();

// Switch language:
setLanguage('ka'); // Georgian
setLanguage('en'); // English

// Translate text:
t('hero.title1') // Returns translated text
```

### Translation Files
All translations are stored in `src/app/context/LanguageContext.tsx`:
- English translations: `translations.en`
- Georgian translations: `translations.ka`

## Adding New Translations

To add new translated text:

1. Open `src/app/context/LanguageContext.tsx`
2. Add your key-value pair to both `en` and `ka` objects:

```typescript
const translations = {
  en: {
    'your.key': 'English text',
    // ... existing translations
  },
  ka: {
    'your.key': 'ქართული ტექსტი',
    // ... existing translations
  },
};
```

3. Use in components:
```typescript
{t('your.key')}
```

## Product Names in Georgian

Current product translations:
- **Geometric Gradient Vase** → გეომეტრიული გრადიენტიანი ვაზა
- **Articulated Dragon Figurine** → მოძრავი დრაკონის ფიგურა
- **Modern Phone Stand** → თანამედროვე ტელეფონის სადგამი
- **Hexagonal Succulent Planter** → ექვსკუთხა სუკულენტის ქოთანი
- **Modular Desk Organizer** → მოდულური მაგიდის ორგანაიზერი
- **Rainbow Articulated Robot** → ცისარტყელის მოძრავი რობოტი

## Testing

To test the language switcher:
1. Visit http://localhost:3000
2. Page loads in Georgian by default
3. Click "ENG" button in top-right to switch to English
4. Click "ქარ" button to switch back to Georgian
5. Reload page - your language preference is preserved

## Browser Compatibility

Language preference uses `localStorage`, which is supported in:
- Chrome 4+
- Firefox 3.5+
- Safari 4+
- Edge (all versions)
- IE 8+

---

**Both languages maintain the premium 3D aesthetic and professional design!** 🇬🇪 🇬🇧
