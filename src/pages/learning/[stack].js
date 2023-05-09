import { useState, useRef, useEffect } from 'react';
import stacks from '@/data/stacks.json';
import Header from '@/components/Header';
import Message from '@/components/Message';
import Prompt from '@/components/Prompt';

const Stack = ({ stack, stackKey }) => {
  const [messages, setMessages] = useState([]);
  const chatRef = useRef(null);

  const onSubmit = async (prompt) => {
    if (prompt.trim().length === 0) return;
    setMessages((messages) => {
      return [
        ...messages,
        {
          id: new Date().toISOString(),
          author: 'human',
          avatar: 'https://thrangra.sirv.com/Avatar2.png',
          text: prompt,
        },
      ];
    });
    const response = await fetch('/api/completion', {
      method: 'POST',
      body: JSON.stringify({ prompt }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const jsonResult = await response.json();
    if (response.ok) {
      setMessages((messages) => {
        return [
          ...messages,
          {
            id: new Date().toISOString(),
            author: 'Robot',
            avatar: '/logo-open-ai.png',
            text: jsonResult.result,
          },
        ];
      });
    } else {
      console.error(jsonResult?.error?.message);
    }
  };

  useEffect(() => {
    chatRef.current.scrollTo(0, chatRef.current.scrollHeight);
  }, [messages]);

  return (
    <div className="h-full flex flex-col">
      <Header stack={stack} stackKey={stackKey} />
      <hr className="my-4" />
      <div ref={chatRef} className="chat flex flex-col h-full overflow-scroll">
        {messages.map((message, i) => (
          <Message
            idx={i}
            key={message.id}
            text={message.text}
            author={message.author}
            avatar={message.avatar}
          />
        ))}
      </div>
      <div className="flex p-4">
        <Prompt onSubmit={onSubmit} />
      </div>
    </div>
  );
};
export default Stack;

export async function getStaticPaths() {
  const paths = Object.keys(stacks).map((key) => ({ params: { stack: key } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log(params);
  const stack = stacks[params.stack];
  return {
    props: {
      stack,
      stackKey: params.stack,
    },
  };
}
