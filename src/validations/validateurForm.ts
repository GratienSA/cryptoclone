import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const schema = yup.object({
  firstName: yup.string().required("ce champ est obligatoire"),
  lastName: yup.string().required("ce champ est obligatoire"),
  pseudo: yup.string().required("ce champ est obligatoire"),
  age: yup
    .number()
    .required("ce champ est obligatoire")
    .integer("l'âge doit être un nombre entier")
    .positive("l'âge doit être positif")
    .min(20, "l'âge minimum est de 20 ans")
    .max(85, "l'âge maximum est de 85 ans")
    .typeError("l'âge doit être un nombre"),
  email: yup.string().email("email invalide").required("ce champ est obligatoire"),
  city: yup.string().required("ce champ est obligatoire"),
  password: yup.string()
    .matches(/[a-z]/, "il faut au moins une minuscule")
    .matches(/[A-Z]/, "il faut au moins une majuscule")
    .matches(/[0-9]/, "il faut au moins un chiffre")
    .matches(/[@!?]/, "il faut au moins un caractère spécial")
    .min(8, "le mot de passe doit contenir au minimum 8 caractères")
    .required("ce champ est obligatoire"),
    confirmPassword: yup.string()
    .matches(/[a-z]/, "il faut au moins une minuscule")
    .matches(/[A-Z]/, "il faut au moins une majuscule")
    .matches(/[0-9]/, "il faut au moins un chiffre")
    .matches(/[@!?]/, "il faut au moins un caractère spécial")
    .min(8, "le mot de passe doit contenir au minimum 8 caractères")
    .required("ce champ est obligatoire"),
  promoCode: yup.string(),
});
