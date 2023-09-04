const baseUrl = process.env.NODE_ENV === "production"
    ? 'http://www.esthetixdentalcenters.com' || "https://esthetix.vercel.app"
    : 'http://localhost:3000';

export default baseUrl;