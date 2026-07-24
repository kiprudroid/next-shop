"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Product } from "@/data/mockData";
import { useState, useEffect } from "react";

const productSchema = z.object({
  productName: z.string().min(1, "Product name is required"),
  Price: z.coerce.number().min(0, "Price must be a positive number"),
  slug: z.string().min(1, "Slug is required"),
  type: z.string().min(1, "Type is required"),
  ImageUrl: z.string().min(1, "At least one image URL is required"),
});

type ProductFormValues = z.infer<typeof productSchema>;

export default function ProductForm({
  product,
  onSubmit,
  onCancel,
}: {
  product?: Product | null;
  onSubmit: (data: Partial<Product>) => Promise<void>;
  onCancel: () => void;
}) {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      productName: product?.productName || "",
      Price: product?.Price || 0,
      slug: product?.slug || "",
      type: product?.type || "",
      ImageUrl: product?.ImageUrl?.join(", ") || "",
    },
  });

  useEffect(() => {
    if (product) {
      reset({
        productName: product.productName,
        Price: product.Price,
        slug: product.slug,
        type: product.type,
        ImageUrl: product.ImageUrl.join(", "),
      });
    } else {
      reset({
        productName: "",
        Price: 0,
        slug: "",
        type: "",
        ImageUrl: "",
      });
    }
  }, [product, reset]);

  const submitHandler = async (data: ProductFormValues) => {
    setIsLoading(true);
    try {
      const transformedData = {
        ...data,
        ImageUrl: data.ImageUrl.split(",").map((s) => s.trim()),
      };
      await onSubmit(transformedData as any);
      if (!product) reset();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="space-y-4 rounded-xl bg-white p-6 shadow-sm border">
      <h3 className="text-lg font-semibold">{product ? "Edit Product" : "Add New Product"}</h3>
      
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-gray-700">Product Name</label>
          <input
            {...register("productName")}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
          />
          {errors.productName && <p className="mt-1 text-xs text-red-500">{errors.productName.message as string}</p>}
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Price (Ksh)</label>
          <input
            type="number"
            {...register("Price")}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
          />
          {errors.Price && <p className="mt-1 text-xs text-red-500">{errors.Price.message as string}</p>}
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Slug</label>
          <input
            {...register("slug")}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
          />
          {errors.slug && <p className="mt-1 text-xs text-red-500">{errors.slug.message as string}</p>}
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Type (e.g. shirt, jacket)</label>
          <input
            {...register("type")}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
          />
          {errors.type && <p className="mt-1 text-xs text-red-500">{errors.type.message as string}</p>}
        </div>

        <div className="sm:col-span-2">
          <label className="text-sm font-medium text-gray-700">Image URLs (comma separated)</label>
          <input
            {...register("ImageUrl")}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
            placeholder="/Shirt.png, /Shirt2.jpg"
          />
          {errors.ImageUrl && <p className="mt-1 text-xs text-red-500">{errors.ImageUrl.message as string}</p>}
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className="rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {isLoading ? "Saving..." : "Save Product"}
        </button>
      </div>
    </form>
  );
}
