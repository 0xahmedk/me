import { MantineProvider } from "@mantine/core";
import "./GlobalStyles.css";
import Layout from "./components/Layout";

export default function App() {
  return (
    <MantineProvider
      defaultColorScheme="dark"
      theme={{
        fontFamily:
          'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
        headings: {
          fontFamily:
            "JetBrains Mono, Fira Code, ui-monospace, SFMono-Regular, Menlo, Monaco, monospace",
        },
      }}
    >
      <Layout />
    </MantineProvider>
  );
}
