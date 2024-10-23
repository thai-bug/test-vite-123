import { getProducts } from "@/services/product/product.api";
import { IProduct } from "@/services/product/product.type";
import { assignProductToStorageLabel } from "@/services/storage-label/storage-label.api";
import { IStorageLabel } from "@/services/storage-label/storage-label.type";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Input, InputNumber, message, Modal, Select, UploadFile } from "antd";
import React, { FC, useEffect, useRef } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import { useDebounce } from "@uidotdev/usehooks";
import { IStorage } from "@/services/storage/storage.type";
import { getStorages } from "@/services/storage/storage.api";
import { IStore } from "@/services/store/store.type";
import { getStores } from "@/services/store/store.api";
import UploadImage from "@/components/helpers/UploadImage";

interface AssignProductModalProps {
  onOk?: () => void;
  onCancel?: () => void;
  data?: IStorageLabel;
  open?: boolean;
}

interface IAssignProductForm {
  productId?: string;
  storeId?: string;
  storageId?: string;
  quantity?: number;
  code?: string;
  reason?: string;
  images?: string[];
}

const AssignProductModal: FC<AssignProductModalProps> = ({
  onOk,
  onCancel,
  data,
  open,
}) => {
  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<IAssignProductForm>({
    defaultValues: {
      code: data?.code,
      images: [],
    },
  });

  const [files, setFiles] = React.useState<UploadFile[]>([]);

  const watch = useWatch({ control });

  const [searchProduct, setSearchProduct] = React.useState<string>("");
  const searchProductDebounce = useDebounce(searchProduct, 500);

  const [searchStorage, setSearchStorage] = React.useState<string>("");
  const searchStorageDebounce = useDebounce(searchStorage, 500);

  const [searchStore, setSearchStore] = React.useState<string>("");
  const searchStoreDebounce = useDebounce(searchStore, 500);

  const { data: storesData } = useQuery<{ data: IStore[]; total: number }>({
    queryKey: ["stores", searchStoreDebounce],
    queryFn: () =>
      getStores({
        name: searchStoreDebounce,
      }),
    refetchOnWindowFocus: false,
  });

  const { data: productsData } = useQuery<{ data: IProduct[]; total: number }>({
    queryKey: ["products", searchProductDebounce, watch?.storeId],
    queryFn: () =>
      getProducts({
        keyword: searchProductDebounce,
        storeId: watch?.storeId,
      }),
    refetchOnWindowFocus: false,
    enabled: !!watch?.storeId,
  });

  const { data: storagesData } = useQuery<{ data: IStorage[]; total: number }>({
    queryKey: ["storages", searchStorageDebounce],
    queryFn: () =>
      getStorages({
        search: searchStorageDebounce,
      }),
    refetchOnWindowFocus: false,
  });

  const submitRef = useRef<HTMLButtonElement>(null);

  const assignProductMutate = useMutation({
    mutationFn: assignProductToStorageLabel,
    onSuccess: () => {
      onOk?.();
      reset();
      message.success("Assign product success !");
    },
  });

  const onSubmit = (data: IAssignProductForm) => {
    data.images = files.map((item) => item.url) as unknown as string[];
    console.log(data.images);
    assignProductMutate.mutate(data);
  };

  useEffect(() => {
    setValue("code", data?.code);
  }, [data?.code, setValue]);

  return (
    <Modal
      title={`Assign product to ${data?.code}`}
      open={open}
      onCancel={onCancel}
      onOk={() => {
        submitRef.current?.click();
      }}
      confirmLoading={assignProductMutate.isPending}
    >
      <form
        className="grid grid-cols-1 gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label htmlFor="assign-store-id">
            <div className="font-semibold">
              Store<span className="text-red-500">*</span>{" "}
            </div>
          </label>
          <Controller
            control={control}
            name="storeId"
            rules={{
              validate: (value) => {
                if (!value) return "Required";

                return;
              },
            }}
            render={({ field }) => (
              <Select
                filterOption={false}
                className="w-full"
                size="large"
                placeholder="Select Store"
                id="assign-store-id"
                onChange={(value) => {
                  field.onChange(value);
                  setSearchStore("");
                  setValue("productId", undefined);
                }}
                value={field.value || undefined}
                onSearch={(value) => setSearchStore(value)}
                showSearch
                options={storesData?.data?.map((store: IStore) => ({
                  value: store.id,
                  label: store.name,
                }))}
              />
            )}
          />
          {errors["storeId"]?.message && (
            <span className="text-red-500 text-sm">
              {errors["storeId"]?.message}
            </span>
          )}
        </div>
        <div>
          <label htmlFor="assign-product-id">
            <div className="font-semibold">
              Product<span className="text-red-500">*</span>{" "}
            </div>
          </label>
          <Controller
            control={control}
            name="productId"
            rules={{
              validate: (value) => {
                if (!value) return "Required";

                return;
              },
            }}
            render={({ field }) => (
              <Select
                filterOption={false}
                className="w-full"
                size="large"
                placeholder="Select Product"
                id="assign-product-id"
                onChange={(value) => {
                  field.onChange(value);
                  setSearchProduct("");
                }}
                value={field.value || undefined}
                onSearch={(value) => setSearchProduct(value)}
                showSearch
                options={productsData?.data?.map((product: IProduct) => ({
                  value: product.id,
                  label: product.name,
                }))}
              />
            )}
          />
          {errors["productId"]?.message && (
            <span className="text-red-500 text-sm">
              {errors["productId"]?.message}
            </span>
          )}
        </div>
        <div>
          <label htmlFor="assign-storage-id">
            <div className="font-semibold">
              Storage<span className="text-red-500">*</span>{" "}
            </div>
          </label>
          <Controller
            control={control}
            name="storageId"
            rules={{
              validate: (value) => {
                if (!value) return "Required";

                return;
              },
            }}
            render={({ field }) => (
              <Select
                filterOption={false}
                className="w-full"
                size="large"
                placeholder="Select Storage"
                id="assign-storage-id"
                onChange={(value) => {
                  field.onChange(value);
                  setSearchStorage("");
                }}
                value={field.value || undefined}
                onSearch={(value) => setSearchStorage(value)}
                showSearch
                options={storagesData?.data?.map((product: IStorage) => ({
                  value: product.id,
                  label: product.code,
                }))}
              />
            )}
          />
        </div>
        <div>
          <label htmlFor="assign-quantity">
            <div className="font-semibold">
              Quantity<span className="text-red-500">*</span>{" "}
            </div>
          </label>
          <Controller
            control={control}
            name="quantity"
            rules={{
              validate: (value) => {
                if (!value) return "Required";

                return;
              },
            }}
            render={({ field }) => (
              <InputNumber
                className="w-full"
                onChange={(value) => field.onChange(value)}
                id="assign-quantity"
                size="large"
                placeholder="Enter quantity"
                value={field.value || undefined}
                min={1}
                controls={false}
              />
            )}
          />
        </div>
        <UploadImage fileList={files} setFileList={setFiles} accept="image/*" />
        ,
        <div>
          <label htmlFor="assign-reason">
            <div className="font-semibold">Reason: </div>
          </label>
          <Controller
            control={control}
            name="reason"
            render={({ field }) => (
              <Input.TextArea
                className="w-full"
                onChange={(value) => field.onChange(value)}
                id="assign-reason"
                size="large"
                placeholder="Enter reason"
                value={field.value || undefined}
                autoSize={{
                  maxRows: 5,
                  minRows: 5,
                }}
              />
            )}
          />
        </div>
        <button ref={submitRef} className="hidden">
          Assign
        </button>
      </form>
    </Modal>
  );
};

export default AssignProductModal;
