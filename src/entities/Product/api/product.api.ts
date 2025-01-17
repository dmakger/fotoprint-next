import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { API_URL } from "@/shared/data/api.data";
import { IProduct, IProductCharacteristicCombination } from "../model/product.model";
import { IProductRequest, IProductQuery } from "../model/props.product.model";
import { propsToString } from "@/shared/lib/props.lib";
import { IProductForm } from "../model/form.product.model";

export const ProductAPI = createApi({
	reducerPath: 'productAPI',
  	baseQuery: fetchBaseQuery({
		baseUrl: API_URL + '/product/'
	}),
	endpoints: (build) => ({
		getProducts: build.query<IProductQuery, IProductRequest>({
			query: (props) => ({
				url: `all/?${propsToString<IProductRequest>(props)}`,
				method: 'GET',
			})
		}),

		getDetailProduct: build.query<IProduct, number | string>({
			query: (productId) => ({
				url: `all/${productId}`,
				method: 'GET',
			})
		}),

		getCombinationsProduct: build.query<IProductCharacteristicCombination, number | string>({
			query: (productId) => ({
				url: `combinations/${productId}`,
				method: 'GET',
			})
		}),

		getFormsProduct: build.query<IProductForm[], number | string>({
			query: (productId) => ({
				url: `forms/${productId}`,
				method: 'GET',
			})
		}),
	})
})
