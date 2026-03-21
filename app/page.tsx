import Image from "next/image";

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const projects = [
  {
    name: "Chess3.games",
    logo: "/logo/chess3games.svg",
    description:
      "Buy ERC-1155 Chess Pieces, bet on live matches, and win when your piece captures another. Captured pieces are sold, and the proceeds are distributed to winning bettors.",
    tags: ["Gaming", "NFT", "ERC-1155", "Betting"],
    status: "Active",
    url: "https://chess3.games",
  },
  {
    name: "WorldWar.lol",
    logo: "/logo/logo-worldwarlol.svg",
    description:
      "A country-based battle game where soldiers are ERC-1155 NFTs. Trading fees build treasuries; players attack and defend to capture them.",
    tags: ["Gaming", "NFT", "Strategy", "ERC-1155"],
    status: "Active",
    url: "https://worldwarlol.com",
  },
  {
    name: "Clap.is",
    logo: "/logo/logo-clapis.svg",
    description:
      "Old Thunderclap for Farcaster. A campaign platform to coordinate engagements (likes, recasts) at scale. Imagine pre-allocating 10,000 recasts for a post before it even goes live.",
    tags: ["Social", "Farcaster", "Marketing", "Campaigns"],
    status: "Active",
    url: "https://clap.is",
  },
  {
    name: "FomoFire.com",
    logo: "/logo/logo-fomofirecom.svg",
    description:
      "A last-buyer lottery game where, if no one buys a new ticket before the timer ends, the most recent buyer wins the jackpot.",
    tags: ["Gaming", "Lottery", "DeFi"],
    status: "Active",
    url: "https://fomofire.com",
  },
  {
    name: "Gods of Money",
    logo: "/logo/logo-godsofmoneycom.svg",
    description:
      "A money-streaming race from Gods like Laxmi, Kubera where the latest buyer receives a streaming prize until someone else captures it.",
    tags: ["AI", "Farcaster", "Social", "Gaming"],
    status: "Development",
    url: "https://godsofmoney.com",
  },
  {
    name: "Influ AI",
    logo: "/logo/logo-influaixyz.svg",
    description:
      "AI agents resembling famous personalities like Musk, Trump, Zuck, etc. Users send messages to convince them to send money. Sending a message costs $1 USDT. Built to run on Farcaster thread.",
    tags: ["DeFi", "Gaming", "Streaming"],
    status: "Development",
    url: "https://influai.xyz",
  },
  {
    name: "Loyalist",
    logo: "/logo/logo-loyalist.svg",
    description:
      "Get rewarded for your token content based on post engagement score. Create engaging content about tokens and earn rewards based on how well your posts perform.",
    tags: ["Social", "Rewards", "Content", "Engagement"],
    status: "Coming Soon",
    url: null,
  },
];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const isClickable = !!project.url;
  const Wrapper = isClickable ? "a" : "div";

  return (
    <Wrapper
      {...(isClickable
        ? { href: project.url!, target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={`group block rounded-lg border border-zinc-800/60 bg-zinc-950/40 p-6 transition-colors duration-200 ${
        isClickable
          ? "hover:border-zinc-700 hover:bg-zinc-900/30 cursor-pointer"
          : "opacity-90"
      }`}
    >
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex h-12 min-w-0 flex-1 items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.logo}
              alt={project.name}
              className="h-8 w-auto max-w-full object-contain object-left"
            />
          </div>
          <span
            className={`shrink-0 rounded-md px-2 py-0.5 text-xs font-medium ${
              project.status === "Active"
                ? "bg-zinc-800 text-zinc-300"
                : project.status === "Development"
                  ? "bg-zinc-800 text-zinc-400"
                  : "bg-zinc-800/60 text-zinc-500"
            }`}
          >
            {project.status}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-zinc-800/50 px-2 py-0.5 text-xs text-zinc-500"
            >
              {tag}
            </span>
          ))}
        </div>
        {isClickable ? (
          <span className="mt-1 text-xs text-zinc-500 transition-colors group-hover:text-zinc-300">
            {project.url?.replace(/^https?:\/\//, "")} →
          </span>
        ) : (
          <span className="mt-1 text-xs text-zinc-600">Coming Soon</span>
        )}
      </div>
    </Wrapper>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <div
        className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.015)_1px,transparent_1px)] bg-size-[56px_56px] pointer-events-none"
        aria-hidden
      />
      <div className="relative mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <header className="mb-16 flex flex-col items-center text-center">
          <Image
            src="/whitelogo.png"
            alt="meth.company"
            width={200}
            height={200}
            className="mb-5"
            priority
          />
          <p className="mb-6 text-sm text-zinc-500">Something is brewing. We build.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://t.me/methcompany"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 transition-colors hover:text-zinc-300"
              aria-label="Telegram"
            >
              <TelegramIcon className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/methcompany"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 transition-colors hover:text-zinc-300"
              aria-label="Twitter"
            >
              <TwitterIcon className="h-5 w-5" />
            </a>
          </div>
        </header>

        <section>
          <h2 className="mb-6 text-xs font-medium uppercase tracking-wider text-zinc-500">
            Projects
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>

        <footer className="mt-24 border-t border-zinc-800/60 py-8 text-center">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Meth.Company. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
