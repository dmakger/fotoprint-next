import { FC } from "react";

import { TagAll } from "@/shared/data/tag.data";
import Wrapper1280 from "@/shared/ui/Wrapper/1280/Wrapper1280";
import { PopularByDaysPageContent } from "@/widgets/Pages/Collection/Popular/Days/PopularByDaysPageContent";
import { notFound } from "next/navigation";
import { IProductPopularRequest } from "@/entities/Product/model/props.product.model";

interface PopularByDaysPageProps {
	params: { days: string };
  }
  
const PopularCollectionPage: FC<PopularByDaysPageProps> = ({ params }) => {
	// Преобразуем days в число
	const days = Number(params.days);


	const validDays: IProductPopularRequest["days"][] = [7, 30];

	// Если days не 7 и не 30 — показываем 404
	if (!validDays.includes(days as IProductPopularRequest["days"])) {
		notFound(); // Отправляет пользователя на страницу 404
	}
	
	return (
		<Wrapper1280>
			<PopularByDaysPageContent days={days as IProductPopularRequest["days"]}/>
		</Wrapper1280>
  );
}

export default PopularCollectionPage;