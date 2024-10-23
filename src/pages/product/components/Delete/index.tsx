/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from "react";
import { Modal } from "antd";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteProduct } from "@/services/product/product";

interface DeleteModalProps {
  open: boolean;
  onOk: () => void;
  onCancel: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ open, onOk, onCancel }) => {
  const submitRef = useRef<HTMLButtonElement>(null);

  const deleteProductMutate = useMutation({
    mutationKey: ["deleteProduct"],
    mutationFn: deleteProduct,
    onSuccess: () => {
      onOk?.();
      toast.success("Delete product successfully !");
    },
    onError: () => {
      toast.error("Delete product failed !");
    },
  });

  const onSubmit = (id: any) => {
    deleteProductMutate.mutate(id);
  };
  return (
    <Modal
      title="Warning"
      open={open}
      onOk={() => submitRef?.current?.click()}
      onCancel={onCancel}
      okText="Delete"
      cancelText="Cancel"
    >
      <p>Do you want to delete this product ?</p>
      <button
        type="submit"
        ref={submitRef}
        className="hidden"
        onClick={onSubmit}
      />
    </Modal>
  );
};

export default DeleteModal;
