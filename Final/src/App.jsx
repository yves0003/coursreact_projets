import { createRoot } from "react-dom/client";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useGetImages } from "./hooks/useGetImages";
import SearchFields from "./components/SearchFields";
import ImageBlock from "./components/ImageBlock";
// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const [searchvalue, setSearchValue] = useState("");
  const results = useGetImages(searchvalue);
  return (
    <div className="container">
      <h1 className="title">Crypto Logos</h1>
      <SearchFields searchvalue={searchvalue} setSearchValue={setSearchValue} />
      {results.isLoading ? (
        <div style={{ textAlign: "center" }}>Loading...........</div>
      ) : (
        <>
          <div className="ListImageContainer">
            {results.data.length > 0 &&
              results.data.map((crypto, index) => (
                <ImageBlock crypto={crypto} key={index} />
              ))}
          </div>
        </>
      )}
    </div>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
