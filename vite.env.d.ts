/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_OMDB_API: string;
  // add other env variables here...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
