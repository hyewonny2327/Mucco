import NextAuth from "next-auth";
import { authOptions } from "@/app/utils/authOption";
// next.js 타입과 nextAuth 타입간의 충돌로 인해 오류가 발생하여 authOption을 다른 파일로 분리함.
//참고 : https://stackoverflow.com/questions/76388994/next-js-13-4-and-nextauth-type-error-authoptions-is-not-assignable-to-type-n
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
