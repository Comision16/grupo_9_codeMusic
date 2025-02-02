const db = require('../../database/models');
const { Op } = require('sequelize');
const { OFERTA, SINOFERTA } = require('../../constants/products');


module.exports = {

	list: async (req, res) => {
		try {
			const products = await db.Product.findAll({
				include: [
					{
						association: 'images',
						attributes: {
					exclude: ['createdAt', 'updatedAt']
				}
					}, {
						association: 'brand',
						attributes: {
					exclude: ['createdAt', 'updatedAt']
				}
					}, {
						association: 'category',
						attributes: {
					exclude: ['createdAt', 'updatedAt']
				}
					}, {
						association: 'color',
						attributes: {
					exclude: ['createdAt', 'updatedAt']
				}
					}
				]
				,
				attributes: {
					exclude: ['categoryId', 'brandId', 'colorId', 'createdAt', 'updatedAt', 'deletedAt']
				}
			})
			if (products.length) {
				res.status(200).json({
					meta: {
						ok: true,
						count: products.length,
					},
					data: products
				})
			}
		} catch (error) {
			console.log(error);
			return res.status(error.status || 500).json({
				ok: false,
				msg: error.message ? error.message : 'Comuníquese con el administrador del sitio'
			})
		}

	},
	detail: async (req, res) => {
		try {
			const product = await db.Product.findByPk(req.params.id, {
				include: [
					{
						association: 'images',
						attributes: {
					exclude: ['createdAt', 'updatedAt']
				}
					}, {
						association: 'brand',
						attributes: {
					exclude: ['createdAt', 'updatedAt']
				}
					}, {
						association: 'category',
						attributes: {
					exclude: ['createdAt', 'updatedAt']
				}
					}, {
						association: 'color',
						attributes: {
					exclude: ['createdAt', 'updatedAt']
				}
					}
				],
				attributes: {
					exclude: ["createdAt", "updatedAt",'deletedAt',"brandId","colorId","categoryId"],
				},
        
			})
			if (product) {
				res.status(200).json({
					meta: {
						ok: true,
						count: product.length,
					},
					data: product
				})
			}

		} catch (error) {
			console.log(error);
			return res.status(error.status || 500).json({
				ok: false,
				msg: error.message ? error.message : 'Comuníquese con el administrador del sitio'
		})
	}
}

}