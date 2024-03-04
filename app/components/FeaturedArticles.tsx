import {Image} from '@shopify/hydrogen';
import type {Article, Collection} from '@shopify/hydrogen/storefront-api-types';
import {Heading, Section, Grid, Link} from '~/components';

export function FeaturedArticles({
  articles,
  title = 'Articles',
  ...props
}: {
  articles: Article[];
  title?: string;
  [key: string]: any;
}) {
  const haveArticles = articles && articles.length > 0;
  if (!haveArticles) return null;

  const items = articles.filter((item) => item.image).length;

  return (
    <Section {...props} heading={title}>
      <Grid items={items}>
        {articles.map((article) => {
          if (!article?.image) {
            return null;
          }
          return (
            <Link key={article.id} to={`/articles/${article.handle}`}>
              <div className="grid gap-4">
                <div className="card-image bg-primary/5 aspect-[3/2]">
                  {article?.image && (
                    <Image
                      alt={`Image of ${article.title}`}
                      data={article.image}
                      sizes="(max-width: 32em) 100vw, 33vw"
                      aspectRatio="3/2"
                    />
                  )}
                </div>
                <Heading size="copy" as="h3">{article.title}</Heading>
              </div>
            </Link>
          );
        })}
      </Grid>
    </Section>
  );
}
