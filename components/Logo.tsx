import Image from "next/image";

export default function Logo() {
  return (
    <div className="absolute top-4 left-4 md:top-6 md:left-6 lg:top-8 lg:left-8 z-50 animate-fade-in">
      <Image
        src="/images/logo-mybox-white.svg"
        alt="MyBox Logo"
        width={120}
        height={40}
        className="w-24 md:w-28 lg:w-32 h-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
        priority
      />
    </div>
  );
}
