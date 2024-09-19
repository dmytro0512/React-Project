import { useStringFormatter } from "@/hooks/useStringFormatter";

export function ExploreText(props: ExploreTextProps) {
  const stringFormatter = useStringFormatter();

  return stringFormatter.replaceExploreTextFormatTags(props.text);
}

interface ExploreTextProps {
  text: string;
}
