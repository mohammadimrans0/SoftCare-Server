import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import serverless from 'serverless-http';
import { Handler, Context } from 'aws-lambda';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  if (process.env.NODE_ENV !== 'production') {
    // Run locally on port 3000
    await app.listen(3000);
    console.log(`🚀 Server running on http://localhost:3000`);
    return;
  }

  // Serverless mode for Vercel
  await app.init();
  const expressApp = app.getHttpAdapter().getInstance();
  return serverless(expressApp);
}

// Run normally in development mode
if (process.env.NODE_ENV !== 'production') {
  bootstrap();
}

// Export for Vercel serverless
export const handler: Handler = async (event: any, context: Context) => {
  const serverlessHandler = await bootstrap();
  if (!serverlessHandler) {
    throw new Error('Serverless handler is undefined. Ensure bootstrap() returns a valid handler.');
  }
  return serverlessHandler(event, context);
};
