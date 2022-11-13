"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
process.env.MONGO_URI;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var path_1 = __importDefault(require("path"));
var product_router_1 = __importDefault(require("../routers/product.router"));
var database_config_1 = require("./configs/database.config");
(0, database_config_1.dbConnect)();
var app = (0, express_1["default"])();
//localhost:4200
//localhost:5000
app.use((0, cors_1["default"])({
    credentials: true,
    origin: ['http://localhost:4200']
}));
app.use('/api/products', product_router_1["default"]);
app.use(express_1["default"].static('public'));
app.get('*', function (req, res) {
    res.sendFile(path_1["default"].join(__dirname, 'public', 'index.html'));
});
var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log('website served on http://localhost:' + port);
});
