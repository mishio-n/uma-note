import { microcmsClient } from "@/lib/microcms";
import { css } from "@/styled-system/css";
import { Modal } from "@/ui/modal";

type Props = {
  params: {
    horseId: string;
  };
};

export default async function HorsePage({ params }: Props) {
  const horse = await microcmsClient.getListDetail({
    endpoint: "horses",
    contentId: params.horseId,
  });

  return (
    <Modal>
      <div
        className={css({
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          padding: 4,
        })}
      >
        <span
          className={css({
            fontWeight: 700,
            textAlign: "center",
          })}
        >
          {horse.name}
        </span>
        <div dangerouslySetInnerHTML={{ __html: horse.memo }} />
        <span>次走情報：</span>
        <div>{horse.nextInfo ?? "未定"}</div>
      </div>
    </Modal>
  );
}
