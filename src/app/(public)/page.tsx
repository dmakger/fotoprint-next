import { PopularProductShelf } from "@/entities/Product/ui/Base/Shelf/Popular/PopularProductShelf";
import Wrapper1280 from "@/shared/ui/Wrapper/1280/Wrapper1280";

export default function Home() {
	return (
		<main>
			<Wrapper1280>
				<PopularProductShelf />
			</Wrapper1280>
		</main>
  );
}
