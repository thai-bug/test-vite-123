import { IProduct } from "@/services/product/product.type";
import { IStorage } from "@/services/storage/storage.type";
import { IStore } from "@/services/store/store.type";
import { IPickingJob } from "@/services//picking-job/picking-job.type";
import { FFMStatus } from "@/utils/enums/ffm";

export interface IStorageLabel {
  code?: string;
  createdAt?: Date;
  expiredDate?: Date;
  id?: string;
  images?: string[];
  manufacturedDate?: Date;
  product?: IProduct;
  productId?: string;
  quantity?: number;
  reason?: string;
  status?: FFMStatus;
  storage?: IStorage;
  storageId?: string;
  storageLabelHistories?: IStorageLabelHistory[];
  store?: IStore;
  storeId?: string;
  updatedAt?: string;
}

export interface IStorageLabelHistory {
  createdAt?: string;
  id?: string;
  pickingJob?: IPickingJob;
  pickingJobId?: string;
  quantity?: number;
  status?: FFMStatus;
  storageLabel?: IStorageLabel;
  storageLabelId?: string;
  updatedAt?: string;
}
