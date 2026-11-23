type Gtag = (...args: unknown[]) => void;

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID ?? "G-XXXXXXXXXX";

const gtag = (window as unknown as { gtag?: Gtag }).gtag;

let initialized = false;

export const isAnalyticsEnabled = () => Boolean(gtag) && GA_MEASUREMENT_ID !== "G-XXXXXXXXXX";

export const initGA = () => {
  if (initialized || !isAnalyticsEnabled()) return;
  initialized = true;

  (window as unknown as { dataLayer?: unknown[] }).dataLayer =
    (window as unknown as { dataLayer?: unknown[] }).dataLayer || [];

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  gtag!("js", new Date());
  gtag!("config", GA_MEASUREMENT_ID);
};

export const pageview = (path: string) => {
  if (!isAnalyticsEnabled()) return;
  gtag!("config", GA_MEASUREMENT_ID, { page_path: path });
};

export const trackEvent = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category?: string;
  label?: string;
  value?: number;
}) => {
  if (!isAnalyticsEnabled()) return;
  gtag!("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};

export const trackResumeDownload = (source: string) => {
  trackEvent({
    action: "download_resume",
    category: "engagement",
    label: source,
  });
};
