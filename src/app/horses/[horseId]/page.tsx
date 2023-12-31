import { formatDate } from "@/lib/date-format";
import { Horse, microcmsClient } from "@/lib/microcms";

type Props = {
  params: {
    horseId: string;
  };
};

export const runtime = "edge";

export async function generateStaticParams() {
  const horses = await microcmsClient.getList<Horse>({ endpoint: "horses" });
  const params = horses.contents.map((horse) => ({ horseId: horse.id }));
  return params;
}

export default async function HorsePage({ params }: Props) {
  const horse = await microcmsClient.getListDetail<Horse>({
    endpoint: "horses",
    contentId: params.horseId,
  });

  return (
    <div>
      <span>{horse.name}</span>
      <span>最終更新日 {formatDate(horse.updatedAt, "YYYY/MM/DD")}</span>
      <span>{horse.nextInfo?.race}</span>
      <span>{horse.tags?.toString()}</span>
      <div dangerouslySetInnerHTML={{ __html: horse.memo }} />
    </div>
  );
}
