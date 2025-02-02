import axios from "axios";
import { notFound } from "next/navigation";
import { getHttpsAgent } from "@/entities/Auth/lib/auth-token.lib";

import { API_URL } from "@/shared/data/api.data";
import { IProduct } from "../model/product.model";

export const fetchDetailedProduct = async (productId: string): Promise<IProduct> => {
  const { data: product } = await axios.get(`${API_URL}/product/all/${productId}`, {
    ...getHttpsAgent(),
  });
   
  if(!product) 
    return notFound();

  return product;
};
