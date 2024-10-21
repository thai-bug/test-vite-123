/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react'
import { Modal, Input } from 'antd';
import { useMutation } from '@tanstack/react-query';
import { createStorageLabels } from '@/services/fulfillment/storage-label';
import toast from 'react-hot-toast';
import { FormProvider, useForm } from "react-hook-form";
import { FormController } from '@/components/helpers/FormController';

interface CreateModalProps {
  open: boolean;
  onOk: () => void;
  onCancel: () => void;
}

const CreateStorageLabelsModal = ({ open, onOk, onCancel }: CreateModalProps) => {

  const submitRef = useRef<HTMLButtonElement>(null);
  const methods = useForm({
    defaultValues: {
      quantity: 1
    }
  });

  const createStorageLabelsMutate = useMutation({
    mutationKey: ['createStorageLabels'],
    mutationFn: createStorageLabels,
    onSuccess: () => {
      onOk?.();
      toast.success("Create Storage labels success !")
    },
    onError: () => {
      toast.error("Create Storage labels failed !")
    }
  })

  const onSubmit = (data: any) => {
    createStorageLabelsMutate.mutate(data)
  }

  return (
    <Modal
      title="Create Storage Labels"
      onCancel={onCancel}
      open={open}
      onOk={() => {
        submitRef?.current?.click()
      }}
      confirmLoading={createStorageLabelsMutate.isPending}
    >
      <br />
      <FormProvider {...methods}>
        <form autoComplete='off' onSubmit={methods.handleSubmit(onSubmit)}>
          <FormController
            name="quantity"
            control={methods.control}
            render={({ field }) => {
              return (
                <Input
                  name={field.name}
                  placeholder={"Quantity Storage Labels"}
                  onChange={field.onChange}
                  value={field.value}
                />
              );
            }}
            rules={{
              validate: (value) => {
                if (!value) return "Required";
              },
            }}
          />

          <button type="submit" ref={submitRef} className="hidden" />
        </form>
      </FormProvider>
    </Modal>
  )
}

export default CreateStorageLabelsModal