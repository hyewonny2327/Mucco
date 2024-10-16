import { NextResponse } from "next/server";

export { default } from "next-auth/middleware";

export function middleware() {
  console.log("Middleware triggered");
  return NextResponse.next();
}

export const config = {
  matcher: ["/user-page", "/user-page/:path*", "/room/:id*"],
};
