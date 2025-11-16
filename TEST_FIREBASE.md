# Firebase Connection Test

## Issue
Portfolio website can't fetch data from Firebase after adding .env file.

## Solution Steps

### 1. **RESTART THE DEV SERVER** (Most Important!)
Vite only reads .env files when the server starts. You MUST restart:

```bash
# Stop the current server (Ctrl+C)
# Then restart:
cd Pitechy-Portfolio-web
npm run dev
```

### 2. Verify Environment Variables Are Loaded
Open browser console and check if Firebase is initialized:
```javascript
// In browser console, type:
console.log(import.meta.env.VITE_API_KEY)
```
It should show your API key, not "undefined"

### 3. Check Firebase Rules
Make sure your Firestore rules allow public read access:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /projects/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    match /categories/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    match /socialmedia/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

### 4. Check Browser Console
After restarting, check for:
- Any Firebase errors
- Network requests to Firestore
- Console.log messages from our error handlers

### 5. Verify Data Exists
Make sure you have:
- Projects with `status: true` in Firestore
- Categories collection
- Socialmedia collection

## Common Issues

### Issue: "undefined" in Firebase config
**Cause**: Dev server not restarted after adding .env
**Fix**: Restart dev server

### Issue: Permission denied
**Cause**: Firestore rules too restrictive
**Fix**: Update Firestore rules (see step 3)

### Issue: No data showing
**Cause**: Projects have `status: 1` instead of `status: true`
**Fix**: Update query or change data in Firestore

## Quick Debug
Add this to your App.jsx temporarily to test:
```javascript
useEffect(() => {
  console.log('Firebase Config Check:');
  console.log('API Key:', import.meta.env.VITE_API_KEY);
  console.log('Project ID:', import.meta.env.VITE_PROJECT_ID);
}, []);
```
