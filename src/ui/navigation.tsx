"use client";

import { css } from "@/styled-system/css";
import { flex } from "@/styled-system/patterns";
import { Tab } from "./tab";

export const Navigation: React.FC = () => {
	return (
		<div className={css({ marginBottom: "-1px" })}>
			<div
				className={css({
					borderBottom: "1px solid",
					marginY: -0.5,
					paddingY: 0.5,
				})}
			>
				<nav className={flex({ gap: 4 })}>
					<Tab path="posts" name="記事" />
					<Tab path="horses" name="注目馬リスト" />
				</nav>
			</div>
		</div>
	);
};