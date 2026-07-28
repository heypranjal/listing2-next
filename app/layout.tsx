import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../styles/property-page.css';

export const metadata: Metadata = {
  title: 'Caasaa Paandora | Luxury Real Estate',
  description: 'CAASAA PAANDORA — A New Address for Living Well. Curated residential, plot, commercial, and villa developments across Lucknow.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://res.cloudinary.com/maxj0kra/image/upload/w_64,h_64,c_fit/v1785245105/Untitled_design_1_xbejfq.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="https://res.cloudinary.com/maxj0kra/image/upload/w_180,h_180,c_fit/v1785245105/Untitled_design_1_xbejfq.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/css/main.css" />
      </head>
      <body>
        <div className="cp-cursor" aria-hidden="true">
          <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="18" cy="18" r="17" stroke="#C9A15C" strokeWidth="0.8" opacity="0.5"/>
            <polygon points="18,2 19.5,16.5 34,18 19.5,19.5 18,34 16.5,19.5 2,18 16.5,16.5" fill="none" stroke="#C9A15C" strokeWidth="0.8"/>
            <circle cx="18" cy="18" r="2" fill="#C9A15C"/>
          </svg>
        </div>
        <Header />
        {children}
        <Footer />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
