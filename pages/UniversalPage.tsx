import React, { Suspense, lazy, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { PageConfig, PageMeta, PageBlock, LegalContent, SettingsContent } from '../types';

// Import all existing components that can be rendered dynamically
import { Hero } from '../components/Hero';
import { StatsStrip } from '../components/StatsStrip';
import { Context } from '../components/Context';
import { Technology } from '../components/Technology';
import { Showcase } from '../components/Showcase';
import { Goals } from '../components/Goals';
import { BusinessValues } from '../components/BusinessValues';
import { Cases } from '../components/Cases';
import { SocialProof } from '../components/SocialProof'; 
import { Comparison } from '../components/Comparison';
import { Process } from '../components/Process';
import { Team } from '../components/Team'; 
import { Founder } from '../components/Founder';
import { Tariffs } from '../components/Tariffs';
import { Guarantees } from '../components/Guarantees';
import { FAQ } from '../components/FAQ';
import { CTA } from '../components/CTA';
import { ContactMap } from '../components/ContactMap';

// Map block types to their corresponding React components
const blockComponents: { [key: string]: React.FC<any> } = {
  Hero,
  StatsStrip,
  Context,
  Technology,
  Showcase,
  Goals,
  BusinessValues,
  Cases,
  SocialProof,
  Comparison,
  Process,
  Team,
  Founder,
  Tariffs,
  Guarantees,
  FAQ,
  CTA,
  ContactMap,
};

export const UniversalPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [pageConfig, setPageConfig] = useState<PageConfig | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPageConfig = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/content/${slug}.json`);
        if (!response.ok) {
          throw new Error(`Failed to load page config for slug: ${slug}`);
        }
        const data: PageConfig = await response.json();

        const legalBlock = data.blocks.find(block => block.type === 'Legal');
        const settingsBlock = data.blocks.find(block => block.type === 'Settings');

        if (legalBlock) {
          data.legal = legalBlock.data as LegalContent;
        }
        if (settingsBlock) {
          data.settings = settingsBlock.data as SettingsContent;
        }
        
        setPageConfig(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPageConfig();
    }
  }, [slug]);

  if (loading) {
    return <div className="h-96 flex items-center justify-center text-textSec">Загрузка страницы...</div>;
  }

  if (error || !pageConfig) {
    return <div className="h-96 flex items-center justify-center text-red-500">Ошибка: {error || "Страница не найдена."}</div>;
  }

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "AdvertisingAgency",
    "name": `ББК - Банда Блогеров ${pageConfig.blocks.find(block => block.type === 'Hero')?.data.city || 'Город'}`
,
    "image": "/images/hero_bg.webp",
    "description": pageConfig.meta.description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": pageConfig.meta.description.includes('Кемерово') ? 'Кемерово' : pageConfig.meta.description.includes('Нижний Новгород') ? 'Нижний Новгород' : 'Город',
      "addressCountry": "RU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": pageConfig.meta.geo_latitude,
      "longitude": pageConfig.meta.geo_longitude
    },
    "url": pageConfig.meta.url,
    "priceRange": "7900 - 39000 RUB",
    "founder": {
        "@type": "Person",
        "name": pageConfig.blocks.find(block => block.type === 'Founder')?.data.profile.name || 'Ольга Соболевская'
    }
  };


  return (
    < даты>
      <Helmet>
        <title>{pageConfig.meta.title}</title>
        <meta name="description" content={pageConfig.meta.description} />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>
      
      {pageConfig.blocks.map((block, index) => {
        const BlockComponent = blockComponents[block.type];
        if (!BlockComponent) {
          console.warn(`Unknown block type: ${block.type}`);
          return null;
        }

        if (block.type === 'CTA') {
            return <BlockComponent key={index} content={{ 
                cta: block.data, 
                settings: pageConfig.settings, 
                legal: pageConfig.legal 
            }} />;
        }
        return <BlockComponent key={index} content={block.data} />;
      })}
    </>
  );
};