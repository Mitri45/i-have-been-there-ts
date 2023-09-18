import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';
import { redirect } from 'next/navigation';
import MyMap from './components/MyMap';
import 'mapbox-gl/dist/mapbox-gl.css';
import { PrismaClient, Session } from '@prisma/client';

const prisma = new PrismaClient();

type ExtendedSession =
  | (Session & {
      user: {
        id: string;
        randomKey: string;
      };
    })
  | null;

export default async function Home() {
  const session: ExtendedSession = await getServerSession(authOptions);
  if (session) {
    const nonSerialisedMarkers = await prisma.marker.findMany({
      where: {
        user_id: session?.user?.id,
      },
    });
    const markers = nonSerialisedMarkers.map((marker) => ({
      ...marker,
      latitude: marker.latitude.toNumber(),
      longitude: marker.longitude.toNumber(),
    }));
    return (
      <main className="flex flex-1">
        <div className="basis-1/4 bg-black">Sidebar</div>
        <div className="basis-3/4 bg-slate-400">
          <MyMap markers={markers} />
        </div>
      </main>
    );
  }
  redirect('/login');
}
