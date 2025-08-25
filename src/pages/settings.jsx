import { useState } from 'react'
import {  Link } from "react-router-dom";

function Settings() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Link to='/'><button>Back</button></Link>
        <h3>Coming Soon...</h3>

        <h2>How to make the app offline useable/ look like an app for Apple IOS?</h2>
        <p>1. Open Safari: Navigate to the website using the Safari browser on your iOS device. </p>
        <p>2. Tap the Share button: Look for the Share icon (a square with an arrow pointing up) at the bottom of the screen and tap it. </p>
        <p>3. Select "Add to Home Screen": Scroll through the options in the share sheet and select "Add to Home Screen". </p>
        <p>4. Tap "Add": Confirm the installation by tapping "Add" in the top-right corner. </p>
        <p>5. Find the icon: The app icon will now appear on your home screen, and you can tap it to open the app</p>

                <h2>How to make the app offline useable/look like an app for Android?</h2>
        <p>1. Open Chrome: Launch the Google Chrome browser on your Android device.</p>
        <p>2. Visit the PWA's Website: Navigate to the website you want to install as a PWA.</p>
        <p>3. Open the Menu: Tap the three-dot icon (•••) in the top-right corner of the screen to open the browser menu.</p>
        <p>4. Select "Add to Home screen": From the menu options, select "Add to Home screen".</p>
        <p>5. Confirm Installation: A popup will appear asking for confirmation; tap the "Add" button.</p>
        <p>6. Find the PWA: The PWA is now installed and an icon for it will appear on your Android home screen, similar to other apps.</p>
        
    </>
  )
}

export default Settings
