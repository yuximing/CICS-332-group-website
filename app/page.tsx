import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">

      <div className="relative flex place-items-center z-[-1]">
        <Image
          className="relative"
          src="/welcome.png"
          alt="Next.js Logo"
          width={700}
          height={300}
          priority
        />
      </div>
      
      <div className={`flex flex-col items-center mb-10`}>
        <p className="text-3xl font-semibold">
          Group 4 - Chicken AI
        </p>
        <p className={`m-0 max-w-100vw text-base opacity-50 pt-5`}>Abbey Cameron | Akash Singh | Derek Youngman | Marion Anglin | Shrinidhi Thatahngudi Sampath Krishnan | Ximing Yu</p>
      </div>
      
      <div className="flex flex-col text-left">
        <div
          className="rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-200 hover:bg-neutral-100"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            A1. Conceptual Architecture
          </h2>
          <p className={`m-0 max-w-[30ch] text-base opacity-50`}>
            <a href="#" className="no-underline hover:underline">report</a>, <a href="#" className="no-underline hover:underline">slides</a> and <a href="#" className="no-underline hover:underline">presentation</a>
          </p>
        </div>

        <div
          className="rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-200 hover:bg-neutral-100"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            A2. Concrete Architecture
          </h2>
          <p className={`m-0 max-w-[30ch] text-base opacity-50`}>
            <a href="#" className="no-underline hover:underline">report</a>, <a href="#" className="no-underline hover:underline">slides</a> and <a href="#" className="no-underline hover:underline">presentation</a>
          </p>
        </div>

        <div
          className="rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-200 hover:bg-neutral-100"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            A3. Architectural Enhancement
          </h2>
          <p className={`m-0 max-w-[30ch] text-base opacity-50`}>
            <a href="#" className="no-underline hover:underline">report</a>, <a href="#" className="no-underline hover:underline">slides</a> and <a href="#" className="no-underline hover:underline">presentation</a>
          </p>
        </div>
      </div>
    </main>
  );
}
