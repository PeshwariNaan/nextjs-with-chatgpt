import Image from 'next/image';
import { useEffect, useState } from 'react';

const Message = ({ text: initialText, avatar, author, idx }) => {
  const [text, setText] = useState(author === 'Robot' ? '' : initialText);
  const bgColorClass = idx % 2 === 0 ? 'bg-slate-200' : 'bg-slate-100';

  useEffect(() => {
    const timer = setTimeout(() => {
      setText(initialText.slice(0, text.length + 1));
    }, 30);
    return () => clearTimeout(timer);
  });

  const blinkingCursorClass =
    initialText.length === text.length ? '' : 'blinking-cursor';

  return (
    <div className={`flex flex-row ${bgColorClass} p-4`}>
      <div className="w-[30px] relative mr-4">
        <Image src={avatar} width={30} height={30} alt="" />
      </div>
      <div className="w-full">
        <div className={`${blinkingCursorClass}`}>{text}</div>
      </div>
    </div>
  );
};
export default Message;
