export { default } from 'next-auth/middleware';

console.log('middleware.ts');
export const config = {
  matcher: ['/my-map', '/profile'],
  //   matcher: ['/((?!register|api|login|my-map).*)'],
};
