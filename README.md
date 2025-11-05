# Node.js Example for Convox

A Node.js Express application ready to deploy on Convox.

This example demonstrates how to deploy a Node.js application with Express on Convox. The app includes health checks, environment variable usage, and RESTful API endpoints - showing best practices for Node.js services in production.

Deploy to Convox Cloud for a fully-managed platform experience, or to your own Convox Rack for complete control over your infrastructure. Either way, you'll get automatic SSL, load balancing, and zero-downtime deployments out of the box.

## Deploy to Convox Cloud

1. **Create a Cloud Machine** at [console.convox.com](https://console.convox.com)

2. **Create the app**:
```bash
convox cloud apps create nodejs -i your-machine-name
```

3. **Deploy the app**:
```bash
convox cloud deploy -a nodejs -i your-machine-name
```

4. **View your app**:
```bash
convox cloud services -a nodejs -i your-machine-name
```

Visit your URL to see the JSON response!

## Deploy to Convox Rack

1. **Create the app**:
```bash
convox apps create nodejs
```

2. **Deploy the app**:
```bash
convox deploy -a nodejs
```

3. **View your app**:
```bash
convox services -a nodejs
```

Visit your URL to see the JSON response!

## Application Endpoints

- `GET /` - Main endpoint with environment info
- `GET /health` - Health check endpoint
- `GET /api/info` - Application information
- `POST /api/echo` - Echo back JSON data

## Test the API

```bash
# Get main endpoint
curl https://your-app-url/

# Check health
curl https://your-app-url/health

# Get app info
curl https://your-app-url/api/info

# Test POST endpoint
curl -X POST https://your-app-url/api/echo \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello Convox!"}'
```

## Local Development

```bash
npm install
PORT=3000 npm start
```

Visit http://localhost:3000 to see your app running locally.

## Scaling

### Convox Cloud
```bash
convox cloud scale web --count 2 --cpu 500 --memory 1024 -a nodejs -i your-machine-name
```

### Convox Rack
```bash
convox scale web --count 2 --cpu 500 --memory 1024 -a nodejs
```

## Environment Variables

Set custom environment variables:

### Convox Cloud
```bash
convox cloud env set API_KEY=secret NODE_ENV=production -a nodejs -i your-machine-name
```

### Convox Rack
```bash
convox env set API_KEY=secret NODE_ENV=production -a nodejs
```

## Project Structure

- Node.js 20 with Express framework
- Health check endpoints for monitoring
- Environment-based configuration
- Non-root container for security
- Optimized Docker layer caching

## Common Commands

### View logs

Cloud:
```bash
convox cloud logs -a nodejs -i your-machine-name
```

Rack:
```bash
convox logs -a nodejs
```

### Run one-off commands

Cloud:
```bash
convox cloud run web "node --version" -a nodejs -i your-machine-name
```

Rack:
```bash
convox run web "node --version" -a nodejs
```

### Access shell

Cloud:
```bash
convox cloud exec web sh -a nodejs -i your-machine-name
```

Rack:
```bash
convox run exec web sh -a nodejs
```
