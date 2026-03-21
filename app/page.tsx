import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6">
      <main className="max-w-2xl w-full text-center">
        <Image
          src="/whitelogo.png"
          alt="meth.company"
          width={200}
          height={200}
          className="mx-auto mb-8"
          priority
        />
     
     
     
       
       
       
        <p className="text-zinc-500 text-sm sm:text-base max-w-md mx-auto">
          Something is brewing. We&apos;ll be back soon.
        </p>
      </main>
    </div>
  );
}
