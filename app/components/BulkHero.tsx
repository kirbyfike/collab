import {Image} from '@shopify/hydrogen';
import type {Collection} from '@shopify/hydrogen/storefront-api-types';
import {Heading, Section, Grid, Link, Hero} from '~/components';

export function BulkHero({
  collections,
  ...props
}: {
  collections: Collection[];
  title?: string;
  [key: string]: any;
}) {
  const haveCollections = collections && collections.length > 0;
  if (!haveCollections) return null;

  const items = collections.filter((item) => item.image).length;

  return (
    <div>
        {collections.map((collection) => {
          
          return (
              <Hero key={collection.id} {...collection} />
          );
        })}
    </div>
  );
}
