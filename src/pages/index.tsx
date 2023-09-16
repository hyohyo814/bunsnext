import Link from "next/link";

import { api } from "~/utils/api";

export default function Home() {
  let tiles = new Array(4);

  for (let i = 0; i < tiles.length; i++) {
    tiles[i] = `Item ${i}`
  }

  return (
    <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 bg-gray-500">
      <div className="flex flex-row overflow-x-hidden h-full text-4xl overflow-y-hidden py-16">
        {tiles.map((v, i) => (
          <div
            key={i}
            className="transition px-24 hover:scale-150 hover:cursor-pointer"
          >
            {v} 
          </div>
        ))}
      </div>
    </div>
  );
}
