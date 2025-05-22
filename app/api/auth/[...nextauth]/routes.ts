import { handlers } from "@/auth" // Referring to the auth.ts we just created
export const { GET, POST } = handlers




// On GitHub, the "application callback URL" (often referred to as the "redirect URL") is the specific address that a user's browser is redirected to after they've authorized your GitHub App (or OAuth app). It essentially acts as the "return address" for the authorization process. 
// Here's a more detailed explanation:

//     1. What it does:
//     When a user authorizes your GitHub App, GitHub sends them back to this URL. 

// 2. Why it's important:
// This URL is crucial for your app to receive the authorization code or access token that allows it to act on behalf of the user. 
// 3. How it works:
// GitHub redirects the user to the specified callback URL after they've granted permission for your app. 
// 4. Security:
// This URL must be a valid URL, and it's used for security purposes to ensure that GitHub is redirecting the user to the correct app. 
// 5. Multiple URLs:
// You can specify multiple callback URLs when registering your GitHub App, and you can use the redirect_uri parameter to indicate which one to use. 
// 6. Example:
// A common callback URL might be your app's website address with a specific path, such as https://your-app.com/github/callback. 
