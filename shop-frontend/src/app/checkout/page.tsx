"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { mockProducts } from "@/data/mockData";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";



function CheckoutContent() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");
  
  // Find product by slug
  const product = mockProducts.find((p) => p.slug === slug);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    paymentMethod: "mpesa",
    mpesaNumber: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVC: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderId, setOrderId] = useState("");

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 bg-gray-50">
        <Card className="max-w-md w-full text-center p-8">
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 text-2xl font-bold">
            !
          </div>
          <h2 className="text-2xl font-bold text-black mb-2">No Product Selected</h2>
          <p className="text-gray-500 mb-6">Please select a product from our catalog to proceed to checkout.</p>
          <Link href="/products" className="w-full">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Browse Products</Button>
          </Link>
        </Card>
      </div>
    );
  }

  const shippingFee = 250; // Ksh 250 delivery fee
  const totalAmount = product.Price + shippingFee;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate payment gateway loading (2 seconds)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setOrderId(`GLOW-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="relative min-h-screen bg-gray-50 py-12 px-4 flex items-center justify-center animate-fade-in overflow-hidden">
        <Card className="relative max-w-xl w-full p-8 md:p-10 text-center">
          <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl shadow-inner">
            ✓
          </div>

          <h2 className="text-3xl font-extrabold text-black tracking-tight">Order Confirmed!</h2>
          <p className="mt-3 text-gray-500 text-lg">
            Thank you for shopping with GlowGirl, <span className="font-semibold text-black">{formData.name}</span>!
          </p>

          <div className="mt-8 bg-white rounded-2xl p-6 text-left border border-gray-100 space-y-4">
            <div className="flex justify-between border-b border-gray-200 pb-3 text-sm">
              <span className="text-gray-500">Order ID:</span>
              <span className="font-mono font-bold text-black">{orderId}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-3 text-sm">
              <span className="text-gray-500">Product:</span>
              <span className="font-semibold text-black">{product.productName}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-3 text-sm">
              <span className="text-gray-500">Delivery Address:</span>
              <span className="font-semibold text-black">{formData.address}, {formData.city}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-3 text-sm">
              <span className="text-gray-500">Payment Mode:</span>
              <span className="font-semibold text-black uppercase">{formData.paymentMethod}</span>
            </div>
            <div className="flex justify-between pt-2">
              <span className="font-bold text-black">Total Paid:</span>
              <span className="font-bold text-blue-600">Ksh. {totalAmount.toLocaleString()}</span>
            </div>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            A confirmation receipt and tracking link will be sent to <span className="font-medium text-gray-500">{formData.email}</span> shortly.
          </p>

          <div className="mt-8">
            <Link href="/products" className="w-full">
              <Button className="w-full">Continue Shopping</Button>
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Back Link */}
        <div className="mb-6">
          <Link href={`/products/${product.slug}`} className="text-sm font-semibold text-pink-500 hover:text-pink-600 flex items-center gap-1.5 transition">
            <span>←</span> Back to Product details
          </Link>
        </div>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-8 tracking-tight">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Checkout Form */}
            <div className="lg:col-span-7">
              <Card className="bg-white p-6 sm:p-8 shadow-sm border border-gray-100">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-black mb-0">Customer & Shipping Information</CardTitle>
                </CardHeader>

                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-black transition"
                    placeholder="Lornah Wanjiku"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-black transition"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-black transition"
                    placeholder="+254 700 000000"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1.5">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-black transition"
                    placeholder="Nairobi"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1.5">Street / Delivery Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-black transition"
                  placeholder="Apartment, suite, building, floor, etc."
                />
              </div>

              <hr className="border-gray-100 my-6" />

              <h2 className="text-xl font-bold text-black mb-4">Payment Method</h2>
              
              <div className="grid grid-cols-3 gap-3">
                <label className={`flex flex-col items-center justify-center p-4 rounded-xl border cursor-pointer transition text-center ${formData.paymentMethod === "mpesa" ? "border-blue-500 bg-blue-50/30 text-blue-600 font-semibold" : "border-gray-200 hover:bg-gray-50 text-gray-500"}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="mpesa"
                    checked={formData.paymentMethod === "mpesa"}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <span className="font-bold text-sm tracking-wide">M-PESA</span>
                </label>

                <label className={`flex flex-col items-center justify-center p-4 rounded-xl border cursor-pointer transition text-center ${formData.paymentMethod === "card" ? "border-blue-500 bg-blue-50/30 text-blue-600 font-semibold" : "border-gray-200 hover:bg-gray-50 text-gray-500"}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === "card"}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <span className="font-bold text-sm tracking-wide">CARD</span>
                </label>

                <label className={`flex flex-col items-center justify-center p-4 rounded-xl border cursor-pointer transition text-center ${formData.paymentMethod === "cod" ? "border-blue-500 bg-blue-50/30 text-blue-600 font-semibold" : "border-gray-200 hover:bg-gray-50 text-gray-500"}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === "cod"}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <span className="font-bold text-[11px] sm:text-sm tracking-wide leading-none">CASH ON DELIVERY</span>
                </label>
              </div>

              {/* M-PESA Input */}
              {formData.paymentMethod === "mpesa" && (
                <div className="p-4 bg-blue-50/40 rounded-2xl border border-blue-100/50 space-y-3">
                  <p className="text-xs text-blue-700 font-medium">You will receive an M-Pesa STK Prompt on your phone to input your PIN and approve.</p>
                  <div>
                    <label htmlFor="mpesaNumber" className="block text-sm font-medium text-gray-700 mb-1">M-Pesa Phone Number</label>
                    <input
                      type="tel"
                      id="mpesaNumber"
                      name="mpesaNumber"
                      required
                      value={formData.mpesaNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-black transition"
                      placeholder="e.g. 0712345678"
                    />
                  </div>
                </div>
              )}

              {/* CARD Inputs */}
              {formData.paymentMethod === "card" && (
                <div className="p-4 bg-white rounded-2xl border border-gray-200/50 space-y-3">
                  <div>
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      required
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-black transition"
                      placeholder="4000 1234 5678 9010"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                      <input
                        type="text"
                        id="cardExpiry"
                        name="cardExpiry"
                        required
                        value={formData.cardExpiry}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 text-gray-800 transition"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label htmlFor="cardCVC" className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                      <input
                        type="text"
                        id="cardCVC"
                        name="cardCVC"
                        required
                        value={formData.cardCVC}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 text-gray-800 transition"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-2">
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Processing Payment...</span>
                    </>
                  ) : (
                    <span>Place Order (Ksh. {totalAmount.toLocaleString()})</span>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

          {/* Sticky Order Summary */}
          <div className="lg:col-span-5">
            <Card className="bg-white p-6 shadow-sm border border-gray-100 lg:sticky lg:top-6">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-black">Order Summary</CardTitle>
              </CardHeader>

              <CardContent>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 flex-shrink-0">
                    <Image src={product.ImageUrl[0]} alt={product.productName} width={80} height={80} className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-black leading-tight">{product.productName}</h3>
                    <p className="text-xs text-gray-500">Qty: 1</p>
                    <p className="text-sm font-bold text-blue-600">Ksh. {product.Price.toLocaleString()}</p>
                  </div>
                </div>

                <hr className="border-gray-100 my-4" />

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-gray-500">
                    <span>Subtotal</span>
                    <span className="font-semibold text-black">Ksh. {product.Price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Delivery Fee</span>
                    <span className="font-semibold text-black">Ksh. {shippingFee.toLocaleString()}</span>
                  </div>

                  <hr className="border-gray-100 my-2" />

                  <div className="flex justify-between text-base pt-2">
                    <span className="font-bold text-black">Total</span>
                    <span className="font-bold text-blue-600 text-lg">Ksh. {totalAmount.toLocaleString()}</span>
                  </div>
                </div>

                
              </CardContent>
            </Card>
          </div>

        </div>

      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="w-10 h-10 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-sm text-gray-500 font-medium">Loading checkout form...</p>
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  );
}