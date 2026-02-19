import Order from "../models/Order.js";

// Create new Order
export async function createOrder(req, res) {
    try {
        const { items, total, shippingAddress, paymentMethod, serviceType } = req.body;

        // Ensure user is attached by auth middleware
        if (!req.user) return res.status(401).json({ message: "Unauthorized" });

        const newOrder = await Order.create({
            user: req.user.id,
            items,
            total,
            shippingAddress,
            paymentMethod,
            serviceType: serviceType || "Material & Manpower",
            orderStatus: "Ordered"
        });

        res.status(201).json(newOrder);
    } catch (error) {
        console.error("Create Order Error:", error);
        res.status(500).json({ message: "Failed to create order" });
    }
}

// Get User Orders
export async function getUserOrders(req, res) {
    try {
        if (!req.user) return res.status(401).json({ message: "Unauthorized" });

        const orders = await Order.find({ user: req.user.id }).sort({ createdAt: -1 });
        res.json(orders);
    } catch (error) {
        console.error("Get Orders Error:", error);
        res.status(500).json({ message: "Failed to fetch orders" });
    }
}
