import { IPickingJob } from "../picking-job/picking-job.type";
import { IStorageLabel } from "../storage-label/storage-label.type";

export interface IStorageLabelHistory {
  createdAt: string;
  id: string;
  pickingJob: IPickingJob;
  pickingJobId: string;
  quantity: number;
  status: number;
  storageLabel: IStorageLabel;
  storageLabelId: string;
  updatedAt: string;
}
