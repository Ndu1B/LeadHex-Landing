/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_STRIPE_PUBLISHABLE_KEY: string;
  readonly VITE_STRIPE_PRODUCT_STANDARD: string;
  readonly VITE_STRIPE_PRODUCT_PLUS: string;
  readonly VITE_STRIPE_PRODUCT_SCALE: string;
  readonly VITE_STRIPE_PRODUCT_ENTERPRISE: string;
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_TEMPLATE_ID: string;
  readonly VITE_EMAILJS_USER_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
} 