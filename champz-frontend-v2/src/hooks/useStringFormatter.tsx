import reactStringReplace from "react-string-replace";
import { EmphasizedText } from "@/components/Text";

export function useStringFormatter() {
  // Replaces [text] with <Format>Text</Format>

  const replaceHighlightTags = (text: string) => {
    return reactStringReplace(text, /\[(.*?)\]/g, (match, i) => (
      <EmphasizedText>{match}</EmphasizedText>
    ));
  };

  const replaceExploreTextFormatTags = (text: string) => {
    let newText = reactStringReplace(text, /___/g, (match, i) => (
      <>
        <br key={`br1-${i}`} />
        <br key={`br2-${i}`} />
        {match}
      </>
    ));

    newText = reactStringReplace(newText, /\[(.*?)\]/g, (match, i) => (
      <EmphasizedText>{match}</EmphasizedText>
    ));

    newText = reactStringReplace(newText, /\{(.*?)\}/g, (match, i) => (
      <span key={i} className="italic">
        {match}
      </span>
    ));

    return newText;
  };

  return {
    replaceHighlightTags,
    replaceExploreTextFormatTags,
  };
}
