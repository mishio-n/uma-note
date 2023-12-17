import { formatDate } from "@/lib/date-format";
import { Horse, microcmsClient } from "@/lib/microcms";
import { css } from "@/styled-system/css";
import { flex } from "@/styled-system/patterns";
import { Modal } from "@/ui/modal";
import { Tag } from "@/ui/tag";
import { RaceLabel } from "./_components/race-label";

type Props = {
  params: {
    horseId: string;
  };
};

export const runtime = "edge";

export default async function HorsePage({ params }: Props) {
  const horse = await microcmsClient.getListDetail<Horse>({
    endpoint: "horses",
    contentId: params.horseId,
  });

  return (
    <Modal>
      <div
        className={css({
          position: "relative",
          rounded: "lg",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          padding: 4,
          backgroundColor: "paper",
        })}
      >
        <div
          className={flex({
            alignItems: "center",
            gap: 2,
          })}
        >
          <span
            className={css({
              fontSize: "xl",
              color: "transparent",
              textShadow: "0 0 0 #704b38",
            })}
          >
            &#128014;
          </span>
          <span
            className={css({
              fontWeight: 700,
            })}
          >
            {horse.name}
          </span>
        </div>
        <div className={css({ p: 2 })}>
          <div
            className={css({
              lineHeight: "relaxed",
              backgroundColor: "paper",
              backgroundImage:
                "linear-gradient(90deg, transparent 0%, transparent 50%, rgb(255, 252, 244) 50%, rgb(255, 252, 244) 100%),linear-gradient(180deg, #ccc 1px, transparent 1px)",
              backgroundSize: "8px 100%, 100% 1.625em",
              paddingBottom: "1px",
            })}
            dangerouslySetInnerHTML={{ __html: horse.memo }}
          />
        </div>
        {horse.nextInfo?.race && (
          <RaceLabel
            race={horse.nextInfo.race}
            date={horse.nextInfo.date && formatDate(horse.nextInfo.date)}
            styles={{
              position: "relative",
            }}
          />
        )}
        <div className={flex({ padding: 2, gap: 4, flexWrap: "wrap" })}>
          {horse.tags?.map((tag) => (
            <Tag key={tag.tag} text={tag.tag} />
          ))}
        </div>
      </div>
    </Modal>
  );
}
