import { Request, Response } from "express";
import Apartment from "../models/Apartment";

const getAllApartment = async (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 6;
    const skip = (page - 1) * limit;
    const { search, project, developer } = req.query as {
      search?: string;
      project?: string;
      developer?: string;
    };

    let filter: Record<string,unknown> = {
      ...(project && { project }),
      ...(developer && { developer }),
    };

    if (search) {
  filter.$and = [{
    $or: [
      { name: { $regex: search, $options: "i" } },
      { unitNumber: { $regex: search, $options: "i" } },
      { project: { $regex: search, $options: "i" } },
    ]
  }];
}
    const apartments = await Apartment.find(filter).skip(skip).limit(limit);
    const total = await Apartment.countDocuments(filter);
    res.status(200).json({
      data: apartments,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalItems: total,
    });
  } catch (error) {
    console.log(error, "get apartments error");
    res.status(500).json({ message: "Internal server error" });
  }
};

const getApartmentById = async (req: Request, res: Response) => {
  try {
    const apartmentById = await Apartment.findById(req.params.id);

    if (!apartmentById) {
      return res.status(404).json({ message: "Apartment not found" });
    }
    res.status(200).json({ data: apartmentById });
  } catch (error) {
    console.log("apartment by id error", error);
    res.status(500).json({ message: "internal server error" });
  }
};

const createApartment = async (req: Request, res: Response) => {
  try {
    const {
      name,
      unitNumber,
      description,
      price,
      bathrooms,
      bedrooms,
      area,
      images,
      developer,
      project,
    } = req.body;
    if (
      !name ||
      !unitNumber ||
      !description ||
      !price ||
      !bathrooms ||
      !bedrooms ||
      !area ||
      !developer ||
      !project
    ) {
      return res.status(400).json({ message: "all the fields are required" });
    }
    const newApartment = new Apartment({
      name,
      price,
      project,
      developer,
      unitNumber,
      description,
      bathrooms,
      bedrooms,
      area,
      images,
    });
    await newApartment.save();
    res
      .status(201)
      .json({ message: "apartment created successfully", data: newApartment });
  } catch (error) {
    console.log("add apartment error", error);
    res.status(500).json({ message: "internal server error" });
  }
};

export { getAllApartment, getApartmentById, createApartment };
