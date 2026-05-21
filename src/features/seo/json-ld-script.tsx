import Script from "next/script";

import type { Graph, Thing, WithContext } from "schema-dts";

type JsonLdScriptProps = {
	id: string;
	data: WithContext<Thing> | Graph;
};

export function JsonLdScript({ id, data }: JsonLdScriptProps) {
	return (
		<Script id={id} type="application/ld+json">
			{JSON.stringify(data)}
		</Script>
	);
}
