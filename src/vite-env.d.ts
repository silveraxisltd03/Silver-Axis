/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CALENDLY_URL?: string;
  readonly VITE_LINKEDIN_URL?: string;
  readonly VITE_TWITTER_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
