import type { Graph, Thing, WithContext } from "schema-dts";

/** Loose node shape — avoids expanding schema-dts's huge `Thing` union on spread. */
type JsonLdNode = Record<string, unknown> & { "@context"?: string };

function stripSchemaContext(node: WithContext<Thing>): JsonLdNode {
	const { "@context": _removed, ...withoutContext } = node as JsonLdNode;
	return withoutContext;
}

/** Merges typed schema nodes into one @graph document (strips per-node @context). */
export function composeSchemaGraph(...nodes: Array<WithContext<Thing>>): Graph {
	return {
		"@context": "https://schema.org",
		"@graph": nodes.map(stripSchemaContext) as unknown as Graph["@graph"],
	};
}
