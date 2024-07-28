import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { API_URL } from "@/shared/data/api.data";
import { IProduct } from "../model/product.model";
import { IProductProps, IProductQuery } from "../model/props.product.model";
import { propsToString } from "@/shared/lib/props.lib";

export const ProductAPI = createApi({
	reducerPath: 'productAPI',
  	baseQuery: fetchBaseQuery({
		baseUrl: API_URL + '/product/'
	}),
	endpoints: (build) => ({
		getProducts: build.query<IProductQuery, IProductProps>({
			query: (props) => ({
				url: `all/?${propsToString<IProductProps>(props)}`,
				method: 'GET',
			})
		}),

		getDetailProduct: build.query<IProduct, number | string>({
			query: (productId) => ({
				url: `all/${productId}`,
				method: 'GET',
			})
		}),
	})
})
