import Script from 'next/script';

interface StructuredDataProps {
  data: Record<string, any> | Record<string, any>[];
}

export function StructuredData({ data }: StructuredDataProps) {
  const jsonLd = Array.isArray(data) ? data : [data];
  
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}

interface GoogleAnalyticsProps {
  id: string;
}

export function GoogleAnalytics({ id }: GoogleAnalyticsProps) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}');
        `}
      </Script>
    </>
  );
}

interface GoogleTagManagerProps {
  id: string;
}

export function GoogleTagManager({ id }: GoogleTagManagerProps) {
  return (
    <>
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${id}');
          `,
        }}
      />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${id}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  );
}

interface MetaPixelProps {
  id: string;
}

export function MetaPixel({ id }: MetaPixelProps) {
  return (
    <Script
      id="meta-pixel"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${id}');
          fbq('track', 'PageView');
        `,
      }}
    />
  );
}

export function CookieConsent() {
  return (
    <Script
      id="cookie-consent"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.addEventListener('load', function() {
            if (!localStorage.getItem('cookieConsent')) {
              var banner = document.createElement('div');
              banner.id = 'cookie-banner';
              banner.style.cssText = 'position:fixed;bottom:0;left:0;right:0;background:#1a1a1a;color:white;padding:20px;z-index:9999;text-align:center;';
              banner.innerHTML = '<p>We use cookies to enhance your experience. <a href="/privacy" style="color:#60a5fa;">Learn more</a> <button onclick="acceptCookies()" style="background:#3b82f6;color:white;border:none;padding:8px 16px;margin-left:10px;border-radius:4px;cursor:pointer;">Accept</button></p>';
              document.body.appendChild(banner);
            }
          });
          
          function acceptCookies() {
            localStorage.setItem('cookieConsent', 'true');
            document.getElementById('cookie-banner').remove();
          }
        `,
      }}
    />
  );
}
