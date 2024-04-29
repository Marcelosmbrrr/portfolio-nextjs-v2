import NextAuth from "next-auth"
import authConfig from "./auth.config"

const { auth } = NextAuth(authConfig);

const DEFAULT_HOME_ROUTE = "/home"

// @ts-ignore
export default auth((req) => {

  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiRoute = nextUrl.pathname.includes("api");
  const isLoginPageRoute = nextUrl.pathname.startsWith("/login");
  const isProtectedRoute = ["/home", "/me"].includes(nextUrl.pathname);

  if (isApiRoute) {
    return null;
  }

  if (isLoginPageRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_HOME_ROUTE, nextUrl))
    }
    return null;
  }

  if (isProtectedRoute) {
    if (isLoggedIn) {
      return null;
    }
    return Response.redirect(new URL("/login", nextUrl))
  }

  return null;

});

// Paths that invoke the middleware 
export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}