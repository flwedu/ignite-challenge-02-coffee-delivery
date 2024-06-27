import type { z } from "zod";

import type { orderSchema } from "@/schemas/Order";

export type Order = z.infer<typeof orderSchema>;
