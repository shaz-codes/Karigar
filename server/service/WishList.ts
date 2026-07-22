import User from "./../models/User";
import Wishlist from "../models/Wishlist";
import Product from "../models/Product";
import { Request,Response } from "express";

export async function(req: Request, res: Response){
    console.log("wishlist");

    try {
        const { email, sku } = req.body;
        const user = await User.findOne(email);
        const product=await Product.findOne(sku);
    }

    catch(err:any){
        return res.status(500).send({ error: err.message });
    }
    
}