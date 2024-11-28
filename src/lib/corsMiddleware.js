import Cors from "cors";

// Initialize CORS middleware
const cors = Cors({
    origin: [
        "http://localhost:3000", // Website frontend (development)
        "http://localhost:3001", // Admin frontend (development)
        "https://apis-web-dkcu.vercel.app/", // Website production domain
        "https://apis-admin-m46egld9m-webdevsociapas-projects.vercel.app/login", // Admin production domain
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // Include credentials if needed (e.g., cookies or authorization headers)
});

export function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}

export default cors;
