// Simple handler that imports the built Express app
export default async function handler(req, res) {
  // Dynamically import your built server
  const { default: app } = await import('../dist/index.js');
  
  // Handle the request with Express
  return app(req, res);
}