import { AssistantRuntimeProvider, ChatModelAdapter, useLocalRuntime } from "@assistant-ui/react";
import { ThreadList } from "@/components/assistant-ui/thread-list";
import { Thread } from "@/components/assistant-ui/thread";
import { useState } from "react";
import { Combobox } from "@/components/ui/combobox";

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

const deals = [
  {
    value: "apple",
    label: "Apple",
  },
  {
    value: "microsoft",
    label: "Microsoft",
  },
 
  {
    value: "nvidia",
    label: "Nvidia",
  },
];

type Deal = "microsoft" | "apple" | "nvidia";

export const Demo = () => {
  const runtime = useLocalRuntime(MyModelAdapter);
  const [value, setValue] = useState<Deal | null>(null);

  return (
    <div className="mx-auto my-8 h-[80vh] w-full max-w-[1280px] overflow-hidden rounded-lg border bg-background shadow-lg">
      <div className="p-4 border-b flex items-center gap-2">
        <label className="text-sm font-medium">Deal to Search:</label>
        <div className="w-1/2">
          <Combobox
            options={deals}
            value={value || ""}
            onValueChange={(newValue) => {
              setValue(newValue as Deal);
              console.log("Selected deal:", newValue);
            }}
            placeholder="Select deal..."
          />
        </div>
      </div>
      <AssistantRuntimeProvider runtime={runtime}>
        <div className="grid h-[calc(80vh-73px)] grid-cols-[200px_1fr] gap-x-2 p-4">
          <ThreadList />
          <Thread />
        </div>
      </AssistantRuntimeProvider>
    </div>
  );
};
