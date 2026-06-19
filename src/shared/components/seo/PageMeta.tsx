import { Helmet } from 'react-helmet-async';

interface PageMetaProps {
  title: string;
  description: string;
}

export function PageMeta({ title, description }: PageMetaProps) {
  const fullTitle = title === 'Home' ? 'Silver Axis — AI automation & custom software' : `${title} — Silver Axis`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}
