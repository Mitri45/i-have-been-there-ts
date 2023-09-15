import { LoginButton, LogoutButton, ProfileButton, RegisterButton } from '@/app/components/buttons';

import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log('Server session', session);
  if (session) {
    return (
      <main
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '70vh',
        }}
      >
        <div>
          <LogoutButton />
          <ProfileButton />

          <h1>Server Session</h1>
          <pre>{JSON.stringify(session)}</pre>
        </div>
      </main>
    );
  }
  return (
    <main
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
      }}
    >
      <div>
        <LoginButton />
        <RegisterButton />
        <h1>No session</h1>
        <pre>{JSON.stringify(session)}</pre>
      </div>
    </main>
  );
}
