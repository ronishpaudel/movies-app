import { MoviesApp } from "@/components/MoviesApp";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const index = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <MoviesApp />
      </QueryClientProvider>
    </div>
  );
};

export default index;
