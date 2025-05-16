import { AssistantRuntimeProvider, ChatModelAdapter, useLocalRuntime } from "@assistant-ui/react";
import { ThreadList } from "@/components/assistant-ui/thread-list";
import { Thread } from "@/components/assistant-ui/thread";
import { useChatRuntime } from "@assistant-ui/react-ai-sdk";

const MyModelAdapter: ChatModelAdapter = {
  async run({ messages, abortSignal }) {
    // TODO replace with your own API
    // const result = await fetch("<YOUR_API_ENDPOINT>", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   // forward the messages in the chat to the API
    //   body: JSON.stringify({
    //     messages,
    //   }),
    //   // if the user hits the "cancel" button or escape keyboard key, cancel the request
    //   signal: abortSignal,
    // });

    // const data = await result.json();
    const data = { text: "Hello, world!" };
    console.log(messages);
    console.log(abortSignal);
 
    return {
      content: [
        {
          type: "text",
          text: data.text,
        },
      ],
    };
  },
};
 

export const Demo = () => {
  const runtime = useLocalRuntime(MyModelAdapter);

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <div className="grid h-dvh grid-cols-[200px_1fr] gap-x-2 px-4 py-4">
        <ThreadList />
        <Thread />
      </div>
    </AssistantRuntimeProvider>
  );
};
