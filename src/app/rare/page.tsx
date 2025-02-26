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
      document.title = 'bcnext/rare';
  }, []);
  return (
    <div>
      <Link href="/" className="font-bold hover:text-green-600 px-1">bcnext</Link>|
      <Link href="/normal" className="hover:text-green-600 px-1">Normal</Link>|
      <Link href="/rare" className="text-green-500 hover:text-green-600 px-1">Rare</Link>|
      <hr />
      <Suspense>
        <GatyaSets />
        <SeedAndRolls />
        <RollTable />
        <Tile />
      </Suspense>
    </div>
  );
}
