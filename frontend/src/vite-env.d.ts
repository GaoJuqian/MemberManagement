/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_BUILDENV: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}