# firebase_crud_v1

## Firestore TypeScript API

This repository contains a REST API project built with Firebase Cloud Functions, Firestore, and TypeScript. This API allows for seamless interaction with Firestore database collections and documents using HTTP requests.

## Prerequisites

- node: v18.20.3
- npm : v10.5.2


Download node [here](https://nodejs.org/en/download/prebuilt-installer)


<hr>

## Setup

To set up this project locally, follow these steps:


1. Clone the repository to your local machine: https://github.com/Ptalati015/firebase_crud_v1.git


2. Install dependencies:

  cd your-repository
  npm install

3. Set up Firebase:

Follow the steps outlined in [this tutorial](https://blog.logrocket.com/building-rest-api-firebase-cloud-functions-typescript-firestore/) to set up Firebase, Firestore, and Cloud Functions for your project. Make sure to replace the Firebase config details in `src/config/permissions.json` with your own Firebase project configuration.


** PLEASE FOLLOW THE STEPS OUTLINED ABOVE BEFORE CONTINUING **




4. Start the local development server:

cd functions
npm run serve


5. Test local machine:
use [insomnia]((https://dev.to/kmcknight91/how-to-use-insomnia-to-test-api-endpoints-1lad)) to test 


## Usage

This API provides endpoints to perform CRUD operations on Firestore collections. Below are the available endpoints:

- **GET /api/v1/read/:id**: Retrieve a specific document from a Firestore collection by ID.
- **POST /api/v1/create**: Create a new document in a Firestore collection.
- **PUT /api/v1/update/:id**: Update a specific document in a Firestore collection by ID.
- **DELETE /api/v1/delete/:id**: Delete a specific document from a Firestore collection by ID.


### Route Descriptions:

- **GET /api/v1/read/:id**: Retrieves a product with the specified ID.
- **POST /api/v1/create**: Creates a new product.
- **PUT /api/v1/update/:id**: Updates the product with the specified ID.
- **DELETE /api/v1/delete/:id**: Deletes the product with the specified ID.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.






