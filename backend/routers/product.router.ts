import { Router } from 'express';
import { sample_products, sample_tags } from '../data';
import asyncHandler from 'express-async-handler';
import { ProductModel } from '../models/product.model';
const router = Router();

router.get(
  '/seed',
  asyncHandler(async (req, res) => {
    const productsCount = await ProductModel.countDocuments();
    if (productsCount > 0) {
      res.send('Seed is already done');
      return;
    }
    await ProductModel.create(sample_products);
    res.send('Seed is done!');
  })
);

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await ProductModel.find();
    res.send(products);
  })
);

router.get(
  '/search/:searchTerm',
  asyncHandler(async (req, res) => {
    const searchRegEx = RegExp(req.params.searchTerm, 'i');
    const products = await ProductModel.find({ name: { $regex: searchRegEx } });
    res.send(products);
  })
);

router.get(
  '/tags',
  asyncHandler(async (req, res) => {
    const tags = await ProductModel.aggregate([
      {
        $unwind: '$tags',
      },
      {
        $group: {
          _id: '$tags',
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          name: '$_id',
          count: '$count',
        },
      },
    ]).sort({ count: -1 });

    const all = {
      name: 'All',
      count: await ProductModel.countDocuments(),
    };

    tags.unshift(all);
    res.send(tags);
  })
);

router.get(
  '/tag/:tagName',
  asyncHandler(async (req, res) => {
    const products = await ProductModel.find({ tags: req.params.tagName });
    res.send(products);
  })
);

router.get('/:productId', asyncHandler(
  async (req, res) => {
    const product = await ProductModel.findById(req.params.productId)
    res.send(product);
  }
));

export default router;
