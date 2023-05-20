# E-commerce Platform

This is an e-commerce platform built with Django (backend) and Angular (frontend). It provides functionality for three different roles: Admin, Customer, and Seller. The platform allows users to perform various actions based on their roles, such as managing products, adding items to the cart, placing orders, and more. 

## Features

### User Authentication and Authorization

- The platform uses `restframework_simplejwt` for user authentication and authorization.
- Users can register as sellers or customers.
- During registration:
  - Customers are required to fill in necessary fields like name, address, etc.  
  https://github.com/Manapaly/1market/assets/94050043/3c66840a-0773-4dda-813f-203331b988f7
  - Sellers are required to create a shop by providing the shop name and address.

### User Permissions and Restrictions

- User actions are restricted based on their authentication status and role.
- If a user is not authenticated, they will have limited access and won't be able to perform certain actions, such as:
  - Adding items to the cart.
  - Rating products.
- Only authenticated users can add items to the cart, place orders, and provide ratings and reviews.

### Admin

- As an admin, you have full control over the platform.
- You can perform the following actions:
  - Manage products: Add, edit, and delete products.
  - Manage sellers: Add, edit, and delete seller accounts.
  - Manage customers: View customer information and activity.
  - Manage orders: View and process customer orders.
  - Manage ratings: Monitor and moderate product ratings and reviews.

### Seller

- As a seller, you can perform specific actions related to your products and orders.
- You have the following capabilities:
  - Add existing products to your own inventory.
  - Set the quantity and price for your products.
  - Manage your own product listings: Add, edit, and delete products.
  - View and process orders placed by customers for your products.

### Customer

- As a customer, you have access to various features to enhance your shopping experience.
- You can:
  - Search for products by name.
  - Rate and review products.
  - Add items to your cart by specifying the quantity.
  - Place orders for items in your cart.
  - Download your order details and invoices.

## Installation and Setup

To get the project up and running on your local machine, follow these steps:

1. Clone the repository from GitHub.
2. Set up the Django (backend) part:
   - Navigate to the backend directory.
   - Install the required Python dependencies using `pip install -r requirements.txt`.
   - Configure the database settings in the `settings.py` file.
   - Run database migrations using `python manage.py migrate`.
   - Start the Django development server with `python manage.py runserver`.
3. Set up the Angular (frontend) part:
   - Navigate to the frontend directory.
   - Install the required Node.js dependencies using `npm install`.
   - Configure the API endpoint in the `environment.ts` file.
   - Start the Angular development server with `ng serve`.
4. Access the platform in your web browser at `http://localhost:4200`.

## Contributing

If you wish to contribute to this project, please follow these guidelines:

1. Fork the repository and create a new branch for your feature or bug fix.
2. Make your changes and ensure they are properly tested.
3. Commit your changes with descriptive commit messages.
4. Push your branch to your forked repository.
5. Open a pull request, explaining the purpose and changes made.

## Acknowledgements

- [Django](https://www.djangoproject.com/)
- [Angular](https://angular.io/)
