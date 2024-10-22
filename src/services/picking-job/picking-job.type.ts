import { IPackingJob } from "@/services/packing-job/packing-job.type";
import { IStorageLabelHistory } from "@/services/storage-label/storage-label.type";

export interface IPickingJob {
  code?: string;
  createdAt?: string;
  id?: string;
  packingJob?: IPackingJob;
  packingJobId?: string;
  productId?: string;
  quantity?: number;
  status?: number;
  storageLabelHistories?: IStorageLabelHistory[];
  updatedAt?: string;
}
