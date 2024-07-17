import { body } from "express-validator";
import { withValidationErrors } from "./withErrorMiddleware.js";
import pool from "../db.js";
import { BadRequestError } from "../errors/customErrors.js";
import { rtrim } from "../utils/functions.js";

export const validatePostForm = withValidationErrors([
  body("title")
    .notEmpty()
    .withMessage(`Title is required`)
    .bail()
    .isLength({ min: 3, max: 255 })
    .withMessage(`Title must be between 3 to 255 characters`),
  body("category").notEmpty().withMessage(`Select a category`),
  body("subCategory").notEmpty().withMessage(`Select a sub-category`),
  body("price").notEmpty().withMessage(`Price is required`),
]);

export const validateDynamic = async (req, res, next) => {
  const { subCategory } = req.body;
  const data = await pool.query(
    `select field_name, field_label, is_required, field_type from master_form_fields where cat_id=$1 and is_active=true`,
    [subCategory]
  );

  let errorMessages = "";

  data.rows.forEach((field) => {
    const value = req.body[field.field_name];

    if (field.is_required && !value) {
      errorMessages += `${field.field_label} is required,`;
    }

    if (field.field_type === "number" && +value < 0) {
      errorMessages += `${field.field_label} cannot be negative,`;
    }
  });

  errorMessages = rtrim(errorMessages);
  if (errorMessages) {
    throw new BadRequestError(errorMessages);
  }

  next();
};

export const testUploadMiddleware = withValidationErrors([
  body("name").notEmpty().withMessage(`Name is required`),
]);
