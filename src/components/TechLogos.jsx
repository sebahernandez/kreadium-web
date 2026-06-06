import { SiShopify, SiWordpress, SiAstro, SiWoocommerce, SiGoogleanalytics, SiCpanel } from 'react-icons/si';
import LogoLoop from './logo-loop/LogoLoop';

const techLogos = [
  { node: <SiShopify />, title: "Shopify", href: "https://www.shopify.com" },
  { node: <SiWordpress />, title: "WordPress", href: "https://wordpress.org" },
  { node: <SiAstro />, title: "Astro", href: "https://astro.build" },
  { node: <SiWoocommerce style={{ fontSize: '90px' }} />, title: "WooCommerce", href: "https://woocommerce.com" },
  { node: <SiGoogleanalytics />, title: "Google Analytics", href: "https://analytics.google.com" },
  { node: <SiCpanel style={{ fontSize: '80px' }} />, title: "cPanel", href: "https://cpanel.net" },
];

export default function TechLogosComponent() {
  return (
     <div style={{ width: '100%', height: '120px', position: 'relative', overflow: 'hidden'}}>
        <div style={{
          position: 'absolute', top: 0, left: 0, bottom: 0, width: '120px',
          background: 'linear-gradient(to right, #000 0%, transparent 100%)',
          zIndex: 10, pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute', top: 0, right: 0, bottom: 0, width: '120px',
          background: 'linear-gradient(to left, #000 0%, transparent 100%)',
          zIndex: 10, pointerEvents: 'none'
        }} />
        <LogoLoop
        logos={techLogos}
        speed={80}
        direction="left"
        logoHeight={50}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        ariaLabel="Technology partners"
        />
    </div>
  );
}
