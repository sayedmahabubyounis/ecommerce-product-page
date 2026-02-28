router.get("/myorders", authMiddleware, async (req,res)=>{
    const orders = await Order.find({ user: req.user.id });
    res.json(orders);
});