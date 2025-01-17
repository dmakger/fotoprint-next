import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

import { API_URL } from "@/shared/data/api.data";
import { propsToString } from "@/shared/lib/props.lib";
import { ICategoryRequest } from "../model/props.category.metric.model";
import { ICategory } from "../model/category.metric.model";

export const CategoryAPI = createApi({
	reducerPath: 'categoryAPI',
  	baseQuery: fetchBaseQuery({
		baseUrl: API_URL + '/category/'
	}),
	endpoints: (build) => ({
		getCategories: build.query<ICategory[], ICategoryRequest>({
			query: (props) => ({
				url: `all/?${propsToString<ICategoryRequest>(props)}`,
				method: 'GET',
			})
		}),
	})
})
