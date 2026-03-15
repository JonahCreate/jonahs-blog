import { io } from "socket.io-client";

// In production (static export), connect to same origin as the page.
// In dev mode, backend is on 3001; set NEXT_PUBLIC_SOCKET_URL to override.
const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL ||
    (typeof window !== "undefined" ? window.location.origin : "http://localhost:3000");

export const socket = io(SOCKET_URL, {
    autoConnect: true,
});
