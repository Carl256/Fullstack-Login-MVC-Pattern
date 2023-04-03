"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app.ts
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const userController_1 = __importDefault(require("./controllers/userController"));
const database_1 = __importDefault(require("./config/database"));
const config_1 = require("./config/config");
const app = (0, express_1.default)();
// Middleware
app.use(body_parser_1.default.json());
// Connect to MongoDB
(0, database_1.default)().then(() => {
    // Routes
    app.post('/api/register', userController_1.default.register);
    app.post('/api/login', userController_1.default.login);
    // Start server
    const PORT = config_1.config.server.port;
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}).catch(err => {
    console.error(err);
    process.exit(1);
});
//# sourceMappingURL=server.js.map