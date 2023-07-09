import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getBookings } from "../../services/apiBookings";

export function useBookings() {
  //Sort in server-side
  const [searchParams] = useSearchParams();

  //Filter
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };
  // { field: "totalPrice", value: 5000, method: "gte" };
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    //like dependency array of react query
    //whenever filter variable changes, React Query will re-fetch the data.
    queryKey: ["bookings", filter],
    queryFn: () => getBookings({ filter }),
  });

  return { isLoading, error, bookings };
}
