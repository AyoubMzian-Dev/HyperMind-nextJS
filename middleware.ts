import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

//
const isProtectedRoute = createRouteMatcher([ '/admin(.*)'])

export default clerkMiddleware(async (auth, req) => {
    // Get the current path from the request
    const path = req.nextUrl.pathname
    
    // Skip authentication for root path and sign-in page
    if (path === '/' || path === '/sign-in') {
        return
    }

    try {
        // Protect all other routes
        if (isProtectedRoute(req)) {
            await auth.protect()
        }
    } catch (error) {
        // Create redirect URL using NextURL for proper handling
        const redirectUrl = req.nextUrl.clone()
        redirectUrl.pathname = '/sign-in'
        // Add the redirect URL as a parameter
        redirectUrl.searchParams.set('redirect_url', req.url)
        
        return Response.redirect(redirectUrl)
    }
},
() => ({
    // Provide options here
    signInUrl: '/sign-in',
    signUpUrl: '/sign-ip'
}),
)

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}