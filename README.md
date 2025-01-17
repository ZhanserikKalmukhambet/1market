# 1market

This is an e-commerce platform built with Django (backend) and Angular (frontend). It provides functionality for three different roles: Admin, Customer, and Seller. The platform allows users to perform various actions based on their roles, such as managing products, adding items to the cart, placing orders, and more. 

## Features

### User Authentication and Authorization

- The platform uses `restframework_simplejwt` for user authentication and authorization.
- Users can register as sellers or customers.
- During registration:
  - Customers are required to fill in necessary fields like name, email, phone number, etc.  
 
![Flashback - май 20, 2023 13_06_40](https://github.com/Manapaly/1market/assets/94050043/0a16a3e6-6aa5-4c38-a492-48d877071be3)
  
  - Sellers additionally are required to create a shop by providing the shop name and address.
    
![Flashback - май 20, 2023 13_09_09](https://github.com/Manapaly/1market/assets/94050043/1b16bc68-722f-403b-8efc-1f551610b073)




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
  
  ![Flashback - май 20, 2023 13_17_43](https://github.com/Manapaly/1market/assets/94050043/c76efcc3-eaa2-4dd6-bc36-ada6350634ec)


### Customer

- As a customer, you have access to various features to enhance your shopping experience.
- You can:
  - Search for products by name.
  - Rate and review products.
  - Add items to your cart by specifying the quantity.
  - Place orders for items in your cart.
  - Download your order details and invoices.
  
 ![Flashback - май 20, 2023 14_31_21](https://github.com/Manapaly/1market/assets/94050043/2eacd7f3-e083-43f8-a599-84c918f0f7d2)

 
 ![Flashback - май 20, 2023 14_33_02](https://github.com/Manapaly/1market/assets/94050043/22df9726-286f-4ef0-b437-20c59a6c4964)
 
### Coding Process

in Django : 

![Flashback - май 20, 2023 12_50_01](https://github.com/Manapaly/1market/assets/94050043/37a5c18d-e700-4284-9142-84b767bc2a24)


in Angular : 

![Flashback - май 20, 2023 12_54_46](https://github.com/Manapaly/1market/assets/94050043/8497fb9d-9e0f-4eab-970a-8c747bc484b2)


  
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
