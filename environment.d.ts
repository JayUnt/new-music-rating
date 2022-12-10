declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NEXT_PUBLIC_SUPABASE_URL: string;
    readonly NEXT_PUBLIC_SUPABASE_API_KEY: string;
  }
}
