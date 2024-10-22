import { IWarehouse } from "@/services/warehouse/warehouse.type";
import { IStorageLabel } from "@/services/storage-label/storage-label.type";

export interface IStorage {
  code?: string;
  createdAt?: string;
  id?: string;
  status?: number;
  storageLabels?: IStorageLabel[];
  updatedAt?: string;
  warehouse?: IWarehouse;
  warehouseId?: string;
}
