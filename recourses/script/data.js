export const projects = [
  {
    id: 1,
    title: "Full Stack Ecommerce APP",
    description:
      "This project is a full-stack eCommerce website built using React and Redux for the frontend, with Node.js, Express, and PostgreSQL on the backend, following a three-tier architecture. It allows users to browse products by category, add items to a shopping cart, and complete purchases using Stripe for secure payment processing. Users can also manage their account details, view order history, and rate previously purchased products. A planned follow-up to the project includes developing an admin dashboard that will enable administrators to manage product inventory, monitor product performance, and process customer orders efficiently.",
    image: "./recourses/images/projects/ecommerce-app/main-image.png",
    features: [
      {
        featureName: "Authentication",
        description:
          "This project includes a robust authentication system that supports both traditional email and password login as well as third-party authentication through Gmail. The authentication flow is implemented using Passport.js, with session management to maintain user login state across the application. Bcrypt is used to securely hash and store user passwords, enhancing overall security. This setup ensures flexibility and convenience for users by allowing them to choose between creating a local account or signing in with their Google credentials. The authentication system is designed to integrate seamlessly into the full-stack application, supporting protected routes and personalized user features.",
        image: "./recourses/images/projects/ecommerce-app/authentication.png",
      },
      {
        featureName: "Account Settings",
        description:
          "The system allows users to update their personal information, including name and address, ensuring that delivery details remain accurate and up to date. This capability helps maintain consistent data for order fulfillment and enhances user satisfaction by providing a seamless and personalized experience.",
        image: "./recourses/images/projects/ecommerce-app/account-settings.png",
      },
      {
        featureName: "Category filter",
        description:
          "The system features a dynamic filtering functionality that enables users to search for and browse products by specific categories. This allows shoppers to quickly narrow down their options based on their interests or needs, improving navigation efficiency within the product catalog. By categorizing products and providing easy-to-use filters, the platform enhances the overall user experience, helping customers find the right products faster and making the shopping process more intuitive and enjoyable.",
        image: "./recourses/images/projects/ecommerce-app/categories.png",
      },
      {
        featureName: "View Product Details",
        description:
          "This project features a comprehensive product detail page that allows users to explore multiple images of a product for a better understanding of its features and appearance. Users can also view a summary of customer reviews to help inform their purchase decisions. Additionally, the page enables customers to select the quantity they wish to buy and easily add the product to their shopping cart, streamlining the purchasing process and enhancing overall user engagement and satisfaction.",
        image: "./recourses/images/projects/ecommerce-app/product-detail.png",
      },
      {
        featureName: "User Cart",
        description:
          "The user cart in this project is designed to provide flexibility and efficiency. Users can easily update the quantity of items or remove products entirely from their cart. Importantly, these actions are optimized to reduce the number of fetch requests sent to the backend and limit the amount of data that needs to be rendered on the frontend. By minimizing server calls and rendering only necessary updates, the system conserves resources, improves performance, and ensures a smoother, more responsive shopping experience even when managing multiple cart items.",
        image: "./recourses/images/projects/ecommerce-app/cart.png",
      },
      {
        featureName: "Checkout and Payment",
        description:
          "The website enables users to securely check out their cart and complete purchases using the Stripe payment API. This integration provides a smooth and trusted payment process, ensuring transactions are safe and convenient, which boosts user confidence and improves the overall shopping experience.",
        image: "./recourses/images/projects/ecommerce-app/payment.png",
      },
      {
        featureName: "Order Details",
        description:
          "The project includes an order history feature that lets users review all their past purchases, including the prices paid at the time of each order. Additionally, users can leave reviews for products they’ve bought, fostering engagement and helping future customers make informed decisions. This feature adds transparency and encourages ongoing interaction with the platform, enhancing the overall user experience.",
        image: "./recourses/images/projects/ecommerce-app/order-details.png",
      },
      {
        featureName: "Product Review",
        description:
          "The website features a product review system where users can read existing reviews to help make informed purchase decisions and also submit their own feedback. This interactive feature promotes transparency and builds trust within the community, enhancing user engagement and confidence in the products offered.d",
        image: "./recourses/images/projects/ecommerce-app/product-review.png",
      },
    ],
  },
];
