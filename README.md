# Food Delivery Backend API Documentation.

## API Endpoints

### Authentication

#### 1. User Signup

**Endpoint:** POST `/api/auth/signup`

**Request Body:**

```json

{
   "name": "Usman Zaib",
   "email": "usman@gmail.com",
   "password": "123456",
   "role": "admin"
}

```

**Response:**

```json

{
    "message": "User registered successfully"
}
```

#### 2. User Login

**Endpoint:** POST `/api/auth/login`

**Request Body:**

```json

{
    "email": "usman@gmail.com",
    "password": "123456"
}
```

**Response:**

```json

{
    "token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YWY3ODRmYjU1ZTIzNWZkM2ZiNjYxNyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTczOTU1MjkwNSwiZXhwIjoxNzM5NTU2NTA1fQ.G7Vb42_07FwiVHYAVbQA30iy7ARrFwn4IXQ_zmrW2GE`
}
```

### Restaurants

#### 3. Add a Restaurant (Admin Only)

**Endpoint:** POST `/api/restaurants/add`

**Headers:**

**Authorization:** Bearer Token `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YWY3ODRmYjU1ZTIzNWZkM2ZiNjYxNyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTczOTU1MjkwNSwiZXhwIjoxNzM5NTU2NTA1fQ.G7Vb42_07FwiVHYAVbQA30iy7ARrFwn4IXQ_zmrW2GE`

**Request Body:**

```json

{
   "name": "Spice Village",
   "location": "Karachi",
   "cuisine": "Pakistani",
   "rating": 4.2
}

```

**Response:**

```json

{
    "message": "Restaurant added successfully"
}
```

#### 4. Get All Restaurants

**Endpoint:** GET `/api/restaurants`

**Response:**

```json

[
    {
        "_id": "67af78b6b55e235fd3fb661a",
        "name": "Spice Village",
        "location": "Karachi",
        "cuisine": "Pakistani",
        "rating": 4.2,
        "createdAt": "2025-02-14T17:09:10.524Z",
        "updatedAt": "2025-02-14T17:09:10.524Z",
        "__v": 0
    }
]
```

### Orders

#### 5. Place an Order

**Endpoint:** POST `/api/orders/place`

**Headers:**

**Authorization:** Bearer Token `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YWY3ODRmYjU1ZTIzNWZkM2ZiNjYxNyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTczOTU1MjkwNSwiZXhwIjoxNzM5NTU2NTA1fQ.G7Vb42_07FwiVHYAVbQA30iy7ARrFwn4IXQ_zmrW2GE`

**Request Body:**

```json

{
   "restaurant": "67a8d85e01df7443425095a4",  
   "items": [
      { "name": "Biryani", "quantity": 2 },
      { "name": "Kebab", "quantity": 1 }
   ],
   "totalAmount": 1000
}

```

**Response:**

```json

{
    "message": "Order placed successfully"
}
```

#### 6. Get All Orders (User's Orders)

**Endpoint:** GET `/api/orders`

**Headers:**

**Authorization:** Bearer <jwt_token>

**Response:**

```json

[
    {
        "_id": "789456",
        "restaurantId": "654321",
       {
        "_id": "67af7939b55e235fd3fb661d",
        "user": "67af784fb55e235fd3fb6617",
        "restaurant": null,
        "items": [
            {
                "name": "Biryani",
                "quantity": 2,
                "_id": "67af7939b55e235fd3fb661e"
            },
            {
                "name": "Kebab",
                "quantity": 1,
                "_id": "67af7939b55e235fd3fb661f"
            }
        ],
        "totalAmount": 1000,
        "status": "Pending",
        "createdAt": "2025-02-14T17:11:21.857Z",
        "updatedAt": "2025-02-14T17:11:21.857Z",
        "__v": 0
        }
    }   
]
```

