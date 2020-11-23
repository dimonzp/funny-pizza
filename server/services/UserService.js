const User = require("../models/User");
const bcrypt = require("bcrypt");

const userService = {
  getMe(email) {
    return User.findOne({ email });
  },
  async login(email, password) {
    const user = await this.getMe(email);

    if (!user) {
      return "User not found";
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return "Authorization error";
    }
    return null
  },

  async createUser(email, password) {
  
    const hashedPassword = await bcrypt.hash(password, 12);
    return User.create({ email, password: hashedPassword });
  },

  async changeOneInCart(email, productId, changeQuantity, params) {
    try {
      const user = await User.findOne({ email });
      if (!user) throw Error("no user");
      if (changeQuantity) {
        await user.addItemToCart(productId, params);
      } else {
        await user.removeItemFromCart(productId, params);
      }
    } catch (e) {
      throw Error("changeOneInCart eror");
    }
  },

  async pullFromCart(email, id) {
    try {
      await User.findOneAndUpdate({ email }, { $pull: { cart: { _id: id } } });
    } catch (e) {
      throw Error("pullInCart eror");
    }
  },

  async setNewUserData(email, order) {
    try {
      const { name, phone, street, house, flat = null } = order;
      await User.findOneAndUpdate(
        { email },
        { $set: { cart: [], name, phone, street, house, flat } }
      );
    } catch (error) {
      throw Error("setNewUserData eror");
    }
  },
};

module.exports = userService;
