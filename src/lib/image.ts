import { createImageUrlBuilder } from "@sanity/image-url";
import { dataset, projectId } from "./sanity";

const builder = createImageUrlBuilder({ projectId, dataset });

export function urlFor(source: unknown) {
  return builder.image(source as Parameters<typeof builder.image>[0]);
}
