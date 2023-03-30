//ts-check
import { useQuery } from "@tanstack/react-query";
import getImagesApi from "../helpers/getImagesApi";

export const useGetImages = (filter) => {
  return useQuery({
    queryKey: ["imageData"],
    queryFn: getImagesApi,
    select: (images) =>
      images.filter(
        (image) =>
          image.currency_code.toLowerCase().includes(filter.toLowerCase()) ||
          image.currency_long.toLowerCase().includes(filter.toLowerCase())
      ),
  });
};
