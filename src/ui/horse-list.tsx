import { Horse } from "@/lib/microcms";
import Link from "next/link";

type HorseListProps = {
	horses: Horse[];
};

export const HorseList: React.FC<HorseListProps> = ({ horses }) => {
	return (
		<div>
			{horses.map((horse) => (
				<div key={horse.id}>
					<Link href={`/horses/${horse.id}`}>
						<span>{horse.name}</span>
					</Link>
				</div>
			))}
		</div>
	);
};
