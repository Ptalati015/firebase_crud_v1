import {Request, Response} from "express";
import {db} from "./config/firebase";

// Types
interface CreateProductRequest extends Request {
  body: {
    id: string;
    name: string;
    description: string;
    price: number;
  };
}

interface CreateProductRequestV2 extends Request {
  body: {
    name: string;
    description: string;
    price: number;
  };
}

// Controller for products

// Create
const createProduct = async (req: CreateProductRequest, res: Response) => {
  const {id, name, description, price} = req.body;
  try {
    await db
      .collection("products")
      .doc("/" + id + "/")
      .create({
        name: name,
        description: description,
        price: price,
      });
    return res.status(200).send("create");
  } catch (error) {
    console.log(error);
    return res.status(500).json("We found an error in creating collection!");
  }
};

// Read
const readProduct = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const product = await db
      .collection("products")
      .doc("/" + id + "/")
      .get();
    return res.status(200).json(product.data());
  } catch (error) {
    console.log(error);
    return res.status(500).json("We found an error in reading collection!");
  }
};

// Update
const updateProduct = async (req: CreateProductRequestV2, res: Response) => {
  const {name, description, price} = req.body;
  const id = req.params.id;

  try {
    await db
      .collection("products")
      .doc("/" + id + "/")
      .update({
        name: name,
        description: description,
        price: price,
      });
    return res.status(200).json("set successfully");
  } catch (error) {
    console.log(error);
    return res.status(500).json("We found an error in updating collection!");
  }
};

// Delete
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const document = db.collection("products").doc(req.params.id);
    await document.delete();
    return res.status(200).send("successfully deleted product");
  } catch (error) {
    console.log(error);
    return res.status(500).json("We found an error in deleting collection!");
  }
};

export {createProduct, readProduct, updateProduct, deleteProduct};
