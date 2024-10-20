import { z } from "zod";

export const orderSchema = z.object({
	cep: z.number({ invalid_type_error: "Informe o CEP" }),
	street: z.string().min(1, "Informe a rua"),
	number: z.string().min(1, "Informe o número"),
	fullAddress: z.string(),
	neighborhood: z.string().min(1, "Informe o bairro"),
	city: z.string().min(1, "Informe a cidade"),
	state: z.string().min(1, "Informe a UF"),
	paymentMethod: z.enum(["credit", "debit", "cash"], {
		invalid_type_error: "Informe um método de pagamento",
	}),
});
