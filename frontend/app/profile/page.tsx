type User = {
  id: number;
  name: string;
  email: string;
};

export default async function Profile() {
  const users: User[] = await fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());

  return (
    <main style={{ maxWidth: 1200, marginInline: 'auto', padding: 20 }}>
      <h1>Profile</h1>
    </main>
  );
}
