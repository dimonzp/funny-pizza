const OrderList = require("../models/OrderList");

const orderListService = {
    async createOrder(order) {
        OrderList.create(order);
    }
}

module.exports = orderListService;