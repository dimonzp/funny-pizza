const makeRequest = (url, data, method = "POST") => {
  return fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    ...(data ? { body: JSON.stringify(data) } : {}),
    credentials: "include",
  });
};

export const productAPI = {
  async getProductsByType(typeOfProduct) {
    const res = await makeRequest("/product/type", { typeOfProduct });
    return res.json();
  },
  async getProduct(id) {
    const res = await makeRequest(`/product/${id}`);
    return res.json();
  },
};

export const authAPI = {
  async registration(loginData) {
    const res = await makeRequest("/auth/register", { loginData });
    return res.json();
  },

  async login(loginData) {
    
    const res = await makeRequest("/auth/login", {
      loginData,
    });

    return res.json();
  },

  logout(login) {
    return makeRequest("/auth/logout", { email: login });
  },

  async me() {
    const response = await makeRequest("/me", null, "GET");
    return response.json();
  },
};

export const buyingAPI = {
  async addToCart(productId, changeQuantity, params = {}) {
    const response = await makeRequest(
      "/cart/changeOne",
      {
        productId,
        changeQuantity,
        params,
      },
      "PUT"
    );

    return response.json();
  },

  async deleteFromCart(id) {
    const response = await makeRequest("/cart/delete", { id }, "DELETE");

    return response.json();
  },

  async getFulCart() {
    const res = await makeRequest("/cart/get", null, "GET");

    return res.json();
  },

  async checkout(order) {
    const response = await makeRequest("/cart/checkout", { order });

    return response.json();
  },
};
