import type { orderSchema } from "@/schemas/Order";
import type { z } from "zod";

export type Order = z.infer<typeof orderSchema>;
