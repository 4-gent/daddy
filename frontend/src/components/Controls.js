// ./components/Controls.tsx
"use client";
import { useVoice, VoiceReadyState } from "@humeai/voice-react";
import '../styles/call.css';

export default function Controls() {
  const { connect, disconnect, readyState } = useVoice();

  if (readyState === VoiceReadyState.OPEN) {
    return (
      <button className="call-btn"
        onClick={() => {
          disconnect();
        }}
      >
        End Call
      </button>
    );
  }

  return (
    <button className="call-btn"
      onClick={() => {
        connect()
          .then(() => {
            console.log("ok");
          })
          .catch((e) => {
            console.log(e);
          });
      }}
    >
      Start Call
    </button>
  );
}
