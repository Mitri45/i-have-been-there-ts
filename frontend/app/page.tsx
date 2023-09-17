import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';
import { redirect } from 'next/navigation';
import MyMap from './components/MyMap';
import 'mapbox-gl/dist/mapbox-gl.css';

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) {
    return (
      <main className="flex flex-1">
        <div className="basis-1/4 bg-black">Sidebar</div>
        <div className="basis-3/4 bg-slate-400">
          <MyMap />
        </div>
      </main>
    );
  }
  redirect('/login');
}
