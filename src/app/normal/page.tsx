'use client'

import Link from "next/link";
import { Suspense } from "react";
import { useEffect } from "react";
import GatyaSets from "./GatyaSets";
import SeedAndRolls from "./SeedAndRolls";
import RollTable from "./RollTable";
import Tile from "./Tile";

export default function Page() {
  useEffect(() => {
      document.title = 'bcnext/normal';
  }, []);
  return (
    <div>
      <Link href="/" className="font-bold hover:text-green-600 px-1">bcnext</Link>|
      <Link href="/stage" className="hover:text-green-600 px-1">Stage</Link>|
      <Link href="/unit" className="hover:text-green-600 px-1">Unit</Link>|
      <Link href="/anim" className="hover:text-green-600 px-1">Anim</Link>|
      <Link href="/anim0" className="hover:text-green-600 px-1">Anim0</Link>|
      <Link href="/seek" className="hover:text-green-600 px-1">Seek</Link>|
      <Link href="/rare" className="hover:text-green-600 px-1">Rare</Link>|
      <Link href="/normal" className="text-green-500 hover:text-green-600 px-1">Normal</Link>|
      <Link href="/event" className="hover:text-green-600 px-1">Event</Link>|
      <hr />
      <Suspense>
        <GatyaSets />
        <SeedAndRolls />
        <RollTable />
        <Tile />
      </Suspense>
    </div>
  );
};
