"use client";
import { VoiceProvider } from "@humeai/voice-react";
import Controls from "./Controls";
import Messages from "./Messages";

export default function ClientComponent({ accessToken})  {
  return (
    <VoiceProvider auth={{ type: "accessToken", value: accessToken }} eviID="537c40ac-0ce9-4f1b-a258-95afe4933633" configId="537c40ac-0ce9-4f1b-a258-95afe4933633" >
        <Controls />
    </VoiceProvider>
  );
}
