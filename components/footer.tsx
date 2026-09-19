import technologies from "@/public/tec.json";

type Technology = {
  name: string;
  src: string;
};

const languages = technologies as Technology[];

export default function Footer() {
  const loop = [...languages, ...languages];

  return (
    <footer className="w-full bg-[#232322] border-t border-gray-700/50 text-white">
      <div className="max-w-3xl mx-auto px-6 pt-10 pb-6">
        <p className="text-center font-bold text-xl sm:text-2xl tracking-wide">
          Languages ​​and technologies I have used
        </p>

      </div>

      {/* Carrusel */}
      <div className="marquee-mask overflow-hidden pb-10">
        <div className="marquee-track flex w-max items-center gap-4 px-4">
          {loop.map((lang, index) => (
            <div
              key={`${lang.name}-${index}`}
              aria-hidden={index >= languages.length}
              className="flex shrink-0 flex-col items-center gap-2 rounded-xl bg-white px-6 py-4 shadow-lg shadow-black/30 transition-transform hover:scale-105"
              title={lang.name}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lang.src}
                alt={lang.name}
                loading="lazy"
                className="h-12 w-12 object-contain sm:h-14 sm:w-14"
              />
              <span className="text-xs font-medium text-zinc-800 whitespace-nowrap">
                {lang.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div >
        <p className="max-w-3xl mx-auto px-6 py-4 text-center text-xs text-zinc-400">
          © {new Date().getFullYear()} Juan José Jiménez — Portfolio
        </p>
      </div>
    </footer>
  );
}
