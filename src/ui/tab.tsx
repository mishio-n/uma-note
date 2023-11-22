"use client";

import { css } from "@/styled-system/css";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useEffect } from "react";

type Props = {
	path: string;
	name: string;
};

export const Tab: React.FC<Props> = ({ path, name }) => {
	const href = `/${path}`;
	const segment = useSelectedLayoutSegment();
	const isActive = segment === path;

	return (
		<Link
			href={href}
			className={css({
				color: isActive ? "black" : "gray.300",
				borderBottom: "1px solid",
				paddingY: 2.5,
				outlineOffset: -2,
			})}
		>
			{name}
		</Link>
	);
};
