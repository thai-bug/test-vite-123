import { IPickingJob } from "@/services/picking-job/picking-job.type";

export interface IPackingJob {
  code?: string;
  createdAt?: string;
  id?: string;
  packageCode?: string;
  pickingJobs?: IPickingJob[];
  shippingCode?: string;
  status?: number;
  updatedAt?: string;
}
