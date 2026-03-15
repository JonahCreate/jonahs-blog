// In production (static export), API is served from the same origin.
// In dev mode, backend is on 3001; set NEXT_PUBLIC_API_URL to override.
const API_BASE = process.env.NEXT_PUBLIC_API_URL || "";

export function apiUrl(path: string): string {
    return `${API_BASE}${path}`;
}
