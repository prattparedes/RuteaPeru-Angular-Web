"use strict";
exports.__esModule = true;
exports.ProductModel = exports.ProductSchema = void 0;
var mongoose_1 = require("mongoose");
exports.ProductSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    color: { type: String, required: true },
    price: { type: Number, required: true },
    tags: { type: [String], required: true },
    favorite: { type: Boolean, "default": false },
    stars: { type: Number, required: true },
    imageUrl: { type: String, required: true }
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
});
exports.ProductModel = (0, mongoose_1.model)('product', exports.ProductSchema);
