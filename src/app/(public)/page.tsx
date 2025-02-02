import { TagAll } from "@/shared/data/tag.data";
import Wrapper1280 from "@/shared/ui/Wrapper/1280/Wrapper1280";
import { PopularProductShelf } from "@/widgets/Shelf/Product/Popular/ui/PopularProductShelf";


export default function Home() {
	return (
		<Wrapper1280>
			<PopularProductShelf days={7} />
			<PopularProductShelf days={30} />
		</Wrapper1280>
  );
}
