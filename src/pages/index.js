import Image from 'next/image';
import stacks from '../data/stacks.json';
import Link from 'next/link';

export default function Home() {
  const renderStacks = () => {
    return Object.keys(stacks).map((stackKey) => {
      const stack = stacks[stackKey];
      return (
        <Link
          key={stack.href}
          href={stack.href}
          className={`w-20 h-20 relative border-2 border-solid m-2 rounded-xl ${stack.hoverClass}`}
        >
          <Image className="object-cover p-2" src={stack.logo} fill alt="" />
        </Link>
      );
    });
  };
  return (
    <main className={`h-full flex flex-col justify-center items-center`}>
      <div>What do you want to learn?</div>
      <div className="flex ">{renderStacks()}</div>
    </main>
  );
}
