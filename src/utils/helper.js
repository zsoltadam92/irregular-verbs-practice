export const speakHandler = (text) => {
  let utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
};
