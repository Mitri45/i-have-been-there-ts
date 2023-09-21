import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';
import { redirect } from 'next/navigation';
import MyMap from './components/MyMap';
import { PrismaClient, Session } from '@prisma/client';
import SideBar from './components/SideBar';
import 'mapbox-gl/dist/mapbox-gl.css';

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
      <main className="flex flex-grow">
        <div className="basis-1/4 bg-primary p-3">
          <SideBar />
        </div>
        <div className="basis-3/4 bg-primary-400">
          <MyMap markers={markers} />
        </div>
      </main>
    );
  }
  redirect('/login');
}
