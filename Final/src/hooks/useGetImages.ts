import { useQuery } from "@tanstack/react-query";
import getImagesApi from "../helpers/getImagesApi";

const useGetImages = (filter: string) => {
  return useQuery<CryptoType[]>({
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
export default useGetImages;
