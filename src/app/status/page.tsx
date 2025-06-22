'use client'

import Link from 'next/link';
import Image from 'next/image';
import { sozai } from '@/data/materials';

export default function Page() {
  return (
    <div>
      <Link href="/" className="font-bold hover:text-green-600 px-1">bcnext</Link>|
      <Link href="/normal" className="hover:text-green-600 px-1">Normal</Link>|
      <Link href="/rare" className="hover:text-green-600 px-1">Rare</Link>|
      <Link href="/event" className="hover:text-green-600 px-1">Event</Link>|
      <Link href="/seek" className="hover:text-green-600 px-1">Seek</Link>|
      <Link href="/status" className="text-green-500 hover:text-green-600 px-1">Status</Link>|
      <hr />
      <Image src= {`data:image/png;base64,${sozai.new}`} alt="img_new" width={20} height={0} />
    </div>
  );
}
