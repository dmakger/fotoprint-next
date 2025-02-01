import { FC } from "react";

import { TagAll } from "@/shared/data/tag.data";
import Wrapper1280 from "@/shared/ui/Wrapper/1280/Wrapper1280";
import { PopularByDaysPageContent } from "@/widgets/Pages/Collection/Popular/Days/PopularByDaysPageContent";

interface PopularByDaysPageProps {
	params: { days: string };
  }
  
const PopularCollectionPage: FC<PopularByDaysPageProps> = ({ params }) => {
	console.log('qwe params', params)
	return (
		<Wrapper1280 tag={TagAll.Main}>
			<PopularByDaysPageContent days={+params.days}/>
		</Wrapper1280>
  );
}

export default PopularCollectionPage;