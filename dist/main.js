"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const serverless_http_1 = __importDefault(require("serverless-http"));
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    if (process.env.NODE_ENV !== 'production') {
        await app.listen(3000);
        console.log(`🚀 Server running on http://localhost:3000`);
        return;
    }
    await app.init();
    const expressApp = app.getHttpAdapter().getInstance();
    return (0, serverless_http_1.default)(expressApp);
}
if (process.env.NODE_ENV !== 'production') {
    bootstrap();
}
const handler = async (event, context) => {
    const serverlessHandler = await bootstrap();
    if (!serverlessHandler) {
        throw new Error('Serverless handler is undefined. Ensure bootstrap() returns a valid handler.');
    }
    return serverlessHandler(event, context);
};
exports.handler = handler;
//# sourceMappingURL=main.js.map