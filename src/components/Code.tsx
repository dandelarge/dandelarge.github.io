import { Highlight, themes } from "prism-react-renderer";

interface Props {
  children: string;
  language?: string;
}

export default function Code({ children, language = "tsx" }: Props) {
  return (
    <Highlight theme={themes.vsDark} language={language} code={children}>
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre style={{ ...style, padding: "24px" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span
                  key={key}
                  {...getTokenProps({ token })}
                  style={{
                    ...getTokenProps({ token }).style,
                    fontFamily: "monospace",
                  }}
                />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
