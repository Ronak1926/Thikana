"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const reservationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z
    .string()
    .min(7, "Phone must be at least 7 characters")
    .regex(/^[+\d\s\-()]+$/, "Please enter a valid phone number"),
  guests: z.string().min(1, "Please select number of guests"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  specialRequests: z.string().optional(),
});

type ReservationFormData = z.infer<typeof reservationSchema>;

const inputClass =
  "w-full px-4 py-3 border border-brand-form-border rounded-lg font-nunito text-sm text-brand-text placeholder:text-brand-muted focus:outline-none focus:border-brand-accent transition-colors bg-white";

const labelClass =
  "block font-nunito text-[11px] tracking-widest text-brand-text-light uppercase mb-2";

const errorClass = "font-nunito text-xs text-red-500 mt-1";

export default function Reservation() {
  const [serverError, setServerError] = useState("");
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      guests: "2",
      time: "19:30",
    },
  });

  const onSubmit = async (data: ReservationFormData) => {
    setServerError("");
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/reservations`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...data,
            guests: parseInt(data.guests),
          }),
        },
      );
      const json = await res.json();
      if (json.success) {
        setSuccess(true);
        reset();
      } else {
        setServerError(json.message || "Something went wrong.");
      }
    } catch {
      setServerError("Failed to submit reservation. Please try again.");
    }
  };

  return (
    <section
      id="reservation"
      className="bg-brand-cream py-16 md:py-24 px-6 lg:px-16 xl:px-24"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Info */}
        <div className="relative max-lg:order-2">
          <span className="font-nunito text-sm tracking-widest text-brand-gold-divider">
            Reserve
          </span>
          <h2 className="font-nunito text-4xl md:text-5xl text-brand-text mt-2 mb-6 font-semibold">
            Reserve Your Table
          </h2>
          <div className="w-10 h-0.75 bg-brand-gold-divider mb-6" />
          <p className="font-nunito text-brand-text-light leading-relaxed max-w-md">
            Book your table online and enjoy an unforgettable dining experience
            in the heart of London.
          </p>

          {/* Decorative watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-nunito text-[120px] text-brand-accent/5 pointer-events-none select-none">
            T
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 border border-brand-form-border max-lg:order-1">
          {success ? (
            <div className="text-center py-12">
              <svg
                className="w-16 h-16 text-brand-accent mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="font-nunito text-2xl text-brand-text mb-2 font-semibold">
                Reservation Confirmed!
              </h3>
              <p className="font-nunito text-brand-text-light">
                {"We'll send a confirmation to your email."}
              </p>
              <button
                className="mt-6 font-nunito text-sm underline text-brand-accent bg-transparent border-none cursor-pointer hover:opacity-70"
                onClick={() => setSuccess(false)}
              >
                Make another reservation
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>NAME</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    {...register("name")}
                    className={inputClass}
                  />
                  {errors.name && (
                    <p className={errorClass}>{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label className={labelClass}>EMAIL</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    {...register("email")}
                    className={inputClass}
                  />
                  {errors.email && (
                    <p className={errorClass}>{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Phone + Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>PHONE</label>
                  <input
                    type="tel"
                    placeholder="+44 20 1234 5678"
                    {...register("phone")}
                    className={inputClass}
                  />
                  {errors.phone && (
                    <p className={errorClass}>{errors.phone.message}</p>
                  )}
                </div>
                <div>
                  <label className={labelClass}>GUESTS</label>
                  <select {...register("guests")} className={inputClass}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                      <option key={n} value={String(n)}>
                        {n} {n === 1 ? "Person" : "People"}
                      </option>
                    ))}
                  </select>
                  {errors.guests && (
                    <p className={errorClass}>{errors.guests.message}</p>
                  )}
                </div>
              </div>

              {/* Date + Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>DATE</label>
                  <input
                    type="date"
                    {...register("date")}
                    className={inputClass}
                  />
                  {errors.date && (
                    <p className={errorClass}>{errors.date.message}</p>
                  )}
                </div>
                <div>
                  <label className={labelClass}>TIME</label>
                  <input
                    type="time"
                    {...register("time")}
                    className={inputClass}
                  />
                  {errors.time && (
                    <p className={errorClass}>{errors.time.message}</p>
                  )}
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className={labelClass}>SPECIAL REQUESTS</label>
                <textarea
                  rows={4}
                  placeholder="Any dietary requirements or special occasions..."
                  {...register("specialRequests")}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {serverError && (
                <p className="font-nunito text-sm text-red-500">
                  {serverError}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full font-nunito tracking-widest bg-brand-accent text-brand-cream-text rounded-xl text-[13px] py-4 px-6 disabled:opacity-50 hover:opacity-90 transition-opacity"
              >
                {isSubmitting ? "SUBMITTING..." : "CONFIRM RESERVATION"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
