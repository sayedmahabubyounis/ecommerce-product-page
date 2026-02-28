router.get("/", async (req, res) => {
    const page = Number(req.query.page) || 1;
    const limit = 6;
    const keyword = req.query.search
        ? { name: { $regex: req.query.search, $options: "i" } }
        : {};

    const count = await Product.countDocuments({ ...keyword });

    const products = await Product.find({ ...keyword })
        .limit(limit)
        .skip(limit * (page - 1));

    res.json({
        products,
        page,
        pages: Math.ceil(count / limit)
    });
});