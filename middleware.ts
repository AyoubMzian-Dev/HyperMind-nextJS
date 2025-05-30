import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Middleware configuration for authentication and route protection
 * This middleware handles:
 * - Public routes that don't require authentication
 * - Protected routes that require authentication
 * - API routes protection
 * - Static file handling
 */

// Define public routes that don't require authentication
const publicRoutes = [
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/webhook/clerk",
  "/api/webhook/stripe",
];

// Create a matcher for protected routes
const isProtectedRoute = createRouteMatcher([
  "/admin(.*)",
  "/dashboard(.*)",
  "/profile(.*)",
  "/tasks(.*)",
  "/subjects(.*)",
  "/lessons(.*)",
  "/notifications(.*)",
  "/settings(.*)",
]);

export default clerkMiddleware(async (auth, req: NextRequest) => {
  // Get the current path from the request
  const path = req.nextUrl.pathname;
  
  // Skip authentication for public routes
  if (publicRoutes.some(route => {
    const pattern = new RegExp(`^${route.replace(/\(\.\*\)/g, '.*')}$`);
    return pattern.test(path);
  })) {
    return;
  }

  try {
    // Protect all other routes
    if (isProtectedRoute(req)) {
      await auth.protect();
    }
  } catch (error) {
    console.error('Authentication error:', error);
    // Create redirect URL using NextURL for proper handling
    const signInUrl = new URL('/sign-in', req.url);
    signInUrl.searchParams.set('redirect_url', req.url);
    return NextResponse.redirect(signInUrl);
  }
});

/**
 * Configuration for the middleware
 * Matches all routes except:
 * - Next.js internals (_next)
 * - Static files (images, fonts, etc.)
 * - API routes (handled separately)
 */
export const config = {
  matcher: [
    // Match all routes except static files and Next.js internals
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Match all API routes
    "/(api|trpc)(.*)",
  ],
};