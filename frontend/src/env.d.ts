/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_APIURL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
