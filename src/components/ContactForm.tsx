"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface FormProps {
  name: string;
  email: string;
  message: string;
  dateFrom: string;
  dateTo: string;
  phone: string;
}

interface ContactFormProps {
  sticky?: boolean;
}

const validationSchema = yup.object({
  email: yup.string().email("Ingrese un email válido").required("Requerido"),
  name: yup.string().required("Requerido"),
  phone: yup.string().required("Requerido"),
  message: yup.string().required("Requerido"),
  dateFrom: yup.string().required("Requerido"),
  dateTo: yup.string().required("Requerido"),
});

export const ContactForm = (props: ContactFormProps) => {
  const [messageSent, setMessageSent] = useState(false);
  const [sending, setSending] = useState(false);

  const formik = useFormik<FormProps>({
    initialValues: {
      name: "",
      email: "",
      message: "",
      dateFrom: "",
      dateTo: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setSending(true);
      try {
        const response = await fetch("/api/emailHandler", {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          setMessageSent(true);
          formik.resetForm();
        }
      } catch (err) {
        console.error(err);
      } finally {
        setSending(false);
      }
    },
  });

  return (
    <div className={cn(props?.sticky && "sticky top-[105px]")}>
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Envíanos un Mensaje</CardTitle>
        </CardHeader>
        <CardContent>
          {messageSent ? (
            <div className="text-center py-8">
              <p className="text-lg font-semibold text-green-600">
                ¡Gracias! Mensaje enviado
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => setMessageSent(false)}
              >
                Enviar otro mensaje
              </Button>
            </div>
          ) : (
            <form onSubmit={formik.handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.touched.name && formik.errors.name
                      ? "border-destructive"
                      : ""
                  }
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-sm text-destructive">
                    {formik.errors.name}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.touched.email && formik.errors.email
                      ? "border-destructive"
                      : ""
                  }
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-sm text-destructive">
                    {formik.errors.email}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.touched.phone && formik.errors.phone
                      ? "border-destructive"
                      : ""
                  }
                />
                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-sm text-destructive">
                    {formik.errors.phone}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dateFrom">Desde</Label>
                  <Input
                    id="dateFrom"
                    name="dateFrom"
                    type="date"
                    value={formik.values.dateFrom}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={
                      formik.touched.dateFrom && formik.errors.dateFrom
                        ? "border-destructive"
                        : ""
                    }
                  />
                  {formik.touched.dateFrom && formik.errors.dateFrom && (
                    <p className="text-sm text-destructive">
                      {formik.errors.dateFrom}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dateTo">Hasta</Label>
                  <Input
                    id="dateTo"
                    name="dateTo"
                    type="date"
                    value={formik.values.dateTo}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={
                      formik.touched.dateTo && formik.errors.dateTo
                        ? "border-destructive"
                        : ""
                    }
                  />
                  {formik.touched.dateTo && formik.errors.dateTo && (
                    <p className="text-sm text-destructive">
                      {formik.errors.dateTo}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  rows={4}
                  className={
                    formik.touched.message && formik.errors.message
                      ? "border-destructive"
                      : ""
                  }
                />
                {formik.touched.message && formik.errors.message && (
                  <p className="text-sm text-destructive">
                    {formik.errors.message}
                  </p>
                )}
              </div>

              <div className="flex justify-between gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => formik.resetForm()}
                  disabled={sending}
                >
                  Borrar
                </Button>
                <Button type="submit" disabled={sending}>
                  {sending ? "Enviando..." : "Enviar"}
                </Button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
