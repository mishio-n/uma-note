import { microcmsClient } from "@/lib/microcms";

type Props = {
	params: {
		horseId: string;
	};
};

export async function generateStaticParams() {
	const horses = await microcmsClient.getList({ endpoint: "horses" });
	const params = horses.contents.map((horse) => ({ horseId: horse.id }));
	return params;
}

export default async function HorsePage({ params }: Props) {
	const horse = await microcmsClient.getListDetail({
		endpoint: "horses",
		contentId: params.horseId,
	});

	return (
		<div>
			<span>{horse.name}</span>
			<span>{horse.memo}</span>
		</div>
	);
}
