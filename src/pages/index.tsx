import MoviesApi from "@/components/MoviesApi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const index = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <MoviesApi />
      </QueryClientProvider>
    </div>
  );
};

export default index;
