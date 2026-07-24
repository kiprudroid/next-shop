"use client";

import { useEffect, useState, useMemo } from "react";
import { fetchProducts, deleteProduct, postProduct, updateProduct } from "@/api/products.api";
import { Product } from "@/data/mockData";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth";
import ProductForm from "@/features/components/ProductForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrash, faEdit, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const router = useRouter();

  const loadProducts = async () => {
    setIsLoading(true);
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      const { data, error } = await authClient.getSession();
      if (!data?.session) {
        router.push("/admin/login");
      } else {
        loadProducts();
      }
    };
    checkAuth();
  }, [router]);

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    try {
      await deleteProduct(id);
      await loadProducts();
    } catch (err) {
      console.error(err);
      alert("Failed to delete product");
    }
  };

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/admin/login");
  };

  const handleSubmit = async (data: Partial<Product>) => {
    try {
      if (editingProduct) {
        await updateProduct(editingProduct.sNo, data);
      } else {
        await postProduct({ product: data as Product });
      }
      setShowForm(false);
      setEditingProduct(null);
      await loadProducts();
    } catch (err) {
      console.error(err);
      alert("Failed to save product");
    }
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "sNo",
        header: "ID",
      },
      {
        accessorKey: "productName",
        header: "Name",
      },
      {
        accessorKey: "Price",
        header: "Price (Ksh)",
      },
      {
        accessorKey: "type",
        header: "Type",
        cell: (info: any) => <span className="capitalize">{info.getValue()}</span>
      },
      {
        accessorKey: "slug",
        header: "Slug",
      },
      {
        id: "actions",
        header: "Actions",
        cell: ({ row }: any) => {
          const product = row.original;
          return (
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setEditingProduct(product);
                  setShowForm(true);
                }}
                className="text-blue-600 hover:text-blue-800"
                title="Edit"
              >
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button
                onClick={() => handleDelete(product.sNo)}
                className="text-red-600 hover:text-red-800"
                title="Delete"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          );
        },
      },
    ],
    []
  );

  const table = useReactTable({
    data: products,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl space-y-6">
        
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="mt-1 text-sm text-gray-500">Manage your store products.</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => {
                setEditingProduct(null);
                setShowForm(!showForm);
              }}
              className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              <FontAwesomeIcon icon={faPlus} />
              {showForm && !editingProduct ? "Cancel" : "Add Product"}
            </button>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <FontAwesomeIcon icon={faSignOutAlt} />
              Sign Out
            </button>
          </div>
        </div>

        {showForm && (
          <ProductForm
            product={editingProduct}
            onSubmit={handleSubmit}
            onCancel={() => {
              setShowForm(false);
              setEditingProduct(null);
            }}
          />
        )}

        {isLoading ? (
          <div className="flex h-32 items-center justify-center rounded-xl bg-white shadow-sm border">
            <p className="text-gray-500">Loading products...</p>
          </div>
        ) : (
          <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-600">
                <thead className="bg-gray-50 text-xs uppercase text-gray-700">
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <th key={header.id} className="px-6 py-4 font-semibold border-b">
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {table.getRowModel().rows.length ? (
                    table.getRowModel().rows.map((row) => (
                      <tr key={row.id} className="hover:bg-gray-50">
                        {row.getVisibleCells().map((cell) => (
                          <td key={cell.id} className="px-6 py-4">
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </td>
                        ))}
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={columns.length} className="px-6 py-12 text-center text-gray-500">
                        No products found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            
            <div className="flex items-center justify-between border-t border-gray-200 px-6 py-3">
              <div className="text-sm text-gray-500">
                Showing page {table.getState().pagination.pageIndex + 1} of{" "}
                {table.getPageCount()}
              </div>
              <div className="flex gap-2">
                <button
                  className="rounded-md border border-gray-300 px-3 py-1 text-sm font-medium hover:bg-gray-50 disabled:opacity-50"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                >
                  Previous
                </button>
                <button
                  className="rounded-md border border-gray-300 px-3 py-1 text-sm font-medium hover:bg-gray-50 disabled:opacity-50"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
