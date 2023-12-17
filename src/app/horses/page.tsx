import { Horse, microcmsClient } from "@/lib/microcms";
import { HorseList } from "@/ui/horse-list";

export default async function HorsesPage() {
  const horses = await microcmsClient.getList<Horse>({ endpoint: "horses" });

  return (
    <>
      <HorseList horses={horses.contents} />
    </>
  );
}
